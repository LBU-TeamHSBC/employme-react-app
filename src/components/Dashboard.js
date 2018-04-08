import React from 'react';

import { EnrolledCard } from './EnrolledCard';
import { OverviewCard } from './OverviewCard';
import { ScoreCard } from './ScoreCard';
import { TopSkillsCard } from './TopSkillsCard';

export function Dashboard(props) {
  return (
    <article className="content dashboard-page">
      <section className="section">
        <div className="row sameheight-container">
          <OverviewCard />
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