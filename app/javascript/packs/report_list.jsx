import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from "../report_list/redux/store"


import ReportListPresenter from "../report_list/ReportListPresenter";
import ReportListPager from "../report_list/ReportListPager";

const ReportList = () => {

  return (
    <Provider store={store}>
      <Fragment>
        <ReportListPresenter />
        <ReportListPager />
      </Fragment>
    </Provider>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ReportList />,
    document.body.appendChild(document.createElement('div')),
  )
})
