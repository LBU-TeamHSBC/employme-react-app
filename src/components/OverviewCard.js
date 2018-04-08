import React from 'react';

export function OverviewCard(props) {
  return (
    <div className="col col-12 col-sm-12 col-md-6 col-xl-5 stats-col">
      <div className="card sameheight-item stats" data-exclude="xs" style={{ height: "313px" }}>
        <div className="card-block">
          <div className="title-block">
            <h4 className="title"> Overview </h4>
            <p className="title-description"> Overview of your current progress </p>
          </div>
          <div className="row row-sm stats-container">
            <div className="col-12 col-sm-6 stat-col">
              <div className="stat-icon">
                <i className="fa fa-rocket"></i>
              </div>
              <div className="stat">
                <div className="value"> 5407 </div>
                <div className="name"> Score </div>
              </div>
              <div className="progress stat-progress">
                <div className="progress-bar" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="col-12 col-sm-6 stat-col">
              <div className="stat-icon">
                <i className="fa fa-shopping-cart"></i>
              </div>
              <div className="stat">
                <div className="value"> 7 </div>
                <div className="name"> Matched Companies </div>
              </div>
              <div className="progress stat-progress">
                <div className="progress-bar" style={{ width: "25%" }}></div>
              </div>
            </div>
            <div className="col-12 col-sm-6  stat-col">
              <div className="stat-icon">
                <i className="fa fa-line-chart"></i>
              </div>
              <div className="stat">
                <div className="value"> 14 </div>
                <div className="name"> Completed Courses </div>
              </div>
              <div className="progress stat-progress">
                <div className="progress-bar" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className="col-12 col-sm-6  stat-col">
              <div className="stat-icon">
                <i className="fa fa-users"></i>
              </div>
              <div className="stat">
                <div className="value"> 3 </div>
                <div className="name"> In Progress Courses </div>
              </div>
              <div className="progress stat-progress">
                <div className="progress-bar" style={{ width: "34%" }}></div>
              </div>
            </div>
            <div className="col-12 col-sm-6  stat-col">
              <div className="stat-icon">
                <i className="fa fa-list-alt"></i>
              </div>
              <div className="stat">
                <div className="value"> 2 </div>
                <div className="name"> Job Offers </div>
              </div>
              <div className="progress stat-progress">
                <div className="progress-bar" style={{ width: "49%" }}></div>
              </div>
            </div>
            <div className="col-12 col-sm-6 stat-col">
              <div className="stat-icon">
                <i className="fa fa-dollar"></i>
              </div>
              <div className="stat">
                <div className="value"> 18 </div>
                <div className="name"> Jobs Applied </div>
              </div>
              <div className="progress stat-progress">
                <div className="progress-bar" style={{ width: "15%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}