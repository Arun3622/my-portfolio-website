import "./footer.css";
import email from "./img/email_logo.png";
import instagram from "./img/instagram_logo.png";
import linkedin from "./img/linkedin_icon.png";

function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <div className="footer">
        <div className="phone">
          <h2>phone</h2>
          <h4>+919372638064</h4>
        </div>
        <div className="email">
          <h2>Email</h2>
          <a href="https://mail.google.com/">
            <img src={email} alt="email" width={29} height={29}></img>
          </a>
          <div className="emailtext">
          <h5>Arunnirbodhprjapti@gmial.com</h5>
          </div>
        </div>
        <div className="followme">
          <h2>Follow Me</h2>
          <div className="instagramimg">
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="instagram" width={29} height={29}></img>
          </a>
          <a href="https://www.linkedin.com/in/arun-prajapati-86b95b277/">
            <img src={linkedin} alt="linkedin" width={29} height={29}></img>
          </a>
          </div>
        </div>
        <div className="by">
          <h4>© 2024 By Arun prjapati</h4>
        </div>
      </div>
    </>
  );
}
export default Footer;
