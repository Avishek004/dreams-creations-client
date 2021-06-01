import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderMain from '../../Images/headerMain.jpg';

const MainHeader = () => {
    return (
        <Container>
            <div className="row d-flex align-items-center" >
                <div className="col-md-5 col-sm-6 col-12">
                    <img src={HeaderMain} alt="" className="img-fluid" />
                </div>
                <div className="col-md-7 col-sm-6 col-12 text-white">
                    <h1 className="text-uppercase">Life is an Event. Make it Memorable.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, similique?</p>
                    <button className="btn btn-primary">GET US</button>
                </div>
            </div>
        </Container>
    );
};

export default MainHeader;