import { SET_REPORTS } from './actionTypes'

export const setReports = ({reports}) => ({
  type: SET_REPORTS,
  payload: {
    reports
  }
})

export const loadReports = ({pageIdx, pageSize}) => {
  return (dispatch) => {
    return fetch(`/reports.json?page=${pageIdx+1}&per_page=${pageSize}`)
    .then(response => {
      return response.json();
    })
    .then(reports => {
      dispatch(setReports(reports));
    });
  };
};