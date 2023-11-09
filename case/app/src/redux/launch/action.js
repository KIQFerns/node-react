import LaunchActionTypes from "./action-types";

export const dataLaunch = (payload) => ({
  type: LaunchActionTypes.GETLAUNCHDATA,
  payload,
});

export const dataGrid = (payload) => ({
  type: LaunchActionTypes.GETGRIDDATA,
  payload,
});