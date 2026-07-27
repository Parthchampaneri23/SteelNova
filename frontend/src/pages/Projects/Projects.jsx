import ProjectHero from "../../components/projects/ProjectHero";
import FeaturedProjects from "../../components/projects/FeaturedProjects";
import ProjectStats from "../../components/projects/ProjectStats";
import ProjectCTA from "../../components/projects/ProjectCTA";



const Projects = () => {
    return (
        <>
            <ProjectHero />
            <FeaturedProjects />
            <ProjectStats />
            <ProjectCTA />
        </>
    );
};

export default Projects;