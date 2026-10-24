import { Link } from "react-router-dom";
import Header from "../Header";
import PageStyles from "../PageStyles";
import { useAos } from "../useAos";
import { useLoadingScreen } from "../useLoadingScreen";

const ArrowSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="1.5"
      d="m14 16.597l7.007-3.125c1.324-.59 1.324-2.354 0-2.944L4.497 3.164c-1.495-.667-3.047.814-2.306 2.202l3.152 5.904c.245.459.245 1 0 1.458l-3.152 5.904c-.74 1.388.81 2.87 2.306 2.202l4.752-2.119"
    />
  </svg>
);

const StarSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 64 64"
  >
    <path
      fill="currentColor"
      d="M37.834 34.414L62 32l-24.166-2.417l15.38-18.797l-18.798 15.381L32 2l-2.417 24.167l-18.797-15.381l15.38 18.797L2 32l24.166 2.414l-15.38 18.799l18.797-15.379L32 62l2.416-24.166l18.798 15.379z"
    />
  </svg>
);

export default function Index() {
  useAos();
  useLoadingScreen(1700, false);

  return (
    <>
      <PageStyles hrefs={["/css/bootstrap.min.css", "/css/style.css"]} />
      <div className="loadpage" id="loadingScreen">
        <div className="animate">Loading...</div>
      </div>

      <Header current="Home" />

      <section className="hero">
        <div className="hero-container">
          <div className="s1-box1-container">
            <a data-aos="fade-up" href="#">
              <div className="s1-box1">
                <div className="s1-imgbox">
                  <img src="/img/Kaneki Ken Icon.png" alt="" />
                </div>
                <div className="s1-textbox">
                  <h4>A Front End Developer</h4>
                  <h1>
                    Xəyal <br /> Hüseynli.
                  </h1>
                  <p>I am a Front End Developer based in Azerbaijan.</p>
                </div>
              </div>
            </a>

            <div className="s1-rightbox1">
              <div data-aos="fade-up" className="s1-rightbox1-top">
                <p>
                  LATEST WORK AND <span>FEATURED</span> {StarSvg} LATEST WORK AND{" "}
                  <span>FEATURED</span> {StarSvg}{" "}
                </p>
              </div>
              <div className="s1-rightbox1-bottom">
                <Link data-aos="fade-up" to="/moreabout">
                  <div className="s1-rightbox1-bottom-boxes">
                    <div className="s1-rightbox1-bottom-boxes-img">
                      <img src="/img/Signature.png" alt="" />
                    </div>
                    <div className="s1-rightbox1-bottom-boxes-bottom">
                      <div className="s1-rightbox1-bottom-boxes-bottom-left">
                        <h5>more about me</h5>
                        <h1>Credentials</h1>
                      </div>
                      <div className="s1-rightbox1-bottom-boxes-bottom-right">
                        {ArrowSvg}
                      </div>
                    </div>
                  </div>
                </Link>
                <Link data-aos="fade-up" to="/work">
                  <div className="s1-rightbox1-bottom-boxes">
                    <div className="s1-rightbox1-top1">
                      <img src="/img/my-works.png" alt="" />
                    </div>
                    <div className="s1-rightbox1-bottom-boxes-bottom1">
                      <div className="s1-rightbox1-bottom-boxes-bottom-left1">
                        <h2>showcase</h2>
                        <h1>Projects</h1>
                      </div>

                      <div className="s1-rightbox1-bottom-boxes-bottom-right1">
                        {ArrowSvg}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="s2-boxes-container">
            <Link data-aos="fade-up" className="s2-box1-a1" to="/blog">
              <div className="s2-box1">
                <div className="s2-box1-top">
                  <img src="/img/gfonts.png" alt="" />
                </div>
                <div className="s2-box1-bottom">
                  <div className="s2-box1-bottom-leftbox">
                    <h4>Blog</h4>
                    <h1>GFonts</h1>
                  </div>
                  <div className="s2-box1-bottom-rightbox">{ArrowSvg}</div>
                </div>
              </div>
            </Link>
            <Link data-aos="fade-up" className="work-together-aa" to="/contact">
              <div className="work-together">
                <img
                  className="work-together-img"
                  src="/img/aboutme-icon.png"
                  alt=""
                />
                <h1>
                  Let's <br />
                  work <span>together</span>{" "}
                </h1>
                {ArrowSvg}
              </div>
            </Link>

            <div data-aos="fade-up" className="s2-box3">
              <div className="s2-box3-top">
                <a
                  className="s2-box3-a3"
                  href="https://www.instagram.com/morphy2314/"
                >
                  <div className="s2-box3-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="CurrentColor"
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                      />
                    </svg>
                  </div>
                </a>
                <a className="s2-box3-a3" href="https://github.com/Mister2314">
                  <div className="s2-box3-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="CurrentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                      />
                    </svg>
                  </div>
                </a>
              </div>

              <div className="s2-box3-bottom">
                <h4>Stay with me</h4>
                <h1>Profiles</h1>
                {ArrowSvg}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
