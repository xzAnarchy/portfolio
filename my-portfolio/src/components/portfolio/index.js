import iconArrow from '@/assets/iconArrow.svg';
import logoAF from '@/assets/logoAF.svg';
import logoEBC from '@/assets/logoEBC.svg';
import logoYV from '@/assets/logoYV.svg';
import React from 'react';
import { CardDefault } from '../cards';

const Portfolio = () => {
  const Data = [
    {
      title: 'El Buen Conejo',
      body: 'My second project in the selection process of NoCountry, involved working as a Frontend Developer once again with ReactJs. This time, it wasnt an e-commerce project, but rather a marketplace related to Cuniculture.',
      image: logoEBC,
      repo: 'https://github.com/No-Country/s11-17-n-python-react',
    },
    {
      title: 'Al Forno',
      body: 'My first project in the NoCountry Simulation was working as a FullStack Developer. The project entailed creating an e-commerce platform using ReactJS and PHP, which was supported by a MySQL relational database.',
      image: logoAF,
      repo: 'https://github.com/No-Country/c13-08-n-php#forno-del-paese',
    },
    {
      title: 'Yummyverse',
      body: 'The objective of this project is to develop a platform that allows to visualize and manage in an organized way a list of restaurants and their main menus. Register to save your favorites information and order history. Also to register your own restaurant, publish menus and customize your space according to your membership.',
      image: logoYV,
      repo: 'https://github.com/No-Country/s12-06-n-node-react',
    },
  ];

  return (
    <div
      className='text-slate-100 text-base flex flex-col mt-[150px] transition ease-in-out'
      id='02. Portfolio'
    >
      <div className='2xl:pl-[140px] 2xl:pr-[500px] text-center md:text-left mb-4'>
        <h4 className='text-[26px] mb-10'>
          <span className='text-[#5A79E7]'>02.</span>
          <span className='font-semibold'>Some Projects I&apos;ve Built</span>
        </h4>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center 2xl:pl-[140px] mb-5'>
        {Data.map((item, index) => (
          <CardDefault
            key={index}
            image={item.image}
            title={item.title}
            body={item.body}
            repo={item.repo}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
