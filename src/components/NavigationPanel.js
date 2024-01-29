import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { AddRentals } from './AddRentals';
import { ViewRentals } from './ViewRentals';

function NavigationPanel() {
  return (
    <div>
      

      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Add Rentals">
          <AddRentals />
        </Tab>
        <Tab eventKey="profile" title="View Rentals">
          <ViewRentals />
        </Tab>
        <Tab eventKey="contact" title="Get rental summary">
          {/* Content for the 'Get rental summary' tab goes here */}
        </Tab>
      </Tabs>
    </div>
  );
}

export { NavigationPanel };
