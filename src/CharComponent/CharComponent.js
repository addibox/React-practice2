import React from 'react';

const charcomponent = (props) =>{
    const style = {
        display : 'inline-block',
        padding : '16px',
        textAlight: 'center',
        margin: '16px',
        border: '2px solid green'
    }

    return(
        <div style = {style} onClick = {props.delete}>{props.character}</div>
    );
}


export default charcomponent;