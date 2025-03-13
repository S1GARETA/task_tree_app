import { makeAutoObservable } from "mobx"
import Task from "./Task"

class TaskStore {
    tasks: Task[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addTask(title: string, parentTask?: Task) {
        const newTask = new Task(title)
        if (parentTask) {
            parentTask.subTasks.push(newTask)
        } else {
            this.tasks.push(newTask)
        }
    }
}

export default new TaskStore();