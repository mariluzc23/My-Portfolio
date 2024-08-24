import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaGithub } from "react-icons/fa";

function PortfolioNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">Professional Summary</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#javascript-projects">JavaScript Projects</NavDropdown.Item>
                <NavDropdown.Item href="#java-projects">Java Projects</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://github.com/mariluzc23" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavBar;