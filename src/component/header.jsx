import React from "react";
import Btn from "./button";
import "./header.scss";
import { ACTIONS } from "../store/store";
import { getActionsSwitcher } from "../store/actionsCreator";
import { connect } from "react-redux";

function Header(props) {
  let switchActivity = () => {
    props.actionsSwitcher();
  };
  return (
    <div className="switcher">
      <Btn name={"Runtime"} cb={switchActivity} classActivityBtn={props.switchStatus}/>
      <Btn name={"Constructor"} cb={switchActivity} classActivityBtn={!props.switchStatus}/>
    </div>
  );
}

export default connect(
  (state) => ({
    switchStatus: state.runTime,
  }),
  (dispatch) => ({
    actionsSwitcher: () => dispatch(getActionsSwitcher()),
  })
)(Header);
