import Header from '../../components/Profile/header'
import Body from '../../components/Profile/body'
import Nav from '../../components/Navbar';
import StatusForm from '../../components/Form/status';

import { useState,useEffect } from 'react';
import { useRouter } from 'next/router'

import * as postService from '../../services/post'
import * as userService from '../../services/user'

const ProfilePage = ({isOwner})=> {
    const router = useRouter();
    const [isFormShow,setIsFormShow] = useState(false)
    const [posts,setPosts]= useState([]);
    useEffect (()=>{
        if(router.asPath !== '/[user]'){
            postService.getUserPost(router.asPath.replace('/',''))
                .then(res=>{setPosts(res.data)});
        }
    },[router.asPath])
    return(
        <section className="bg-gray-900">
            <Nav />
            <Header isOwner={isOwner}/>
            <Body isOwner={isOwner} posts={posts} setIsFormShow={setIsFormShow}/>
            {isFormShow && <StatusForm setIsFormShow={setIsFormShow}/>}
        </section>
    )
};

export async function getServerSideProps({req,params}) {
    const respond = await userService.checkIfOwner(req.user._id,params.user);
    return {
        props: {isOwner: respond.data}
      } 
}


export default ProfilePage;