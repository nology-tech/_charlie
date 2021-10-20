import React, { useState, useEffect } from "react";
//import studentData from '../../data/studentForm';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import Thumb from "assets/images/project-thumbnail.png";
import students from "data/students";

const StudentEditForm = () => {
    const {register, handleSubmit, formState: { errors }, reset } = useForm();
    const history = useHistory();
    const [studentData, setStudentData] = useState({}); 
    const { studentId } = useParams();
    const [studentNameArr, setStudentNameArr] = useState([]);

    const setupStates = (jsonData) => {
        setStudentData(jsonData);
        const studentName = jsonData.studentName.split(" ");
        setStudentNameArr([studentName[0], studentName[studentName.length-1]])
    }

    const fetchStudentData = () => {
        fetch(`http://localhost:8080/students/${studentId}`)
        .then(response => response.json())
        .then(jsonData => {
            setupStates(jsonData);
        })
        .catch(err => console.log("Failed to grab students data"));
    }

    useEffect(fetchStudentData, []); 

    const [{ alt, src }, setImg] = useState({
        src: "https://via.placeholder.com/150",
        alt: "",
    });



    const onSubmit = (data) => {
        console.log(data);
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        fetch(`http://localhost:8080/students/${studentId}`, {
            method: "PUT",
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
        <div className="row mt-4 w-100 my-4 px-4 mx-auto offset-1 form__container">
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <div className="columns col-6">
                    <div className="col-12 mt-4">
                        <label htmlFor="firstName" className="addStudentLabel fw-bold">First Name</label>
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
                        defaultValue={studentNameArr[0]}
                        />
                        {errors.firstName && <div className="text-danger">*Required</div>}
                    </div>

                    <div className="col-12 mt-3">
                        <label htmlFor="lastName" className="addStudentLabel fw-bold">Last Name</label>
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
                        defaultValue = {studentNameArr[1]}
                        ></input> 
                        {errors.lastName && <p className="text-danger">*Required</p>}
                    </div>

                    <div className="col-12 mt-3">
                        <label htmlFor="email" className="addStudentLabel fw-bold">Email</label>
                        <input
                        {...register("email", {
                            required: true
                        })}
                        name="email"
                        className="form-control form__input my-2"
                        type="email"
                        id="email"
                        defaultValue= {studentData.email}
                        />
                        {errors.email && <p className="text-danger">*Required</p>}
                    </div>

                    <div className="col-12 mt-3">
                        <label htmlFor="" className="addStudentLabel fw-bold">Enrolled on</label>
                        <select
                        {...register("enrolledOn", { required: true })}
                        name="enrolledOn"
                        className="form-select form-control form__input  my-2"
                        id="enrolledOn"
                        data-testid="enrolledOn"
                        value = {studentData.enrolledOn}
                        >
                        {/* <option value="default">
                            Select one of the following:
                        </option> */}
                        <option value="Ibiza">Ibiza</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Mariana">Mariana</option>
                        <option value="Florida">Florida</option>
                        </select>
                    </div> 

                    <div className="col-12 mt-3">
                        <label htmlFor="" className="addStudentLabel fw-bold">Enrolled Type</label>
                        <select
                        {...register("enrolledType", { required: true })}
                        name="enrolledType"
                        className="form-select form-control form__input  my-2"
                        id="enrolledType"
                        data-testid="enrolledType"
                        value={studentData.enrolledType}
                        >
                        {/* <option value="default">
                            Select one of the following:
                        </option> */}
                        <option value="Full-Time">Full-Time</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Self-Paced">Self-Paced</option>
                        </select>
                    </div> 
                    
                    <div className="col-12 mt-3">
                        <label htmlFor="githubAccount" className="addStudentLabel fw-bold">Github Account</label>
                        <input
                        {...register("githubAccount", { required: true })}
                        name="githubAccount"
                        className="form-control form__input my-2"
                        type="text"
                        id="githubAccount"
                        data-testid="githubAccount"
                        defaultValue = {studentData.githubAccount}
                        />
                        {errors.githubAccount && <p className="text-danger">*Required</p>}
                    </div>

                    <div className="col-12 mt-3">
                        <label htmlFor="" className="addStudentLabel fw-bold">Portfolio Link</label>
                        <input
                            {...register("portfolioLink", { required: true })}
                            name="portfolioLink"
                            className="form-control form__input my-2"
                            type="text"
                            id="portfolioLink"
                            data-testid="portfolioLink"
                            defaultValue = {studentData.portfolio}
                        />
                        {errors.portfolioLink && <p className="text-danger">*Required</p>}
                    </div>
                </div>
                <div className="columns col-6">
                    <div className="col-12 mt-4">
                        <label htmlFor="studentThumb" className="addStudentLabel  gx-0 row fw-bold">Student Thumbnail</label>
                        <input {...register("studentThumb")}
                        type="file"
                        onChange={readURL}
                        name="studentThumb"
                        id="studentThumb"
                        data-testid="studentThumb"
                        hidden
                        />
                        <img id="studentImage" src={Thumb} alt={Thumb} className="student-thumbnail  gx-0 row my-2" />
                        <label htmlFor="studentThumb" className="btn upload-btn mt-4">
                        Upload
                        </label>
                    </div>
                    <div className="col-12 mt-4">
                        <label className=" addStudentLabel my-3 row gx-0 fw-bold">CV Upload</label>
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
                    <div className="col-12 mt-5 d-flex align-items-end">
                        <input type="reset" className="form__button-cancel" value="Cancel" onClick={handleClick} />
                        <input type="submit" className="form__button-save" value="Save" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default StudentEditForm;
