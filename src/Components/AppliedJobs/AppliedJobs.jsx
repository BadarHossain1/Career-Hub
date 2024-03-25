import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStorage";
import { list } from "postcss";


const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = (filter) =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)

            

        }
        else if(filter==='remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);

        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    // Explain the useEffect below
    // This function is used to display the jobs that have been applied for
    // It takes in no parameter
    // It gets the stored job ids from the local storage
    // It checks if the jobs length is greater than 0
    // It creates an empty array called jobsApplied
    // It loops through the stored job ids
    // It finds the job with the id from the jobs
    // It pushes the job to the jobsApplied array
    // It sets the applied jobs to the jobsApplied array
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find((job) => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)

            // console.log(jobs, storedJobIds, jobsApplied);
        }
    }, [])

    return (
        <div>
            <h2 className="text-2xl">I applied {appliedJobs.length} jobs</h2>
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </div>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}><span>{job.job_title} {job.company_name} </span></li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;