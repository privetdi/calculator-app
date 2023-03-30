import React from "react";
import Puzzle from "./puzzle";
import equalityOperator from "./puzzle/equalityOperator";
import Number from "./puzzle/number";
import Operator from "./puzzle/operators";
import Result from "./puzzle/result";

function CalLeft(){
    let a = <a>fregreaserager</a>



    //временная размедка для тестирования DnD
    const styleBorder = {
        border: '2px dashed red'
    }


    return(
        
    <div id="leftWrapper" style={styleBorder} className="conteinerLeft">
        <Puzzle detail={Result()} />
        <Puzzle detail={Operator()} />
        <Puzzle detail={Number()} />
        <Puzzle detail={equalityOperator()} />
    </div>
    )
}

export default CalLeft;