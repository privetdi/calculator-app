import React from "react";
import '../puzzle.scss';

function Number(){
    let key = [',',0,1,2,3,4,5,6,7,8,9]
    return(
    <div className="numbers">
       { key.map((item) => <button className={`btn number ${ item===0 ? "zero": ""}`}>{item}</button>)}
    </div>)
}

export default Number