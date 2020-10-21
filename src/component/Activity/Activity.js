import React from 'react';
import { Link } from 'react-router-dom';
import './Activity.css';

const Activity = (props) => {
    return (
        <div className="container" >
            <div className=" activity-img ">
                <div className=" d-flex row">
                    <div className=" col-md-3" >
                        <h1>{props.activity}</h1>
                        <div className='description'>
                            <Link to='/book'> <button>Click to select</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;