import React from "react";
import "./puzzle.scss";

function Puzzle(props) {
  

  return (
    <div className="puzzle" >
      {props.detail}
    </div>
  );
}

export default Puzzle;
