import React from "react";
import Form from "./Form";
function FunctionComponent(props){
    return(
        <div className="function-component">
            <h1>Function component</h1>
            <h2>String: {props.str}</h2>
            <h2>Number: {props.num}</h2>
            <Form func={props.func}/>
        </div>
    )
}

export default FunctionComponent;