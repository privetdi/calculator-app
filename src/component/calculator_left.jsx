import React from "react";
import Puzzle from "./puzzle";
import equalityOperator from "./puzzle/equalityOperator";
import Number from "./puzzle/number";
import Operator from "./puzzle/operators";
import Result from "./puzzle/result";
import "./calculator.scss";

function CalLeft() {
  let a = <a>fregreaserager</a>;

  let mouseDown = (event) => {
    event.stopPropagation();
    let element = event.target;
    console.log("🚀 ~ file: puzzle.jsx:10 ~ mouseDown ~ btn:", element.tagName);
    if (element.tagName !== "DIV") {
      element = element.parentNode;
      console.log(true, element);
    } else {
      console.log(false, element);
    }

    let yElement = event.clientY - element.offsetTop;
    let xElement = event.clientX - element.offsetLeft;

    function mousemove(eMousMove) {
      element.style.position = "absolute";
      element.style.top = eMousMove.clientY - yElement + "px";
      element.style.left = eMousMove.clientX - xElement + "px";
      ghostMove({ y: eMousMove.clientY, x: eMousMove.clientX });
    }

    function ghostMove(coords) {
      //х - горизонт
      //У - вертикаль
      const rightLayout = document.querySelector(".conteinerRight");
      //координаты правого поля
      const rect = rightLayout.getBoundingClientRect();
      //выбираем какой элемент отправить в правое окно
      if (coords.x > rect.x) {
        console.log(element.className);
        switch (element.className) {
          case "equalityOperator": 
            console.log("equalityOperator true");
            break;
            case "numbers": 
            console.log("numbers true");
            break;
            case "operators": 
            console.log("operators true");
            break;  
            case "result": 
            console.log("result true");
            break;  
          default:
            console.log(false);
            break;
        }
      }

      /*       console.log(rect)
      console.log('y', coords.y, 'x', coords.x) */
    }

    element.addEventListener("mousemove", mousemove);

    //удаление событий
    element.addEventListener("mouseup", removeEvent);
    function removeEvent() {
      element.removeEventListener("mousemove", mousemove);
      element.removeEventListener("mousedown", mouseDown);
      element.removeEventListener("mouseup", removeEvent);
    }
  };

  return (
    <div className="conteinerLeft" onMouseDown={(e) => mouseDown(e)}>
      <Puzzle detail={Result()} />
      <Puzzle detail={Operator()} />
      <Puzzle detail={Number()} />
      <Puzzle detail={equalityOperator()} />
    </div>
  );
}

export default CalLeft;
