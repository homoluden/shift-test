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
                <li>{r.title}</li>
            ))}
        </ul>
    );
}

export default connect(
    mapStateToProps
)(ReportListPresenter);
