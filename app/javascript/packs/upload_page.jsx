// Run this example by adding <%= javascript_pack_tag 'upload_page' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const UploadPage = props => (
  <div>UPLOAD_PAGE NOT IMPLEMENTED!</div>
)

UploadPage.defaultProps = {
}

UploadPage.propTypes = {
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <UploadPage />,
    document.body.appendChild(document.createElement('div')),
  )
})
