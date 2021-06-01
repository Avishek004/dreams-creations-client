import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { Container } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://protected-basin-55412.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="services-container text-center pt-5">
            <Container>
                <h3>Our Services</h3>
                <div className="d-flex justify-content-center m-5">
                    <div className="row">
                        {
                            services.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
                        }
                    </div>
                </div>
                <h4>Your vision. Our innovation. Event solutions.</h4>
            </Container>
        </div>
    );
};

export default Services;