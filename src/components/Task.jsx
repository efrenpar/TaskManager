import React from 'react';


const Task = ({data}) => {
    return ( 
        <div className="card mt-2">
            <div className="card-header ">
                <h6>Example heading <span className="badge badge-success ">baja</span></h6>
            </div>
            <div className="card-body">
                This is some text within a card body.
            </div>
        </div>
    );
}
 
export default Task;