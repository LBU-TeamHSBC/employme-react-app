import React from 'react';

import { Link } from 'react-router-dom'

export function Home(props) {
  return (
    <div className="content">
      <Link to="/login">---- LOGIN ----</Link>
      <hr />
      <p style={{width: "600px", textAlign: "justify"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam eros,
        tempus porttitor odio eu, molestie consequat nibh. Duis placerat ultrices
        metus, sed pellentesque tellus congue et. Phasellus molestie condimentum
        auctor. Vestibulum vel arcu leo. Integer odio odio, tincidunt sed
        vestibulum id, varius non arcu. Morbi eget purus gravida, vehicula ligula
        in, iaculis nisi. Sed quis dui est. Suspendisse sed dolor volutpat,
        porttitor tellus efficitur, maximus mi. Ut tempus turpis purus.
      </p>
    </div>
  );
}