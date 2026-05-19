import "./Projects.css";

function Projects() {

  const projects = [

    {
      title: "SkillTrack Website",
      desc: "Modern React SkillTrack website",
      link: "https://tinyurl.com/skilltrack",
    },

    {
      title: "ProQuiz App",
      desc: "React Quizzing App",
      link: "https://tinyurl.com/proquiz-app",
    },

    {
      title: "Reastaurant Management Systems",
      desc: "Restaurant Platform",
      link: "https://tinyurl.com/restaurant-manage",
    },
    {
      title: "QR Code Generator",
      desc: "QR Gen App",
      link: "https://tinyurl.com/qr-code-prj",
    },

  ];

  return (

    <section className="projects" id="projects">

      <h1>Projects</h1>

      <div className="project-container">

        {projects.map((project, index) => (

          <div
            className="project-card"
            key={index}

            onClick={() => {
              window.open(project.link, "_blank");
            }}
          >

            <h2>{project.title}</h2>

            <p>{project.desc}</p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;