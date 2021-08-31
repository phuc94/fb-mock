import { axiosRequest } from './request';
const serverURL = 'http://phuc94.herokuapp.com'

export const checkIfOwner = (userId, targetId) => {
    const options = {
        params:{
            userId,
            targetId
        }
    }
    return axiosRequest('/CheckOwner',options);
};

export const fetchUserData = () => {
    const options = {
        option:{
            method:"get"
        }
    }
    return axiosRequest('/FetchUserData',options);
};

export const getBasicUserData = (userId) => {
    const options = {
        params:{
            userId
        }
    }
    return axiosRequest('/GetBasicUserData',options);
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

export const acceptFriend = (targetId) => {
    const options = {
        method: "post",
        data:{
            targetId
        }
    }
    return axiosRequest('/AcceptFriend',options);
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

export const AcceptFriend = (targetId) => {
    const options = {
        method: "post",
        data:{
            targetId
        }
    }
    return axiosRequest('/AcceptFriend',options);
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

export const getSuggestFriend = (size,page) => {
    const options = {
        method: "get",
        params: {
            size,
            page
        }
    }
    return axiosRequest('/GetSuggestFriend',options);
};

export const postBookMark = (postId) => {
    const options = {
        method: "post",
        data: {
            postId
        }
    }
    return axiosRequest('/PostBookMark',options);
};

export const removeBookMark = (postId) => {
    const options = {
        method: "post",
        data: {
            postId
        }
    }
    return axiosRequest('/RemoveBookMark',options);
};