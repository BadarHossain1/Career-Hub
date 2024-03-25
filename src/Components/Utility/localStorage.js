const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-applications'); // Here we are getting the job-applications from the local storage
    if(storedJobApplication){
        return JSON.parse(storedJobApplication) // Here we are parsing the storedJobApplication
    }
    return [];
}


//Explain the code below
//This function is used to save the job application to the local storage
//It takes in an id as a parameter
//It gets the stored job application from the local storage
//It checks if the job application exists in the local storage  
//If it does not exist, it pushes the id to the stored job application because the user has applied for the job and storedJobApplication is an array that stores the job applications of the user
//It then sets the job application to the local storage
//It returns the stored job application


const saveJobApplication = id =>{
    const storedJobApplication = getStoredJobApplication();
    const exists = storedJobApplication.find(jobId => jobId === id)
    if(!exists){
        storedJobApplication.push(id)
        localStorage.setItem('job-applications',JSON.stringify(storedJobApplication))
    }
}

export {saveJobApplication, getStoredJobApplication}