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
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Pills() {
  const [hTabs, sethTabs] = React.useState(1);
  const [vTabs, setvTabs] = React.useState(1);
  const [hiTabs, sethiTabs] = React.useState(1);
  const [viTabs, setviTabs] = React.useState(1);
  const [ihTabs, setihTabs] = React.useState(1);
  const [ivTabs, setivTabs] = React.useState(1);
  const toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    switch (stateName) {
      case "hTabs":
        sethTabs(index);
        break;
      case "vTabs":
        setvTabs(index);
        break;
      case "hiTabs":
        sethiTabs(index);
        break;
      case "viTabs":
        setviTabs(index);
        break;
      case "ihTabs":
        setihTabs(index);
        break;
      case "ivTabs":
        setivTabs(index);
        break;
      default:
    }
  };

  return (
    <>
      <div className="section section-pills">
        <Container>
          <div id="navigation-pills">
            <div className="title">
              <h4>Navigation Pills</h4>
            </div>
            <Row>
              <Col md="6">
                <p className="category">Horizontal tabs</p>
                <Nav className="nav-pills-primary" pills role="tablist">
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: hTabs === 1,
                      })}
                      onClick={(e) => toggleTabs(e, "hTabs", 1)}
                      href="#pablo"
                    >
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: hTabs === 2,
                      })}
                      onClick={(e) => toggleTabs(e, "hTabs", 2)}
                      href="#pablo"
                    >
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: hTabs === 3,
                      })}
                      onClick={(e) => toggleTabs(e, "hTabs", 3)}
                      href="#pablo"
                    >
                      Options
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent className="tab-space" activeTab={"hTabs" + hTabs}>
                  <TabPane tabId="hTabs1">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits. <br />
                    <br />
                    Dramatically visualize customer directed convergence without
                    revolutionary ROI.
                  </TabPane>
                  <TabPane tabId="hTabs2">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas. <br />
                    <br />
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                  </TabPane>
                  <TabPane tabId="hTabs3">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </TabPane>
                </TabContent>
              </Col>
              <Col md="6">
                <p className="category">Vertical tabs</p>
                <Row>
                  <Col md="4">
                    <Nav
                      className="nav-pills-primary flex-column"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: vTabs === 1,
                          })}
                          onClick={(e) => toggleTabs(e, "vTabs", 1)}
                          href="#pablo"
                        >
                          Profile
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: vTabs === 2,
                          })}
                          onClick={(e) => toggleTabs(e, "vTabs", 2)}
                          href="#pablo"
                        >
                          Settings
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: vTabs === 3,
                          })}
                          onClick={(e) => toggleTabs(e, "vTabs", 3)}
                          href="#pablo"
                        >
                          Options
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="8">
                    <TabContent activeTab={"vTabs" + vTabs}>
                      <TabPane tabId="vTabs1">
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </TabPane>
                      <TabPane tabId="vTabs2">
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br />
                        <br />
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </TabPane>
                      <TabPane tabId="vTabs3">
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas. <br />
                        <br />
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="title">
              <p className="category">With Icons</p>
            </div>
            <Row>
              <Col md="6">
                {/*color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"*/}
                <Nav
                  className="nav-pills-primary nav-pills-icons"
                  pills
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: hiTabs === 1,
                      })}
                      onClick={(e) => toggleTabs(e, "hiTabs", 1)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-spaceship" />
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: hiTabs === 2,
                      })}
                      onClick={(e) => toggleTabs(e, "hiTabs", 2)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-bag-16" />
                      Messages
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: hiTabs === 3,
                      })}
                      onClick={(e) => toggleTabs(e, "hiTabs", 3)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-settings" />
                      Settings
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent className="tab-space" activeTab={"hiTabs" + hiTabs}>
                  <TabPane tabId="hiTabs1">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits. <br />
                    <br />
                    Dramatically visualize customer directed convergence without
                    revolutionary ROI.
                  </TabPane>
                  <TabPane tabId="hiTabs2">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas. <br />
                    <br />
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                  </TabPane>
                  <TabPane tabId="hiTabs3">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </TabPane>
                </TabContent>
              </Col>
              <Col md="6">
                <Row>
                  <Col lg="3" md="6">
                    {/*color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"*/}
                    <Nav
                      className="nav-pills-primary nav-pills-icons flex-column"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: viTabs === 1,
                          })}
                          onClick={(e) => toggleTabs(e, "viTabs", 1)}
                          href="#pablo"
                        >
                          <i className="tim-icons icon-spaceship" />
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: viTabs === 2,
                          })}
                          onClick={(e) => toggleTabs(e, "viTabs", 2)}
                          href="#pablo"
                        >
                          <i className="tim-icons icon-settings" />
                          Settings
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="8">
                    <TabContent activeTab={"viTabs" + viTabs}>
                      <TabPane tabId="viTabs1">
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </TabPane>
                      <TabPane tabId="viTabs2">
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br />
                        <br />
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="title">
              <p className="category">Just Icons</p>
            </div>
            <Row>
              <Col className="mb-5" md="6">
                <Row>
                  <Col md="3">
                    {/*color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"*/}
                    <Nav
                      className="nav-pills-info nav-pills-just-icons"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: ihTabs === 1,
                          })}
                          onClick={(e) => toggleTabs(e, "ihTabs", 1)}
                          href="#pablo"
                        >
                          <i className="tim-icons icon-spaceship" />
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: ihTabs === 2,
                          })}
                          onClick={(e) => toggleTabs(e, "ihTabs", 2)}
                          href="#pablo"
                        >
                          <i className="tim-icons icon-settings" />
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="8">
                    <TabContent activeTab={"ihTabs" + ihTabs}>
                      <TabPane tabId="ihTabs1">
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </TabPane>
                      <TabPane tabId="ihTabs2">
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br />
                        <br />
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </Col>
              <Col md="6">
                {/*color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"*/}
                <Nav
                  className="nav-pills-info nav-pills-just-icons"
                  pills
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: ivTabs === 1,
                      })}
                      onClick={(e) => toggleTabs(e, "ivTabs", 1)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-spaceship" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: ivTabs === 2,
                      })}
                      onClick={(e) => toggleTabs(e, "ivTabs", 2)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-bag-16" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: ivTabs === 3,
                      })}
                      onClick={(e) => toggleTabs(e, "ivTabs", 3)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-settings" />
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent className="tab-space" activeTab={"ivTabs" + ivTabs}>
                  <TabPane tabId="ivTabs1">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits. <br />
                    <br />
                    Dramatically visualize customer directed convergence without
                    revolutionary ROI.
                  </TabPane>
                  <TabPane tabId="ivTabs2">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas. <br />
                    <br />
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                  </TabPane>
                  <TabPane tabId="ivTabs3">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
            {/* end nav pills */}
          </div>
        </Container>
      </div>
    </>
  );
}
