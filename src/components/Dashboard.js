import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { EnrolledCard } from './EnrolledCard';
import { OverviewCard } from './OverviewCard';
import { ScoreCard } from './ScoreCard';
import { TopSkillsCard } from './TopSkillsCard';

function _Dashboard(props) {
  const { user } = props;
  const dummy_overview_data = {
    score:3247,
    matched_companies:7,
    courses_completed:14,
    courses_in_progress:3,
    job_offers:2,
    jobs_applied:18
  };

  if (!user.isLoggedIn) {
    return <Redirect to={'/login'} />;
  }
  
  return (
    <article className="content dashboard-page">
      <section className="section">
        <div className="row sameheight-container">
          {OverviewCard(dummy_overview_data)}
          <ScoreCard />
        </div>
      </section>
      <section className="section">
        <div className="row sameheight-container">
          <EnrolledCard />
          <TopSkillsCard />
        </div>
      </section>
    </article>
  );
}

const mapStateToProps = ({ user }) => ({ user });

export const Dashboard = connect(mapStateToProps)(_Dashboard);