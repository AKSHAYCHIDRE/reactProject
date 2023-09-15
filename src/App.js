import { useState } from "react";

import productData from "./singleProduct/data";
import Categories from "./categories/categories";
import SingleProduct from "./singleProduct/singleProduct";
import "../src/index.css";

const allCategories = [
  "all",
  ...new Set(productData.map((item) => item.category)),
];

const App = () => {
  const [product, setProduct] = useState(productData);

  const filterItems = (category) => {
    if (category === "all") {
      setProduct(productData);
      return;
    }



    const newFilterItems = productData.filter(
      (item) => item.category === category
    );
    setProduct(newFilterItems);
  };

  return (
    <>
      <div className="container">
        <Categories allCategories={allCategories} filterItems={filterItems} />
        <div className="productList">
          <SingleProduct productData={product} />
        </div>
      </div>
    </>
  );
};

export default App;
