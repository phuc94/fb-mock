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

export const getOwnerData = (userId) => {
    const options = {
        params:{
            userId: userId
        }
    }
    return axiosRequest('/GetOwnerData',options);
};

export const addPost = (data) => {
    const options = {
        method: 'post',
        data: data
    }
    return axiosRequest('/AddPost',options);
};

export const getPost = (_id) => {
    const options = {
        method: 'get',
        params:{
            _id
        }
    }
    return axiosRequest('/GetPost',options);
};

export const getAllPost = () => {
    const options = {
        method: 'get'
    }
    return axiosRequest('/AllPost',options);
};