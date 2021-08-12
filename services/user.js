import { axiosRequest } from './request';

export const checkIfOwner = (userId, targetId) => {
    const options = {
        params:{
            userId,
            targetId
        }
    }
    return axiosRequest('/CheckOwner',options);
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
    return axiosRequest('/AddFriend',options);
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