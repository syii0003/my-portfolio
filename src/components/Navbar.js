import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Experience from "./Experience";

const Navbar = () => {
  return (
    <div className="tabs">
      <Tabs defaultActiveKey="Experience">
        <Tab eventKey="Experience" title="Experience">
          <Experience />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Navbar;
