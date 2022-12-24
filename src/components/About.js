import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
  return (
    <section className="about">
      <Container fluid>
        <Row>
          <Col lg={6}>


          </Col>
          <Col lg={6}>
                <span className="dividing-line2"></span>
                <div>
                    <p>
                        1.About Me <br />
                        2.Skills <br />
                        3.Projects <br />
                        4.Design <br />
                    </p>
                </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};
