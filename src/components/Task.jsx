import React from 'react';


const Task = ({task,estado,moveTask}) => {

    let badge;
    let button;

    //badge color
    if(task.prioridad==="Baja"){
        badge="badge badge-success"
    }else if(task.prioridad==="Media"){
        badge="badge badge-primary"
    }else{
        badge="badge badge-danger"
    }

 



    return ( 
        <div className="card mt-2">
            <div className="card-header ">
                <h6>{task.nombreTarea} <span className={badge}>{task.prioridad}</span></h6>
            </div>
            <div className="card-body">
                {task.descripcionTarea}
                
            </div>
            <div className="card-footer">
                {estado === "finalizado"
                    ?
                    <p>completado</p>
                    :
                    <button className="btn btn-outline-danger"
                        onClick={()=>moveTask(task.id)}>
                        Eliminar
                    </button>

                }
            </div>
        </div>
    );
}
 
export default Task;