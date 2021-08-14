import { axiosRequest } from './request';
const serverURL = 'http://phuc94.herokuapp.com'

export const checkIfOwner = (userId, targetId) => {
    const options = {
        params:{
            userId,
            targetId
        }
    }
    return axiosRequest(serverURL + '/CheckOwner',options);
};

export const checkIfLoggedIn = (userId, targetId) => {
    const options = {
        params:{
            userId,
            targetId
        }
    }
    return axiosRequest(serverURL + '/CheckLoggedIn',options);
};

export const friendRequest = (targetId) => {
    const options = {
        method: "post",
        data:{
            targetId
        }
    }
    return axiosRequest('/AddFriend',options);
};

export const logIn = (data) => {
    const options = {
        method: "post",
        data
    }
    return axiosRequest('/UserLogin',options);
};

export const friendCancle = (targetId) => {
    const options = {
        method: "post",
        data:{
            targetId
        }
    }
    return axiosRequest('/FriendCancle',options);
};

export const logOut = () => {
    const options = {
        method: "get"
    }
    return axiosRequest('/logout',options);
};

export const getUserPhotos = (userId) => {
    const options = {
        method: "get",
        params:{
            userId
        }
    }
    return axiosRequest('/UserPhotos',options);
};

export const UserUploadAvatar = (data) => {
    const options = {
        method: "post",
        data:{
            img: data.img,
            content: data.content
        }
    }
    return axiosRequest('/UploadAvatar',options);
};

export const getUserData = (userId) => {
    const options = {
        method: "get",
        params:{
            userId
        }
    }
    return axiosRequest('/GetUserData',options);
};

export const UpdateCover = (img) => {
    const options = {
        method: "post",
        data:{
            img
        }
    }
    return axiosRequest('/UploadCover',options);
};