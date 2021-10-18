import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import "./project-overview.scss";

const ProjectOverview = () => {
  const [projectData, setProjectData] = useState({});
  const { projectId } = useParams();

  const getProjectDetails = () => {
    fetch("http://localhost:8080/projects/" + projectId)
      .then((response) => response.json())
      .then((jsonResponse) => setProjectData(jsonResponse))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProjectDetails();
  }, []);

  return <div>{projectData.projectName}</div>;
};

export default ProjectOverview;
