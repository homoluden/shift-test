import React from 'react'

import './style.css'

const goToNewReport = () => {
    location.href = `/reports/new`;
}

const ReportRow = props => {
    return (
        <div className="addReporRow">
            <button className="addReportButton" onClick={goToNewReport}>Add Report</button>
        </div>
    );
}

export default ReportRow;
