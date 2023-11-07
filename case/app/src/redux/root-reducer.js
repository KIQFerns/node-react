import { combineReducers } from "redux";

import launchReducer from "./launch/reducer";

const rootReducer = combineReducers({launchReducer})

export default rootReducer