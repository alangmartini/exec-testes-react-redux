import React from 'react';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.text !== action.text);
    default:
      return state;
  }
};

export default todosReducer;
