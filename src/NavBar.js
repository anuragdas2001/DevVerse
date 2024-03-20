import React from "react";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <nav
            className="navbar navbar-expand"
            style={{ backgroundColor: "white" }}
          >
            <a
              className="navbar-brand ms-0"
              style={{
                color: "green",
                fontSize: "xx-large",
                fontWeight: "bolder",
              }}
              href="/"
              target="_self"
            ></a>
            <a
              className="navbar-brand"
              style={{
                color: "green",
                fontSize: "xx-large",
                fontWeight: "bolder",
              }}
              href="/"
              target="_self"
            >
              DevVerse
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active ms-0 home"
                    style={{ color: "green" }}
                    aria-current="page"
                    href="/"
                    target="_self"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    target="_blank"
                    className="nav-link ms-0 download"
                    style={{ color: "green" }}
                    href="#Download"
                  >
                    Feed
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Hackathons
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Download app
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider"></hr>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Careers
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              {/* <img class="me-5" style={{height:'50px',width:'50px'}} src="https://cdn-icons-png.flaticon.com/128/14656/14656588.png"></img> */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
