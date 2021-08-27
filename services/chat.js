import { axiosRequest } from './request';

export const getChatData = (roomId,targetId) => {
    const options = {
        params:{
            roomId,
            targetId
        }
    }
    return axiosRequest('/GetChatData',options);
};