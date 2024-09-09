import "./navbar.css";

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar ">
        <div className="container d-flex justify-content-between align-items-center p-2">
          <span>Welcome To Worldwide Superstore</span>
          <div className="">
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
            <a href="#">FAQs</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg container">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span className="super-name fs-1">Super</span>{" "}
            <span className="store-name fw-normal">Store</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="container collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              {/* Dropdowns */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Shop
                  <i className="bi bi-chevron-down ms-2 "></i>
                </a>
                <ul className="dropdown-menu custom-dropdown">
                  <li className="nav-item dropdown">
                    <ul
                      className="dropdown-menu multi-column-dropdown"
                      aria-labelledby="shopDropdown"
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <h6 className="dropdown-header">Product Types</h6>
                          <a className="dropdown-item" href="#">
                            Simple Products
                          </a>
                          <a className="dropdown-item" href="#">
                            Grouped Products{" "}
                          </a>
                          <a className="dropdown-item" href="#">
                            External/Affiliate Products
                          </a>
                          <a className="dropdown-item" href="#">
                            Variable Products
                          </a>
                          <a className="dropdown-item" href="#">
                            Sale Products
                          </a>
                          <a className="dropdown-item" href="#">
                            Upsell Products
                          </a>
                          <a className="dropdown-item" href="#">
                            Cross-sell Products
                          </a>
                        </div>
                        <div className="col-md-4">
                          <h6 className="dropdown-header">WooCommerce Pages</h6>
                          <a className="dropdown-item" href="#">
                            Shop Page
                          </a>
                          <a className="dropdown-item" href="#">
                            Category Page
                          </a>
                          <a className="dropdown-item" href="#">
                            Shopping Cart
                          </a>
                          <a className="dropdown-item" href="#">
                            Checkout Page
                          </a>
                          <a className="dropdown-item" href="#">
                            My Account
                          </a>
                          <a className="dropdown-item" href="#">
                            Shop Ajax Filter
                          </a>
                          <a className="dropdown-item" href="#">
                            Privacy Policy
                          </a>
                        </div>
                        <div className="col-md-4">
                          <h6 className="dropdown-header">Product Features</h6>
                          <a className="dropdown-item" href="#">
                            Stock Progress Bar
                          </a>
                          <a className="dropdown-item" href="#">
                            Product Brand
                          </a>
                          <a className="dropdown-item" href="#">
                            Countdown Timer
                          </a>
                          <a className="dropdown-item" href="#">
                            Size Guide Table
                          </a>
                          <a className="dropdown-item" href="#">
                            Custom Tabs
                          </a>
                          <a className="dropdown-item" href="#">
                            Product Variations
                          </a>
                          <a className="dropdown-item" href="#">
                            Product Video
                          </a>
                        </div>
                      </div>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Categories <span className="badge bg-success">SALE</span>
                  <i className="bi bi-chevron-down ms-2"></i>
                </a>
                <ul className="dropdown-menu custom-dropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Women
                    </a>
                    <ul className="dropdown-menu sub-dropdown">
                      <li>
                        <a className="dropdown-item" href="#">
                          Dresses
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Tops
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Bottoms
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Men
                    </a>
                    <ul className="dropdown-menu sub-dropdown">
                      <li>
                        <a className="dropdown-item" href="#">
                          Shirts
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Pants
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Shoes
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Kids
                    </a>
                    <ul className="dropdown-menu sub-dropdown">
                      <li>
                        <a className="dropdown-item" href="#">
                          Girls
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Boys
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Babies
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Accessories
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Products <span className="badge bg-danger">HOT</span>
                  <i className="bi bi-chevron-down ms-2"></i>
                </a>
                <ul className="dropdown-menu custom-dropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Submenu 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Submenu 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Submenu 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Top Deals
                  <i className="bi bi-chevron-down ms-2"></i>
                </a>
                <ul className="dropdown-menu custom-dropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Submenu 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Submenu 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Submenu 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Elements
                  <i className="bi bi-chevron-down ms-2"></i>
                </a>
                <ul className="dropdown-menu custom-dropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Submenu 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Submenu 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Submenu 3
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="d-flex align-items-center ms-auto">
              <a href="#" className="nav-link ">
                <i className="bi bi-person-circle"></i>
                <span className="fw-bold">Account</span>
                <br />
                <p className="ms-3">Sign in</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/*End Navbar*/}
      <div className="end-bar container">
        <div className="categories d-flex align-items-center">
          <i className="bi bi-list"></i>
          <span>All Categories</span>
        </div>

        <div className="search-bar">
          <input type="text" className="form-control" placeholder="Search..." />
          <button className="search-button">
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="icons d-flex align-items-center">
          <div className="wishlist d-flex align-items-center">
            <i className="bi bi-star"></i>
            <span className="counter">0</span>
            <span>Wishlist</span>
          </div>
          <div className="bag d-flex align-items-center">
            <i className="bi bi-bag"></i>
            <span className="counter">0</span>
            <span>My Bag</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
