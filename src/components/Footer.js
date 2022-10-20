import { logo } from "assets/images";

const Footer = () => {
  return (
    <section className="footer">
      <div className="imgDiv">
        <img src={logo} alt="Logo" />
      </div>

      <div className="links-contain">
        <h2>Other Links</h2>
      </div>

      <div className="social-contain">
        {/*  <a>
          <i className="fa-solid fa-facebook-f"></i>
        </a> */}
      </div>
    </section>
  );
};

export default Footer;
