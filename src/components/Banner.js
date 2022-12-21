import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner">
      <Container fluid>
        <Row>
          <Col lg={1}></Col>
          <Col lg={5}>
            <h1>
              Hi, my name is&nbsp;
            </h1>
            <h1 className="highlight-banner">
              Shiyan
            </h1>
            <h1>
              . <br /> I'm a
            </h1>
            <h1 className="highlight-banner">
            &nbsp;Full Stack&nbsp;
            </h1>
            <h1>
            Software Developer / UI Designer / Architect.
            </h1>
          </Col>
          <Col lg={true}>
                <span className="dividing-line"></span>
                <p>
                    1.About Me <br />
                    2.Skills <br />
                    3.Projects <br />
                    4.Design <br />
                </p>

          </Col>
        </Row>
      </Container>
    </section>
  );
};
