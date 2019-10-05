import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { Provider } from 'react-redux'
import store from "../report_list/redux/store"


import ReportListPresenter from "../report_list/ReportListPresenter";
import ReportListPager from "../report_list/ReportListPager";

import style from '../report_list/style.css';

const ReportList = () => {

  return (
    <Provider store={store}>
      <div className={style.reportsListRoot}>
        <ReportListPresenter />
        <ReportListPager />
      </div>
    </Provider>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ReportList />,
    document.body.appendChild(document.createElement('div')),
  )
})
