import Image from 'next/image';

import Container from 'components/Container';
import profile from 'public/profile.jpg';
import profileBW from 'public/profile-bw.jpg';
import Timeline from 'components/Timeline';

export default function About() {
  return (
    <Container title="Experience – Gideon Bamuleseyo">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">Work and Experience</h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Languages</h2>
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Python</li>
          </ul>
          <h2>Frameworks, Libraries</h2>
          <ul>
            <li>React</li>
            <li>Next</li>
            <li>Node</li>
            <li>Express</li>
          </ul>
          <h2>Databases</h2>
          <ul>
            <li>Mongo</li>
            <li>Firebase Firestore</li>
            <li>Postgresql</li>
          </ul>
        </div>
        <Timeline />
      </div>
    </Container>
  );
}
