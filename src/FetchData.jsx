import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const changeName = (event) => {
    setSearch(event.target.value);
  };
  const ascending = () => {
    let sortAscending = [...data].sort((a, b) =>
      a.brand.toUpperCase().localeCompare(b.brand.toUpperCase())
    );
    setData(sortAscending);
  };
  const descending = () => {
    let sortDescending = [...data].sort((a, b) =>
      b.brand.toUpperCase().localeCompare(a.brand.toUpperCase())
    );
    setData(sortDescending);
  };
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setData(res.data.products);
      })
      .catch((error) => {
        console.log("Something went worng...", error);
      });
  }, []);
  return (
    <div>
      <div className="borderStyle">
        <ul className="listStyle">
          <li>Our Services</li>
          <li>Curated Custom Service</li>
          <li>How Can Service Works?</li>
          <li>Rating & Reviews</li>
          <li>Price</li>
        </ul>
      </div>
      <div className="textStyle">
        <h5>Car Service Available In Hyderabad</h5>
      </div>
      <div>
        <p className="textStyle">
          Get hassel-free and professional car service,car repair,wheel car
          service,cashless insurance claim and much more in Hyderabad
        </p>
      </div>
      <br />
      <input
        type="text"
        placeholder="Search Here..."
        onChange={changeName}
        className="inputStyle"
      />
      <br />
      <button onClick={ascending} className="buttomStyle">
        Ascending
      </button>
      <button onClick={descending} className="buttomStyle">
        Descending
      </button>
      <div className="productContainer">
        {data
          .filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.brand.toUpperCase().includes(search.toUpperCase())
            ) {
              return value;
            }
          })
          .map((item) => {
            return (
              <div>
                <img
                  style={{ width: "200px", height: "200px" }}
                  src={item.images[0]}
                  alt=""
                />
                <div style={{ textAlign: "center" }}>{item.brand}</div>
                <div style={{ textAlign: "center" }}>{item.price}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FetchData;
