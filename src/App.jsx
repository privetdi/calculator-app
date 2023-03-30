import React from "react";
import Header from "./component/header";
import { getActionOnAddToDo } from "./store/actionsCreator";
import { connect } from "react-redux";
import { ACTIONS } from "./store/store";
import BlockButton from "./component/blockButton";


function App() {
  return (
    <div className="conteiner">
      <Header />
      <BlockButton />
    </div>
  );
}

export default connect(
/*   (state) => ({
    testStore: state.productList,
    basket: state.basket,
  }) */ null,
/*   (dispatch) => ({
    ActionOnAddToDo: (item) => dispatch(getActionOnAddToDo(item)),
  }) */ null
)(App);

