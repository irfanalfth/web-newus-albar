import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ navbarRef }) => {
  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains("dropdown-toggle")
      ? event.target
      : event.target.querySelector(".dropdown-toggle");
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add("show");
    dropDownMenu?.classList?.add("show");
  };

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains("dropdown")
      ? event.target
      : event.target.closest(".dropdown");
    const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
    const dropDownMenu = dropdown.querySelector(".dropdown-menu");

    dropDownToggler?.classList?.remove("show");
    dropDownMenu?.classList?.remove("show");
  };

  const route = useRouter();
  const dropdown = ["/about-us", "/legality", "/brosur", "/career"];

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light style-4"
      ref={navbarRef}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/assets/img/logos/newus-logo-full.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
            <li className="nav-item active">
              <Link href="/">
                <a
                  className={`nav-link ${
                    route.pathname == "/" ? "active" : ""
                  }`}
                >
                  Home
                </a>
              </Link>
            </li>
            {/* <li
              className="nav-item dropdown"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  dropdown.includes(route.pathname) ? "active" : ""
                }`}
                href="#"
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li>
                  <Link href="/about-us">
                    <a className="dropdown-item">about us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/legality">
                    <a className="dropdown-item">legality</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-services-app">
                    <a className="dropdown-item">brosur</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-shop-app">
                    <a className="dropdown-item">career</a>
                  </Link>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <Link href="/about-us">
                <a
                  className={`nav-link ${
                    route.pathname == "/about-us" ? "active" : ""
                  }`}
                >
                  About Us
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services">
                <a
                  className={`nav-link ${
                    route.pathname == "/services" ? "active" : ""
                  }`}
                >
                  services
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <a
                  className={`nav-link ${
                    route.pathname == "/blog" ? "active" : ""
                  }`}
                >
                  blog
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio">
                <a
                  className={`nav-link ${
                    route.pathname == "/portfolio" ? "active" : ""
                  }`}
                >
                  portfolio
                  <small className="hot alert-danger text-danger">hot</small>
                </a>
              </Link>
            </li>
          </ul>
          <div className="nav-side">
            <div className="d-flex align-items-center">
              <Link href="/contact-us">
                <a className="btn rounded-pill brd-gray hover-blue4 sm-butn fw-bold">
                  <span>Contact Us</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
