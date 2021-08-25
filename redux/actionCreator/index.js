import * as actionTypes from './actionTypes';
import * as userServices from '../../services/user';


//Thunk action: return an FUCTION instead of OBJECT
export const getBasicUserData = (userId) => (
    (dispatch)=>{
        dispatch(getBasic);
        userServices.getBasicUserData(userId)
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

export const getBasic = () => (
    {
        type: actionTypes.GET_BASIC_USER_DATA,
        payload:{
            loadingUserData: true
        }
    }
)

export const userDataArrived = (userData) => (
    {
        type: actionTypes.ALL_POST_ARRIVED,
        payload:{
            loadingPost: false,
            userData
        }
    }
)
