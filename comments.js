import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            },
            ...state.comments];

        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id);

        case EDIT_COMMENT:
            return [{
                id: action.id,
                text: action.text
            },
            ...state.comments];
        
        case THUMB_UP_COMMENT:
            return [{
                id: action.id,
                votes: action.votes
            },
            ...state.comments];

        case THUMB_DOWN_COMMENT:
            return [{
                id: action.id,
                votes: action.votes
            },
            ...state.comments];

        default:
            return state.comments;
    }
}