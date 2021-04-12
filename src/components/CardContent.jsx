import React, {useState} from 'react';
import CreateTask from './CreateTask';
import MyTaskPanel from './MyTaskPanel';


function CardContent(){

    //tasks arrays
    const [tasks, saveTasks] = useState([]);


    const createTask= task =>{
            saveTasks([
                ...tasks,
                task
            ])
    }

    const moveTask = id =>{
        
        const newTasks = tasks.filter(task => task.id !== id);
        saveTasks(newTasks);

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
                    moveTask={moveTask}
                /></div>
            </div>
        </div>
    )
}

export default CardContent;