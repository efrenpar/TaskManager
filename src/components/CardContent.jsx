import React from 'react';
import CreateTask from './CreateTask';
import MyTaskPanel from './MyTaskPanel';


function CardContent(){
    return (
        <div className="col-sm-7 col-12 mt-md-0 mt-4 ">
            <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="crearTask" role="tabpanel" aria-labelledby="crearTab"><CreateTask/></div>
            <div className="tab-pane fade" id="revisarTarea" role="tabpanel" aria-labelledby="revisarTab"><MyTaskPanel/></div>
            </div>
        </div>
    )
}

export default CardContent;