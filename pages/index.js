import Layout from '../components/layout';
import axios from 'axios'; 
import MainColumn from '../components/Post/main-column';
import Messenger from '../components/Messenger/index';
import StatusForm from '../components/Form/status'
import { useState, useEffect } from 'react';
import { getAllPost } from '../services/post'
import { getBasicUserData, checkIfOwner } from '../services/user'

const Index = ({basicUserData})=> {

    const [posts,setPosts]= useState([]);
    const [isFormShow,setIsFormShow] = useState(false)
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
                    <MainColumn posts={posts} setIsFormShow={setIsFormShow} storyRender={true} statusRender={true}/>
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
            const respond = await getBasicUserData(req.user._id);
            return {
                props: {basicUserData: respond.data}
            }
        }
     
}
 export default Index;