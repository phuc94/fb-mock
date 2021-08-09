import axios from 'axios'; 
const serverURL = 'phuc94.herokuapp.com'
export const axiosRequest = (url,options)=>{
    const option ={
        ...options
    }
    return axios(serverURL + url,option )
        .then((res)=>{
            console.log(res); 
            return res;
        });
};
