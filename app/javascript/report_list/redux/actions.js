import { SET_REPORTS } from './actionTypes'

export const setReports = ({reports}) => ({
  type: SET_REPORTS,
  payload: {
    reports
  }
})

export const loadReports = ({page, perPage}) => {
  return (dispatch) => {
    return fetch(`/reports.json?page=${page}&per_page=${perPage}`)
    .then(response => {
      return response.json();
    })
    .then((reports) => {
      dispatch(setReports({ reports }));
    });
  };
};