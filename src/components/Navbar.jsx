import React from "react";
import "../components/Navbar.css";
const Navbar = () => {
  return (
    <div className="mainStyle">
      <div className="backgroundImageStyle">
        <div className="mainContainer">
          <div className="leftSideContainer">
            <div className="headerStyle">
              <img src="/src/assets/pexels.jpg" alt="logo" />
              <h1 style={{ color: "white" }}>Car Service</h1>
            </div>
            <div>
              <select name="" id="">
                <option value="hyderbad">Hyderbad</option>
                <option value="new Delhi">New Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="agra">Agra</option>
              </select>
            </div>
          </div>
          <div className="rightSideContainer">
            <ul className="listStyle">
              <li>Spares</li>
              <li>Blog</li>
              <li>More</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
        <div className="secondContainer">
          <div className="leftContainerStyle">
            <h2>Experience The Best Car Service In Hydrabd</h2>
            <p>We Provide Our Services In Over 100+ Major Cites also.</p>
            <br />
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, iure.
            Aliquid aliquam qui voluptatibus, error excepturi laborum. Nihil
            ipsam iure laborum totam dolorum laboriosam sit aut voluptatem
            repellat laudantium id veniam, nostrum quaerat! Ducimus sunt totam
            a. Nostrum enim, ullam corrupti, nobis est ipsa quaerat deserunt
            molestiae ut itaque adipisci consequuntur.
          </div>
          <div className="rightContainterStyle">
            <div className="boxStyle">
              <h3>Book your Car Servie Now!</h3>
              <p>Get instant quotes for your car service</p>
              <select name="" id="" style={{ width: "165px" }}>
                <option value=""></option>
              </select>
              <br />
              <input type="text" placeholder="Enter your Mobile Number" />
              <br />
              <button className="buttonStyle">Check Pricess For Free</button>
            </div>
          </div>
        </div>
      </div>
      <div className="upperStyle">
        <ul className="ListStyle">
          <li>Our Services</li>
          <li>Curated Custom Service</li>
          <li>How Car Service Service?</li>
          <li>Rating & Reviews</li>
          <li>Price</li>
        </ul>
        <h2 style={{ margin: "25px" }}>Car Services Available in Hyderabad</h2>
        <p style={{ width: "659px", margin: "25px" }}>
          Get hassle-free and proffesional car service, car repair, wheel car
          service, cashless insurance claim and much more in hyderabad
        </p>
      </div>
    </div>
  );
};

export default Navbar;
