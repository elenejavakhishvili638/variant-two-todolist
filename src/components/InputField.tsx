import React from 'react'
import "./InputField.css"
import {Props} from "./interfaces/propsInterface"


const InputField: React.FC<Props> = ({task, setTask, days, setDays, handleSubmit}) => {
  return (
    <div className='input-field'>
        <form className='input-form' onSubmit={handleSubmit} >
            <div className='input-container'>
            <input type="text" name='task' value={task} onChange={(event) => setTask(event.target.value)} placeholder="Task..." />
            <input type="number" value={days} onChange={(event) => setDays(event.target.value) }/>
            </div>
            <button className='add'>Add item</button>
        </form>
    </div>
  )
}

export default InputField