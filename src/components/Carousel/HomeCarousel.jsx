
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    
    <ArrowForwardIcon {...props} style={{ color: "black", background: "white", fontSize: "40px",border:"2px solid gray",right:"10px",zIndex:"100",borderRadius:"50%"}}  /> 
  );
}

function SamplePrevArrow(props) {
  
  return (
   
     <ArrowBackIcon {...props} style={{ color: "black", background: "white", fontSize: "40px",border:"2px solid gray",left:"10px",zIndex:"100",borderRadius:"50%"}}  />   
  );
}


export const HomeCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />, // Use custom next arrow component
        prevArrow: <SamplePrevArrow />, // Use custom prev arrow component
       
      };
      return (
    <>
    <div className="slider-contaier m-6 ">
    
    
        <Slider {...settings} className="bg-[#ffff] w-full h-[460px] ">
        <div  className="h-[450px] w-full p-[10px] " >
          <img src="../../src/assets/laptopGroup.jpg" alt="The Flower"className="object-fill w-full  h-full  "  />
          </div>
          <div  className="h-[500px] w-full p-[10px] " >
          <img src="../../src/assets/booksGroup.jpg" alt="The Flower"className="object-fill w-full  h-full  "  />
          </div>
          <div  className="h-[500px] w-full p-[10px] " >
          <img src="../../src/assets/booksGroup.jpg" alt="The Flower"className="object-fill w-full  h-full  "  />
          </div>
          <div  className="h-[500px] w-full p-[10px] " >
          <img src="../../src/assets/booksGroup.jpg" alt="The Flower"className="object-fill w-full  h-full  "  />
          </div>
          <div  className="h-[500px] w-full p-[10px] " >
          <img src="../../src/assets/booksGroup.jpg" alt="The Flower"className="object-fill w-full  h-full  "  />
          </div>
         
        </Slider>
        </div>
        </>
      );
    }
