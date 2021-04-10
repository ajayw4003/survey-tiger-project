import React from 'react';

const Questions = ({handleQue}) => {
    return (
        <div>
            <div className ="col-md-8 col-12 offset-md-2 input-group my-3">
                <div className = "input-group-prepend">
                    <span className = "input-group-text">?</span>
                </div>
                <input 
                    type ="text" placeholder = "Ask questions" 
                    className ="form-control input-group-append"
                    onChange ={(e) => handleQue(e)}
                    />
            </div>
        </div>
    );
};

export default Questions;