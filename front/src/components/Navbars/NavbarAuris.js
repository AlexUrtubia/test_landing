import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Dropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Aurislogo01 from "assets/img/auris/Auris-logo01-nbg-sm2.png"


export default function NavbarAuris() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");  
  const [isOpen, updateIsOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor("#000000");
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor("navbar-transparent");
    }
  };

  const scrollPage = (e, id) => {
    e.preventDefault();
    if (document.getElementById(id) !== null) {
      document.getElementById(id).scrollIntoView();
    }
  };


  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/home" tag={Link} id="tooltip6619950104">
              <span><img src={Aurislogo01}/></span>
            </NavbarBrand>
            <button className="navbar-toggler" id="navigation">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#navigation">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <span><img src={Aurislogo01}/></span>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button className="navbar-toggler" id="navigation">
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="mx-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={(e) => scrollPage(e, "aurisNavbar")}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={(e) => scrollPage(e, "nosotros")}>
                  Nosotros
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={(e) => scrollPage(e, "testimonials")}>
                  Clientes
                </NavLink>
              </NavItem>
              <Dropdown nav
                onMouseOver={() => updateIsOpen(true)}
                onFocus={() => updateIsOpen(true)}
                onMouseLeave={() => updateIsOpen(false)}
                onBlur={() => updateIsOpen(false)}
                toggle={() => updateIsOpen(!isOpen)}
                isOpen={isOpen}>
                <DropdownToggle  caret color="default" nav>
                    <span onClick={(e) => scrollPage(e, "proyectos")}>Proyectos</span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons" >
                  <DropdownItem to="/proyectos/glaciares" tag={Link}>
                    <i className="tim-icons icon-paper" />
                    Glaciares
                  </DropdownItem>
                  <DropdownItem to="/presentation" tag={Link}>
                    <i className="tim-icons icon-bullet-list-67" />
                    Armada
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/overview?ref=blkdspr-pages-navbar"
                    target="_blank"
                  >
                    <i className="tim-icons icon-book-bookmark" />
                    Lumínica
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <NavLink href="#pablo" onClick={(e) => scrollPage(e, "contacto")}>
                  Contacto
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="nav navbar-right" navbar>
              <NavItem>
                <NavLink href="#" target="_blank">
                  <i className="fab fa-linkedin" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}
