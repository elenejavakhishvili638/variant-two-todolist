import { Tasks } from "../interfaces/taskInterface"

export interface Props {
    task: string
    setTask: React.Dispatch<React.SetStateAction<string>>
    days: string
    setDays: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (event: React.FormEvent<EventTarget>) => void
}


export interface ContentProps {
    tasks: Tasks[]
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>
}