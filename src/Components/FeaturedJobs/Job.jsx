

const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="border rounded-2xl mb-6 py-5 px-4">
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={logo} alt="logo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded-lg border-pi">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded-lg border-pi ml-2">{job_type}</button>
                    </div>
                    <div className="card-actions ">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;