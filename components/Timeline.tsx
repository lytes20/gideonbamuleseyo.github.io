const ExperienceItem = (props) => {
  return (
    <div className="mb-4">
      <div className="flex items-center">
        <p className="mr-4 tracking-tight text-gray-900 dark:text-gray-100">{props.time}</p>
        <p className="text-gray-900 dark:text-gray-100">{props.title}</p>
      </div>
    </div>
  );
};

export default function Timeline() {
  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">Work Experience</h3>
      <br />
      <ExperienceItem time="2022 - Now" title="Lead Web Developer, Ramani" />
      <ExperienceItem time="2020 - 2022" title="Senior Software Engineer, Ramani" />
      <ExperienceItem time="2019 - 2020" title="Software Engineer, iBuild Global" />
      <ExperienceItem time="2018 - 2020" title="Software Engineer, Andela" />
      <ExperienceItem time="2018 - 2020" title="Community Co-Lead, Meta(Facebook) Developer Circles Kampala" />
      <ExperienceItem time="2017 - 2018" title="Software Engineering Intern, Kola Studios" />

      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">Education</h3>
      <br />
      <ExperienceItem time="2014 - 2019" title="BS, Computer Science Makerere University Kampala" />
    </>
  );
}
