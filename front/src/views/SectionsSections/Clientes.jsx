import React from "react";
// reactstrap components
import { Row, Col } from "reactstrap";
import MultiItemCarousel from "./MultiClient";
import { items2 } from "../../data/clientesCarousel.js"



export default function Clientes() {


  return (
    <>
    
      <div className="cd-section" >
        {/* ********* TESTIMONIALS 2 ********* */}
        <div className="testimonials-2 ">
          <div className="w-100 px-4 ">
            <Row >
              <Col className="ml-auto mr-auto text-center mb-2" md="12">
                <h2 className=" mb-5">Han confiado en nuestro trabajo.</h2>
              </Col>
            </Row>
            <div className="space-50" />

            <Row className=" justify-content-center">
              <Col md="10" className="justify-content-center">
                <MultiItemCarousel items={items2} itemsPerPage={4} />
              </Col>
            </Row>
          </div>
        </div>
        {/* ********* END TESTIMONIALS 2 ********* */}
      </div>
    </>
  );
}
