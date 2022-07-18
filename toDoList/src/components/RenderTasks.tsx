import { inTask } from "../types/InterfaceTask";
import {AiOutlineDelete} from 'react-icons/ai'
export default function RenderTasks({id, value, isCompleted} : inTask){
    return (
        <div>
            <form>
                <input type="radio" name={id} />
                <p>{value}</p>
                <AiOutlineDelete />
            </form>
        </div>
    );
}