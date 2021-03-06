import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// Add comment

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
};

const boundAddComment = text => dispatch(addComment(text));

// Remove comment

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id 
  }
};

const boundRemoveComment = id => dispatch(removeComment(id));

// Edit comment

function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    id,
    text
  }
};

const boundEditComment = (text, id) => dispatch(editComment(text, id));

// THUMB_UP_COMMENT

function thumbUpComment(votes, id) {
  return {
    type: THUMB_UP_COMMENT,
    id,
    votes: + 1
  }
};

const boundThumbUpComment = (votes, id) => dispatch(thumbUpComment(votes, id));

// THUMB_DOWN_COMMENT
  
function thumbDownComment (votes, id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id,
    votes: - 1
  }
};

const boundThumbDownComment = (votes, id) => dispatch(thumbDownComment(votes, id));