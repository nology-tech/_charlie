import React, { useState, useEffect } from "react";
//import studentData from '../../data/studentForm';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import Thumb from "assets/images/project-thumbnail.png";

const StudentEditForm = () => {
    const {register, handleSubmit, formState: { errors }, reset } = useForm();
    const history = useHistory();
    const [{ alt, src }, setImg] = useState({
        src: "https://via.placeholder.com/150",
        alt: "",
    });
    const [studentData, setStudentData] = useState({}); 
    const { studentId } = useParams();
    const [studentNameArr, setStudentNameArr] = useState([]);
    const [dropdownData, setDropdownData] = useState([]); 

    const setupStates = (jsonData) => {
        setStudentData(jsonData);
        const studentName = jsonData.studentName.split(" ");
        setStudentNameArr([studentName[0], studentName[studentName.length-1]])
        setDropdownData([jsonData.enrolledOn, jsonData.enrolledType])
    }

    const fetchStudentData = () => {
        fetch(`http://localhost:8080/students/${studentId}`)
        .then(response => response.json())
        .then(jsonData => {
            setupStates(jsonData);
        })
        .catch(err => console.log("Failed to grab students data"));
    }

    useEffect(fetchStudentData, [studentId]); 

    

    const onDelete = (data) => {
        console.log(data);
        if (window.confirm('Are you sure about that? This student will be permanently deleted.')) {
            fetch(`http://localhost:8080/students/${studentId}`, {
                method: "DELETE",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
            })
            .then((response) => response.json());
            history.goBack();
        } else {
            history.goBack();
        }
    };

    const onSubmit = (data) => {
        console.log(data);
        let formName; 
        if (!data.firstName && !data.lastName) {
            formName = studentData.studentName;
        } else {
            formName = `${data.firstName} ${data.lastName}`
        }
        fetch(`http://localhost:8080/students/${studentId}`, {
            method: "PUT",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                studentName: formName,
                enrolledOn: data.enrolledOn || studentData.enrolledOn,
                githubAccount: data.githubAccount || studentData.githubAccount,
                portfolio: data.portfolioLink || studentData.portfolio,
                resume: "sample.pdf",
                enrolledType: data.enrolledType || studentData.enrolledType,
                pictureLink: "https://nology.io/wp-content/uploads/2019/12/NOLOGY8.png",
                email: data.email || studentData.email
                
            })
        })
        .then((response) => global.window.location.href="/students")
        .catch(error => alert(error));
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
        <div className="row mt-3 w-100 my-4 px-4 mx-auto offset-1 form__container pb-3">
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <div className="columns col-6">
                    <div className="col-12 mt-4">
                        <label htmlFor="firstName" className="addStudentLabel fw-bold">First Name</label>
                        <input
                        {...register("firstName", {
                            pattern: /^[A-Za-z]+$/i
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
                        {...register("enrolledOn")}
                        name="enrolledOn"
                        className="form-select form-control form__input  my-2"
                        id="enrolledOn"
                        data-testid="enrolledOn"
                        defaultValue = {dropdownData[0]}
                        onChange = {ev=> setDropdownData([ev, dropdownData[1]])}
                        >
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
                        {...register("enrolledType")}
                        name="enrolledType"
                        className="form-select form-control form__input  my-2"
                        id="enrolledType"
                        data-testid="enrolledType"
                        defaultValue={dropdownData[1]}
                        onChange = {ev=> setDropdownData([dropdownData[0], ev])}
                        >
                        <option value="Full-Time">Full-Time</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Self-Paced">Self-Paced</option>
                        </select>
                    </div> 
                    
                    <div className="col-12 mt-3">
                        <label htmlFor="githubAccount" className="addStudentLabel fw-bold">Github Account</label>
                        <input
                        {...register("githubAccount")}
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
                            {...register("portfolioLink")}
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
                    <div className = "w-100"> 
                      <button className="form__button-danger" onClick={onDelete}>Delete</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default StudentEditForm;
