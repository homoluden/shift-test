import React from 'react'

import './style.css'

const editReport = async (reportId) => {
    location.href = `/reports/${reportId}/edit`;
}

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
            <span className="reportTitle" onClick={() => editReport(id)}>{title}</span>
            <span className="reportDescription" onClick={() => editReport(id)}>{description}</span>
            <span className="reportFile" onClick={() => downloadAttachment(id)}>{filename}</span>
        </li>
    );
}

export default ReportRow;
