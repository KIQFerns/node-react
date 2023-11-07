import LaunchActionTypes from "./action-types";

export const dataLaunch = (payload) => ({
  type: LaunchActionTypes.GETLAUNCHDATA,
  payload,
});