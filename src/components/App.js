import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";


import {Navbar} from './Navbar';
import Usuarios from './usuarios/Usuarios';
import Tasks from "./Tasks";


const App = () => {
 return(
     <Fragment>
         <BrowserRouter>
             <Navbar/>
             <Switch>
                 <Route exact path={'/'} component={Usuarios} />
                 <Route exact path={'/tareas'} component={Tasks}/>
             </Switch>
         </BrowserRouter>
     </Fragment>
 );
}


export default App;
