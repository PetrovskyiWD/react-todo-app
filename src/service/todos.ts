import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ITodo {
  id: number,
  userId: number,
  todo: string,
  completed: boolean
}

interface ITodoData {
  limit: number,
  skip: number,
  todos: ITodo[],
  total: number
}

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getTodos: builder.query<ITodoData, number>({
      query: (limit) => `todos?limit=${limit}`,
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
