import { useState, React } from 'react'
import {
    Nav, Navbar, Container, NavDropdown,
    Form, Offcanvas, Button, Collapse
} from 'react-bootstrap'
import './styles/navigation.css'

export default function Sample() {

    const [open, setOpen] = useState(false);

    return (
        <div className='navigation'>
            <Navbar expand="lg" variant='dark' bg='dark' className='first-nav'>
                <Container fluid className='navigation-first'>

                    <Nav
                        className="left flex me-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="OFFICE" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action2">
                            <div className="alumni">
                                <span>alumni</span>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#action3">
                            <div className="media">
                                <span>media center</span>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#action3">
                            <div className="subscribe">
                                <span>subscribe</span>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#action3">
                            <div className="contact">
                                <span>contact</span>
                            </div>
                        </Nav.Link>

                    </Nav>
                    <div className="right flex d-flex">
                        <Nav>
                            <Nav.Link href="#action3">
                                <div className="contact">
                                    <span>GLOBAL</span>
                                </div>
                            </Nav.Link>
                        </Nav>

                        <NavDropdown title="ENGLISH" id="navbarScrollingDropdown" className='d-flex me-2'>
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="RED FOLDER" id="navbarScrollingDropdown" className='d-flex me-2'>
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Container>
            </Navbar>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3 second-nav ">
                    <Container fluid >

                        <Navbar.Brand href="#" className='flex'>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <div className="logo">
                                <h3>BAIN & COMPANY</h3>
                            </div></Navbar.Brand>
                        <Navbar >
                            <Nav
                                className=" navigate me-auto my-2 my-lg-0 "
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">industries</Nav.Link>
                                <Nav.Link href="#action2">consulting services</Nav.Link>
                                <Nav.Link href="#action2">digital</Nav.Link>
                                <Nav.Link href="#action2">insights</Nav.Link>
                                <Nav.Link href="#action2">about</Nav.Link>
                                <Nav.Link href="#action2">careers</Nav.Link>

                            </Nav>

                            <Button variant="outline-success"
                                className='right'
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}>Explore</Button>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                    <Form className="d-flex" >
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                    </Form>
                                </div>
                            </Collapse>

                        </Navbar>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    );
}
