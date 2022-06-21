import { useAppSelector, useAppDispatch } from '../../hooks';
import { ITodo, TodosState, createTodo } from '../../store/todos/todosSlice';

import Item from './Item';

const ToDoList: React.FC = () => {
  const { list } = useAppSelector<TodosState>(state => state.todos);
  const dispatch = useAppDispatch();

  return (
    <>
      {!!list.length && <ul className='flex flex-col items-center'>
        {list.map((todo: ITodo) => (
          <Item key={todo.id} {...todo} />
        ))}
      </ul>}
      <div className="my-2 text-center">
        <button
          className='py-2 px-4 bg-blue-600 text-white border border-blue-600 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600'
          type='button'
          onClick={() => dispatch(createTodo({
            id: Math.random(),
            title: 'New ToDo item',
            details: 'New ToDo item details',
            isCompleted: false
          }))}
        >
          Add New ToDo
        </button>
      </div>
    </>
  )
}

export default ToDoList;
