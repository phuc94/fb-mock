import * as actionTypes from './actionTypes';
import * as userServices from '../../services/user';
import * as chatServices from '../../services/chat';


//Thunk action: return an FUCTION instead of OBJECT
/** FETCH INITIALLY USER DATA **/
export const getBasicUserData = (userId) => (
    (dispatch)=>{
        dispatch(getBasic);
        userServices.fetchUserData()
            .then(response=>{console.log('store');console.log(response.data);dispatch(userDataArrived(response.data))})
            .catch(err=>console.log(err));
        
    }
);
export const initialDataArrived = (userData) => (
    {
        type: actionTypes.USER_DATA_ARRIVED,
        payload:{
            userData
        }
    }
)

/** MESSENGER **/
export const getChatData = (roomId,targetId) => (
    (dispatch)=>{
        dispatch(gettingChatData);
        chatServices.getChatData(roomId,targetId)
            .then(chatData=>{console.log('messenger');console.log(chatData.data);dispatch(chatDataArrived(chatData.data))})
            .catch(err=>console.log(err));
        
    }
);
export const chatInit = (roomId,basicTargetData) => (
    {
        type: actionTypes.CHAT_OPEN,
        payload:{
            roomId,
            basicTargetData
        }
    }
);
export const chatClose = (roomId) => (
    {
        type: actionTypes.CHAT_CLOSE,
        payload:{
            roomId
        }
    }
);


export const gettingChatData = () => (
    {
        type: actionTypes.GETTING_CHAT_DATA,
        payload:{
            loadingChat: true
        }
    }
);

export const chatDataArrived = (data) => (
    {
        type: actionTypes.CHAT_DATA_ARRIVED,
        payload:{
            data
        }
    }
);

export const getBasic = () => (
    {
        type: actionTypes.GET_BASIC_USER_DATA,
        payload:{
            loadingUserData: true
        }
    }
);

export const userDataArrived = (userData) => (
    {
        type: actionTypes.ALL_POST_ARRIVED,
        payload:{
            loadingPost: false,
            userData
        }
    }
);

export const bookmarkPost = (postId) => (
    {
        type: actionTypes.BOOKMARK,
        payload:{
            postId
        }
    }
);

export const removeBookmark = (postId) => (
    {
        type: actionTypes.REMOVE_BOOKMARK,
        payload:{
            postId
        }
    }
)
