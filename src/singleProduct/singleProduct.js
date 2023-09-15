import "./singleProduct.css";

const SingleProduct = ({productData}) => {
  return (
    <>
      {productData.map((product) => {
        return (
          <div className="product" key={product.id}>
            <img
              src={product.img}
              className="productImage"
              title={product.name}
              alt={product.name}
            />
            <p className="subTitle">{product.category}</p>
            <p className="productName">{product.name}</p>
            <p className="productPrice">₹{product.price}</p>
          </div>
        );
      })}
    </>
  );
};

export default SingleProduct;
