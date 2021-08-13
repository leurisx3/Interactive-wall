import React, { useState } from 'react'

const PublicacionForm = (props) => {

    const estadoInicial = {
        parrafo: '',
    };

    const [values, setValues] = useState(estadoInicial);

    const actualizacionInput = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    };

    const manejarEntrega = (e) => {
        e.preventDefault();
        props.agregarEditarPublicacion(values);
        setValues({ ...estadoInicial })
    };

    return (
        <form className="card card-body" onSubmit={manejarEntrega}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">add</i>
                </div>
                <input type="text" className="form-control text-white" placeholder="Hola esta es mi publicacion" name="parrafo" onChange={actualizacionInput} value={values.parrafo} />
            </div>

            <button className="btn btn-primary btn-block">Publicar</button>
        </form>
    )
}

export default PublicacionForm;
