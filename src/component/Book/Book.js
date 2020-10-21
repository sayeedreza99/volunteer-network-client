import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import activities from '../../resource/fakeData';
import Booking from '../Booking/Booking';


const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [activity, setActivity] = useState({
    });

    const handleSubmit = () => {
        console.log('submitted')
    }



    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Hello, {loggedInUser.name}</h1>
            <h1>Volunteer Activity Form: </h1>
            <form onSubmit={handleSubmit}>
                <input className="input-box" name='name' type="text" placeholder='your name' />
                <br />
                <input className="input-box" type="text" name="email" placeholder="your email address" required />
                <br />
                <input className="input-box" type="text" name="activity" placeholder="activity" required />
                <br />
                <input className="input-sign" type="submit" value='submit' />
            </form>
        </div>
    );
};

export default Book;