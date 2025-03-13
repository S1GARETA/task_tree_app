import { observer } from "mobx-react-lite"
import TaskList from "./components/TaskList"
import TaskStore from "./stores/TaskStore"

const App = observer(() => {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-sky-400 w-2xl h-auto mt-8 m-auto p-5 rounded-2xl shadow-2xl">
                <h1 className="text-3xl text-center mb-4">Дерево задач</h1>
                <button 
                    onClick={() => TaskStore.addTask('New Task')} 
                    className="w-40 h-12 bg-sky-800 hover:bg-sky-900 text-white rounded-xl"
                >
                    Добавить задачу
                </button>
                <TaskList />
            </div>
        </div>
    )
})

export default App;