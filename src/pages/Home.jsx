import { HomeCarousel } from "../components/Carousel/HomeCarousel"
import { Footer } from "../components/Footer/Footer"
import { LandingPageRecommandations } from "../components/LandingPageRecommandations/LandingPageRecommandations"
import { Navbar } from "../components/Navbar/Navbar"
import CategoryCard from "../components/CategoryCard/CategoryCard";
import PopularCategory from "../components/PopularCategory/PopularCategory";

export const Home = () => {
  

const products = [
  {
    title: "The Alchemist",
    subCategory: "Fiction",
    price: "$12.99",
    image: "https://down-th.img.susercontent.com/file/th-11134207-23030-tk280chrklov08",
  },
  {
    title: "Lenovo",
    subCategory: "Laptop",
    price: "$1200",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/9/SE/KH/KN/101111/used-refurbished-lenovo-thinkpad-l460-500x500.jpeg",
  },
  {
    title: "Canon EOS 90D",
    subCategory: "Photography & Videography",
    price: "$499.99",
    image: "https://tse3.mm.bing.net/th?id=OIP.MHKM2xCcmMjALsDkBU1lYgHaHa&pid=Api&P=0&h=180",
  },
  {
    title: "Levi's Denim Jacket",
    subCategory: "Clothing & Accessories",
    price: "$29.99",
    image: "https://image.made-in-china.com/2f0j00tpLocJmnMqbk/School-Cloth.jpg",
  },
  {
    title: "Ergonomic Office Chair",
    subCategory: "Furniture & Home Essentials",
    price: "$199.99",
    image: "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Chair_image/WSCHRALLENBBCBBNBNBN/WSCHRALLENBBCBBNBNBN_1.jpg?tr=w-1200",
  },
  {
    title: "Dummbell",
    subCategory: "Sports & Fitness",
    price: "$199.99",
    image: "https://i5.walmartimages.com/asr/1919deb4-8b44-4a77-9e83-630d9afe1495_1.5f004859de4efd15aea4c51f25685ddd.jpeg",
  },
  {
    title: "Snake Ladder",
    subCategory: "Board Games",
    price: "$199.99",
    image: "https://cf.shopee.ph/file/0302f7f77cf35db3070603a73a626e6b",
  }
];


  return (
   <>
   <HomeCarousel />
  
{
  //Categories
}
 
 <PopularCategory/>



  {
    //Featured products

  }
  <div className="container mx-auto px-4 py-8">
  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recommanded Products</h2>
 
  <div className="grid grid-cols-4 max-w-fit mx-auto  gap-4 gap-x-5">
        {products.map((product, index) => (
          <div key={index} className="w-[280px] border border-blue-200 rounded-lg shadow-md p-4">
            <div className="relative">
              <img src={product.image} alt={product.name} width={270} height={270} className="object-contain w-full h-[270px]" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-800 font-medium text-base">{product.title}</h3>
              <p className="uppercase text-green-600 text-xs font-medium">{product.subCategory}</p>
              <div className="flex items-end justify-between mt-2">
                <span className="text-blue-600 text-xl font-semibold">{product.price}</span>
                <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
<div  className="flex justify-center items-center   ">

<div className="flex-shrink-0 flex justify-center items-center  relative overflow-hidden bg-[#dfb6dc] rounded-lg w-full h-full shadow-lg group  transition-shadow duration-300">
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
          <img className="relative w-40 h-40 object-contain" src="https://cdn-icons-png.flaticon.com/512/9258/9258154.png"  />
        </div>
       
      </div>

</div>


      </div>
 </div>


{/* {why choose use} */}

<section class="text-gray-700 mt-20 body-font">
  <div class="flex justify-center mt-10 text-4xl font-regular">
    Why Swapify?
  </div>
  <div class="container max-w-fit mx-auto px-5 py-12 mx-auto">
    <div class="flex flex-wrap text-center justify-center">
      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" class="w-32 mb-3" />
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Easy & Secure Exchange</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" class="w-32 mb-3" />
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Affordable & Zero Cost</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" class="w-32 mb-3" />
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Quick & Hassle-Free Deals</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" class="w-32 mb-3" />
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Trusted Student Community</h2>
        </div>
      </div>

    </div>
  </div>
</section>


   </>
  )
}
