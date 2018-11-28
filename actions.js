import uuid from "uuid";

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function createComment(text) {
    return {
        type: CREATE_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        id,
        text,
    }
}

function deleteComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function thumbUpComment(votes, id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        votes: votes++
    }
}

function thumbDownComment(votes, id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        votes: votes--
    }
}
