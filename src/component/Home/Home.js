import React from 'react';
import Activity from '../Activity/Activity';

const Home = () => {

    const activity = ['Animal-Shelter', 'Clearn-Park', 'BabySit', 'Extra-Volunteer', 'Vote-Register']
    return (
        <div className='home'>
            {activity.map(activity => <Activity activity={activity}></Activity>)}
        </div>
    );
};

export default Home;