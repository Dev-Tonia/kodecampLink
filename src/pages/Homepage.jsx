import Header from "../components/Header";
import List from "../components/List";
import slack from "../assets/img/slack.png";
import github from "../assets/img/Social-icon.png";
import Footer from "../components/Footer";

const Homepage = () => {
  let linkTexts = [
    "Twitter Link",
    "KodeCamp Team",
    "KodeCamp Books",
    "Python Books",
    "Background Check for Coders",
    "Design books",
  ];
  return (
    <main className="">
      <div className="container">
        <Header />
        {linkTexts.map((text) => {
          return <List text={text} />;
        })}
        <div className="social-link">
          <img src={slack} alt="" />
          <img src={github} alt="" />
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default Homepage;
