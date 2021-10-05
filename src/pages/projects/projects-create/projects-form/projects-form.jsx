import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import "./projects-form.scss";
import placeHolderThumb from "../../../../assets/images/thumbnail-placeholder.png"

const ProjectsForm = () => {
    const {register, handleSubmit, formState: { errors }, reset } = useForm();
    const history = useHistory();

    console.log(errors);
    const [{ alt, src }, setImg] = useState({
        src: placeHolderThumb,
        alt: placeHolderThumb,
    });

    const onSubmit = (data) => {
        console.log(data);
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        history.goBack();
    };
    
    const cancel = () => {
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
        <div className="project-form-container mt-4">
            <form className="d-flex justify-content-around w-100" onSubmit={handleSubmit(onSubmit)}>
                <div className="project-form-container__left">
                    <div className="p-0 mt-4">
                        <label className="project-form-container__left__label" htmlFor="projectName">Project Name</label>
                        <input
                        {...register("firstNprojectNameame", {
                            required: true,
                        })}
                        name="project-form-container__left__projectName"
                        className="form-control project-form-input "
                        type="text"
                        id="projectName"
                        />
                        {errors.firstName && <div className="text-danger">*Required</div>}
                    </div>

                    <div className="mt-3 ">
                        <label className="project-form-container__left__label"  htmlFor="">Language</label>
                        <select
                        {...register("language", { required: true })}
                        name="language"
                        className="form-select form-control project-form-input "
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

                    <div className="mt-3 d-flex flex-column">
                        <label className="project-form-container__left__label"  htmlFor="projectBrief">Project Brief</label>
                        <textarea
                        {...register("projectBrief", {
                            required: true,
                            // pattern: /^[A-Za-z]+$/i,
                        })}
                        name="projectBrief"
                        className="doubleHeight"
                        type="text"
                        id="projectBrief"
                        />
                        {errors.projectBrief && <p className="text-danger">*Required</p>}
                    </div>


                    <div className="mt-3 d-flex flex-column ">
                        <label className="project-form-container__left__label"  htmlFor="coachesTips">Coaches Tips</label>
                        <textarea
                        {...register("coachesTips", { required: true })}
                        name="coachesTips"
                        className="doubleHeight"
                        type="text"
                        id="coachesTips"
                        />
                        {errors.coachesTips && <p className="text-danger">*Required</p>}
                    </div>
                </div>

                <div className="project-form-container__right justify-content-between h-100">
                    <div className="d-flex flex-column mt-4">
                        <label className="project-form-container__right__label"  htmlFor="projectThumb">Project Thumbnail</label>
                        <input {...register("projectThumb")}
                        type="file"
                        onChange={readURL}
                        name="projectThumb"
                        id="projectThumb"
                        hidden
                        />
                        <div className="project-form-container__right-image d-flex justify-content-center align-items-center">
                            <img id="projectImage" src={src} alt={alt} className="project-thumbnail" />
                        </div>
                        <label htmlFor="projectThumb" className="btn upload-btn mt-4">
                        Upload
                        </label>
                    </div>

                    <div className="buttons">
                        <input type="reset" className="button_cancel" value="Cancel" onClick={cancel} />
                        <input type="submit" className="button_submit" value="Save" onClick={onSubmit} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProjectsForm;
