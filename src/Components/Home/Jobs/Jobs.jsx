import React from 'react';
import JobCard from './JobCard';
import { useQuery } from '@tanstack/react-query';

const Jobs = () => {
    const { data:jobsInfo, isLoading, isSuccess } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/jobs')
            return await response.json()
        },
    })
   console.log(isSuccess);
   
    
    return (
        <div className='grid grid-cols-3 gap-6'>
            {isLoading &&
            <span className="loading loading-bars loading-lg"></span>
            }
            {
                !isSuccess&& !isLoading &&
                <h1 className='text-3xl font-bold'>No Data Found</h1>
            }
            {jobsInfo && !isLoading && isSuccess &&
                jobsInfo.map(jobInfo=> <JobCard key={jobInfo._id} jobInfo={jobInfo}></JobCard>)
            }
            
        </div>
    );
};

export default Jobs;