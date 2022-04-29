import ToDoList from '../components/ToDoList'

const Home: React.FC = () => {
  return (
    <div className='height-full flex flex-col'>
      <header className='px-2 py-4 flex justify-between border-b-2 border-blue-500'>
        <div className="container mx-auto">
          <h1 className='text-2xl'>My App</h1>
        </div>
      </header>
      <div className='mt-4 grow'>
        <div className="container mx-auto">
          <ToDoList />
        </div>
      </div>
      <footer className='px-2 py-4 bg-blue-500 text-white'>
        <p className='text-sm text-center'>Copiryght &copy; | by PetrovskyiWD</p>
      </footer>
    </div>
  )
};

export default Home;
