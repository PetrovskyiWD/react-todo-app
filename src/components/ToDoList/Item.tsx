import { useAppDispatch } from '../../hooks';
import { ITodo, toggleTodo } from '../../store/todos/todosSlice';

const Item: React.FC<ITodo> = ({ id, title, details, isCompleted }) => {
  const dispatch = useAppDispatch();

  return (
    <li className='w-2/3 p-4 flex border border-blue-500'>
      <div className='grow flex items-center'>
        <button
          type='button'
          className={`check-button mr-3 text-xs text-white border-2 border-blue-500 ${isCompleted && 'bg-blue-500'}`}
          onClick={() => dispatch(toggleTodo(id))}
        >
          &#10003;
        </button>
        <div style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
          <span>{title}: </span>
          <span>{details}</span>
        </div>
      </div>
      <div>
        <button type='button' className='text-green-500'>Edit</button>
        <span> | </span>
        <button type='button' className='text-red-500'>Delete</button>
      </div>
    </li>
  )
}

export default Item;