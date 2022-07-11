import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const { productid } = useParams();

  const getProduct = () => {
    fetch("http://192.168.0.107:8084/purchase/getAllProducts?startPosition=0&maxResult=10")
      .then((res) => res.json())
      .then((json) => {
        const singleProduct = json.model.find((product) => product.id === productid);
        setProduct(singleProduct);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container">
      <div className="cards details" key={product.id}>
        <div className="card-body">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.quantityOnStock}</p>
          <p>{product.registeredOn}</p>
          <p>{product.lastUpdatedOn}</p>
        </div>
        <div className="card-footer">
          <Link to="/">
            <button>Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
