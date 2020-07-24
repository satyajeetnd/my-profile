import React from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import profilePic from '../profile_pic.png'

class Header extends React.Component {
    constructor(props) {
       super(props);
       
       this.toggle = this.toggle.bind(this);
       this.state = {
           isOpen: false
       };
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <img src={profilePic} className="profile-pic" alt="Satyajeet Desale"/>
                        <span>Satyajeet Desale</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/profile/">Profile</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>        
        );
    }
}

export default Header;