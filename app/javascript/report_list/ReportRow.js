import React from 'react'

import './style.css'

const downloadAttachment = async (reportId) => {
    var myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');

    var myInit = {
    method: 'GET',
    headers: myHeaders,
    };

    fetch(`/reports/${reportId}/file`, myInit)
    .then(response => {
        return response.text();
    })
    .then(attachmentUrl => {
        Object.assign(document.createElement('a'), { target: '_blank', href: attachmentUrl}).click();
    });
}

const ReportRow = props => {
    const { report: { id, title, description, file_meta: { original_filename: filename }} } = props;
    return (
        <li className="reportRow">
            <span className="reportTitle">{title}</span>
            <span className="reportDescription">{description}</span>
            <span className="reportFile" onClick={() => downloadAttachment(id)}>{filename}</span>
        </li>
    );
}

export default ReportRow;
