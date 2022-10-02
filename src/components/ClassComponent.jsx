import React from "react";
import { Link,Outlet} from "react-router-dom";
import Form from "./Form";

class ClassComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <div className="class-component">
                    <Link to="func" className="link">FUNC</Link>
                    <br/>
                    <h1>Class Component</h1>
                    <h2>String: {this.props.str||"no string"}</h2>
                    <h2>Number: {this.props.num||"no number"}</h2>
                    <Form func={this.props.func}/>
                    <Outlet className="outlet" />
                </div>
            
        )
    }
}
export default ClassComponent;