import React from 'react';
import Loader from 'react-loader-spinner';

const divStyle = {
    with: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export const LoaderCustom = () => (
    <div className="d-flex align-items-center" style={divStyle}>
        <Loader
            type="Oval"
            color="#253A46"
            height={100}
            width={100}
        />
    </div>
)
