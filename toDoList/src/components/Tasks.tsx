//npm install react-icons --save
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { useState } from "react";

import TaskStyle from '../styles/Tasks.module.scss'

export default function Tasks(){

    const [newTask, setNewTasks] = useState('')
    const [task, setTasks] = useState('')


    const isNewTaskEmpty = newTask.length === 0

    return (
        <div className={TaskStyle.box}>
            <form action="">
                <textarea
                    placeholder='Adicionar uma nova tarefa' 
                />
                <button type='submit' disabled={isNewTaskEmpty}>Criar <AiOutlinePlusCircle size={25}/></button>
            </form>
        </div>
    );
}