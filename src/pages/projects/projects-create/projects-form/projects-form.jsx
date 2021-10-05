import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const ProjectsForm = () => {
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
        <div className="row mt-4 my-4 px-4 offset-1 form__container">
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6">
            <div className="col-12 mt-4">
                <label htmlFor="projectName">Project Name</label>
                <input
                {...register("firstNprojectNameame", {
                    required: true,
                })}
                name="projectName"
                className="form-control form__input  my-2"
                type="text"
                id="projectName"
                />
                {errors.firstName && <div className="text-danger">*Required</div>}
            </div>

            <div className="col-12 mt-3">
                <label htmlFor="">Language</label>
                <select
                {...register("language", { required: true })}
                name="language"
                className="form-select form-control form__input  my-2"
                id="language"
                >
                <optgroup label = "Select a language">
                    <option value="htmlcss">HTML/CSS</option>
                    <option value="javascript">Javascript</option>
                    <option value="react">React</option>
                    <option value="java">Java</option>
                </optgroup>
                </select>
            </div> 

            <div className="col-12 mt-3">
                <label htmlFor="lastName">Last Name</label>
                <input
                {...register("lastName", {
                    required: true,
                    // pattern: /^[A-Za-z]+$/i,
                })}
                name="lastName"
                className="form-control form__input my-2"
                type="text"
                id="lastName"
                />
                {errors.lastName && <p className="text-danger">*Required</p>}
            </div>


            <div className="col-12 mt-3">
                <label htmlFor="githubAccount">Github Account</label>
                <input
                {...register("githubAccount", { required: true })}
                name="githubAccount"
                className="form-control form__input my-2"
                type="text"
                id="githubAccount"
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
                hidden
                />
                <img id="studentImage" src={src} alt={alt} className="student-thumbnail my-2" />
                <label htmlFor="studentThumb" className="btn upload-btn mt-4">
                Upload
                </label>
            </div>
            <div className="col-12 mt-3">
                <label className="my-3">CV Upload</label>
                <div>
                    <label htmlFor="cvUpload" className="btn upload-btn mt-2">Upload</label>
                    <input {...register("cvUpload")}
                    type="file"
                    className="btn btn-upload"
                    name="cvUpload"
                    id="cvUpload"
                    hidden
                    />
                </div>
            </div>
            <div className="col-12 mt-5">
                <input type="reset" className="btn btn-secondary mx-2 form__button" value="Cancel" onClick={handleClick} />
                <input type="submit" className="btn btn-primary form__button" value="Save" />
            </div>
            </div>
        </form>
        </div>
    );
};

export default ProjectsForm;
