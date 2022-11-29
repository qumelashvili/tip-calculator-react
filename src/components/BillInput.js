import React from "react";

export default function BillInput(props){

    function handleChange(e){
        props.setBill(e.target.value);
    }

    return(
        <>
            <label>Bill</label>
            <input type="number" placeholder="0" onChange={handleChange} className="input bill-input w-full bg-[#F3F9FA] h-[48px] rounded-[5px] mt-[6px] text-right text-[24px] px-[17px]" />
        </>
    )
}