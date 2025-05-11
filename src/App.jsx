import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './style.css';

import Home from './Home';
import Post1 from './posts/Post1';
import Post2 from './posts/Post2';
import Post3 from './posts/Post3';

const App = () => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const toggleTopic = (topic) => {
    setExpandedTopic(expandedTopic === topic ? null : topic);
  };

  return (
    <div>
      {/* Banner */}
      <div className="banner">
        Greetings Traveller!
      </div>

      {/* Main container */}
      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Navigation</h2>
          <ul>
            <li><Link to="/">Home</Link></li>

            {/* Training Topic */}
            <li className="topic-header" onClick={() => toggleTopic('training')}>
              <span className="arrow">
                {expandedTopic === 'training' ? '▾' : '▸'}
              </span>
              Training
            </li>
            {expandedTopic === 'training' && (
              <ul className="sublist">
                <li><Link to="/post1">Training Philosophy</Link></li>
                <li><Link to="/post2">Advanced Training</Link></li>
              </ul>
            )}

            {/* Nutrition Topic */}
            <li className="topic-header" onClick={() => toggleTopic('nutrition')}>
              <span className="arrow">
                {expandedTopic === 'nutrition' ? '▾' : '▸'}
              </span>
              Nutrition
            </li>
            {expandedTopic === 'nutrition' && (
              <ul className="sublist">
                <li><Link to="/post3">Nutrition Philosophy</Link></li>
              </ul>
            )}
          </ul>
        </div>

        {/* Main Content */}
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post1" element={<Post1 title="Training Basics" />} />
            <Route path="/post2" element={<Post2 title="Advanced Training" />} />
            <Route path="/post3" element={<Post3 title="Nutrition Tips" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
