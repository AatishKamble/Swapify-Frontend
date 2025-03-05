import { useNavigate } from "react-router-dom";

const CategoryCard = ({ title, price, image, category }) => {
  const navigate=useNavigate();
    return (
      <div className="cursor-pointer flex-shrink-0 m-6 relative overflow-hidden bg-teal-800 rounded-lg max-w-xs shadow-lg group hover:shadow-xl transition-shadow duration-300" onClick={()=>navigate(`/items?Categories=${title}`)}>
        <svg 
          className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform" 
          viewBox="0 0 375 283" 
          fill="none"
          style={{ opacity: 0.1 }}
        >
          <rect 
            x="159.52" 
            y="175" 
            width="152" 
            height="152" 
            rx="8" 
            transform="rotate(-45 159.52 175)" 
            fill="white" 
          />
          <rect 
            y="107.48" 
            width="152" 
            height="152" 
            rx="8" 
            transform="rotate(-45 0 107.48)" 
            fill="white" 
          />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div 
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.2
            }}
          />
          <img className="relative w-40 h-40 object-contain" src={image} alt={title} />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">{category}</span>
          <div className="flex justify-between items-center">
            <span className="block font-semibold text-xl">{title}</span>
            {price && (
              <span className=" bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                {price}
              </span>
            )}
          </div>
        </div>
      
      </div>
    );
  };

  export default CategoryCard;