import React from 'react';

export function ScoreCard(props) {
  return (
    <div className="col col-12 col-sm-12 col-md-6 col-xl-7 history-col">
      <div className="card sameheight-item" data-exclude="xs" id="dashboard-history" style={{ height: "313px" }}>
        <div className="card-header card-header-sm bordered">
          <div className="header-block">
            <h3 className="title">Score</h3>
          </div>
          <ul className="nav nav-tabs pull-right" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" href="#score" role="tab" data-toggle="tab">Score</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" role="tab" data-toggle="tab">Skills</a>
            </li>
          </ul>
        </div>
        <div className="card-block">
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active fade show" id="score">
              <p className="title-description"> Your Score over 30 Days </p>
              <div id="dashboard-visits-chart" style={{ position: "relative" }}>
                ___SVG___
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="skills">
              <p className="title-description"> Your Skills </p>
              <div id="dashboard-downloads-chart"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}