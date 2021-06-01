import React from 'react';
import './Header.css';
import HeaderTop from '../HeaderTop/HeaderTop';
import MainHeader from '../MainHeader/MainHeader';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header className="header-container">
            <Container>
                <HeaderTop />
                <MainHeader />
            </Container>
        </header>
    );
};

export default Header;