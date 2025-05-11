import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Articles</h2>
      <ul>
        <li><Link to="/post1">Getting Started</Link></li>
        <li><Link to="/post2">React Basics</Link></li>
        <li><Link to="/post3">Advanced Topics</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
