import axios from 'axios'; 
const serverURL = 'phuc94.herokuapp.com'

export const axiosRequest = (url,options)=>{
    const option ={
        ...options
    }
    return axios(url,option )
    .then((response) => response)
    .catch((error) => console.log(error));
};

