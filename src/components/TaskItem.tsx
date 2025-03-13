import { observer } from "mobx-react-lite"
import Task from "../stores/Task"
import TaskStore from "../stores/TaskStore"

interface TaskItemProps {
    task: Task
}

const TaskItem = observer(({task}: TaskItemProps) => {

    return (
        <>
        <div className="">
            <div className="bg-blue-300 mb-3 p-2 pl-5 rounded-xl">
                <input 
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => task.toggleCompletion()} 
                />
                <span className="px-5">{task.title}</span>
                <button 
                    onClick={() => TaskStore.addTask('New Task', task)}
                    className="bg-sky-700 hover:bg-sky-900 text-sm text-white ml-15 p-2 rounded-lg"
                >Добавить</button>
            </div>
            <div className="ml-5">
                {task.subTasks.map(subtask => (
                    <TaskItem key={subtask.id} task={subtask} />
                ))}
            </div>
        </div>
        </>
    )
})

export default TaskItem;