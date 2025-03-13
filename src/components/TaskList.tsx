import { observer } from "mobx-react-lite"
import TaskStore from "../stores/TaskStore"
import TaskItem from "./TaskItem"

const TaskList = observer(() => {
    return (
        <div className="mt-5">
            <hr className="mb-5"/>
            {TaskStore.tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    )
})

export default TaskList;