import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinkAccountDialog } from './LinkAccountDialog';

class _EnrolledCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddDialog: false,
      isLoading: true,
      enrolments: []
    };
  }

  componentDidMount() {
    this.updateEnrolmentList();
  }

  updateEnrolmentList = _ => {
    const enrolments = [];
    /* {{!--
    <label className="search">
        <input className="search-input" placeholder="search...">
        <i className="fa fa-search search-icon"></i>
    </label>
    <div className="pagination">
        <a href="" className="btn btn-primary btn-sm">
            <i className="fa fa-angle-up"></i>
        </a>
        <a href="" className="btn btn-primary btn-sm">
            <i className="fa fa-angle-down"></i>
        </a>
    </div> --}} */
    this.setState({
      enrolments,
      isLoading: false
    });
  };

  linkNewAccount = _ => {
    this.setState({ showAddDialog: true });
  };

  dismissLinkAccountDialog = _ => {
    this.setState({ showAddDialog: false });
  };

  render() {
    const { enrolments } = this.state;
    return (
      <div className="col-xl-7">
        <div className="card sameheight-item items" data-exclude="xs,sm,lg" style={{ height: "300px" }}>
          <div className="card-header bordered">
            <div className="header-block">
              <h3 className="title"> Enrolled Courses </h3>
            </div>
            <div className="header-block pull-right">
              <button
                onClick={this.linkNewAccount}
                className="btn btn-primary btn-sm"> Add new </button>
                {enrolments}
            </div>
          </div>
          <ul className="item-list striped">
            <li className="item item-list-header">
              <div className="item-row">
                <div className="item-col item-col-header fixed item-col-img xs"></div>
                <div className="item-col item-col-header item-col-title">
                  <div>
                    <span>Name</span>
                  </div>
                </div>
                <div className="item-col item-col-header item-col-sales">
                  <div>
                    <span>Completed</span>
                  </div>
                </div>
                <div className="item-col item-col-header item-col-stats">
                  <div className="no-overflow">
                    <span>Stats</span>
                  </div>
                </div>
                {/* <div className="item-col item-col-header item-col-date">
                  <div>
                    <span>Date Completed</span>
                  </div>
                </div> */}
              </div>
            </li>
            {/* {{#each courses as |course|}} {{!-- TODO: COURSE LIST ITEMS --}} {{/each}} */}
          </ul>
        </div>
        {this.state.showAddDialog && <LinkAccountDialog onDismiss={this.dismissLinkAccountDialog} />}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export const EnrolledCard = connect(mapStateToProps)(_EnrolledCard);