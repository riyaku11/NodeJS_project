import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
      <li className={location.pathname === '/' ? 'active' : ''}>
      <Link to="/" className='link'>About</Link>
        </li>
        <li className={location.pathname === '/query1' ? 'active' : ''}>
          <Link to="/query1">Query 1</Link>
        </li>
        <li className={location.pathname === '/query2' ? 'active' : ''}>
          <Link to="/query2">Query 2</Link>
        </li>
        <li className={location.pathname === '/query3' ? 'active' : ''}>
          <Link to="/query3">Query 3</Link>
        </li>
        <li className={location.pathname === '/query4' ? 'active' : ''}>
          <Link to="/query4">Query 4</Link>
        </li>
        <li className={location.pathname === '/query5' ? 'active' : ''}>
          <Link to="/query5">Query 5</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
