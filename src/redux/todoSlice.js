import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        text: action.payload.text,
        completed: false,
        date: Date.now(),
        id: Math.random() * 1000,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    sortedTodos: (state, action) => {
      switch (action.payload.value) {
        case "asc":
          state.sort((a, b) => a.date - b.date);
          break;
        case "desc":
          state.sort((a, b) => b.date - a.date);
          break;
        default:
          return state;
      }
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, sortedTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
