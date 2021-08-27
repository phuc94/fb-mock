import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'

const store = createStore(reducer,applyMiddleware(thunk));

export default store;

const StateStructure = {
    userId: String,
    userPosts: Array,
    targetId: String,
    targetPost: Array,
    messenger: [
        {
            isShow: Boolean,
            roomId: String,
            basicTargetData: Object
        }
    ],
    notification: [
        {
            notiType: String,
            notiContent: String
        }
    ]
};