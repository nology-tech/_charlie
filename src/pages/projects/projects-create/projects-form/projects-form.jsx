import React, { useState } from "react";
import { useForm } from "react-hook-form";


const ProjectsForm = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
        <form action="" className="row d-flex flex-row" onSubmit={handleSubmit(onSubmit)}>
            <div className= "col-6">

            <label htmlFor="projectName">Project Name</label>
            <input 
            name= "projectName"
            id= "projectName"
            type="text" 
            ref={register({required: true})}/>
            {errors.projectName && <div className="text-danger">*Required</div>}

            <label htmlFor="" >Language</label>
            <input type="text" ref={register({required: true})}/>

            <label htmlFor="" >Project Brief</label>
            <input type="text" 
            ref={register({required: true})}/>

            <label htmlFor="" >Coaches Tips</label>
            <input type="text" 
            ref={register({required: true})}/>

            </div>
            <div className= "col -6">

            </div>
        </form>
        </div>
    )
}

export default ProjectsForm;
