
import React from "react";

import {
  Button,
  Container,
} from "reactstrap";
import Aurislogo01 from "assets/img/auris/Auris-logo01-nbg-sm2.png"

const scrollPage = (e, id) => {
  e.preventDefault();
  if (document.getElementById(id) !== null) {
    document.getElementById(id).scrollIntoView();
  }
};

export default function AurisFooter() {
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container>
          <a
            className="footer-brand"
            onClick={(e) => scrollPage(e, "aurisNavbar")}
          >
            <span><img src={Aurislogo01}/></span>
          </a>
          <ul className="pull-center">
            <li>
              <a onClick={(e) => scrollPage(e, "nosotros")}>
                Nosotros
              </a>
            </li>
            <li>
              <a onClick={(e) => scrollPage(e, "testimonials")}>
                clientes
              </a>
            </li>
            <li>
              <a
                onClick={(e) => scrollPage(e, "proyectos")}
                className="ml-1"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                onClick={(e) => scrollPage(e, "contacto")}
                className="ml-1"
              >
                Contacto
              </a>
            </li>
          </ul>
          <ul className="social-buttons pull-right">
            <li>
              <Button
                className="btn-icon btn-neutral"
                color="link"
                href="#"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
            </li>
            <li>
              <Button
                className="btn-icon btn-neutral ml-1"
                color="link"
                href="#"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </Button>
            </li>
          </ul>
        </Container>
      </footer>
    </>
  );
}
