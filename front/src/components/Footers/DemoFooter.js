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
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function DemoFooter() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3" className="mt-4">
              <h1 className="title">Auris</h1>
            </Col>
            <Col md="6" xs="6" >
              <Row className="justify-content-center">
                <Nav>
                  <NavItem>
                    <NavLink to="/index" tag={Link}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/landing-page" tag={Link}>
                      Landing
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/register-page" tag={Link}>
                      Register
                    </NavLink>
                  </NavItem>
                </Nav>
              </Row>
            </Col>
            <Col md="3">
              <h3 className="title">Follow us:</h3>
              <div className="btn-wrapper profile text-left">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://twitter.com/creativetim"
                  id="tooltip39661217"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip39661217">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip206037619"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip206037619">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="https://dribbble.com/creativetim"
                  id="tooltip750293512"
                  target="_blank"
                >
                  <i className="fab fa-dribbble" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip750293512">
                  Follow us
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
