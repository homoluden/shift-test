import { SET_REPORTS } from "../actionTypes";

const initialState = {
  reports: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_REPORTS: {
      const { reports } = action.payload;
      return {
        ...state,
        reports
      };
    }
    default:
      return state;
  }
}
