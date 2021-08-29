import Header from '../../components/Profile/header'
import Body from '../../components/Profile/body'
import Nav from '../../components/Navbar';
import ProfileEditForm from '../../components/Profile/profileEdit'
import StatusForm from '../../components/Form/status';

import { useState,useEffect } from 'react';
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';

import * as postService from '../../services/post'
import * as userService from '../../services/user'


const ProfilePage = ()=> {
    const userData = useSelector(state=> state.userData);
    const router = useRouter();
    const [isFormShow,setIsFormShow] = useState(false)
    const [isEditFormShow,setIsEditFormShow] = useState(false)
    const [isOwner,setsOwner] = useState(null)
    const [targetUserData,setTargetUserData] = useState(null)
    const [posts,setPosts]= useState([]);
    const [cookie,setCookie] = useCookies(['user']);
    const fetchUserData = () =>{
        userService.getUserData(router.asPath.replace('/',''))
            .then(res=>{setTargetUserData(res.data[0])});
    }
    useEffect (()=>{
        /** Fetch Target User Data **/  
        if(router.asPath !== '/[user]'){
            fetchUserData();
            postService.getUserPost(router.asPath.replace('/',''))
                .then(res=>{setPosts(res.data)});
        }
        /** Check Ownership **/  
        if(router.asPath !== '/[user]'){
            const targetId = router.asPath.replace('/','');
            userService.checkIfOwner(cookie.user,targetId)
                .then(res=>{
                    console.log('OWNERRRRRR')
                    setsOwner(res.data.isOwner);
                })
        }
    },[router.asPath])
    return(
        <section className="bg-gray-900">
            {userData &&
                <>
                    <Nav basicUserData={userData} isOwner={isOwner}/>
                        {(targetUserData && isOwner) ?
                            <>
                                <Header isOwner={isOwner} userData={targetUserData} 
                                    fetchUserData={fetchUserData} setIsEditFormShow={setIsEditFormShow}/>
                                <Body isOwner={isOwner} posts={posts} setIsFormShow={setIsFormShow}
                                    cookie={cookie} userData={targetUserData}/>
                                {isFormShow && <StatusForm setIsFormShow={setIsFormShow}/>}
                                {isEditFormShow && <ProfileEditForm setIsEditFormShow={setIsEditFormShow}/>}
                            </>
                            :
                            <div className="h-screen w-screen bg-gray-900 overflow-x-hidden" ></div>
                        }
                    
                </>
            }
            
        </section>
    )
};

export default ProfilePage;