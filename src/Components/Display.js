import React from 'react';
import "./options.css"

const Display = ({allQue, setIspublish}) => {
    const randomNum = () => {
        return Math.floor(Math.random()* 1000);
    }
    const styles = {
        fontSize: "20px",
    }
    return (
        <div style = {{color: 'white'}}>
            {allQue.map((item, i) =>(
                <>
                    <div key = {i} className = "col-md-6 col-12 my-3"><h3>{item.question}</h3></div>
                    <div className = "col-md-4 col-12 m-2 items" key = {randomNum()}>{item.optionOfQue.map((opt)=>(
                        <>
                        {item.optionOfQue.length === 4 ? (<div style = {styles}>
                                <input type = "checkbox" className ="opt" key ={randomNum()} />{opt.value}
                            </div>) : (<div  style = {styles}>
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