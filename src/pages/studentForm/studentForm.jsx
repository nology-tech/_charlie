import React from 'react';
import studentData from '../../data/studentForm';
import {useForm} from "react-hook-form";

const StudentForm = () => {
    const {register} = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {}
        formData.forEach((value, key) => (data[key] = value));
        console.log(JSON.stringify(data));
        studentData.push(JSON.stringify(data));
        console.log('this is the student data object:', studentData);
    }


    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                ('#blah')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    return (
        <>
        <div className="row text-center">
            <form className="row" onSubmit={handleSubmit}>
  {/*               <div className="col-6"> 
                    <div className="col-md-10">                
                        <label htmlFor="">First Name</label>
                        <input className="form-control" type="text" {...register("firstName")} id="firstName" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="">Last Name</label>
                        <input type="text" {...register("lastName")} id="lastName" />
                        </div>
                    <div className="col-md-12"> 
                        <label htmlFor="">Enrolled On</label>
                        <select id="enrolled-course" {...register("enrolled-course")}>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>
                        </div>
                    <div className="col-md-12"> 
                        <label htmlFor="">Github Account</label>
                        <input type="text" {...register("github-account")} id="github-account" />
                        </div>
                    <div className="col-md-12"> 
                        <label htmlFor="">Portfolio Link</label>
                        <input type="text" {...register("portfolio-link")} id="portfolio-link" />
                        </div>
                </div>
                <div className="col-6">
                    <div className="col-md-12">                
                    <span class="btn btn-file">Upload<input label="upload" type="file" /></span>
                    </div>  
                </div>
                <div className="col-12">
                    <input type="submit" value="Save" /> */}
                    <input type='file' onchange={readURL} />
                <img id="blah" src="http://placehold.it/180" alt="your image" />
              {/*   </div> */}
            </form>
        </div>
        </>
    )
}

export default StudentForm;
