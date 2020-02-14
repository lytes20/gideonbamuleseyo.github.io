var skills = ["React", "React-Apollo", "GraphQL"];
var tools = ["PostgresSQL", "Postman", "GitHub"];

const createWorkExperience = (name, desc, website, imagePath) => {
  return { name, desc, website, imagePath };
};

const createProject = (name, website, repository, imagePath) => {
  return { name, website, repository, imagePath };
};
var workExperience = [
  createWorkExperience(
    "Andela",
    "Andela is an engineering as a service business that helps companies build teams quickly and cost effectively so they can ship faster.",
    "https://andela.com/",
    "./images/andela_logo.png"
  ),
  createWorkExperience(
    "iBuild Global Inc",
    "iBuild is software as a service that is closing the gap in affordable housing production",
    "https://www.ibuild.global/",
    "./images/ibuild_logo.png"
  ),
  createWorkExperience(
    "Kola studios",
    "Kola studios is a mobile game and application development company.",
    "https://kolastudios.com/",
    "./images/kola_logo.png"
  )
];

var projects = [
  createProject(
    "Elevate",
    "http://elevate-web.herokuapp.com/",
    "https://github.com/lytes20/elevate-web",
    "./images/elevate_logo.png"
  ),
  createProject(
    "Tunga",
    "https://tunga.io/",
    "https://github.com/tunga-io/tunga-web",
    "./images/tunga_logo.png"
  )
];
