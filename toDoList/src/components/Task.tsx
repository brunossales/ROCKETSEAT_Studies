//npm install react-icons --save
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

//Style
import CreateTaskStyle from "../styles/CreateTask.module.scss";
import InfTaskStyle from "../styles/InfTask.module.scss";
import TaskStyle from "../styles/Task.module.scss";

//components

//Interface
import { inTask } from "../types/InterfaceTask";

//npm install --save uid
import { uid } from "uid";
import RenderTasks from "./RenderTasks";

export default function Task() {
  const [tasks, setTasks] = useState<inTask[]>([]);
  const [newTask, setNewTask] = useState("");
  const isNewTaskEmpty = newTask.length === 0;

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTaskProvider: inTask = {
      id: uid(),
      value: newTask,
      isCompleted: false,
    };

    setTasks([...tasks, newTaskProvider]);
    setNewTask("");
  }
  function counterIsCompleted() {
    let count = 0;
    tasks.forEach((task) => {
      if (task.isCompleted) count++;
    });

    return count;
  }

  return (
    <div className={TaskStyle.container}>
      <div className={CreateTaskStyle.boxCreateTask}>
        <form
          onSubmit={handleCreateNewTask}
        >
          <textarea
            placeholder="Adicionar uma nova tarefa"
            onChange={handleNewTaskChange}
            value={newTask}
            name="New Task"
            required
          />
          <button type="submit" disabled={isNewTaskEmpty}>
            Criar <AiOutlinePlusCircle size={25} />
          </button>
        </form>
      </div>

      <div className={InfTaskStyle.boxInf}>
        <div className={InfTaskStyle.division}>
          <h3>Tarefas Criadas</h3>
          <p>{tasks.length}</p>
        </div>
        <div className={InfTaskStyle.division}>
          <h3>Tarefas Concluidas</h3>
          <p>{counterIsCompleted()}</p>
        </div>
      </div>

      <div className={TaskStyle.boxTask}>
        {tasks.map((task) => {
            return(
                <RenderTasks 
                    id={task.id}
                    isCompleted={task.isCompleted}
                    value={task.value}
                    key={task.id}
                /> 
            );
        })}
      </div>

    </div>
  );
}
