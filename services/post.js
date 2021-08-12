import { axiosRequest } from './request';
import { baseURL } from './baseURL'

export const getUserPost = (userId) => {
    const options = {
        params:{
            userId: userId
        }
    }
    return axiosRequest('/UserPost',options);
};

export const addPost = (data) => {
    const options = {
        method: 'post',
        data: data
    }
    return axiosRequest('/AddPost',options);
};