import Logo from '@/assets/Mendoza.png';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  const routes = ['01. About me', '02. Portfolio', '03. Contact me'];

  return (
    <div className='w-screen bg-[#1e284f] flex flex-row items-center justify-between text-slate-100'>
      <div className='pl-5'>
        <Image alt='logo' src={Logo} width={100} />
      </div>

      <div className='flex flex-row items-center mr-6'>
        {routes.map((item, index) => (
          <div key={index} className='p-5'>
            <Link href={`#${item}`}>{item}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
