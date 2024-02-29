import { Col, Container, ListGroup, Row } from "react-bootstrap";
import Adopted from "../elements/Adopted";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <Container style={{ marginTop: "8%" }}>
      <Row className="mt-5">
        <Col xs={2} className="brounded p-4 m-3 glassmorph fs-small">
          <div
            className="overflow-hidden mx-auto mb-5 rounded rounded-circle"
            style={{ width: "150px", height: "150px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1520423465871-0866049020b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="your-profile-pic"
              width={"100%"}
            />
          </div>
          <ListGroup>
            <ListGroup.Item>Birthday:18/03/1990</ListGroup.Item>
            <ListGroup.Item>User name: Lisa</ListGroup.Item>
            <ListGroup.Item>Email: lisa@test.com</ListGroup.Item>
            <ListGroup.Item>
              Password: <span>******</span>
            </ListGroup.Item>
          </ListGroup>
          <hr />
          <Link>Change Password</Link> <br />
          <Link>Delete account</Link>
        </Col>
        <Col
          xs={7}
          className="glassmorph rounded p-4 m-3"
          style={{ zIndex: "10" }}
        >
          <div>
            <h3 className="mt-3 ms-3"> On your Tree:</h3>
            <Row className="d-flex mt-5 mx-auto">
              <Adopted top={"-10%"} left={"-15%"} />
            </Row>
          </div>
          <div>
            <h3 className="mt-5 ms-3">
              Your last visit: <span className="fw-normal">11/09/2018</span>
            </h3>
            {/* chart */}
          </div>
        </Col>
        <Col xs={2} className="glassmorph rounded p-4 m-3 fs-small">
          <p>Your visit:</p>
          <p className="m-0">15/12/2018</p>
          <p className="m-0">11/09/2018</p>
          <p className="m-0">01/09/2015</p>
          <p className="m-0">11/09/2013</p>
          <p className="m-0">03/04/2008</p>
          <hr />
          <ListGroup>
            <ListGroup.Item>Make a donation</ListGroup.Item>
            <ListGroup.Item>Start an adoption</ListGroup.Item>
            <ListGroup.Item>Take a look to the park</ListGroup.Item>
            <ListGroup.Item>Book next visit</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
