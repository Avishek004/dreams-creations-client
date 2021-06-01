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
        <div className="service-container">
            <Container>
                <div className="text-center p-5">
                    <h3>Our Services</h3>
                    <div className="row d-flex justify-content-center py-5">
                        {
                            services.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
                        }
                    </div>
                    <h4>Your vision. Our innovation. Event solutions.</h4>
                </div>
            </Container>
        </div>
    );
};

export default Services;