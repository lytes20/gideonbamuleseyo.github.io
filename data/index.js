var skills = ["React", "React-Apollo", "GraphQL"];
var tools = ["PostgresSQL", "Postman", "GitHub"];

const createWorkExperience = (name, desc, website) => {
  return { name, desc, website };
};
var workExperience = [
  createWorkExperience(
    "Andela",
    "Andela is an engineering as a service business that helps companies build teams quickly and cost effectively so they can ship faster.",
    "https://andela.com/"
  ),
  createWorkExperience(
    "iBuild Global Inc",
    "iBuild is software as a service that is closing the gap in affordable housing production",
    "https://www.ibuild.global/"
  ),
  createWorkExperience(
    "Kola studios",
    "Kola studios is a mobile game and application development company.",
    "https://kolastudios.com/"
  )
];
