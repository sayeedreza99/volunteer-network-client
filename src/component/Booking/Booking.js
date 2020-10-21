import React from 'react';

const Booking = (props) => {
    const { id, img, desc } = props.activities;
    return (
        <div>
            <div>
                <img src={img} alt="img" width="200" height="200" />
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default Booking;