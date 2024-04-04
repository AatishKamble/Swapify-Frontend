
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    
    <ArrowForwardIcon {...props} style={{ color: "black", background: "", fontSize: "30px",border:"",right:"20px",zIndex:"100",borderRadius:"50%"}}  /> 
  );
}

function SamplePrevArrow(props) {
  
  return (
   
     <ArrowBackIcon {...props} style={{ color: "black", background: "", fontSize: "30px",border:"",left:"20px",zIndex:"100",borderRadius:"50%"}}  />   
  );
}


export const HomeCarousel = () => {
    var settings = {
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />, // Use custom next arrow component
        prevArrow: <SamplePrevArrow />, // Use custom prev arrow component
       
      };
      return (
    <>
    <div className="slider-contaier m-6 ">
    
    
        <Slider {...settings} className="bg-[#ffff] w-full  ">
        <div  className="h-[450px] w-full p-[10px] " >
          <img src="../../src/assets/laptopGroup.jpg" alt="The Laptops"className="object-fill w-full  h-full  "  />
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
