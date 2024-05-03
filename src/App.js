import { useState } from 'react';
import Form from './form';
import Todo from './todo';

function App() {
  const [currentTask,setCurrentTask]=useState('');
  const [isEdit,setIsEdit]=useState(false);

  return (
    <div className="App">
      <h1>hi</h1>
      <Form currentTask={currentTask} setCurrentTask={setCurrentTask} isEdit={isEdit} setIsEdit={setIsEdit}></Form>
      <Todo currentTask={currentTask} setCurrentTask={setCurrentTask} isEdit={isEdit} setIsEdit={setIsEdit}></Todo>
    </div>
  );
}

export default App;
