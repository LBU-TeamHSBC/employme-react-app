import React from 'react';

import { Link } from 'react-router-dom'

export function Home(props) {
  return (
    <div className="content">
      <Link to="/login">---- LOGIN ----</Link>
    </div>
  );
}