import React from "react";
import Cart from "../cartComponent/Cart";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

const FilteredProducts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const { product } = useSelector((store) => store);
  
  console.log(product?.products?.content);

  // Get current page from query, default to 1
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = product.products?.totalPages || 1;

  function handlePageChange(event, page) {
    searchParams.set("page", page);
    navigate({ search: `?${searchParams.toString()}` });
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="grid grid-cols-3 px-10 justify-between mx-auto gap-8">
        {product.products?.content?.map((item, index) => (
          <div key={item._id} className="flex justify-center">
            <Cart
              productName={item.title}
              productImage={item.imageURL}
              productPrice={item.price}
              productId={item._id}
            />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="col-span-3 flex items-end justify-center">
          <div className="w-full h-20 flex justify-center items-center">
            <Pagination
              count={totalPages}
              variant="outlined"
              shape="rounded"
              page={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FilteredProducts;
