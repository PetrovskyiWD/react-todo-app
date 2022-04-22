import { FC } from 'react';

import { useGetTodosQuery } from '../service/todos';

const Home: FC = () => {
  const { data, error, isLoading } = useGetTodosQuery(10);

  return (
    <div className='height-full flex flex-col'>
      <header className='px-2 py-4 flex justify-between border-b-2 border-blue-500'>
        <h1 className='text-2xl'>My App</h1>
      </header>
      <div className='mt-4 flex grow justify-center'>
        {isLoading && <span>Loading...</span>}
        {data && <ul>
          {data.todos.map((todo: any) => (
            <li
              key={todo.id}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              <span>{todo.todo}</span>
            </li>
          ))}
        </ul>}
      </div>
      <footer className='px-2 py-4 bg-blue-500 text-white'>
        <p className='text-sm text-center'>Copiryght &copy; | by PetrovskyiWD</p>
      </footer>
    </div>
  )
};

export default Home;
