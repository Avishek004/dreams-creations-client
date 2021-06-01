import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://protected-basin-55412.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data.slice(0, 6)))
    }, [])

    return (
        <section className="review-container">
            <Container>
                <div className="text-center p-5">
                    <h1>FeedBack From Clients about our service</h1>
                    <div className="row d-flex justify-content-center py-5">
                        {
                            reviews.map(reviewData => <Review key={reviewData._id} reviewData={reviewData}></Review>)
                        }
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Reviews;