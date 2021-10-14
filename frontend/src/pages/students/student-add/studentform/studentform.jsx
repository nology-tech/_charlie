import React, { useState } from "react";
//import studentData from '../../data/studentForm';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const StudentForm = () => {
    const {register, handleSubmit, formState: { errors }, reset } = useForm();
    const history = useHistory();

    console.log(errors);
    const [{ alt, src }, setImg] = useState({
        src: "https://via.placeholder.com/150",
        alt: "",
    });

    const onSubmit = (data) => {
        console.log(data);
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        fetch("http://localhost:8080/students/", {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                studentName: `${data.firstName} ${data.lastName}`,
                enrolledOn: data.enrolledOn,
                githubAccount: data.githubAccount,
                portfolio: data.portfolioLink,
                resume: "sample.pdf",
                enrolledType: data.enrolledType,
                pictureLink: "https://nology.io/wp-content/uploads/2019/12/NOLOGY8.png",
                email: data.email
            })
        })
        .then((response) => response.json());
        
        history.goBack();
    };
    
    const handleClick = () => {
        reset();
        history.goBack();
    };

    const readURL = (e) => {
        if (e.target.files[0]) {
        setImg({
            src: URL.createObjectURL(e.target.files[0]),
            alt: e.target.files[0].name,
        });
        }
    };

    return (
        <div className="row mt-4 my-4 px-4 mx-auto offset-1 form__container">
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6">
            <div className="col-12 mt-4">
                <label htmlFor="firstName">First Name</label>
                <input
                {...register("firstName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                })}
                name="firstName"
                className="form-control form__input  my-2"
                type="text"
                id="firstName"
                data-testid="firstName"
                />
                {errors.firstName && <div className="text-danger">*Required</div>}
            </div>

            <div className="col-12 mt-3">
                <label htmlFor="lastName">Last Name</label>
                <input
                {...register("lastName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                })}
                name="lastName"
                className="form-control form__input my-2"
                type="text"
                id="lastName"
                data-testid="lastName"
                />
                {errors.lastName && <p className="text-danger">*Required</p>}
            </div>

            <div className="col-12 mt-3">
                <label htmlFor="email">Email</label>
                <input
                {...register("email", {
                    required: true
                })}
                name="email"
                className="form-control form__input my-2"
                type="email"
                id="email"
                />
                {errors.email && <p className="text-danger">*Required</p>}
            </div>

            <div className="col-12 mt-3">
                <label htmlFor="">Enrolled on</label>
                <select
                {...register("enrolledOn", { required: true })}
                name="enrolledOn"
                className="form-select form-control form__input  my-2"
                id="enrolledOn"
                data-testid="enrolledOn"
                >
                <option selected="true" value="default">
                    Select one of the following
                </option>
                <option value="ibiza">Ibiza</option>
                <option value="hawaii">Hawaii</option>
                <option value="jersey">Jersey</option>
                </select>
            </div> 

            <div className="col-12 mt-3">
                <label htmlFor="">Enrolled Type</label>
                <select
                {...register("enrolledType", { required: true })}
                name="enrolledType"
                className="form-select form-control form__input  my-2"
                id="enrolledType"
                data-testid="enrolledType"
                >
                <option selected="true" value="default">
                    Select one of the following
                </option>
                <option value="Full-Time">Full Time</option>
                <option value="Corporate">Corporate</option>
                <option value="Self-Paced">Self Paced</option>
                </select>
            </div> 
            
            

            <div className="col-12 mt-3">
                <label htmlFor="githubAccount">Github Account</label>
                <input
                {...register("githubAccount", { required: true })}
                name="githubAccount"
                className="form-control form__input my-2"
                type="text"
                id="githubAccount"
                data-testid="githubAccount"
                />
                {errors.githubAccount && <p className="text-danger">*Required</p>}
            </div>

            <div className="col-12 mt-3">
                <label htmlFor="">Portfolio Link</label>
                <input
                    {...register("portfolioLink", { required: true })}
                    name="portfolioLink"
                    className="form-control form__input my-2"
                    type="text"
                    id="portfolioLink"
                    data-testid="portfolioLink"
                />
                {errors.portfolioLink && <p className="text-danger">*Required</p>}
            </div>
            </div>
            <div className="col-6">
            <div className="col-12 mt-4">
                <label htmlFor="studentThumb">Student Thumbnail</label>
                <input {...register("studentThumb")}
                type="file"
                onChange={readURL}
                name="studentThumb"
                id="studentThumb"
                data-testid="studentThumb"
                hidden
                />
                <img id="studentImage" src={src} alt={alt} className="student-thumbnail my-2" />
                <label htmlFor="studentThumb" className="btn upload-btn mt-4">
                Upload
                </label>
            </div>
            <div className="col-12 mt-4">
                <label className="my-3">CV Upload</label>
                <div>
                    <label htmlFor="cvUpload" className="btn upload-btn mt-2">Upload</label>
                    <input {...register("cvUpload")}
                    type="file"
                    className="btn btn-upload"
                    name="cvUpload"
                    id="cvUpload"
                    data-testid="cvUpload"
                    hidden
                    />
                </div>
            </div>
            <div className="col-12 mt-5">
                <input type="reset" className="btn btn-secondary my-5 mx-2 form__button" value="Cancel" onClick={handleClick} />
                <input type="submit" className="btn btn-primary my-5 form__button" value="Save" />
            </div>
            </div>
        </form>
        </div>
    );
};

export default StudentForm;
