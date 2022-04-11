import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../store';
import { toggleTodo } from '../store/todos/todosSlice';

const Home: FC = () => {
  const { list } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

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
