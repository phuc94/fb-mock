import * as actionTypes from './actionTypes';
import * as userServices from '../../services/user';

//Thunk action: return an FUCTION instead of OBJECT
export const getBasicUserData = () => (
    (dispatch)=>{
        dispatch(getBasic);
        userServices.getInitialUserData()
            .then(response=>{console.log(response.data);dispatch(initialDataArrived(response.data))})
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

export const getBasic = () => (
    {
        type: actionTypes.GET_BASIC_USER_DATA,
        payload:{
            loadingUserData: true
        }
    }
)

export const allPostArrived = (posts) => (
    {
        type: actionTypes.ALL_POST_ARRIVED,
        payload:{
            loadingPost: false,
            userPosts: posts
        }
    }
)
