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
import { RenderNoTasks } from "./RenderNoTasks";

export default function Task() {
  const [tasks, setTasks] = useState<inTask[]>([
    {
      id: uid(),
      value: "Uma tarefa para testes",
      isCompleted: false,
    },
  ]);
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

  function handleDeleteTask(id: string) {
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      return task.id != id;
    });

    setTasks(tasksWithoutDeleteOne);
  }

  function handleCheckedTask(id: string) {
    const tasksWithoutUpdateOne = tasks;
    tasksWithoutUpdateOne.map((task) => {
      if(task.id === id) {
        const checked = task.isCompleted ? false : true;
        task.isCompleted = checked;
      }
    })
    setTasks([...tasksWithoutUpdateOne])
  }

  function countIsTrue() {
    const tasksWithTrue = tasks.filter((task) => {
      return task.isCompleted === true;
    });
    return tasksWithTrue.length;
  }

  function renderTaskorWithout() {
    if (tasks.length === 0) return <RenderNoTasks />;
    else {
      return tasks.map((task) => {
        return (
          <RenderTasks
            id={task.id}
            isCompleted={task.isCompleted}
            value={task.value}
            deleteTask={handleDeleteTask}
            isChecked={handleCheckedTask}
            key={task.id}
          />
        );
      });
    }
  }

  return (
    <div className={TaskStyle.container}>
      <div className={CreateTaskStyle.boxCreateTask}>
        <form onSubmit={handleCreateNewTask}>
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

      <div>
        <div className={InfTaskStyle.boxInf}>
          <div className={InfTaskStyle.division}>
            <h3>Tarefas Criadas</h3>
            <p>{tasks.length}</p>
          </div>
          <div className={InfTaskStyle.division}>
            <h3>Tarefas Concluidas</h3>
            <p>
              {countIsTrue()} de {tasks.length}
            </p>
          </div>
        </div>
        <div>
          <div className={TaskStyle.boxTask}>{renderTaskorWithout()}</div>
        </div>
      </div>
    </div>
  );
}
