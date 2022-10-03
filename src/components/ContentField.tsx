import React from 'react'
import "./ContentField.css"
import { ContentProps } from './interfaces/propsInterface'

export const ContentField: React.FC<ContentProps> = ({tasks, setTasks}) => {

    // const {id, task, days} = tasks

    const deleteItem = (id: number) => {
        const deleted = tasks.filter((item) => item.id !== id)
        setTasks(deleted)
    }

  return (
    <div className='content-field'>
        {tasks.map((item, index) => (
            <div key={index} className="content">
                <div className='div'><p>{item.task}</p></div>
                <div className='div'><p>{item.days}</p></div>
                <button onClick={() => deleteItem(item.id)} className='delete'>X</button>
            </div>
        ))}
    </div>
  )
}
