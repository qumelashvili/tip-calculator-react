import React from "react";
import TipSelect from "../components/TipSelect";

export default function TipCalculatorContainer(props){

    const tipButtons = document.querySelectorAll(".select-button");
    const tipValues = [5, 10, 15, 25, 50];

    function handleClick(e){
        props.setTip(e.target.id);
        for(var button of tipButtons){
            button.classList.remove("active");
        }
        e.target.classList.toggle("active");
    } 
    function handleChange(e){
        props.setTip(e.target.value);
    }

    return <TipSelect tipValues = {tipValues} handleClick = {handleClick} handleChange = {handleChange} />
}