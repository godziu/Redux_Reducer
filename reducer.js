import {combineReducers} from 'redux';
import {comments} from './comments';
import {users} from './users';

function app(state = initialState, action) {
    return {
        comments: comments(state.comments, action),
        users: users(state.users, action)
    };
}

const app = combineReducers({
    comments,
    users
});