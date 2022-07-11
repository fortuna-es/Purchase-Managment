import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const getDAta = () => {
    // fetch(
    //   "http://192.168.0.107:8084/purchase/getAllProducts?startPosition=0&maxResult=10"
    // )
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setProducts(json.model);
    //     console.log(json);
    //     console.log(products);
    //   });

    fetch(
      "http://192.168.0.107:8084/purchase/getAllProducts?startPosition=0&maxResult=10"
    )
      .then((res) => res.json())
      .then((json) => {
        setProducts(() => json.model);
      });
  };

  useEffect(() => {
    getDAta();
  }, []);
  return (
    <div className="container1">
      <div className="filter">
        {/* <label>date1</label> */}
        <input
          type="date"
          onChange={(e) => {
            setDate1(e.target.value);
            console.log(date1.toISOString());
          }}
        />
        {/* <label>date2</label> */}
        <input
          type="date"
          onChange={(e) => {
            setDate2(e.target.value);
          }}
        />
      </div>
      <div className="container">
        {products
          .filter((val) => {
            if (date1 == "") {
              return val;
            } else if (val.registeredOn >= new Date(date1).toISOString()) {
              return val;
            }
          })
          .filter((val) => {
            if (date2 == "") {
              return val;
            } else if (val.registeredOn <= new Date(date2).toISOString()) {
              return val;
            }
          })
          .map((product) => {
            return (
              <div className="cards" key={product.id}>
                <div className="card-body">
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                </div>
                <div className="card-footer">
                  <Link to={`/${product.id}`}>
                    <button>See More</button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
