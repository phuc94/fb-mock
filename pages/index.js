import Layout from '../components/layout';
import axios from 'axios'; 
import MainColumn from '../components/EachPost/main-column';
import MessengenWrapper from '../components/Messenger/index';
import StatusForm from '../components/Form/status'
import { useState, useEffect } from 'react';
import { getAllPost } from '../services/post'
import { useCookies } from 'react-cookie';
import store from '../redux/store'
import { useSelector } from 'react-redux'
import { MainColumnLoading } from '../components/Loading'

const Index = ()=> {
    const [cookie,setCookie] = useCookies(['user']);
    const [posts,setPosts]= useState(null);
    const [isFormShow,setIsFormShow] = useState(false);
    const basicUserData = useSelector(state=>state.userData);    
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
            {basicUserData && 
                <>
                    <section className="bg-gray-900 relative">
                        <div>
                            <Layout basicUserData={basicUserData}>
                                {(posts == null ) &&
                                    <MainColumnLoading />
                                }
                                { posts &&
                                    <MainColumn posts={posts} setIsFormShow={setIsFormShow} cookie={cookie}
                                    storyRender={true} statusRender={true} userAvatar={basicUserData.avatar}/>
                                }
                            </Layout>
                            <MessengenWrapper />
                        </div>
                    </section>
                    {isFormShow && <StatusForm setIsFormShow={setIsFormShow}/>}
                </>
            }
        </>
    )
};

 export default Index;