import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import fb from "../firebase";


const PublicacionForm = (props) => {

    let history = useHistory();

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

        authStateListener()
    };

    const authStateListener = () => {
        fb.auth().onAuthStateChanged((userLogged) => {

            if (userLogged) {
                // User is sign in
                props.agregarEditarPublicacion(values);
                setValues({ ...estadoInicial })
            } else {
                // User is sign out
                alert('You are not logged!')
                history.push("/sign-in");
            }
        });
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
