import LaunchActionTypes from "./action-types";

const initialState = {
  currentLaunch: { "finalresult": [], "xlabel": [], "grid": [] },
  results: []
}

const launchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LaunchActionTypes.GETLAUNCHDATA:
      return { ...state, currentLaunch: action.payload };
    case LaunchActionTypes.GETGRIDDATA:
      return { ...state, results: action.payload };
    default:
      return state;
  }
}

export default launchReducer