import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { connect, Provider } from 'react-redux'
import store from "../report_list/redux/store";
import { loadReports } from "../report_list/redux/actions";

const mapStateToProps = ({ pageIdx, pageSize, reports }, ownProps) => {
  return {
    pageIdx,
    pageSize,
    reports,

    // ACHTUNG! Own props will override Redux state props.
    ...ownProps
  }
}

const mapDispatchToProps = { loadReports }

class ReportList extends React.Component {

  handleUpdateReports = () => {
    const { loadReports } = this.props;
    loadReports({pageIdx: 1, pageSize: 10});
  }

  componentDidMount() {
    this.handleUpdateReports();
  }

  render() {
    return (
        <div>REPORT_LIST NOT IMPLEMENTED!</div>
    );
  }
}

ReportList.defaultProps = {
}

ReportList.propTypes = {
}

const ConnectedReportList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportList);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedReportList />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
