import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import "./projects-edit-form.scss";
import placeHolderThumb from "../../../../assets/images/project-thumbnail.png";

const ProjectsEditForm = () => {
  const {projectId} = useParams();
  const [projectsData, setProjectsData] = useState({}); 
  const { projectName, projectBrief, coachesTips } = projectsData;
  const [ dropdownData, setDropdownData] = useState(""); 

  const setupStates = (jsonResponse) => {
    setProjectsData(jsonResponse);
    setDropdownData(jsonResponse.language);
  }

  const getProjectById = () => {
    fetch(`http://localhost:8080/projects/${projectId}`)
        .then(response => response.json())
        .then(jsonResponse => setupStates(jsonResponse))
        .catch(error => console.log(error));
}

let languages = ["HTML/CSS","Javascript", "React", "Java"];
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const history = useHistory();

    console.log(errors);
    const [{ alt, src }, setImg] = useState({
        src: placeHolderThumb,
        alt: "",
    });

    useEffect(getProjectById, [projectId]);

    const onSubmit = (data) => {
        console.log("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));

        fetch(`http://localhost:8080/projects/${projectId}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                id: projectId,
                projectName: data.projectName || projectName,
                language: data.language || projectsData.language,
                studentsEnrolled: 325,
                numberReviewed: 278,
                percentageReviewed: "85%",
                projectBrief: data.projectBrief || projectBrief,
                coachesTips: data.coachesTips || coachesTips,
                projectThumb: "https://nology.io/wp-content/uploads/2019/12/NOLOGY8.png"
            })
        })
        .then((response) => global.window.location.href="/projects")
        .catch(error => alert(error));
    };

    const handleCancel = () => {
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

    const deleteProject = () => {
        if(window.confirm("Are you sure you want to delete this project? It will be deleted permanently.")) {
            fetch(`http://localhost:8080/projects/${projectId}`, {
                method: "DELETE"
            })
            .then((response) => global.window.location.href = "/projects")
            .catch(error => console.log(error));
        }
    };

    return (
        <div className="project-form-container mt-4 mb-5">
            <form
                className="d-flex justify-content-around w-100"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="project-form__left">
                    <div className="p-0 mt-4">
                        <label
                            className="project-form__left__label"
                            htmlFor="projectName"
                        >
                            Project Name
                        </label>
                        <input
                            {...register("projectName")}
                            name="projectName"
                            className="form-control project-form-input project-form__left__projectName "
                            type="text"
                            id="projectName"
                            defaultValue={projectName}
                        />
                        {errors.projectName && (
                            <div className="text-danger">*Required</div>
                        )}
                    </div>
                    
                    <div className="mt-3">
                        <label className="project-form__left__label" htmlFor="">
                            Language
                        </label>
                        <select
                            {...register("language")}
                            name="language"
                            className="form-select form-control project-form-input "
                            id="language"
                            value = {dropdownData}
                            onChange={ev => setDropdownData(ev)}
                        >
                            <optgroup label="Select a Language">
                                {
                                    languages.map(currentLanguage => {
                                        return <option value={currentLanguage}>{currentLanguage}</option>
                                    })
                                }
                            </optgroup>
                        </select>
                    </div>

                    <div className="mt-3 d-flex flex-column">
                        <label
                            className="project-form__left__label"
                            htmlFor="projectBrief"
                        >
                            Project Brief
                        </label>
                        <textarea
                            {...register("projectBrief", {required: true})}
                            name="projectBrief"
                            className="text-area-styling"
                            type="text"
                            id="projectBrief"
                            defaultValue={projectBrief}
                        >
                        </textarea>

                        {errors.projectBrief && (
                            <p className="text-danger">*Required</p>
                        )}
                    </div>

                    <div className="mt-3 d-flex flex-column">
                        <label
                            className="project-form__left__label"
                            htmlFor="coachesTips"
                        >
                            Coaches Tips
                        </label>
                        <textarea
                            {...register("coachesTips", {required: true})}
                            name="coachesTips"
                            className="text-area-styling"
                            type="text"
                            id="coachesTips"
                            defaultValue={coachesTips}
                        >
                        </textarea>

                        {errors.coachesTips && (
                            <p className="text-danger">*Required</p>
                        )}
                    </div>
                </div>

                <div className="project-form__right justify-content-between h-100">
                    <div className="d-flex flex-column mt-4">
                        <label
                            className="project-form__right__label"
                            htmlFor="projectThumb"
                        >
                            Project Thumbnail
                        </label>
                        <input
                            {...register("projectThumb")}
                            type="file"
                            onChange={readURL}
                            name="projectThumb"
                            id="projectThumb"
                            hidden
                        />
                        <div className="project-form__right-image-div d-flex justify-content-center align-items-center">
                            <img
                                id="projectImage"
                                src={src}
                                alt={alt}
                                className="project-thumbnail"
                            />
                        </div>
                        <label
                            htmlFor="projectThumb"
                            className="btn upload-btn mt-4"
                        >
                            Upload
                        </label>
                    </div>

                    <div className="project-form__right__buttons">
                        <input
                            type="reset"
                            className="project-form__right__buttons-cancel"
                            value="Cancel"
                            onClick={handleCancel}
                        />
                        <input
                            type="submit"
                            className="project-form__right__buttons-submit"
                            value="Save"
                        />
                    </div>
                    <button className="form__button-danger" onClick={() => {deleteProject()}}>Delete</button>
                </div>
            </form>
            
        </div>
    );
};


export default ProjectsEditForm;
