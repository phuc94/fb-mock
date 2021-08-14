import Header from '../../components/Profile/header'
import About from '../../components/Profile/About/about'
import Friends from '../../components/Profile/About/friends'
import Photos from '../../components/Profile/About/photos'
import * as userService from '../../services/user'
import { useState,useEffect } from 'react';
import { useRouter } from 'next/router'
import Nav from '../../components/Navbar';

const UserAbout = ({isOwner}) =>{
    const router = useRouter();
    const [userData,setUserData] = useState(null)
    const fetchUserData = () =>{
        let userId = router.asPath.replace('/','');
        userId = userId.slice(0,userId.length-6);
        userService.getUserData(userId)
            .then(res=>{setUserData(res.data)});
    }
    useEffect (()=>{
        if(router.asPath !== '/[user]'){
            fetchUserData();
        }
    },[router.asPath])

    return(
        <>
            {userData ? 
                (
                    <section className="bg-gray-900">
                        <Nav />
                        <Header isOwner={isOwner} userData={userData} fetchUserData={fetchUserData}/>
                        <div className="flex flex-col items-center pt-5 gap-3">
                            <div className="">
                                <About />
                                <Friends friendsData={friendsData}/>
                                <Photos />
                            </div>
                        </div>
                    </section>
                ):
                (null)
            }
        </>   
    )
};
export async function getServerSideProps({req,params}) {
    if(!req.user){
        return {
            redirect: {
                permanent: false,
                destination: "/login"
              }
        }
    }
    else {
        const respond = await userService.checkIfOwner(req.user._id,params.user);
    return {
        props: {isOwner: respond.data}
      }
    }
};
export default UserAbout;

const friendsData=[
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    
]