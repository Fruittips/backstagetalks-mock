import color from "../constants/colortheme";
import url from "../constants/url";
import Menu from "../components/Menu";
import Description from "../components/Description";
import "./Home.css";

const Cover = () => {
  return (
    <>
      <div className={"middle"}>
        <img
          src={require("../images/book_issue5.png")}
          alt="Backstage issue book"
        />
        <p> Issue no</p>
        <p> Buy here</p>
        <p> or in selected stores.</p>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <div className={"issue-wrapper"}>
        <section
          id="issue5"
          className={"issue-container"}
          style={{ backgroundColor: color.green }}
        >
          <img
            src={require("../images/book_issue5.png")}
            alt="Backstage issue book"
          />
          <p>Issue no</p>
          <p>Buy Here</p>
          <p>Or in selected stores</p>
        </section>
        <section
          id="issue4"
          className={"issue-container"}
          style={{ backgroundColor: color.orange }}
        >
          <img
            src={require("../images/book_issue4.png")}
            alt="Backstage issue book"
          />
          <p>Issue no</p>
        </section>
        <section
          id="issue3"
          className={"issue-container"}
          style={{ backgroundColor: color.yellow }}
        >
          <img
            src={require("../images/book_issue3.png")}
            alt="Backstage issue book"
          />
        </section>
        <section
          id="issue2"
          className={"issue-container"}
          style={{ backgroundColor: color.blue }}
        >
          <img
            src={require("../images/book_issue2.png")}
            alt="Backstage issue book"
          />
        </section>
        <section
          id="issue1"
          className={"issue-container"}
          style={{ backgroundColor: color.red }}
        >
          <img
            src={require("../images/book_issue1.png")}
            alt="Backstage issue book"
          />
        </section>
      </div>
      <img
        src={require("../images/prudential-logo.png")}
        alt="long logo name"
        style={{ position: "fixed", pointerEvents: "none", maxWidth: "25%" }}
      />
      <div className={"contacts-container"}>
        <a
          style={{
            color: "#251d20",
            pointerEvents: "auto",
          }}
          href="mailto:info@backstagetalks.com"
        >
          {url.email}
        </a>
        <Menu />
      </div>
      <Description />
    </>
  );
};

export default Home;
