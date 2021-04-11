import React from 'react';
import CardContent from './CardContent';
import NavTask from './NavTask'

function Manager(){

    return (
        <div className="container">
            <div className=" row ">
               <div className="col-10 col-md-8 offset-md-2 offset-1">
                    <div className="card mt-5">
                            <h3 className="card-header bg-info text-white text-center">Administrador de Tareas</h3>
                            <div className="card-body">
                                <div className="row">
                                    <NavTask/>
                                    <CardContent/>
                                </div>
                            </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Manager;