import About from '@/components/about/index';
import Contact from '@/components/contact/index';
import Header from '@/components/header/index';
import Navbar from '@/components/navbar/index';
import Portfolio from '@/components/portfolio/index';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-[#25325F] text-slate-200'>
      <Navbar />
      <div className='lg:mx-[200px]'>
        <div className='sm:mt-[150px] sm:mb-[350px] mt-[50px] mb-[50px]'>
          <Header />
        </div>
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}
