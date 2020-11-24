import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Header = () => {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Example Application</NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink href='/'>React Class example</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/bootstrap-example'>Reactstrap and hooks example</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;
