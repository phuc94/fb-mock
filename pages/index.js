import Layout from '../components/layout';
import axios from 'axios'; 
import MainColumn from '../components/Post/main-column';
import Messenger from '../components/Messenger/index';
import StatusForm from '../components/Form/status'
import { useState, useEffect } from 'react';
import { axiosRequest } from '../services/request'

const Index = ()=> {



    const [posts,setPosts]= useState([]);
    useEffect (()=>{
        axiosRequest('/AllPost')
            .then(res=>{
                console.log(res);
                setPosts(res.data);
            });
    },[])
    const [isFormShow,setIsFormShow] = useState(false)
    const handleAPI = ()=>{
        const options ={
    
        }
        return axios('./single-blog' ).then((res)=>{console.log(res)});
    }
    return (
        <>
        <section className="bg-gray-900 relative">
        <div>
            <Layout>
                <MainColumn posts={posts} setIsFormShow={setIsFormShow}/>
            </Layout>
            <Messenger/>
        </div>
    </section>
        {isFormShow && <StatusForm setIsFormShow={setIsFormShow}/>}
        </>
    )
};
 export default Index;