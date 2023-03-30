import { ACTIONS } from "./store";

const initialState = {
    runTime: false,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {

    case ACTIONS.SWITCHER:
      return {
        ...state,
        runTime: !state.runTime,
      };


    default:
      return state;
  }
};

export default reducer;
