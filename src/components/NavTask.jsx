import React from 'react';

function NavTask(){
    
    return (
        <div className="col-md-4 col-12">
             <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="crearTab" data-toggle="pill" href="#crearTask" role="tab" aria-controls="crearTask" aria-selected="true">Crear Tarea</a>
                <a className="nav-link" id="revisarTab" data-toggle="pill" href="#revisarTarea" role="tab" aria-controls="revisarTarea" aria-selected="false">Mis Tareas</a>
            </div>
        </div>
    )
}

export default NavTask;