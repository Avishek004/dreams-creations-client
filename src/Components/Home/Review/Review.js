import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Card } from 'react-bootstrap';

const Review = ({ reviewData }) => {

    const { name, image, review, company } = reviewData;

    const ratingStars = {
        size: 30,
        count: 5,
        isHalf: true,
        value: 4,
        color: "black",
        activeColor: "yellow",
        onChange: newValue => {
            console.log(`New value is ${newValue}`);
        }
    };

    return (
        <div className="col-md-4 col-sm-6 col-12 pb-3">
            <Card style={{ height: '750px' }}>
                <Card.Img variant="top" src={image} className="img-fluid" style={{ height: '300px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{company}</Card.Text>
                    <Card.Text>{review}</Card.Text>
                    <Card.Text>Rating: <ReactStars {...ratingStars} /> </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;