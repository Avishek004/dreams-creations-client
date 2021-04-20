import React from 'react';
import HeaderMain from '../../Images/headerMain.jpg';

const MainHeader = () => {
    return (
        <main style={{ height: '730px' }} className="row d-flex align-items-center w-100" >
            <div className="col-md-4 offset-md-1">
                <img src={HeaderMain} alt="" className="img-fluid" style={{ height: '600px' }} />
            </div>
            <div className="col-md-7 text-white">
                <h1 className="text-uppercase">Life is an Event. Make it Memorable.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, similique?</p>
                <button className="btn btn-primary">GET US</button>
            </div>
        </main>
    );
};

export default MainHeader;