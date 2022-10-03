import React, {useState} from 'react';
import './App.css';
import { ContentField } from './components/ContentField';
import InputField from './components/InputField';
import {Tasks} from "./components/interfaces/taskInterface"


const App: React.FC = () => {

  const [task, setTask] = useState<string>("")
  const [days, setDays] = useState<string>("0")
  const [tasks, setTasks] = useState<Tasks[]>([])


  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault()
    setTasks([...tasks, {id: Date.now(), task: task, days: days}])
    setTask("")
    setDays("0")
  }

  // console.log(tasks)

  return (
    <div className='main'>
      <div className='inputfield' >
      <InputField 
       task={task}
       setTask={setTask}
       days={days}
       setDays={setDays}
       handleSubmit={handleSubmit}
      />
      </div>
      <div className='contentfield'>
      <ContentField 
        tasks={tasks}
        setTasks={setTasks}
      />
      </div>
    </div>
  )
}

export default App

