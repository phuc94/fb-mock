import * as actionTypes from '../actionCreator/actionTypes';
import produce from "immer";

export default function reducer (state = {}, action) {
    let newState;
    switch (action.type){
        case actionTypes.GET_BASIC_USER_DATA:
            // Get post
            return state
        case actionTypes.USER_DATA_ARRIVED:
            // Get post
            return state
        case actionTypes.GETTING_CHAT_DATA:
            // Show loading Chat
            return state
        case actionTypes.CHAT_DATA_ARRIVED:
            // renew store with chat info
            console.log(action.payload);
            return state
        case actionTypes.CHAT_OPEN:
            if (state.messenger.every(mess=>
                mess.roomId !== action.payload.roomId
            )) {
                newState = produce(state,draft=>{
                    draft.messenger.push({
                            isShow: true,
                            roomId: action.payload.roomId,
                            basicTargetData: action.payload.basicTargetData
                        })
                })
                
            }
            else if (state.messenger.find(e=>e.roomId==action.payload.roomId).isShow == false){
                newState = produce(state,draft=>{
                    draft.messenger.find(e=>e.roomId==action.payload.roomId).isShow = true;
                })
            }
            else{
                newState = state;
            }
            console.log(newState)
            return newState
        case actionTypes.CHAT_CLOSE:
            newState = produce(state,draft=>{
                for(let i of draft.messenger){
                    if(i.roomId == action.payload.roomId){
                        i.isShow = false
                    }
                }
            })
            return newState;
        case actionTypes.ALL_POST_ARRIVED:
            // Get post
            console.log('arrived');
            console.log(action.payload.userData);
            return {
                userData: action.payload.userData,
                messenger:[]
            }
        case actionTypes.BOOKMARK:
            newState = produce(state,draft=>{
                draft.userData.userData.bookmark
                    .push(action.payload.postId)
            });
            return newState
        case actionTypes.REMOVE_BOOKMARK:
            newState = produce(state,draft=>{
                let bookmark = draft.userData.userData.bookmark;
                if (bookmark.indexOf(action.payload.postId)>-1){
                    draft.userData.userData.bookmark
                    .splice(bookmark.indexOf(action.payload.postId),1);
                }
                return
            })
            return newState
        default:
            return state;
    }
}
// const StateStructure = {
//     userId: String,
//     userPosts: Array,
//     targetId: String,
//     targetPost: Array,
//     messenger: [
//         {
//             isShow: Boolean,
//             roomId: String,
//             basicTargetData: Object
//         }
//     ],
//     notification: [
//         {
//             notiType: String,
//             notiContent: String
//         }
//     ]
// };