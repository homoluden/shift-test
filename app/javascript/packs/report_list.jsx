// Run this example by adding <%= javascript_pack_tag 'report_list' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const ReportList = props => (
  <div>REPORT_LIST NOT IMPLEMENTED!</div>
)

ReportList.defaultProps = {
}

ReportList.propTypes = {
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ReportList />,
    document.body.appendChild(document.createElement('div')),
  )
})
