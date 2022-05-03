import Container from 'components/Container';
import Timeline from 'components/Timeline';

export default function About() {
  return (
    <Container title="Experience – Gideon Bamuleseyo">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">Experience</h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">Skills</h3>
          <h4>Languages</h4>
          <ul>
            <li>Javascript, Typescript, Python, HTML/CSS </li>
          </ul>
          <h4>Frameworks, Libraries</h4>
          <ul>
            <li>React, Next, Node, Express, Flask, Django</li>
          </ul>
          <h4>Databases</h4>
          <ul>
            <li>Mongo, Firebase Firestore, Postgresql</li>
          </ul>
          <h4>Platforms and services</h4>
          <ul>
            <li>Heroku, Firebase, Amazaon s3, Github, Bitbucket, Jira, Trello, Asana</li>
          </ul>
        </div>
        <Timeline />
      </div>
    </Container>
  );
}
