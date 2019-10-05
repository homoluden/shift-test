import { SET_REPORTS } from "../actionTypes";

const initialState = {
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_REPORTS: {
      const { reports } = action.payload;
      return {
        ...state,
        list: reports
      };
    }
    default:
      return state;
  }
}
