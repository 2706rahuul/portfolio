import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setExpanded(false);

  return (
    <Navbar expanded={expanded} fixed="top" expand="md" className={scrolled ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation" onClick={() => setExpanded(!expanded)}>
          <span></span><span></span><span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Item><Nav.Link as={Link} to="/" onClick={close}><AiOutlineHome /> Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/about" onClick={close}><AiOutlineUser /> Skills &amp; About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/experience" onClick={close}><CgFileDocument /> Experience</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/projects" onClick={close}><AiOutlineFundProjectionScreen /> Projects</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/publications" onClick={close}><AiOutlineFundProjectionScreen /> Publications</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/resume" onClick={close}><CgFileDocument /> Resumes</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
