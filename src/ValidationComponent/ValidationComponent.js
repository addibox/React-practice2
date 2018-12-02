import React from 'react';

const validationcomponent = (props) => {
    let validationmessage = "text is too short";
    if(props.text.length > 5){
        validationmessage = "text is long enough";
    }
    return(
        <p>{validationmessage}</p>
    );
}

export default validationcomponent;