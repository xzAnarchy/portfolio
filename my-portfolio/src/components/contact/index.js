import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <div
      className='text-slate-100 text-base flex flex-col mt-6 transition ease-in-out'
      id='03. Contact me'
    >
      <div className='2xl:pl-[140px] 2xl:pr-[140px] text-center mb-4'>
        <h4 className='text-[26px] mb-10'>
          <span className='text-[#5A79E7]'>03.</span>{' '}
          <span className='font-semibold'>Contact me</span>
        </h4>
        <h6>
          Although I&apos;m not currently looking for any new opportunities, my
          inbox is always open. Whether you have a question or just want to say
          hi, I&apos;ll try my best to get back to you!
        </h6>

        <div className='pt-5'>
          <Link href='mailto:mendozagabriel726@gmail.com'>
            <button className='border rounded-md p-2 bg-[#4257a4]'>
              Say Hello!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
