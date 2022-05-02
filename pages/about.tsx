import Image from 'next/image';

import Container from 'components/Container';
import profile from 'public/profile.jpg';
import profileBW from 'public/profile-bw.jpg';

export default function About() {
  return (
    <Container title="About – Gideon Bamuleseyo">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">About Me</h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Email: <a href="mailto:gideonbamuleseyo@gmail.com">gideonbamuleseyo@gmail.com</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/lytes20">@lytes20</a>
            </li>
            <li>
              LinkedIn: <a href="https://www.linkedin.com/in/gideon-bamuleseyo-07b574119/">Gideon Bamuleseyo</a>
            </li>
            <li>
              LinkedIn: <a href="https://gideonb.dev/">gideonb.dev</a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Current Job Title</h3>
          <p>Gideon Bamuleseyo, Lead Web Developer</p>
          <h3>Long, 3rd Person</h3>
          <p>
            Gideon is a Lead Web developer at Ramani, a startup building financial infrastructure for Africa's supply chains. At Ramani,
            Gideon primarily works with Javascript. Before Ramani, Gideon was a full stack developer at Andela, a global company that is a
            talent marketplace for technologists. He has been a co-lead of Facebook(Meta) Developer Circle: Kampala, where he participated
            in the mentorship of junior developers and organizing tech meetups
          </p>
          <h3>Long, 1st Person</h3>
          <p>
            Hi, I am Gideon. I lead Web Development at Ramani, a startup building financial infrastructure for Africa's supply chains. At
            Ramani, I primarily work with Javascript. Before Ramani, I was a full stack developer at Andela, a global company that is a
            talent marketplace for technologists. I have been a co-lead of Facebook(Meta) Developer Circle: Kampala, where I participated in
            the mentorship of junior developers and organizing tech meetups.
          </p>
          <h3>Short, 3rd Person</h3>
          <p>Gideon Bamuleseyo is a Software Engineer.</p>
          <h3>Short, 1st Person</h3>
          <p>Hey, I'm Gideon. I am a Software Engineer.</p>
          <h3>Education</h3>
          <p>
            Gideon Bamuleseyo graduated from <a href="https://en.wikipedia.org/wiki/Makerere_University">Makerere University Kampala</a>{' '}
            with a BS in Computer Science.
          </p>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/profile.JPEG">
              <Image alt="Gideon Bamuleseyo headshot" width={800} quality={100} src={profile} className="rounded-md" />
            </a>
            <a href="/profile-bw.JPEG">
              <Image alt="Gideon Bamuleseyo headshot" width={800} quality={100} src={profileBW} className="rounded-md" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
