import Header from '../../components/Profile/header'
import Friends from '../../components/Profile/About/friends'
import Nav from '../../components/Navbar';
import * as userService from '../../services/user'
import { useState,useEffect } from 'react';
import { useRouter } from 'next/router'


const FriendPage = ({isOwner})=> {
    const router = useRouter();
    const [userData,setUserData] = useState(null)
    const fetchUserData = () =>{
        let userId = router.asPath.replace('/','');
        userId = userId.slice(0,userId.length-8);
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
                                <Friends friendsData={friendsData}/>
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
export default FriendPage;

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