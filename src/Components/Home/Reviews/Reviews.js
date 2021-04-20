import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://protected-basin-55412.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="review-container text-center p-5">
            <h1>FeedBack From Clients about our service</h1>
            <div className="d-flex justify-content-center m-5 ">
                <div className="row w-100 pb-5">
                    {
                        reviews.map(reviewData => <Review reviewData={reviewData}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;