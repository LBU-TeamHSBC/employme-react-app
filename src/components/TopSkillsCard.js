import React from 'react';

export function TopSkillsCard(props) {
  return (
    <div className="col-xl-4">
      <div className="card sameheight-item sales-breakdown" data-exclude="xs,sm,lg" style={{ height: "400px" }}>
        <div className="card-header">
          <div className="header-block">
            <h3 className="title"> Top Skills </h3>
          </div>
        </div>
        <div className="card-block">
          <div className="dashboard-sales-breakdown-chart" id="dashboard-sales-breakdown-chart">___SVG___</div>
        </div>
      </div>
    </div>
  );
}