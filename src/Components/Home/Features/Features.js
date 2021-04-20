import React from 'react';
import './Features.css';
import Registration from '../../Images/Registration.png';
import Promotion from '../../Images/Promotion.png';
import Community from '../../Images/Community.png';
import Operations from '../../Images/Operations.png';
import FeatureDetail from '../FeatureDetail/FeatureDetail';

const featureData = [
    {
        title: 'Registration',
        image: Registration
    },
    {
        title: 'Promotion',
        image: Promotion
    },
    {
        title: 'Community',
        image: Community
    },
    {
        title: 'Operations',
        image: Operations
    }
]

const Features = () => {
    return (
        <section className="feature-container mt-5">
            <h2 className="text-uppercase fw-bold">Sit back while we create the experience of a lifetime</h2>
            <h3 className="mt-3">Our Features</h3>
            <div className="d-flex justify-content-center">
                <div className="row mt-3">
                    {
                        featureData.map(feature => <FeatureDetail feature={feature}></FeatureDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;