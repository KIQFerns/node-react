import LaunchActionTypes from "./action-types";

const initialState = {
    currentLaunch: [],
}

const launchReducer = (state = initialState, action) => {
    switch (action.type) {
        case LaunchActionTypes.GETLAUNCHDATA:
          return { ...state, currentLaunch: action.payload };
        default:
          return state;
      }
}

export default launchReducer