import React, {  } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {


    return (
        <div className="sticky-top"  style={{fontFamily:'Ubuntu' , }}>
            <Navbar bg="dark" collapseOnSelect expand="lg" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ fontSize: "25px", color: "black", background: "#fff" }}className="ml-auto" > <FontAwesomeIcon icon={faBars} /> </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav style={ {textAlign:"center"}} className="ml-auto">

                        <Nav.Link
                            style={{ color: '#fff', fontWeight: '600' }}
                            className="nav-link pl-4 pr-4"
                        >
                            <Link to="/home" style={{ color: "#fff" }}>Home</Link>
                        </Nav.Link>


                        <Nav.Link to="/appointment" style={{ color: '#101010', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                            <Link to="/appointment" style={{ color: "#fff" }}>Appointment</Link>
                        </Nav.Link>

                        <Nav.Link to="/dashBoard" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                            <Link to="/dashBoard" style={{ color: "#fff" }}>Dashboard</Link>
                        </Nav.Link>
                        <Nav.Link to="/admin" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                        <Link to="/comingSoon" style={{ color: "#fff" }}>Prescriptions</Link>
                        </Nav.Link>
                        <Nav.Link to="/login" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                        <Link to="/login" style={{ color: "#fff" }}>Login</Link>
                        </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};


export default Header;





{/* <Link to="/login"><Button style={{ marginLeft: '50px', width: '80px', height: '40px', borderRadius: '10px', fontWeight: '600' }} variant="warning">
    Login</Button>
</Link> */}