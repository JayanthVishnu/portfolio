import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import bc from "./../../assets/Designer (5).jpeg";
import cov from "./../../assets/Designer (6).jpeg";
import wa from "./../../assets/Designer (7).jpeg";
import lang from "./../../assets/Designer (8).jpeg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={bc}
          link=""
          h3="Block-Chain"
          p="Land-Reg using smart contract"
        />
        <ProjectCard
          src={wa}
          link="https://jayanthvishnu.github.io/weather-app/"
          h3="Weather App"
          p="Weather App using API"
        />
        <ProjectCard
          src={cov}
          link=""
          h3="Hospital bed boocking"
          p="COVIDE 19 bed booking system"
        />
        <ProjectCard
          src={lang}
          link=""
          h3="Lang-Chain"
          p="Multi pdfs reader using AI"
        />
      </div>
    </section>
  );
}

export default Projects;
