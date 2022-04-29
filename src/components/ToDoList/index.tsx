import { useAppSelector } from '../../hooks';
import { TodosState } from '../../store/todos/todosSlice';

import Item from './Item'

const ToDoList: React.FC = () => {
  const { list } = useAppSelector<TodosState>(state => state.todos);

  return (
    <>
      {list.length && <ul className='flex flex-col items-center'>
        {list.map((todo: any) => (
          <Item key={todo.id} {...todo} />
        ))}
      </ul>}
    </>
  )
}

export default ToDoList;
