import * as actionTypes from '../actionCreator/actionTypes';


export default function reducer (state = {}, action) {
    switch (action.type){
        case actionTypes.GET_BASIC_USER_DATA:
            // Get post
            return //Posts
        case actionTypes.USER_DATA_ARRIVED:
            // Get post
            return //Posts
        case actionTypes.ALL_POST_ARRIVED:
            // Get post
            console.log('arrived');
            console.log(action.payload.userData);
            return {userData: action.payload.userData}
        default:
            return state;
    }
}
const StateStructure = {
    userId: String,
    userPosts: Array,
    targetId: String,
    targetPost: Array,
    chat: [
        {
            tagetId: String,
            chatContent: Array
        }
    ],
    notification: [
        {
            notiType: String,
            notiContent: String
        }
    ]
};