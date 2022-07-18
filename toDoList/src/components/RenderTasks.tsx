import { inTaskDelete } from "../types/InterfaceTask";
import { AiOutlineDelete } from "react-icons/ai";
import TaskStyle from "../styles/Task.module.scss";

export default function RenderTasks({
  id,
  value,
  isCompleted,
  deleteTask,
}: inTaskDelete) {
  function handleDeleteTask() {
    deleteTask(id);
  }
  return (
    <div className={TaskStyle.uniqueTask}>
      <form>
        <div>
          <input
            type="checkbox"
            id={id}
            className={TaskStyle.inputCheck}
            name={id}
          />
          <label htmlFor={id}></label>
        </div>
        <p>{value}</p>
        <button type="submit" onClick={handleDeleteTask}>
          <AiOutlineDelete />
        </button>
      </form>
    </div>
  );
}
