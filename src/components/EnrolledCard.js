import React from 'react';

export function EnrolledCard(props) {
  return (
    <div className="col-xl-8">
      <div className="card sameheight-item items" data-exclude="xs,sm,lg" style={{ height: "400px" }}>
        <div className="card-header bordered">
          <div className="header-block">
            <h3 className="title"> Enrolled Courses </h3>
          </div>
          <div className="header-block pull-right">
            <a href="item-editor.html" className="btn btn-primary btn-sm"> Add new </a>
            {/* {{!--
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
            </div> --}} */}
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
              <div className="item-col item-col-header item-col-date">
                <div>
                  <span>Date Completed</span>
                </div>
              </div>
            </div>
          </li>
          {/* {{#each courses as |course|}} {{!-- TODO: COURSE LIST ITEMS --}} {{/each}} */}
        </ul>
      </div>
    </div>
  );
}