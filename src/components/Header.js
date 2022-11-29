import React from "react";
import logo from "../images/logo.svg"

export default function Header(){
    return(
        <div className="logo-area flex justify-center mt-[50px]">
            <img src={logo} alt="" />
        </div>
    ) 
}