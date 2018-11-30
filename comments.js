import { CREATE_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT } from './actions'

const initialState = {
    comments: [],
    users: []
};

function comments(state = initialState, action) {
    switch(action.type) {
        case CREATE_COMMENT:
            return Objetct.assign({}, state, { [{
                id: action.id,
                text: action.text,
                votes: 0,
            }
            , ...state]});
        case REMOVE_COMMENT:
            return Object.assign({}, state, { state.filter(comment => comment.id !== action.id)});
        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {...comment, text: action.text}
                }
                return comment;
            });
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {...comment, votes: comment.votes - 1}
                }
                return comment;
            });
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                    return {...comment, votes: comment.votes + 1}
                }
                return comment;
            });
        default:
            return state;

    }
}

export default comments;