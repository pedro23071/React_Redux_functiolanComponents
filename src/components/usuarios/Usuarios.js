import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

import { FaEye } from "react-icons/fa";

import {LoaderCustom} from "../LoaderCustom";
import {Error} from "../Error";


import * as usuariosActions from '../../actions/usuariosActions';


const Usuarios = ({traerTodos, usuarios, cargando, error}) => {

    useEffect( () => {
        traerTodos();
    }, [])

    if (cargando) {
        return <LoaderCustom/>
    }
    if(error !== ''){
        return <Error error={error}/>
    }
    return(
        <table className="table mx-auto my-5 col-6">
            <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Enlace</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {usuarios.map( ( usuario ) => (
                    <tr key={usuario.id}>
                        <td>{usuario.name}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.website}</td>
                        <td><Link to={`/publicaciones/${usuario.id}`}><FaEye/></Link></td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    );
}

const mapStateToProps = (reducers) => {
    return reducers.usuariosReducer;
}

export default  connect(mapStateToProps, usuariosActions)(Usuarios);
