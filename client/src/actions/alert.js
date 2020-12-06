import { REMOVE_ALERT, SET_ALERT } from "../actions/types";
import { v4 as uuidv4 } from "uuid";

export const setAlert = (msg, alertType, timeout = 5000) => {
  return (dispatch, getState) => {
    const id = uuidv4();
    console.log("fired");
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: id });
    }, timeout);
  };
};
