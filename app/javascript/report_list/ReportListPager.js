import React from 'react'
import { connect } from 'react-redux';

import { loadReports } from "../report_list/redux/actions"

import './style.css'

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

    changePage = ({ target: { value } }) => {
        this.setState(
            { page: value },
            () => {
                this.dispatchUpdateReports();
            }
        );
    }

    changePageSize = ({ target: { value } }) => {
        this.setState(
            { perPage: value },
            () => {
                this.dispatchUpdateReports();
            }
        );
    }

    dispatchUpdateReports = () => {
        const { loadReports } = this.props;
        loadReports({page: this.state.page, perPage: this.state.perPage});
    }

    componentDidMount() {
        this.dispatchUpdateReports();
    }

    render() {
        return (
            <div className="reportsPagerRoot">
                <span className="pageLabel">Page: </span>
                <input value={this.state.page} onChange={this.changePage} />
                <span className="pageSizeLabel">Page Size: </span>
                <input value={this.state.perPage} onChange={this.changePageSize} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReportListPager);
