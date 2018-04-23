import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopSkillsList } from '../api';

class _TopSkillsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: false,
      skills: []
    };
  }

  componentDidMount() {
    const { token } = this.props.user;
    getTopSkillsList(token)
      .then(skills => {
        const topSkills = skills.top_tags.map(tag => (
          <li key={tag.name}>{tag.name} - {parseInt(tag.score / skills.total * 100, 10)}</li>
        ));
        this.setState({
          isLoading: false,
          error: false,
          skills: topSkills
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          error: true
        });
      });
  }

  render() {
    const { skills } = this.state;
    return (
      <div className="col-xl-4">
        <div className="card sameheight-item sales-breakdown" data-exclude="xs,sm,lg" style={{ height: "400px" }}>
          <div className="card-header">
            <div className="header-block">
              <h3 className="title"> Top Skills </h3>
            </div>
          </div>
          <div className="card-block">
            <ul>
              {skills}
            </ul>
            {/* <div className="dashboard-sales-breakdown-chart" id="dashboard-sales-breakdown-chart">___SVG___</div> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export const TopSkillsCard = connect(mapStateToProps)(_TopSkillsCard);