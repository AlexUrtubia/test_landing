/*!

=========================================================
* BLK Design System PRO React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// core components
import ScrollNavbar from "components/Navbars/ScrollNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// Sections for this page
// (we've divided this page into multiple react components to make it a bit more readable)
import Headers from "./SectionsSections/Headers.js";
import Features from "./SectionsSections/Features.js";
import Blogs from "./SectionsSections/Blogs.js";
import Teams from "./SectionsSections/Teams.js";
import Projects from "./SectionsSections/Projects.js";
import Pricing from "./SectionsSections/Pricing.js";
import Testimonials from "./SectionsSections/Testimonials.js";
import ContactUs from "./SectionsSections/ContactUs.js";
import Tables from "./SectionsSections/Tables.js";
import Accordion from "./SectionsSections/Accordion.js";

export default function Sections() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href) !== null
    ) {
      document.getElementById(href).scrollIntoView();
    }
    document.body.classList.add("sections-page");
    return function cleanup() {
      document.body.classList.remove("sections-page");
    };
  }, []);
  return (
    <>
      {/* Navbar START */}
      <ScrollNavbar />
      {/* Navbar END */}
      <div className="wrapper" ref={wrapper}>
        <div className="section-space" />
        {/* Sections START */}
        <Headers />
        <Features />
        <Blogs />
        <Teams />
        <Projects />
        <Pricing />
        <Testimonials />
        <ContactUs />
        <Tables />
        <Accordion />
        {/* Sections END */}
        {/* Footer */}
        <DemoFooter />
      </div>
    </>
  );
}
