import { computed, makeAutoObservable, reaction } from "mobx"

class Task {
    id: number
    title: string
    isCompleted: boolean
    subTasks: Task[]

    constructor(title: string, subtasks: Task[] = []) {
        this.id = Math.random()
        this.title = title
        this.isCompleted = false
        this.subTasks = subtasks
        makeAutoObservable(this, {
          allSubTasksCompleted: computed
        })
        reaction (() => this.allSubTasksCompleted,
          (allCompleted) => {
            this.isCompleted = allCompleted
          })
    }

    toggleCompletion() {
        this.isCompleted = !this.isCompleted
        if (this.isCompleted) {
          this.subTasks.forEach(subtask => subtask.setCompletion(true))
        } else {
          this.subTasks.forEach(subtask => subtask.setCompletion(false))
        }
    }

    setCompletion(completed: boolean) {
        this.isCompleted = completed
        this.subTasks.forEach(subtask => subtask.setCompletion(completed))
    }

    get allSubTasksCompleted()
    {
        return this.subTasks.length > 0 && this.subTasks.every(subTask => subTask.isCompleted)
    }
}

export default Task;