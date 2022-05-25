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
    addTodo: (state: TodosState, action: PayloadAction<ITodo>) => {
      state.list.push(action.payload)
    },
    toggleTodo: (state: TodosState, action: PayloadAction<number>) => {
      state.list.map((todo: ITodo) => {
        if (todo.id === action.payload) todo.isCompleted = !todo.isCompleted;

        return todo;
      });
    }
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
