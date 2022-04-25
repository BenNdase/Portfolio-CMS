import "./Project.scss";
import Card from "../Card/Card-Projects/Card";
import SkeletonFacebook from "../Skeleton/Skeleton";

import { useEffect, useState } from "react";
import { API_URL } from "../../services/url";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(`${API_URL}/projets`);
      response = await response.json();
      setProjects(response);
      setLoading(true);
    }

    fetchMyAPI();
  }, []);
  return (
    <div className="projects">
      <div className="projects__title">
        <hr className="line-top" />
        <h2>Mes réalisations</h2>
        <p>{process.env.REACT_APP_API}</p>
      </div>
      <div className="projects__card">
        {loading ? (
          <>
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.name}
                image={project.image.url}
                avatar={project.logo.url}
                technologies={project.technologies}
                link={project.liens}
              />
            ))}
          </>
        ) : (
          <>
            <SkeletonFacebook />
          </>
        )}
      </div>
    </div>
  );
};
export default Projects;
