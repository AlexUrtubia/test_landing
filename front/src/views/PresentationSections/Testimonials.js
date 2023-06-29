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
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
const items = [
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={require("assets/img/emily.jpg")}
            />
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            {`"Awesome Design and very well organized code structure! Also, it contains numerous elements using which achieving the perfect or required template can be done with ease. Great job!"`}
          </h5>
          <CardTitle tag="h4">Stefan</CardTitle>
          <h6 className="category text-muted">Web Designer</h6>
          <CardFooter>
            <i className="fa fa-star text-warning" />
            <i className="fa fa-star text-warning ml-1" />
            <i className="fa fa-star text-warning ml-1" />
            <i className="fa fa-star text-warning ml-1" />
            <i className="fa fa-star text-warning ml-1" />
          </CardFooter>
        </CardBody>
      </Card>
    ),
    altText: "",
    caption: "",
    src: "0",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={require("assets/img/christian.jpg")}
            />
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            {`"It looks great and its somewhat futuristics cant wait to use it on a project here in nigeria i'm sure it would put me ahead.. I cant wait to hv enough money to buy ur product."`}
          </h5>
          <CardTitle tag="h4">Mr. Bones</CardTitle>
          <h6 className="category text-muted">Web Designer</h6>
          <CardFooter>
            <i className="fa fa-star text-warning" />
            <i className="fa fa-star text-warning ml-1" />
            <i className="fa fa-star text-warning ml-1" />
            <i className="fa fa-star text-warning ml-1" />
            <i className="fa fa-star text-warning ml-1" />
          </CardFooter>
        </CardBody>
      </Card>
    ),
    altText: "",
    caption: "",
    src: "1",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={require("assets/img/marie.jpg")}
            />
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            {`"Everything is perfect. Codes are really organized. It's easy to edit for my own purposes. It's great that it is built on top of Bootstrap 4."`}{" "}
            <br />
            <br />
          </h5>
          <CardTitle tag="h4">DOĞA</CardTitle>
          <h6 className="category text-muted">Web Developer</h6>
          <CardFooter>
            <i className="fa fa-star text-warning" />
            <i className="fa fa-star text-warning ml-1" />
            <i className="fa fa-star text-warning ml-1" />
            <i className="fa fa-star text-warning ml-1" />
            <i className="fa fa-star text-warning ml-1" />
          </CardFooter>
        </CardBody>
      </Card>
    ),
    altText: "",
    caption: "",
    src: "2",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section section-testimonials">
        <Row>
          <Col className="ml-auto mr-auto text-center" md="6">
            <h1 className="title mb-5">Trusted by 660,000+ People</h1>
            <p className="description">
              The UI Kits, Templates and Dashboards that we've created are used
              by{" "}
              <strong className="text-warning">660,000+ web developers</strong>{" "}
              in over{" "}
              <strong className="text-warning">1,100,000 Web Projects</strong>.
              This is what some of them think:
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto" md={4} xs={6}>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map((item, key) => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={key}
                  >
                    {item.content}
                  </CarouselItem>
                );
              })}
            </Carousel>
          </Col>
          <a
            className="carousel-control-prev"
            data-slide="prev"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              previous();
            }}
            role="button"
          >
            <i className="tim-icons icon-minimal-left" />
          </a>
          <a
            className="carousel-control-next"
            data-slide="next"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              next();
            }}
            role="button"
          >
            <i className="tim-icons icon-minimal-right" />
          </a>
        </Row>
      </div>{" "}
    </>
  );
}
