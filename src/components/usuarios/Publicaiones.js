import React from 'react';

export const Publicaciones = ({match}) => {
    return(
        <h1>Hola desde publicaciones {match.params.id}</h1>
    );
}
