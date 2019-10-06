import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from "../report_list/redux/store"


import ReportListPresenter from "../report_list/ReportListPresenter"
import ReportListPager from "../report_list/ReportListPager"
import NewReportLink from '../report_list/NewReportLink'

const ReportList = () => {

  return (
    <Provider store={store}>
      <Fragment>
        <ReportListPresenter />
        <ReportListPager />
        <NewReportLink />
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
