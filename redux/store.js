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