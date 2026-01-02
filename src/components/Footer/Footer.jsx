import "./Footer.css";
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-brand">
          <h3> Everyday Chef</h3>
          <p>
            A simple recipe discovery app to help you cook better every day.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Recipes</li>
            <li>About</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-social">
          <h4>Follow Us</h4>

          <div className="social-icons">
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>

          <p className="footer-status">
             Working on this project
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Everyday Chef | Built by
          Dheeraj Srivastava
        </p>
      </div>
    </footer>
  );
}

export default Footer;
