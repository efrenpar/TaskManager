import React, {useState,useEffect} from 'react';
import CreateTask from './CreateTask';
import MyTaskPanel from './MyTaskPanel';
import uuid, { v4 as uuidv4 } from 'uuid';


function CardContent(){

    //tasks arrays
    const [tasks, saveTasks] = useState([]);

    //tasks in progress
    const [begunTasks,saveBegunTasks] = useState([]);


    const createTask= task =>{
            saveTasks([
                ...tasks,
                task
            ])
    }

    const moveTask = id =>{
        
        const newTasks = tasks.filter(task => task.id !== id);
        const progressTasks = tasks.filter(task => task.id == id);
        saveTasks(newTasks);

        progressTasks.id= uuidv4();
        console.log(progressTasks);
        saveBegunTasks([
            ...begunTasks,
            progressTasks
        ]);
    }

    return (
        <div className="col-sm-7 col-12 mt-md-0 mt-4 ">
            <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="crearTask" role="tabpanel" aria-labelledby="crearTab">
                <CreateTask
                    createTask={createTask}
                />
            </div>
            <div className="tab-pane fade" id="revisarTarea" role="tabpanel" aria-labelledby="revisarTab">
                <MyTaskPanel
                    tasks={tasks}
                    begunTasks={begunTasks}
                    moveTask={moveTask}
                /></div>
            </div>
        </div>
    )
}

export default CardContent;