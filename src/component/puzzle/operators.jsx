import React from "react";
import '../puzzle.scss';

function Operator() {
  return (
    <div>
      <button className="btn operator">/</button>
      <button className="btn operator">x</button>
      <button className="btn operator">-</button>
      <button className="btn operator">+</button>
    </div>
  );
}

export default Operator;
