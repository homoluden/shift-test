import React from 'react'

import './style.css'

const ReportRow = props => {
    const { report: { title, description, file_meta: { original_filename: filename }} } = props;
    return (
        <li className="reportRow">
            <span className="reportTitle">{title}</span>
            <span className="reportDescription">{description}</span>
            <span className="reportFile">{filename}</span>
        </li>
    );
}

export default ReportRow;
