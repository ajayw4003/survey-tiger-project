import React from 'react';

const Buttons = ({addQuestion, Publish}) => {
    return (
        <div className = "my-3">
            <button className = "btn btn-danger m-1" onClick = {() => addQuestion()}>Add Queston</button>
            <button  className = "btn btn-danger m-1" onClick = {()=> Publish()}>Publish</button>
        </div>
    );
};

export default Buttons;