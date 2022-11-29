import React, {useState, useEffect} from "react";
import Calculator from "../components/Calculator";

export default function CalculatorContainer(){

    const [billValue, setBillValue] = useState(0);
    const [tipValue, setTipValue] = useState(0);
    const [peopleValue, setPeopleValue] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    function calPercnt(num, percentage, people){
        //Calculate percentage amount per person!
        const result = parseInt((num * (percentage / 100)) / people).toFixed(2);
        setTipAmount(result);
    }
    function total(num, percentage, people){
        //Calculat total amoun/per person!
        const perc = parseFloat((num * (percentage / 100)) / people);
        const result = parseFloat((num / people) + perc).toFixed(2);
        setTotalAmount(result);
    }

    // Functions to set State value, bind with props.!
    function valueOfBill(data){
        setBillValue(data);
    }
    function valueOfTip(data){
        setTipValue(data);
    }
    function valueOfPeople(data){
        setPeopleValue(data);
    }
    //

    function resetInputValues(){
        // Reset all input value!
        const input = document.querySelectorAll(".input");
        for(var x of input){
            x.value = 0
        }
    }

    function resetActiveButton(){
        // Reset activeb button, remove class!
        const tipButtons = document.querySelectorAll(".select-button");
        for(var button of tipButtons){
            button.classList.remove("active");
        }
    }

    // Reset all State Value
    function resetValues(){
        //States
        setBillValue(0);
        setTipValue(0);
        setPeopleValue(0);
        setTipAmount(0);
        setTotalAmount(0);
        //

        //Input/Button
        resetInputValues();
        resetActiveButton();
        //       
    }

    useEffect(()=>{
        // check if input values equal 0, if equals setState value 0!
        if(billValue === 0 || tipValue === 0 || peopleValue === 0){
            setTipAmount(0);
            setTotalAmount(0);
        }
        //if not equal 0, calculate!
        else if(billValue!==0 && tipValue !== 0 && peopleValue !== 0 ){
            calPercnt(billValue, tipValue, peopleValue);
            total(billValue, tipValue, peopleValue);
        }
    },[billValue, peopleValue, tipValue, tipAmount, totalAmount])


    return <Calculator valueOfBill={valueOfBill} valueOfTip={valueOfTip} setPeople = {valueOfPeople} tip = {tipAmount} total={totalAmount} reset = {resetValues} />

}