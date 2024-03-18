

const Title = ({title,subtitle}) => {
  return (
  <>
     <div className="flex justify-center align-middle flex-col mt-[20px] w-[100%] h-auto border-b-[2px] border-solid border-[#c3c1c1]  ">
            <p className='font-serif p-[2px] no-underline md:text-3xl text-2xl text-[#100e0e] '>{title}</p>
            <p className='underline md:text-xl text-[16px] text-[#7e7c7c] p-[10px]'>{subtitle}</p>
          </div>
      
  
  </>
  );
}

export default Title