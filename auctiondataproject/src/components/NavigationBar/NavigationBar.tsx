import React from "react";
import { ButtonGroup, Button } from '@material-ui/core';
import './../../App.css';

function NavigationBar(){
    
    return (
        <div className="NavigationBar">
            <ButtonGroup style={{margin:"center"}} size="small" aria-label="small outlined button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </div>
    )
}


export default NavigationBar;