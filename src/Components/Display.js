import React from 'react';
import "./options.css"

const Display = ({allQue, setIspublish, options}) => {
    const randomNum = () => {
        return Math.floor(Math.random()* 1000);
    }
    
    return (
        <div>
            {allQue.map((item, i) =>(
                <>
                    <div key = {i} className = "col-md-6 col-12 my-3">{item.question}</div>
                    <div className = "col-md-4 col-12 m-2 items" key = {randomNum()}>{item.optionOfQue.map((opt)=>(
                        <>
                        {item.optionOfQue.length === 4 ? (<div>
                                <input type = "checkbox" className ="opt" key ={randomNum()} />{opt.value}
                            </div>) : (<div>
                                <input type = "radio" className ="opt" key ={randomNum()} name = "radio" />{opt.value}
                            </div>)}
                            
                        </>
                        
                    ))}
                    </div>
                </>
            ))}
            <button className  = "btn btn-danger" onClick = {() => setIspublish(false)}>Confirm</button>
        </div>
    );
};

export default Display;