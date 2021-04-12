import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function CreateTask({createTask}){

    const [task, agregarTask] = useState({
        nombreTarea: '',
        descripcionTarea: '',
        prioridad: '',

    });

    const [error, updateError] = useState(false)

    //function that listen for user mistake

    const actualizarState = e => {

        agregarTask({
            ...task,
            [e.target.name]:e.target.value,
        })
        
    };

    //extractin values
    const {nombreTarea,descripcionTarea,prioridad}=task;

    //when user create a task
    const submitTask = e =>{
            e.preventDefault();

            //validate

            if (nombreTarea.trim()=== '' 
                || descripcionTarea.trim()=== '' 

                || prioridad.trim() === '' || prioridad.trim() === 'Ninguno'){
                
                updateError(true);
                return;
            }

            updateError(false);
            //assigne id
            task.id= uuidv4();

            //create task
            createTask(task);

            //restart form
            agregarTask({
                nombreTarea: '',
                descripcionTarea: '',
                prioridad: '',
            })
    };

    return (
        
            <div className="row">
                {error ? <div className="alert alert-danger" role="alert">
                            Todos los campos son obligatorios</div>:null
                }
                <form
                    onSubmit={submitTask}>
                    <div className="form-group row">
                        <label className="col-md-5 text-info" htmlFor="nombreTarea"> Nombre</label>
                        <div className="col-md-5">
                            <input type="text" className="form-control" id="nombreTarea" name="nombreTarea"
                               onChange={actualizarState} 
                               value={nombreTarea}/>
                        </div>
                    </div>
                    <div className="form-group row mt-3">
                        <label className="col-md-5 text-info" htmlFor="descripcionTarea"> Descripcion</label>
                        <div className="col-md-5">
                            <textarea rows="5" cols="50" className="form-control" id="descripcionTarea" name="descripcionTarea"
                                 onChange={actualizarState} 
                                 value={descripcionTarea}></textarea>
                        </div>
                    </div>
                    <div className="form-group row mt-3">
                        <label className="col-md-5 text-info" htmlFor="prioridad"> Prioridad</label>
                        <div className="col-md-5">
                            <select className="form-control" id="prioridad" name="prioridad" 
                                onChange={actualizarState} 
                                value={prioridad}>
                                <option>Ninguno</option>
                                <option>Baja</option>
                                <option>Media</option>
                                <option>Alta</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row mt-3">
                        <div className="offset-md-5 col-md-6">
                            <button className="btn btn-info text-white">Crear</button>
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default CreateTask;