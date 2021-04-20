import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://protected-basin-55412.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="services-container text-center mt-5 p-5">
            <h3>Our Services</h3>
            <div className="d-flex justify-content-center m-5">
                <div className="row w-80 m-3 service">
                    {
                        services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
            <h4>Your vision. Our innovation. Event solutions.</h4>
        </div>
    );
};

export default Services;