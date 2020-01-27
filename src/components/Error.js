import React from 'react';

const divStyle = {
    with: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export const Error = ({error}) => (
    <h1 style={divStyle}>Error {error.response.status}... Ups tubimos un error intentalo mas tarde </h1>
)
