import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../Utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    console.log(id, jobs)
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

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