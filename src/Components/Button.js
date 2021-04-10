import React from 'react';

const Buttons = ({addQuestion, handlePublish}) => {
    return (
        <div className = "my-3">
            <button className = "btn btn-danger m-1" onClick = {() => addQuestion()}>Add Queston</button>
            <button  className = "btn btn-danger m-1" onClick = {()=> handlePublish()}>Publish</button>
        </div>
    );
};

export default Buttons;