import axios from 'axios'; 

export const axiosRequest = (url,options)=>{
    const option ={
        ...options
    }
    return axios(url,option ).then((res)=>{console.log(res)});
};
