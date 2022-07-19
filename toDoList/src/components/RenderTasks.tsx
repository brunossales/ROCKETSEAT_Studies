import { inTaskRender } from "../types/InterfaceTask";
import { AiOutlineDelete } from "react-icons/ai";
import TaskStyle from "../styles/Task.module.scss";

export default function RenderTasks({
  id,
  value,
  isCompleted,
  deleteTask,
  isChecked,
}: inTaskRender) {

  function handleDeleteTask() {
    deleteTask(id);
  }

  function handleIsCheck(){
    isChecked(id)
  }

  return (
    <div className={TaskStyle.uniqueTask}>
      <form>
          <input
            type="checkbox"
            id={id}
            className={TaskStyle.inputCheck}
            name={id}
            onClick={handleIsCheck}
          />
        <p
          className={isCompleted ? TaskStyle.pCheck : id}  
        >{value}</p>
        <button type="submit" onClick={handleDeleteTask}>
          <AiOutlineDelete />
        </button>
      </form>
    </div>
  );
}
