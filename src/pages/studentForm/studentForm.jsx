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

    const previewImage = (input) =>{
        /*if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#student-thumbanil').attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }*/
    }

    return (
        <>
        <div className="row text-center form__add-student">
            <form class="row" onSubmit={handleSubmit}>
                <div className="col-6"> 
                    <div className="col-md-12">                
                        <label class="" htmlFor="">First Name</label>
                        <input type="text" {...register("firstName")} id="firstName" />
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

                        <label htmlFor="">Student Thumbnail</label>
                        <img id="student-thumbanil" src="http://placehold.it/180" alt="" />
                        <input type="file" name="thumbnail-upload" id="thumbnail-upload" onChange={previewImage} />

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
