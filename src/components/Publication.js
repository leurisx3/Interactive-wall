import React, { useEffect, useState } from 'react';
import PublicationForm from './PublicationForm';

import { db } from '../firebase'

const Publicacion = () => {

    const [publicaciones, setPublicaciones] = useState([]);

    const agregarEditarPublicacion = async (publicacionObject) => {
        await db.collection('Publicaciones').doc().set(publicacionObject)
        console.log('Nueva publicacion');
    };

    const obtenerPublicaciones = async () => {
        db.collection('Publicaciones').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({ ...doc.data(), id: doc.id })
            });
            setPublicaciones(docs)
        });
    };

    useEffect(() => {
        obtenerPublicaciones();
    }, []);

    return (
        <div>
            <div className="col-md-4 p-2">
                <PublicationForm agregarEditarPublicacion={agregarEditarPublicacion} />
            </div>
            <div className="col-md-8">
                {publicaciones.map(publicacion => (
                    <div className="card mb-1" key={publicacion.id}>
                        <div className="card-body">
                            <h4>{publicacion.parrafo}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Publicacion;