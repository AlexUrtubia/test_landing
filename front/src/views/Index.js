import React from "react";

import ColorNavbar from "components/Navbars/ColorNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import classnames from "classnames";

import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupText,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledCollapse,
} from "reactstrap";
import NavbarAuris from "components/Navbars/NavbarAuris";

export default function Index() {
  const wrapper = React.useRef(null);
  const [emailContact1Focus, setEmailContact1Focus] = React.useState(false);
  const [firstNameContact1Focus, setFirstNameContact1Focus] =
    React.useState(false);
  const [lastNameContact1Focus, setLastNameContact1Focus] =
    React.useState(false);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("index-page");
    // document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("index-page");
      // document.body.classList.remove("landing-page");
    };
  }, []);

  return (
    <>
      <NavbarAuris />
      <div className="wrapper" ref={wrapper}>
        <div className="main">
        <IndexHeader />
          <section className="section section-lg">
            <section className="section">
              <div className="features-3">
                <img
                  alt="..."
                  className="path"
                  src={require("assets/img/path4.png")}
                />
                <Container fluid>
                  <Row>
                    <Col className="mr-auto ml-auto" md="6">
                      <h1 className="title">Trello lets you work more.</h1>
                      <h4 className="description">
                        Trello’s boards, lists, and cards enable you to organize
                        and prioritize your projects in a fun, flexible and
                        rewarding way.
                      </h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto" md="5">
                      <div className="info info-horizontal">
                        <div className="icon icon-success">
                          <img
                            alt="..."
                            className="bg-blob"
                            src={require("assets/img/feature-blob/success.png")}
                          />
                          <i className="tim-icons icon-html5" />
                        </div>
                        <div className="description">
                          <h3 className="info-title">For Developers</h3>
                          <p>
                            The moment you use Black Kit, you know you’ve never
                            felt anything like it. With a single use, this
                            powerfull UI Kit lets you do more than ever before.
                          </p>
                          <Button
                            className="btn-link"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Explore now{" "}
                            <i className="tim-icons icon-minimal-right" />
                          </Button>
                        </div>
                      </div>
                    </Col>
                    <Col className="mr-auto" md="5">
                      <div className="info info-horizontal">
                        <div className="icon icon-warning">
                          <img
                            alt="..."
                            className="bg-blob"
                            src={require("assets/img/feature-blob/warning.png")}
                          />
                          <i className="tim-icons icon-heart-2" />
                        </div>
                        <div className="description">
                          <h3 className="info-title">For Designers</h3>
                          <p>
                            The moment you use Black Kit, you know you’ve never
                            felt anything like it. With a single use, this
                            powerfull UI Kit lets you do more than ever before.
                          </p>
                          <Button
                            className="btn-link"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Explore now{" "}
                            <i className="tim-icons icon-minimal-right" />
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto" md="5">
                      <div className="info info-horizontal">
                        <div className="icon icon-danger">
                          <img
                            alt="..."
                            className="bg-blob"
                            src={require("assets/img/feature-blob/danger.png")}
                          />
                          <i className="tim-icons icon-chart-bar-32" />
                        </div>
                        <div className="description">
                          <h3 className="info-title">For Bootstrap Lovers</h3>
                          <p>
                            The moment you use Black Kit, you know you’ve never
                            felt anything like it. With a single use, this
                            powerfull UI Kit lets you do more than ever before.
                          </p>
                          <Button
                            className="btn-link"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Explore now{" "}
                            <i className="tim-icons icon-minimal-right" />
                          </Button>
                        </div>
                      </div>
                    </Col>
                    <Col className="mr-auto" md="5">
                      <div className="info info-horizontal">
                        <div className="icon icon-info">
                          <img
                            alt="..."
                            className="bg-blob"
                            src={require("assets/img/feature-blob/info.png")}
                          />
                          <i className="tim-icons icon-paper" />
                        </div>
                        <div className="description">
                          <h3 className="info-title">
                            Documentation{" "}
                            <Badge color="info" pill>
                              v2.0
                            </Badge>
                          </h3>
                          <p>
                            The moment you use Black Kit, you know you’ve never
                            felt anything like it. With a single use, this
                            powerfull UI Kit lets you do more than ever before.
                          </p>
                          <Button
                            className="btn-link"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Explore now{" "}
                            <i className="tim-icons icon-minimal-right" />
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </section>
          </section>
          {/* ********* PROJECTS 3 ********* */}
          <section className="section section-lg">
            <div className="projects-3">
              <Container>
                <img
                  alt="..."
                  className="path2"
                  src={require("assets/img/path2.png")}
                />
                <img
                  alt="..."
                  className="path3"
                  src={require("assets/img/path5.png")}
                />
                <Row>
                  <Col className="ml-auto mr-auto text-center mb-3" md="8">
                    <h6 className="category text-muted">Nuestro trabajo</h6>
                    <h2 className="title mt-0">
                      Algunos de nuestros proyectos
                    </h2>
                  </Col>
                </Row>
                <div className="space-50" />
                <Row>
                  <Col md="6">
                    <Card className="card-blog card-plain">
                      <CardHeader>
                        <h2 className="title">Passions</h2>
                        <Badge color="danger" className="mr-1">
                          Methods
                        </Badge>
                        <Badge color="info">Purposes</Badge>
                      </CardHeader>
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img rounded img-raised"
                            src={require("assets/img/card-blog2.jpg")}
                          />
                        </a>
                      </div>
                      <CardFooter className="text-left">
                        <div className="author">
                          <Button
                            className="btn-round btn-simple"
                            color="primary"
                          >
                            <i className="tim-icons icon-triangle-right-17" />
                            View project details
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="card-blog card-plain">
                      <CardHeader>
                        <h2 className="title">Habits</h2>
                        <Badge color="success">Informations</Badge>
                      </CardHeader>
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img rounded img-raised"
                            src={require("assets/img/chester-wade.jpg")}
                          />
                        </a>
                      </div>
                      <CardFooter className="text-left">
                        <div className="author">
                          <Button
                            className="btn-round btn-simple"
                            color="success"
                          >
                            Find out more
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
                <div className="space-50" />
                <Row>
                  <Col md="6">
                    <Card className="card-blog card-plain">
                      <CardHeader>
                        <h2 className="title">Sport</h2>
                        <Badge color="warning" className="mr-1">
                          Healthy
                        </Badge>
                        <Badge color="primary">Young</Badge>
                      </CardHeader>
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img rounded img-raised"
                            src={require("assets/img/fabien-bazanegue.jpg")}
                          />
                        </a>
                      </div>
                      <CardFooter className="text-left">
                        <div className="author">
                          <Button
                            className="btn-round btn-simple"
                            color="warning"
                          >
                            Read more
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="card-blog card-plain">
                      <CardHeader>
                        <h2 className="title">Nights</h2>
                        <Badge color="success" className="mr-1">
                          City
                        </Badge>
                        <Badge color="info" className="mr-1">
                          Urban
                        </Badge>
                        <Badge color="warning">Traffic</Badge>
                      </CardHeader>
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img rounded img-raised"
                            src={require("assets/img/mark-finn.jpg")}
                          />
                        </a>
                      </div>
                      <CardFooter className="text-left">
                        <div className="author">
                          <Button className="btn-round btn-simple" color="info">
                            <i className="tim-icons icon-minimal-right" />
                            Go to page
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
          {/* ********* CONTACT US 1 ********* */}
          <div
            className="contactus-1 section-image mb-5"
            style={
              {
                // backgroundImage: "url(" + require("assets/img/contact1.jpg") + ")",
              }
            }
          >
            <Container className="mb-5">
              <Row>
                <Col className="ml-auto mr-auto text-center mb-5" md="8">
                  <h2 className="title mt-0">Contáctenos</h2>
                </Col>
              </Row>
              <Row>
                <Col md="5">
                  <h2 className="title">Get in Touch</h2>
                  <h4 className="description">
                    You need more information? Check what other persons are
                    saying about our product. They are very happy with their
                    purchase.
                  </h4>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-square-pin" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Find us at the office</h4>
                      <p className="description">
                        Bld Mihail Kogalniceanu, nr. 8, <br />
                        7652 Bucharest, <br />
                        Romania
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p className="description">
                        Michael Jordan <br />
                        +40 762 321 762 <br />
                        Mon - Fri, 8:00-22:00
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="5">
                  <Card className="card-contact card-raised">
                    <Form id="contact-form-2" method="post" role="form">
                      <CardHeader className="text-center">
                        <CardTitle tag="h4">Contact Us</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col md="6">
                            <label>First name</label>
                            <InputGroup
                              className={classnames({
                                "input-group-focus": firstNameContact1Focus,
                              })}
                            >
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                              <Input
                                aria-label="First Name..."
                                placeholder="First Name..."
                                type="text"
                                onFocus={(e) => setFirstNameContact1Focus(true)}
                                onBlur={(e) => setFirstNameContact1Focus(false)}
                              />
                            </InputGroup>
                          </Col>
                          <Col className="pl-2" md="6">
                            <FormGroup>
                              <label>Last name</label>
                              <InputGroup
                                className={classnames({
                                  "input-group-focus": lastNameContact1Focus,
                                })}
                              >
                                <InputGroupText>
                                  <i className="tim-icons icon-caps-small" />
                                </InputGroupText>
                                <Input
                                  aria-label="Last Name..."
                                  placeholder="Last Name..."
                                  type="text"
                                  onFocus={(e) =>
                                    setLastNameContact1Focus(true)
                                  }
                                  onBlur={(e) =>
                                    setLastNameContact1Focus(false)
                                  }
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                        <FormGroup>
                          <label>Email address</label>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": emailContact1Focus,
                            })}
                          >
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                            <Input
                              placeholder="Email Here..."
                              type="text"
                              onFocus={(e) => setEmailContact1Focus(true)}
                              onBlur={(e) => setEmailContact1Focus(false)}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <label>Your message</label>
                          <Input
                            id="message-2"
                            name="message"
                            rows="6"
                            type="textarea"
                          />
                        </FormGroup>
                        <Row>
                          <Col md="6">
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                                I'm not a robot
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <Button
                              className="btn-round pull-right"
                              color="primary"
                            >
                              Send Message
                            </Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END CONTACT US 1 ********* */}
        </div>
        <DemoFooter />
      </div>
    </>
  );
}
