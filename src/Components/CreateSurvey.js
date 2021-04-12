import React, { useState } from 'react';
import TypeSelector from "./TypeSelector";
import Questions from './Questions'
import Options from './Options';
import Buttons from "./Button";
import { useHistory } from 'react-router';

const CreateSurvey = ({allQue, setAllQue, setIspublish, ispublish}) => {

    const randomNum = () => {return Math.floor((Math.random()*100)+1)};
    // const [qtext, setQtext] = useState("");
    const [qtype, setQtype] = useState(0);
    const [options, setOptions]  = useState();
    const [que, setQue] = useState();
    const history = useHistory();
    
    const Publish = () =>{
        addQuestion();
        history.push('./takeSurvey');
        setIspublish(true);
    }    

    const handleQue = (e) =>{
        setQue(e.target.value);
    }

    const handlechange = (val) => {
        setQtype(parseInt(val))
        if(val === 1){
            setOptions([{uid:randomNum(), value:''}]);
        }
        else if(val === 2) {
            setOptions([{uid:randomNum(), value:''},{uid:randomNum(), value:''}])
        }
    }

    const addOptions = () =>{
        let newOption = {
            uid: randomNum(),
            value: '',
        }
        let updatedOptions = [...options];
        updatedOptions.push(newOption);
        setOptions(updatedOptions);
    }

    const deleteOptions = () =>{
        if(options.length === 2){
            return;
        }
        let updatedOptions = [...options]
        updatedOptions.pop();
        setOptions(updatedOptions);
    }

    const updateOptionText = (id, text) => {
        let updatedOptions = [...options]
        let currentIndex = updatedOptions.findIndex( item => item.uid === id);
        updatedOptions[currentIndex].value = text;
        setOptions(updatedOptions);
    }

    const addQuestion = () =>{

        if(options[0].value === ''){
            return;
        }
        let newQuestionToAdd = {
            question: que,
            optionOfQue: options
        }
        let updatedQuestion = [...allQue];
        updatedQuestion.push(newQuestionToAdd);
        setAllQue(updatedQuestion);
        console.log(allQue);

        if(qtype === 1){
            setOptions([{uid:randomNum(), value:''}]);
        }
        else if(qtype === 2) {
            setOptions([{uid:randomNum(), value:''},{uid:randomNum(), value:''}])
        }
        setIspublish(true);
        setQtype(0);
    }


    return (
        <div>
            <h1 style ={{color: 'white'}}>Create Survey</h1>


                <TypeSelector qtype = {qtype} setQtype = {setQtype} handlechange = {handlechange}/>

                {qtype !== 0 ?
                    <>
                        <Questions  handleQue = {handleQue}/>
                        {options.map((option, key)=>(
                            <Options 
                                key = {key} 
                                uid = {option.uid}
                                addOptions ={addOptions}
                                deleteOptions ={deleteOptions}
                                updateOptionText = {updateOptionText}
                                qtype = {qtype}    
                                />
                        ))}
                        
                    </> :
                    null
                }
                {qtype === 2 ? 
                    (<Buttons addQuestion = {addQuestion} Publish ={Publish}/>): 
                    (qtype === 1 ? 
                    (options.length >= 4 ? (<Buttons addQuestion = {addQuestion} Publish ={Publish}/>): null)
                    : null)}
              
            
        </div>
    );
};

export default CreateSurvey;