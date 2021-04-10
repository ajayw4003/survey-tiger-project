import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className ="m-3">
        <Link to = "/createSurvey"><button className = "btn btn-primary m-1" >Create Survey</button></Link>
        <Link to ="/takeSurvey"><button className = "btn btn-primary m-1">Take Survey</button></Link>    
        </div>
    );
};

export default Menu;