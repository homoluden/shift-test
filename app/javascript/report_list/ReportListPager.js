import React from 'react'
import { connect } from 'react-redux';

import { loadReports } from "../report_list/redux/actions"

import style from './style.css'

const mapStateToProps = ({ reports }) => {
    return {
      reports
    }
  }

const mapDispatchToProps = { loadReports }

class ReportListPager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            perPage: 10
        }
    }

    handleUpdateReports = () => {
        const { loadReports } = this.props;
        loadReports({page: 1, perPage: 10});
    }

    componentDidMount() {
        this.handleUpdateReports();
    }

    render() {
        return (
            <div className={style.reportsPagerRoot}>
                <span>Page: </span>
                <input value={this.state.page} />
                <span>Page Size: </span>
                <input value={this.state.perPage} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReportListPager);
