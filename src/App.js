import React from "react";
import './App.css'
import Header from "./components/Header";
import CalculatorContainer from "./container/CalculatorContainer";

export default function App(){
  return(
    <>
      <Header />
      <CalculatorContainer />
    </>
  )
}
