import React, { useState } from "react";
//import studentData from '../../data/studentForm';
import { useForm } from "react-hook-form";
import "../../../assets/styles/_form.scss";

const StudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const [{ alt, src }, setImg] = useState({
    src: "placeholder",
    alt: "",
  });

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

  const onSubmit = (data) => {
    console.log(data);
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
    <div className="row mt-5 form-container">
      <form className="row" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-6">
          <div className="col-md-12 mt-3">
            <label htmlFor="firstName">First Name</label>
            <input
              {...register("firstName", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
              name="firstName"
              className="form-control form-input"
              type="text"
              id="firstName"
            />
            {errors.firstName && <p>This is required</p>}
          </div>

          <div className="col-md-12 mt-3">
            <label htmlFor="">Last Name</label>
            <input
              {...register("lastName", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
              name="lastName"
              className="form-control form-input"
              type="text"
              id="lastName"
            />
            {errors.lastName && <p>This is required</p>}
          </div>

          <div className="col-md-12 mt-3">
            <label htmlFor="">Enrolled on</label>
            <select
              {...register("Enrolled On", { required: true })}
              name="enrolledOn"
              className="form-select form-control form-input"
              id="enrolledOn"
            >
              <option selected="true" value="default" disabled>
                Select on of the following
              </option>
              <option value="ibiza">Ibiza</option>
              <option value="hawaii">Hawaii</option>
              <option value="jersey">Jersey</option>
            </select>
          </div>

          <div className="col-md-12 mt-3">
            <label htmlFor="">Github Account</label>
            <input
              {...register("githubAccount", { required: true })}
              name="githubAccount"
              className="form-control form-input"
              type="text"
              id="github-account"
            />
            {errors.githubAccount && <p>This is required</p>}
          </div>

          <div className="col-md-12 mt-3">
            <label htmlFor="">Portfolio Link</label>
            <input
              {...register("portfolioLink", { required: true })}
              name="portfolioLink"
              className="form-control form-input"
              type="text"
              id="portfolio-link"
            />
            {errors.portfolioLink && <p>This is required</p>}
          </div>
        </div>
        <div className="col-6">
          <div className="col-md-12 mt-3">
            <label htmlFor="">Student Thumbnail</label>
            <input
              type="file"
              onChange={readURL}
              name="thumbnail-upload"
              id="thumbnail-upload"
              hidden
            />
            <img id="studentImage" src={src} alt={alt} className="student-thumbnail" />
            <label htmlFor="thumbnail-upload" className="btn upload-btn mt-4">
              Upload
            </label>
          </div>
          <div className="col-md-12 mt-3">
            <h5 htmlFor="">CV Upload</h5>
            <label htmlFor="cv-upload" className="btn upload-btn mt-2">Upload</label>
            <input
              type="file"
              className="btn btn-upload"
              name="cv-upload"
              id="cv-upload"
              hidden
            />
          </div>
          <div className="col-md-12 mt-3">
            <input type="reset" className="btn btn-secondary" value="Cancel" />
            <input type="submit" className="btn btn-primary" value="Save" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
