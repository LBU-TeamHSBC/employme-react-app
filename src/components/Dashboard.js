import React from 'react';

import { EnrolledCard } from './EnrolledCard';
import { OverviewCard } from './OverviewCard';
import { ScoreCard } from './ScoreCard';
import { TopSkillsCard } from './TopSkillsCard';

export function Dashboard(props) {
  const dummy_card = {
    score:3247,
    matched_companies:7,
    courses_completed:14,
    courses_in_progress:3,
    job_offers:2,
    jobs_applied:18
  };
  
  return (
    <article className="content dashboard-page">
      <section className="section">
        <div className="row sameheight-container">
          {OverviewCard(dummy_card)}
          <ScoreCard />
        </div>
      </section>
      <section className="section">
        <div className="row sameheight-container">
          <EnrolledCard />
          <TopSkillsCard />
        </div>
      </section>
      <section className="section map-tasks">
        <div className="row sameheight-container">
          <div className="col-md-8">
          </div>
          <div className="col-md-4">
          </div>
        </div>
      </section>
    </article>
  );
}