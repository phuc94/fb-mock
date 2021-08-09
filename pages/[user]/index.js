import Header from '../../components/Profile/header'
import Body from '../../components/Profile/body'
import { axiosRequest } from '../../services/request'
import { useState,useEffect } from 'react';

const ProfilePage = ()=> {
    const [posts,setPosts]= useState([]);
    useEffect (()=>{
        axiosRequest('/AllPost')
            .then(res=>{
                console.log(res);
                setPosts(res.data);
            });
    },[])
    return(
        <section className="bg-gray-900">
            <Header />
            <Body posts={posts}/>
        </section>
    )
};
export default ProfilePage;