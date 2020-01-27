import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";


import {Navbar} from './Navbar';
import Usuarios from './usuarios/Usuarios';
import {Publicaciones} from './usuarios/Publicaiones'


const App = () => {
 return(
     <Fragment>
         <BrowserRouter>
             <Navbar/>
             <Switch>
                 <Route exact path={'/'} component={Usuarios} />
                 <Route exact path={'/publicaciones/:id'} component={Publicaciones}/>
             </Switch>
         </BrowserRouter>
     </Fragment>
 );
}


export default App;
