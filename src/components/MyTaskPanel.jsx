import React from 'react';
import Task from './Task';

const MyTaskPanel = () => {
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
                        <Task/> 
                        <Task/> 
                        <Task/>  
                        </div>
                    </div> 
                </div>
                <div className="card accordion">
                    <div className="card-header" role="tab" id="dannyhead">
                        <h6 className="mb-0 ">
                            <button className="btn btn-info btn-block text-white" data-toggle="collapse" data-target="#danny">
                                Tareas En Progreso
                            </button>
                        </h6>
                        
                    </div>
                    <div role="tabpanel" className="collapse" id="danny" data-parent="#accordion">
                        <div className="card-body">
                            <Task/> 
                        </div>
                    </div>
                </div>
                <div className="card accordion">
                    <div className="card-header" role="tab" id="agumbehead">
                        <h6 className="mb-0 ">
                            <button className="btn btn-info text-white" data-toggle="collapse" data-target="#agumbe">
                                Tareas Completadas
                            </button>
                        </h6>
                    </div>
                    <div role="tabpanel" className="collapse" id="agumbe" data-parent="#accordion">
                        <div className="card-body">
                            <Task/> 
                        </div>
                    </div> 
                </div>
            </div>
        </div>
   </div>
       
    );
}
 
export default MyTaskPanel;