function comments(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text
        votes: 0
      }, ...state.comments];

    case REMOVE_COMMENT:
      return state.comments.filter(comment => comment.id !== action.id);

    case EDIT_COMMENT:
      state.map(comment => {
        if(comment.id === action.id) {
          return {text: action.text}
        }
        return comment;
      });

    case THUMB_UP_COMMENT:
      state.map(comment => {
        if(comment.id === action.id) {
          return {votes: comment.votes + 1}
        }
        return comment;
      });

    case THUMB_DOWN_COMMENT:
      state.map(comment => {
        if(comment.id === action.id) {
          return {votes: comment.votes - 1}
        }
        return comment;
      });

    default:
      return state;
  }
};

export default comments();