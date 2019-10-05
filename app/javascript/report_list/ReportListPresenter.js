import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = ({ reports }) => {
    return {
      reports
    }
  }

const ReportListPresenter = props => {
    return (
        <ul>
            {props.reports.list.map(r => (
                <li key={`report${r.id}`}>{r.title}</li>
            ))}
        </ul>
    );
}

export default connect(
    mapStateToProps
)(ReportListPresenter);
