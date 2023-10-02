import { Button } from "bootstrap";
import React from "react";

const AppNavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            <img src="/src/assets/download.jpeg" alt="" />
            Car Service
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item " href="#">
                      Hyderabad
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item " href="#">
                      New Delhi
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mumbai
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Agra
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="d-flex navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Spares
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  More
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="midContainer">
        <div className="leftSide">
          <h3 style={{ color: "white" }}>
            Experience The Best Car Services In Hyedrabad
          </h3>
          <p style={{ color: "white" }}>
            We Provide Our Services in Over 100+ Major Cities also.
          </p>
          <br />
          <p style={{ color: "white" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos natus
            modi quos sapiente fuga dolor et alias nam pariatur blanditiis iure
            qui expedita earum error, doloribus unde, excepturi eum sit!
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
            className="star-svg"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          <span style={{ color: "white" }}>4.7</span>
          <p style={{ color: "white" }}>Based on 1000000+ Reviews</p>
        </div>
        <div className="rightSide">
          <div className="box">
            <h5>Book Your Car Service Now!</h5>
            <p>Get instant qouts for your car service</p>
            <span>
              <span className="star-Svg">Rating</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
                className="star-Svg"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <span className="star-Svg">4.7 /5</span>
            </span>
            <div class="form-group">
              <label for="exampleDropdown">Select your Car:</label>
              <select class="form-control" id="exampleDropdown">
                <option value="option1">BMW</option>
                <option value="option2">Audi</option>
                <option value="option3">Suzik</option>
                <option value="option4">nano</option>
              </select>
            </div>
            <input
              type="text"
              className="form-control"
              id="exampleInput"
              placeholder="Enter text here"
            />
            <button className="selectStyle">Check Price For Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
