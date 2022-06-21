import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITodo {
  id: number,
  title: string,
  details: string,
  isCompleted: boolean
};

export interface TodosState {
  list: ITodo[]
};

const initialState: TodosState = {
  list: [
    {
      id: 0,
      title: 'First Todo',
      details: 'Details for First Todo',
      isCompleted: false
    }
  ]
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleTodo: (state: TodosState, action: PayloadAction<number>) => {
      state.list.map((todo: ITodo) => {
        if (todo.id === action.payload) todo.isCompleted = !todo.isCompleted;

        return todo;
      });
    },
    createTodo: (state: TodosState, action: PayloadAction<ITodo>) => {
      state.list.push(action.payload)
    },
    deleteTodo: (state: TodosState, action: PayloadAction<number>) => {
      state.list = state.list.filter(item => item.id !== action.payload)
    }
  }
});

export const { toggleTodo, createTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
