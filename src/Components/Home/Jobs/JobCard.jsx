import React from 'react';

const JobCard = ({jobInfo}) => {
    const {company_logo, title} = jobInfo;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={company_logo}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;