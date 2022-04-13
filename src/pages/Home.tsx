import { FC } from 'react';

import { toggleTodo } from '../store/todos/todosSlice';
import { useAppSelector, useAppDispatch } from '../hooks'

const Home: FC = () => {
  const { list } = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  return (
    <ul>
      {list.map(todo => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          <span>{todo.title}</span>:
          <span> {todo.details}</span>
        </li>
      ))}
    </ul>
  )
};

export default Home;
