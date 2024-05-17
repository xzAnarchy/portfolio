import React from 'react';

const About = () => {
  return (
    <div
      className='text-slate-100 text-sm flex flex-col items-center justify-center'
      id='01. About me'
    >
      <div className=''>
        <h4>About me</h4>
        <h6>
          Highly motivated and detail-oriented Full Stack Developer with a
          degree from Coderhouse. With excellent active listening, conflict
          resolution, and attention to detail skills, I have an exceptional
          ability to collaborate with team members and clients.
        </h6>
      </div>
      <div>
        <h6>
          Here are a few technologies I&apos;ve been working with recently:
        </h6>
        <ul>
          <li>Html5/Css</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>NodeJs</li>
          <li>React</li>
          <li>NextJs</li>
          <li>SQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
