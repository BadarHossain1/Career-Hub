import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../Utility/localStorage";


//Explain the code below
//This function is used to display the job details
//It takes in no parameter
//It gets the job details from the local storage
//It gets the id from the url
//It converts the id to an integer
//It finds the job with the id from the jobs
//It returns the job details
//It has a button that calls the handleApplyJobs function when clicked
//It returns the job details

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams(); // get the id from the url. UseParams is a hook that returns an object of key/value pairs of URL parameters which in short means it returns the id of the job from the url that is clicked
    console.log(id, jobs)
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job)
    const handleApplyJobs = () => {
        saveJobApplication(id)
    }
    
    return (
        <div>
            <h2>Job Details of {id} </h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Job Description</h2>
                </div>
                <div className="border ">
                    <h2 className="text-2xl">Side Things</h2>
                    <button onClick={handleApplyJobs} className="btn btn-primary">Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;