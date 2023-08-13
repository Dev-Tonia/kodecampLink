import profileImg from "../assets/img/profile__img.png";
import icon from "../assets/img/Avatar-share-button.png";
import icon_m from "../assets/img/Avatar-share-button-m.png";

const Header = () => {
  return (
    <>
      <div className="header-icon">
        <img src={icon} alt="" className="lg" />
        <img src={icon_m} alt="" className="md" />
      </div>

      <div className="header">
        <div className="img-wrapper">
          <img src={profileImg} alt="" />
        </div>
        <h2>John Doe</h2>
      </div>
    </>
  );
};

export default Header;
