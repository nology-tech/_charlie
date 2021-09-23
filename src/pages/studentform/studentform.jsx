import React, {useState} from 'react';
//import studentData from '../../data/studentForm';
import {useForm} from "react-hook-form";

const StudentForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);
    const [{alt, src}, setImg] = useState({
        src: "placeholder",
        alt: ""
    });

    const FormValues = {
        firstName: '',
        lastName: '',
        enrolledOn: '',
        githubAccount: '',
        portfolioLink: ''
    }
    /*
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {}
        formData.forEach((value, key) => (data[key] = value));
        console.log(JSON.stringify(data));
        studentData.push(JSON.stringify(data));
        console.log('this is the student data object:', studentData);
    }*/

    const onSubmit = (data) =>{
        console.log(data)
    }

    const readURL = (e) => {
        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });    
        }
    }

    return (
        <>
        <div className="row text-center">
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-6"> 
                    <div className="col-md-12">                
                        <label htmlFor="firstName">First Name</label>
                        <input { ...register("firstName", { required: true, maxLength:12 } )} name='firstName' className="form-control" type="text" id="firstName"/>
                        {errors.firstName && <p>This is required</p>}
                    </div>
                    
                    <div className="col-md-12">
                    <label htmlFor="">Last Name</label>
                    <input {...register("lastName", { required: true, maxLength:12 } )} name='lastName' className="form-control" type="text" id="lastName"/>
                    </div>

                    <div className="col-md-12"> 
                        <label htmlFor="">Enrolled on</label>
                        <select {...register("enrolledOn")} name='enrolledOn' className="form-select form-control" id="enrolledOn">
                        <option defaultValue>Please select one of the following...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>

                    <div className="col-md-12"> 
                        <label htmlFor="">Github Account</label>
                        <input {...register("githubAccount")} name='githubAccount' className="form-control" type="text" id="github-account"/>
                    </div>

                    <div className="col-md-12"> 
                        <label htmlFor="">Portfolio Link</label>
                        <input {...register("portfolioLink")} name='portfolioLink' className="form-control" type="text" id="portfolio-link" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="col-md-12">
                        <label htmlFor="">Student Thumbnail</label>                        
                        <input type='file' onChange={readURL} />                    
                        <img id="studentImage"  src={src} alt={alt} />

                        <label htmlFor="">CV Upload</label>
                        <input type="file" name="cv-upload" id="cv-upload" />
                        <input type="submit" value="Save" />
                    </div>  
                </div>
            </form>
        </div>
        </>
    )
}

export default StudentForm;
