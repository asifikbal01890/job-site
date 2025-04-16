import React from 'react';
import Banner from './Banner/Banner';
import Jobs from './Jobs/Jobs';
import AddJobs from './AddJobs/AddJobs';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Jobs></Jobs>
           <AddJobs></AddJobs>
        </div>
    );
};

export default Home;