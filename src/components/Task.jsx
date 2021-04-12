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

    if(estado === "nueva"){
        button="Comenzar"
    }else if(estado === "progreso") {
        button="Finalizar"
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
                    <button className="btn btn-outline-primary"
                        onClick={()=>moveTask(task.id)}>
                        {button}
                    </button>

                }
            </div>
        </div>
    );
}
 
export default Task;