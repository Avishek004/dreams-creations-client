import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import SideBar from '../../Dashboard/SideBar/SideBar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([]);

    console.log(loggedInUser);

    useEffect(() => {
        fetch(`https://protected-basin-55412.herokuapp.com/bookingList?email=` + loggedInUser.email)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className="row w-100">
            <SideBar />
            <div className="col-md-10">
                <Table responsive="sm md lg xl">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Service Name</th>
                            <th>Service Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        bookings.map(booking => <tbody>
                            <tr>
                                <td><img src={booking.image} alt="" /></td>
                                <td>{booking.name}</td>
                                <td>{booking.price}</td>
                                <td>On Going</td>
                            </tr>
                        </tbody>)
                    }
                </Table>
            </div>
        </div>
    );
};

export default BookingList;