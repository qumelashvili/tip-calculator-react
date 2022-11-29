import React from "react";

export default function TipSelect(props){
    return(
        <div className="select-tip mt-[32px]">

            <label>Select Tip %</label>

            <div className="tip-button flex justify-between flex-wrap">
                {props.tipValues.map((item,index)=>{
                    return (
                        <div id={item} key={index} onClick={props.handleClick} className="select-button bg-[#00474B] w-[146px] h-[48px] rounded-[5px] mt-[16px] flex justify-center items-center text-white text-[24px] cursor-pointer">
                            {item}%
                        </div>
                    )
                })}
               <input type="number" onChange={props.handleChange} placeholder="Custom" className="input w-[146px] rounded-[5px] h-[48px] mt-[16px] bg-[#F3F9FA] text-[24px] text-right pr-[17px]"/>
            </div>

        </div>
    )
}