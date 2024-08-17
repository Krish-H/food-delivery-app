import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar'
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-content">
        <Sidebar />
        <div className="layout-main">
          <Outlet /> {/* Placeholder for the route components */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
