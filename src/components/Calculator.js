import React from "react";
import BillInput from "./BillInput";
import TipSelectContainer from "../container/TipSelectContainer";
import PeopleInput from "./PeopleInput";
import CalculatorDisplay from "./CalculatorDisplay";

export default function Calculator(props){
    return(
        <main className="flex justify-between bg-white w-full p-[32px] box-border mt-[40px] rounded-t-[25px]">
            <div className="select-option">
                <BillInput setBill = {props.valueOfBill} />
                <TipSelectContainer setTip = {props.valueOfTip} />
                <PeopleInput setPeople = {props.setPeople} />
            </div>
            <CalculatorDisplay tip = {props.tip} total={props.total} reset = {props.reset} />
        </main>
    )
}