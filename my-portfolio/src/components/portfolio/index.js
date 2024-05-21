import iconArrow from '@/assets/iconArrow.svg';
import React from 'react';

const Portfolio = () => {
  return (
    <div
      className='text-slate-100 text-base flex flex-col mt-[150px]'
      id='02. Portfolio'
    >
      <div className='2xl:pl-[140px] 2xl:pr-[500px] text-center md:text-left mb-4'>
        <h4 className='text-[26px] mb-10'>
          <span className='text-[#5A79E7]'>02.</span>
          <span className='font-semibold'>Some Projects I&apos;ve Built</span>
        </h4>
        <h6>
          I am a highly motivated and detail-oriented Full Stack Developer with
          a degree from Coderhouse. My expertise lies in both front-end and
          back-end development, with a strong emphasis on delivering
          high-quality, efficient, and scalable web applications. I excel in
          active listening, conflict resolution, and maintaining meticulous
          attention to detail, enabling me to collaborate effectively with team
          members and clients.
        </h6>
      </div>

      <div className='flex flex-col 2xl:pl-[140px] xl:pr-[500px] text-center md:text-left '>
        <div>
          <h6>
            Here are a few technologies I&apos;ve been working with recently:
          </h6>
        </div>

        <div>
          <ul className='grid grid-cols-2 sm:grid-cols-4 mt-5 gap-y-3'>
            <li>
              <iconArrow />
              Html5/Css
            </li>
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
    </div>
  );
};

export default Portfolio;
