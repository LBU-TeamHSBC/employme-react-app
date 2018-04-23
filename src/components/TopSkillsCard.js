import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopSkillsList } from '../api';

// const Raphael = window.Raphael;
const Morris = window.Morris;

class _TopSkillsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: false,
      chart: null
    };
  }

  componentDidMount() {
    const { token } = this.props.user;
    getTopSkillsList(token)
      .then(skills => {
        const chart = this.updateChart(skills);
        this.setState({
          isLoading: false,
          error: false,
          chart
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          error: true
        });
      });
  }

  updateChart = skills => {
    const data = skills.top_tags.slice(0,3).map(tag => ({
      label: tag.name,
      value: parseInt(tag.score / skills.total * 100, 10)
    }));
    
    Morris.Donut({
      element: 'dashboard-sales-breakdown-chart',
      data,
      resize: true,
      colors: ['#70b02b', '#9ed85f', '#85ce36']
    })
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
            <div className="dashboard-sales-breakdown-chart" id="dashboard-sales-breakdown-chart"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export const TopSkillsCard = connect(mapStateToProps)(_TopSkillsCard);