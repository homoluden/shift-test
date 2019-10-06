import React from 'react'
import { connect } from 'react-redux'

import ReportRow from './ReportRow'

import './style.css'

const mapStateToProps = ({ reports }) => {
    return {
      reports
    }
  }

const ReportListPresenter = props => {
    return (
        <ul className="reportList">
            {props.reports.list.map(r => (
                <ReportRow key={`report${r.id}`} report={r} />
            ))}
        </ul>
    );
}

export default connect(
    mapStateToProps
)(ReportListPresenter);
