import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinkAccountDialog } from './LinkAccountDialog';
import { getEnrolmentList } from '../api';

class _EnrolledCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddDialog: false,
      isLoading: true,
      error: false,
      enrolments: []
    };
  }

  componentDidMount() {
    this.updateEnrolmentList();
  }

  updateEnrolmentList = _ => {
    getEnrolmentList(this.props.user.token)
    .then(data => {
      const enrolments = this.buildEnrolments(data);
      this.setState({
        enrolments,
        isLoading: false,
        error: false,
      });
    })
    .catch(err => {
      this.setState({
        isLoading: false,
        error: true,
      });
    });
  };

  buildEnrolments = data => {
    const enrolments = [];
    const { courses, projects } = data;
    var key = 0;
    courses.forEach(course => {
      enrolments.push(this.createListItem([
        course.name,
        course.course_module,
        course.cmprog,
        course.cprog
      ], key++));
    });
    enrolments.push(this.createListHeader(
      ["Vendor", "Project Name", "Rating", "Lines of Code"],
      key++));
    projects.forEach(project => {
      enrolments.push(this.createListItem([
        project.vendor,
        project.name,
        project.rating,
        project.lines_of_code,
      ], key++));
    });
    return enrolments;
  };

  createListHeader = ([c1, c2, c3, c4], key) => (
    <li className="item item-list-header" key={key}>
      <div className="item-row">
        <div className="item-col item-col-header item-col-sales">
          <div>
            <span>{c1}</span>
          </div>
        </div>
        <div className="item-col item-col-header item-col-title">
          <div>
            <span>{c2}</span>
          </div>
        </div>
        <div className="item-col item-col-header item-col-date">
          <div>
            <span>{c3}</span>
          </div>
        </div>
        <div className="item-col item-col-header item-col-date">
          <div className="no-overflow">
            <span>{c4}</span>
          </div>
        </div>
      </div>
    </li>
  );

  createListItem = ([c1, c2, c3, c4], key) => (
    <li className="item" key={key}>
      <div className="item-row">
        <div className="item-col item-col-sales">
          <div> {c1} </div>
        </div>
        <div className="item-col item-col-title">
          <div> {c2} </div>
        </div>
        <div className="item-col item-col-date">
          <div> {c3} </div>
        </div>
        <div className="item-col item-col-date">
          <div> {c4} </div>
        </div>
      </div>
    </li>
  );

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
        <div className="card sameheight-item items" data-exclude="xs,sm,lg" style={{ height: "340px" }}>
          <div className="card-header bordered">
            <div className="header-block">
              <h3 className="title"> Enrolled Courses &amp; Projects </h3>
            </div>
            <div className="header-block pull-right">
              <button
                onClick={this.linkNewAccount}
                className="btn btn-primary btn-sm"> Add new </button>
            </div>
          </div>
          <ul className="item-list striped" style={{ overflowY: "scroll" }}>
          <li className="item item-list-header">
              <div className="item-row">
                <div className="item-col item-col-header item-col-sales">
                  <div>
                    <span>Vendor</span>
                  </div>
                </div>
                <div className="item-col item-col-header item-col-title">
                  <div>
                    <span>Course</span>
                  </div>
                </div>
                <div className="item-col item-col-header item-col-date">
                  <div>
                    <span>% Module</span>
                  </div>
                </div>
                <div className="item-col item-col-header item-col-date">
                  <div className="no-overflow">
                    <span>% Course</span>
                  </div>
                </div>
              </div>
            </li>
            {enrolments}
          </ul>
        </div>
        {this.state.showAddDialog && <LinkAccountDialog onDismiss={this.dismissLinkAccountDialog} />}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export const EnrolledCard = connect(mapStateToProps)(_EnrolledCard);