import React from 'react';

export function BrandLogo(props) {
  return (
    <div className="brand">
      <div className="logo">
          <span className="l l1"></span>
          <span className="l l2"></span>
          <span className="l l3"></span>
          <span className="l l4"></span>
          <span className="l l5"></span>
      </div>
      {props.site_name}
    </div>);
}