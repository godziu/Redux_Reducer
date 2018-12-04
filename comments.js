import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT } from './actions';

export function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return Object.assign({}, state, {
        comments: [{
          id: action.id,
          text: action.text,
          votes: 0
        }, ...state]
      });
    case REMOVE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id !== action.id)
      });
    case EDIT_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if (comment.id === action.id) {
            comment.text = action.text;
          }
        })
      });
    case THUMB_UP_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if (comment.id === action.id) {
            comment.vote = action.vote + 1;
          }
        })
      });
    case THUMB_DOWN_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if (comment.id === action.id) {
            comment.vote = action.vote - 1;
          }
        })
      });
    default:
      return state;
  }
}

export default comments;