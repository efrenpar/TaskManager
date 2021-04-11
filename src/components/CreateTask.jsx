import React from 'react';

function CreateTask(){

    return (
        
            <div className="row">
                <form>
                    <div className="form-group row">
                        <label className="col-md-5 text-info" htmlFor="nombreTarea"> Nombre</label>
                        <div className="col-md-5">
                            <input type="text" className="form-control" id="nombreTarea" name="nombreTarea"
                                ></input>
                        </div>
                    </div>
                    <div className="form-group row mt-3">
                        <label className="col-md-5 text-info" htmlFor="descripcionTarea"> Descripcion</label>
                        <div className="col-md-5">
                            <textarea rows="5" cols="50" className="form-control" id="descripcionTarea" name="descripcionTarea"
                                ></textarea>
                        </div>
                    </div>
                    <div className="form-group row mt-3">
                        <label className="col-md-5 text-info" htmlFor="prioridad"> Prioridad</label>
                        <div className="col-md-5">
                            <select className="form-control" id="prioridad" name="prioridad" >
                                <option active="true">-----</option>
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