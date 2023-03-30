import React from "react";
import "./puzzle.scss";

function Puzzle(props) {
  let mouseDown = (event) => {
    const page = document.getElementById("leftWrapper");
    const btn = event.target;
    let yElement = event.clientY - btn.offsetTop;
    let xElement = event.clientX - btn.offsetLeft;

    function mousemove(eMousMove) {
      event.target.style.position = "absolute";
      event.target.style.top = eMousMove.clientY - yElement + "px";
      event.target.style.left = eMousMove.clientX - xElement + "px";
    }

    page.addEventListener("mousemove", mousemove);

    //удаление событий
    btn.addEventListener("mouseup", removeEvent);
    function removeEvent() {
      btn.removeEventListener("mousedown", mouseDown);
      page.removeEventListener("mousemove", mousemove);
      btn.removeEventListener("mouseup", removeEvent);
    }
  };

  return (
    <div className="puzzle" onMouseDown={(e) => mouseDown(e)}>
      {props.detail}
    </div>
  );
}

export default Puzzle;
