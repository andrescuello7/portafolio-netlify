import { Container, Navbar, Nav } from "react-bootstrap";
import HomeController from "../screens_controllers/home_screen_controller";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="navbar_font_family">
          <Nav.Link href="#home" className="title_navbar">
            Andres Cuello
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#jobs">Jobs</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
