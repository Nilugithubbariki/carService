import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const changeName = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        let respons = await fetch("https://dummyjson.com/products");
        let jsonData = await respons.json();
        console.log(jsonData.products);
        setData(jsonData.products);
      } catch (error) {
        console.log("Something went wrong...", error);
      }
    };
    fetchData();
  }, []);
  const ascending = () => {
    const sortAscending = [...data].sort((a, b) =>
      a.brand.toUpperCase().localeCompare(b.brand.toUpperCase())
    );
    setData(sortAscending);
  };
  const descending = () => {
    const sortDescending = [...data].sort((a, b) =>
      b.brand.toUpperCase().localeCompare(a.brand.toUpperCase())
    );
    setData(sortDescending);
  };
  return (
    <div>
      <Navbar />
      <div className="ProductContainerStyle">
        <input type="text" placeholder="Search Here..." onChange={changeName} />
        <br />
        <button onClick={ascending}>Ascending</button>
        <button onClick={descending}>Descending</button>
        <div className="productContainer">
          {data
            .filter((product) => {
              if (search === "") {
                return product;
              } else if (
                product.brand.toUpperCase().includes(search.toUpperCase())
              ) {
                return product;
              }
            })
            .map((item) => {
              return (
                <div>
                  <img
                    src={item.images[0]}
                    alt=""
                    style={{ width: "111px", height: "111px" }}
                  />
                  <div>{item.brand}</div>
                  <div>{item.price}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
