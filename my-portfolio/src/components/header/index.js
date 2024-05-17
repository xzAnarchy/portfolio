const Header = () => {
  return (
    <div className='text-slate-200 flex flex-col items-center'>
      <h4 className='md:self-start text-base xl:pl-[140px] '>
        Hello! I&apos;m
      </h4>
      <div className='pb-6 justify-center self-center text-center md:text-left'>
        <h2 className='md:text-[80px] text-6xl md:mb-2'>Gabriel Mendoza.</h2>
        <h2 className='md:text-[80px] text-[#5A79E7] text-6xl'>
          I build web and mobile apps.
        </h2>
      </div>
      <h4 className='text-base 2xl:pl-[140px] 2xl:pr-[500px] text-center md:text-left'>
        I&apos;m a software developer based in Miami USA, with a deep passion
        for creating exceptional digital experiences. I specialize in building
        high-quality websites and mobile applications that not only look great
        but also offer seamless functionality and user-friendly interfaces.
      </h4>

      <button className='border-[5px] border-[#5A79E7] p-4 rounded-full mt-5 self-center sm:self-start xl:ml-[140px] '>
        Get In Touch
      </button>
    </div>
  );
};

export default Header;
