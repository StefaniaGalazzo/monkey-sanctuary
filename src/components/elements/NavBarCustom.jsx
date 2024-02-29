/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "/logo.png";
import logoutIcon from "../../assets/svg/logout.svg";
import { Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import { unsetToken } from "../../lib/auth";
import { useFetchUser } from "../../lib/authContext";

export default function NavBarCustom() {
  const logout = () => {
    unsetToken();
  };
  const { user, loading } = useFetchUser();

  return (
    <Navbar expand="lg" id="myNav">
      <Container>
        <Navbar.Brand>
          <Link to={"/monkey-sanctuary"}>
            <img src={logo} width={50} alt="logout" title="logout" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-between  align-items-center w-100">
            <Link to={"/monkey-sanctuary"} className="nav-link p-0">
              Monkey Sanctuary
            </Link>
            {!loading && user && (
              <Row className="align-items-center">
                <Col>
                  <Link to={"/monkey-sanctuary/my-tree"}>My Tree</Link>
                </Col>
                <Col>
                  <img
                    src={logoutIcon}
                    width={38}
                    onClick={logout}
                    className="ms-4"
                    alt="logout"
                    title="logout"
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              </Row>
            )}
            {!loading && !user && (
              <NavDropdown title="Log or Sign in" id="basic-nav-dropdown">
                <Link
                  to={"/monkey-sanctuary/authentication"}
                  className="dropdown-item"
                >
                  Log in
                </Link>
                <Link
                  to={"/monkey-sanctuary/register"}
                  className="dropdown-item"
                >
                  Sign in
                </Link>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
