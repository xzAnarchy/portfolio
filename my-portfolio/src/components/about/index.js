import iconArrow from '@/assets/iconArrow.svg';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='text-slate-100 text-base flex flex-col ' id='01. About me'>
      <div className='2xl:pl-[140px] 2xl:pr-[500px] text-center md:text-left mb-4'>
        <h4 className='text-[26px] mb-10'>
          <span className='text-[#5A79E7]'>01.</span>{' '}
          <span className='font-semibold'>About me</span>
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
            <li className='flex'>
              <Image src={iconArrow} alt='icon arrow' width={12} />
              Html5/Css
            </li>
            <li className='flex'>
              <Image src={iconArrow} alt='icon arrow' width={12} />
              JavaScript
            </li>
            <li className='flex'>
              <Image src={iconArrow} alt='icon arrow' width={12} />
              TypeScript
            </li>
            <li className='flex'>
              <Image src={iconArrow} alt='icon arrow' width={12} />
              NodeJs
            </li>
            <li className='flex'>
              <Image src={iconArrow} alt='icon arrow' width={12} />
              React
            </li>
            <li className='flex'>
              <Image src={iconArrow} alt='icon arrow' width={12} />
              NextJs
            </li>
            <li className='flex'>
              <Image src={iconArrow} alt='icon arrow' width={12} />
              SQL
            </li>
            <li className='flex'>
              <Image src={iconArrow} alt='icon arrow' width={12} />
              MongoDB
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
