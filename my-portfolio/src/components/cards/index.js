'use client';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';

export function CardDefault({ image, title, body, repo }) {
  return (
    <div className='mt-6 w-96 bg-[#4156a2] border rounded-lg p-2 shadow-2xl border-transparent hover:bg-[#465cac]'>
      <div color='blue-gray' className='relative h-56'>
        <Image src={image} alt='card-image' layout='fill' />
      </div>

      <div>
        <Typography variant='h4' color='blue-gray' className='mb-2 text-lg'>
          {title}
        </Typography>
        <Typography>{body}</Typography>
      </div>

      <div className='mt-2'>
        {/* make a button who redirect to github repo */}
        <Link href={repo} target='_blank'>
          <button className='border rounded-md p-2 bg-[#384986] border-transparent hover:bg-[#3e5195]'>
            Read More!
          </button>
        </Link>
      </div>
    </div>
  );
}
