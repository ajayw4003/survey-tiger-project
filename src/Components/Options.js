import React from 'react';
import "./options.css"

const Options = ({addOptions, deleteOptions, updateOptionText, uid, qtype}) => {
    
    return (
        <div>
            <div className ="col-md-8 col-12 offset-md-2 input-group my-2">
                <input className = "form-control opt" type ="text" placeholder = "options" onChange ={e =>updateOptionText(uid, e.target.value)}/>
                <div className ="input-group-append">
                    <button className ="btn btn-secondary" onClick = {() => addOptions()}>+</button>
                    <button className ="btn btn-secondary"  onClick = {() => deleteOptions()}>-</button>
                </div>
            </div>
        </div>
    );
};

export default Options;