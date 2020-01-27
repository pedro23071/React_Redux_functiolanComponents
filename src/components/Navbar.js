import React from 'react';
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to={'/'}>Navbar</NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/'} activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/tareas'} activeClassName="active"  >Tareas</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)
