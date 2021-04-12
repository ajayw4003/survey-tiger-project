import React from 'react';
import Display from "./Display";

const Published = ({allQue, ispublish, setIspublish}) => {

    
    return (
        <>
            {ispublish ? (<Display allQue = {allQue} setIspublish = {setIspublish} />):<h2 style = {{color: "white"}}>No Questions Added</h2>}
        </>
    );
};

export default Published;