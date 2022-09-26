import React from "react";

class ClassComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="class-component">
                <h1>Class Component</h1>
                <h2>String: {this.props.str||"no string"}</h2>
                <h2>Number: {this.props.num||"no number"}</h2>
            </div>
        )
    }
}
export default ClassComponent;