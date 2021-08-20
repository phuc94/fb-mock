import Layout from '../components/layout';
import axios from 'axios'; 
import MainColumn from '../components/EachPost/main-column';
import Messenger from '../components/Messenger/index';
import StatusForm from '../components/Form/status'
import { useState, useEffect } from 'react';
import { getAllPost } from '../services/post'
import { getBasicUserDataSSR  } from '../services/user'
import { useCookies } from 'react-cookie';

const Index = ({basicUserData})=> {
    const [cookie,setCookie] = useCookies(['user']);
    const [posts,setPosts]= useState([]);
    const [isFormShow,setIsFormShow] = useState(false)
    const avatarObj = {
        userData:{
            avatar: basicUserData.avatar
        }
    }
    useEffect (()=>{
        console.log(basicUserData);
        getAllPost()
            .then(res=>{
                console.log(res);
                setPosts(res.data);
            });
    },[])
    
    return (
        <>
        <section className="bg-gray-900 relative">
            <div>
                <Layout basicUserData={basicUserData}>
                    <MainColumn posts={posts} setIsFormShow={setIsFormShow} cookie={cookie}
                        storyRender={true} statusRender={true} userData={avatarObj}/>
                </Layout>
                {/* <Messenger/> */}
            </div>
        </section>
        {isFormShow && <StatusForm setIsFormShow={setIsFormShow}/>}
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
        }else{
            const respond = await getBasicUserDataSSR(req.user._id);
            return {
                props: {basicUserData: respond.data}
            }
        }
     
}
 export default Index;