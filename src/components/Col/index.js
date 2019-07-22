import React from 'react';

function Col(props) {
    return <div className={`col ${props.size}${props.col}`} {...props} />;
}

export default Col;