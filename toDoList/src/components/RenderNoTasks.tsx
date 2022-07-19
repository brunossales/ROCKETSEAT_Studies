import TaskStyle from "../styles/Task.module.scss";
import Clipboard from '../img/Clipboard.svg'

export function RenderNoTasks(){
    return (
        <div className={TaskStyle.boxTaskNone}>
            <img src={Clipboard} alt="Clipboard" />
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
}