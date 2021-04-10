import React from 'react';

const TypeSelector = ({qtype, setQtype, handlechange}) => {
    return (
        <div>
            <select className = "col-md-8 col-12 col-md-offset-1" value ={qtype} onChange = {event =>{handlechange(parseInt(event.target.value))}}>
                <option value = "0">Choose-Question-Type</option>
                <option value = "1">Multi-Select</option>
                <option value = "2">Sigle-Select</option>
            </select>
        </div>
    );
};

export default TypeSelector;