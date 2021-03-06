var skills = [
  "React-Apollo",
  "React",
  "Javascript",
  "GraphQL",
  "Python",
  "Java",
  "ES6",
  "Redux",
  "Django",
  "Flask",
  "Laravel",
  "Java 8",
  "Java-Android",
  "Objective-C",
  "Swift",
  "CSS",
  "SASS",
  "SQL",
  "Gradle",
  "Maven",
  "Selenium",
  "Mocha",
  "TestNG"
];
var tools = [
  "PostgreSQL",
  "Google Analytics",
  "Tableau",
  "WordPress",
  "Mailchimp",
  "Postman",
  "Bitbucket",
  "Github",
  "CircleCI",
  "Travis",
  "Linux/Other",
  "Heroku",
  "Apollo GraphQL",
  "Jira",
  "Pivotal Tracker",
  "Asana",
  "Balsamiq",
  "Google G-Suite",
  "Skype",
  "Slack",
  "Trello"
];

const createWorkExperience = (name, desc, website, imagePath) => {
  return { name, desc, website, imagePath };
};

const createProject = (name, website, repository, imagePath) => {
  return { name, website, repository, imagePath };
};

const createLeadershipExp = (name, website, imagePath) => {
  return { name, website, imagePath };
};

var workExperience = [
  createWorkExperience(
    "ramani.io",
    "Andela is an engineering as a service business that helps companies build teams quickly and cost effectively so they can ship faster.",
    "https://www.ramani.io/",
    "./images/ramani_green_logo.png"
  ),
  createWorkExperience(
    "andela.com",
    "Andela is an engineering as a service business that helps companies build teams quickly and cost effectively so they can ship faster.",
    "https://andela.com/",
    "./images/andela_logo.png"
  ),
  createWorkExperience(
    "ibuild.global",
    "iBuild is software as a service that is closing the gap in affordable housing production",
    "https://www.ibuild.global/",
    "./images/ibuild_logo.png"
  ),
  createWorkExperience(
    "kolastudios.com",
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

var leadershipExperience = [
  createLeadershipExp(
    "Developer Circles",
    "https://developers.facebook.com/developercircles/",
    "./images/devc.png"
  ),
  createLeadershipExp(
    "Teencode Africa",
    "http://teencodeafrica.com/",
    "./images/teencodeafrica.png"
  )
];
