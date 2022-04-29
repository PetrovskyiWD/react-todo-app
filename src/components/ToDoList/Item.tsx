import { useAppDispatch } from '../../hooks';
import { ITodo, toggleTodo } from '../../store/todos/todosSlice';

const Item: React.FC<ITodo> = ({ id, title, details, isCompleted }) => {
  const dispatch = useAppDispatch();

  return (
    <li className='w-2/3 p-4 flex border border-blue-500'>
      <div className='grow flex items-center'>
        <button
          type='button'
          className={`w-5 h-5 check-button mr-3 text-xs border-2 border-blue-500 ${isCompleted && 'bg-blue-500'}`}
          onClick={() => dispatch(toggleTodo(id))}
        >
          <span className={`text-white ${!isCompleted && 'hidden'}`}>&#10003;</span>
        </button>
        <div style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
          <span>{title}: </span>
          <span>{details}</span>
        </div>
      </div>
      <div className='flex items-center'>
        <button type='button' className='w-6 h-6 mr-2 text-green-500 bg-gray-200'>&#9998;</button>
        <button type='button' className='w-6 h-6 text-red-500 bg-gray-200'>&#10008;</button>
      </div>
    </li>
  )
}

export default Item;
