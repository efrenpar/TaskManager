import React from 'react';
import Task from './Task';


const MyTaskPanel = ({tasks,moveTask,begunTasks}) => {

    return (  
    <div className="row row-content">
        <div className="col-12 col-sm-12">
            <div id="accordion">
                
                <div className="card accordion">
                    <div className="card-header" role="tab" id="nuevashead">
                        <h6 className="mb-0 ">
                            <button className="btn btn-info text-white" data-toggle="collapse" data-target="#nuevas">
                                Nuevas Tareas
                            </button>
                        </h6>
                    </div>
                    <div role="tabpanel" className="collapse show" id="nuevas" data-parent="#accordion">
                        <div className="card-body">
                            {tasks.map(task=>(
                                <Task
                                    key={task.id}
                                    task={task}
                                    estado="nueva"
                                    moveTask={moveTask}
                                />
                            ))

                            }
                        </div>
                    </div> 
                </div>
                
            </div>
        </div>
   </div>
       
    );
}
 
export default MyTaskPanel;