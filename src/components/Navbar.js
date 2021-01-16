import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Experience from "./Experience";
import Projects from "./Projects";

const Navbar = () => {
  return (
    <div className="tabs">
      <Tabs defaultActiveKey="Experience">
        <Tab eventKey="Experience" title="Experience">
          <Experience />
        </Tab>
        <Tab eventKey="Projects" title="Projects">
          <Projects />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Navbar;
