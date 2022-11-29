import React from "react";

export default function CalculatorDisplay(props){

    function handleClick(){
        props.reset()
    }

    return(
        <div className="display w-full bg-[#00474B] box-border pt-[39px] px-[24px] pb-[24px] rounded-[15px] mt-[32px] ">
            {/* First row of Calculator Display, include Tip amount value */}
            <div className="calculator-display tip-amount flex items-center justify-between">
                <div >
                    <p>Tip Amount</p>
                    <span>/ person</span>
                </div>
                <p className="value tip-value">
                    ${props.tip}
                </p>
            </div>
            {/* Second row of Calculator Display, inclute Total amount value */}
            <div className="calculator-display total flex justify-between items-center mt-[25px]">
                <div>
                    <p>Total</p>
                    <span>/ person</span>
                </div>
                <p className="value total-value">
                    ${props.total}
                </p>
            </div>
            {/* RESET BUTTON! */}
            <button onClick={handleClick} className="w-full bg-[#26C2AE] rounded-[5px] h-[48px] mt-[35px] font-bold text-[#00474B] text-[20px] ">RESET</button>

        </div>
    )
}