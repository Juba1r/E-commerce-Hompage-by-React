import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-light">
      <div className="container">
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-4 mb-3">
            <h5>Contact Information</h5>
            <p>99 New Theme St. XY, USA 12345, Beside the Sun point land.</p>
            <h4 className="text-orange">(+01) 123-456-789</h4>
            <p>demo@example.com</p>
            <div className="social-icons">
              <a href="#" className="text-light me-2">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-light me-2">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="text-light me-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light me-2">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Help Section */}
          <div className="col-md-2 mb-3">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Term & Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Service
                </a>
              </li>
            </ul>
          </div>

          {/* Policy Section */}
          <div className="col-md-2 mb-3">
            <h5>Policy</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Info Section */}
          <div className="col-md-2 mb-3">
            <h5>Info</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Our Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="col-md-12 text-center mt-4">
            <p>© 2024 Superstore - WordPress Theme by Avanam</p>
            <div className="payment-methods">
              <img alt="Visa" className="me-2" />
              <img alt="American Express" className="me-2" />
              <img alt="Maestro" className="me-2" />
              <img alt="Mastercard" className="me-2" />
              <img alt="PayPal" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
