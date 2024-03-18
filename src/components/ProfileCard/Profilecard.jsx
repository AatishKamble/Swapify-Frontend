
const Profilecard = ({title,subtitle,icon,onClick}) => {
  return (
    <div className="p-[10px] cursor-pointer flex justify-center items-center flex-col text-[#4c4947] md:w-[300px] md:h-[130px] bg-[#e0e1f8e9] rounded-lg border-2 border-solid border-[#d0cfd2] profile-card w-[230px] h-[100px] mx-auto " onClick={onClick}>
      <div className="flex justify-center item-center"  > <span className="lg:text-[20px] text-[18px]">{icon}</span>
<h2 className="ms-[10px] md:text-[20px] text-[18px] "><strong>{title}</strong></h2>

</div>
<div className="flex justify-center ">
<p className="ps-[20px] pe-[20px] pt-[5px] text-[14px] text-[#a8aaaa] font-serif font-thin hidden md:block"> {subtitle}</p>
</div>
    </div>
  );
}

export default Profilecard