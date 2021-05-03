import { 
  useCallback,
  useState 
} from 'react';

const TaskItem = (
  { onDelete, task }
) => {
  return (
    <div className='col-md-10 d-flex justify-content-end'>
      <p className='px-2'>{task}</p>
      <i 
        className="far fa-trash-alt"
        onClick={onDelete}
      ></i>
    </div>
  );
};

const Main = () => {

  const [taskList, setTaskList] = useState([]);
  const [taskName, setTaskName] = useState('');

  const addTask = () => {
    if (taskName) {
      setTaskList([...taskList, taskName]);
    }
    setTaskName('');
  };

  const deleteTask = useCallback((currentTask) => {
    if (currentTask) {
      const filteredArray = taskList.filter(task => task !== currentTask);
      setTaskList([...filteredArray]);
    }
  }, [taskList]); 

  const taskListContent = taskList.map((task) => {
    return (
      <TaskItem
        onDelete={() => deleteTask(task)} 
        key={task}
        task={task}
      />
    );
  });

  return (
    <div>
      <div className='row justify-content-center w-100'>
        <div className='col-md-5 justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
          <h1>React TODO List</h1>
          <div className='d-flex align-items-center justify-content-center w-100'>
            <input
              className='form-control'
              onChange={(e) => setTaskName(e.target.value)}
              placeholder='enter task'
              type='text'
              value={taskName}
            />
            <button
              className='btn btn-primary'
              onClick={addTask}
            >ADD</button>
          </div>
          {taskListContent}
        </div>
      </div>
    </div>
  );
}

export default Main;
