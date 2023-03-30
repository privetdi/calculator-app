import React from "react";
import { connect } from "react-redux";

function Btn(props){
    return( <button className={`classBtn ${ props.classActivityBtn ? "activity" : "offActivity"}`} onClick={()=>props.cb()}>{props.name}</button>)
}

export default connect(
(state) => ({
    activity: state.runTime,
      }),
    /*   (dispatch) => ({
        ActionOnAddToDo: (item) => dispatch(getActionOnAddToDo(item)),
      }) */ null
    )(Btn);