import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcalculator-icon-vector-logo-template_45136729.htm&psig=AOvVaw1NZd5cURnsyZHiXQwBD2pN&ust=1745217008006000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjZu5v-5YwDFQAAAAAdAAAAABAE}
          link="https://pshiv2002.github.io/calculator-app-html-css-js"
          h3="Calculator"
          p="Calculator App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://pshiv2002.github.io/TicTacToe"
          h3="Tic Tac Toe "
          p="TicTacToe Game"
        />
        <ProjectCard
          src={hipsster}
          link="shiv-patel.netlify.app"
          h3="Portfolio"
          p="Personal Portfolio"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
