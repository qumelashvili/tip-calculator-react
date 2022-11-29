import React from "react";

export default function PeopleInput(props){

    function handleChange(e){
        props.setPeople(e.target.value);
    }

    return(
        <div className="mt-[32px]">
            <label>Number of People</label>
            <input placeholder="0" type="number" onChange={handleChange} className="input people-input w-full bg-[#F3F9FA] h-[48px] rounded-[5px] mt-[6px] text-right text-[24px] px-[17px]" />
        </div>
    )
}