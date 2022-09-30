import React, { useState } from "react";

const Form = ({func})=>{
    const [text,setText]=useState("");

    const alertUp=()=>{
        func(text);
    }
    return(
        <div>
            <form>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            </form>
            <button onClick={alertUp}>send to parent</button>
        </div>
    )
}

export default Form;