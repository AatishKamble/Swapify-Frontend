 import CategoryCard from "../CategoryCard/CategoryCard";
 
 const PopularCategory =()=>{

    const categories = [
        {
          title: "Books & Study",
          category: "Academic",
          image: "https://cdn-icons-png.flaticon.com/512/6347/6347299.png",
          bgColor: "bg-blue-500"
        },
        {
          title: "Electronics",
          category: "Gadgets",
          image: "https://cdn-icons-png.flaticon.com/512/5175/5175273.png",
          bgColor: "bg-purple-500"
        },
        {
          title: "Photography",
          category: "Equipment",
          image: "https://cdn-icons-png.flaticon.com/512/7178/7178848.png",
          bgColor: "bg-pink-500"
        },
        {
          title: "Gaming",
          category: "Entertainment",
          image: "https://cdn-icons-png.flaticon.com/512/10630/10630188.png",
          bgColor: "bg-green-500"
        },
        {
          title: "Sports",
          category: "Fitness",
          image: "https://cdn-icons-png.flaticon.com/512/9839/9839844.png",
          bgColor: "bg-red-500"
        },
        {
          title: "Furniture",
          category: "Home",
          image: "https://cdn-icons-png.flaticon.com/512/4392/4392541.png",
          bgColor: "bg-yellow-500"
        }
    ];



    return(

        <>
  
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Popular Categories</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <div key={index} >
                  <CategoryCard {...category} />
                </div>
              ))}
            </div>
          </div>
        </>

    );
}

export default PopularCategory;