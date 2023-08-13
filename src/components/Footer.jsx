import kodeCamp from "../assets/img/kodecamp-logo.png";
import kodeHauz from "../assets/img/KodeHauz-Logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div>
          <img src={kodeCamp} alt="" />
        </div>
        <p>KodeCamp Internship Task</p>
        <div>
          <img src={kodeHauz} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
