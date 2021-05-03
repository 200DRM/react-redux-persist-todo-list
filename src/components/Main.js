const Main = () => {
  return (
    <div>
      <div className='row justify-content-center w-100'>
        <div className='col-md-5 justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
          <h1>React TODO List</h1>
          <div className='d-flex align-items-center justify-content-center w-100'>
            <input
              className='form-control'
              placeholder='enter task'
              type='text'
            />
            <button
              className='btn btn-primary'
            >ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
