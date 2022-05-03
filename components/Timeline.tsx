import { useState } from 'react';

const Divider = () => {
  return <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />;
};

const Step = (props) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{props.title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{props.children}</p>
    </li>
  );
};

const ExperienceItem = (props) => {
  return (
    <div className="mb-4">
      <div className="flex items-center">
        <p className="mr-4 tracking-tight text-gray-900 dark:text-gray-100">{props.time}</p>
        <p className="text-gray-900 dark:text-gray-100">{props.title}</p>
      </div>
      {/* <Divider /> */}
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
