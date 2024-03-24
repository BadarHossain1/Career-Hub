import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


const AppliedJobs = () => {

    const jobs = useLoaderData();
    useEffect(() => ,[])

    return (
        <div>
            <h1>Jobs I applied</h1>
        </div>
    );
};

export default AppliedJobs;