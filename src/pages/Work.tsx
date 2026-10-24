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

export default function Work() {
  useAos();
  useLoadingScreen(1500, true);

  return (
    <>
      <PageStyles hrefs={["/css/work.css"]} />
      <div className="loadpage" id="loadingScreen">
        <div className="animate">Loading...</div>
      </div>

      <Header current="Works" zoomAll />

      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <a
              className="hero-left-first"
              href="https://mister2314.github.io/Final-Project/"
              target="_blank"
            >
              <div data-aos="mask" className="hero-left-top">
                <div className="hero-left-middle">
                  <img src="/img/Gamestorm.png" alt="" />
                </div>
                <div className="hero-left-bottom">
                  <div className="hero-left-bottom-texts">
                    <p>WEB SITE</p>
                    <h1>Gamestorm</h1>
                  </div>
                  <div className="hero-left-bottom-icon">{ArrowSvg}</div>
                </div>
              </div>
            </a>
            <a
              className="hero-left-third"
              href="https://mister2314.github.io/First-Project/"
              target="_blank"
            >
              <div data-aos="rise" data-aos-delay="120" className="hero-left-top3">
                <div className="hero-left-middle3">
                  <img src="/img/wade.png" alt="" />
                </div>
                <div className="hero-left-bottom3">
                  <div className="hero-left-bottom-texts3">
                    <p>WEB SITE</p>
                    <h1>Headphone</h1>
                  </div>
                  <div className="hero-left-bottom-icon3">{ArrowSvg}</div>
                </div>
              </div>
            </a>
          </div>
          <div className="hero-right">
            <div data-aos="pop" className="hero-box1-right-top">
              <h1>
                <img src="/img/star-2.png" alt="" />
                ALL PROJECTS
                <img src="/img/star-2.png" alt="" />
              </h1>
            </div>
            <div className="hero-right-container">
              <a
                className="hero-left-second"
                href="https://mister2314.github.io/Motorcycle-Website/"
                target="_blank"
              >
                <div data-aos="rise" className="hero-left-top2">
                  <div className="hero-left-middle2">
                    <img src="/img/grand prix.png" alt="" />
                  </div>
                  <div className="hero-left-bottom2">
                    <div className="hero-left-bottom-texts2">
                      <p>WEB SITE</p>
                      <h1>Motorcycle</h1>
                    </div>
                    <div className="hero-left-bottom-icon">{ArrowSvg}</div>
                  </div>
                </div>
              </a>

              <a
                className="hero-left-second"
                href="https://mister2314.github.io/Film-Website/"
                target="_blank"
              >
                <div data-aos="rise" className="hero-left-top2">
                  <div className="hero-left-middle2">
                    <img src="/img/trending releases.png" alt="" />
                  </div>
                  <div className="hero-left-bottom2">
                    <div className="hero-left-bottom-texts2">
                      <p>WEB SITE</p>
                      <h1>Film</h1>
                    </div>
                    <div className="hero-left-bottom-icon">{ArrowSvg}</div>
                  </div>
                </div>
              </a>
              <a
                className="hero-left-second"
                href="https://mister2314.github.io/Hsr-template/"
                target="_blank"
              >
                <div data-aos="rise" className="hero-left-top2">
                  <div className="hero-left-middle2">
                    <img src="/img/Hsr.jpg" alt="" />
                  </div>
                  <div className="hero-left-bottom2">
                    <div className="hero-left-bottom-texts2">
                      <p>WEB SITE</p>
                      <h1>Honkai Star Rail</h1>
                    </div>
                    <div className="hero-left-bottom-icon">{ArrowSvg}</div>
                  </div>
                </div>
              </a>
              <a className="hero-left-second" href="">
                <div data-aos="rise" className="hero-left-top2">
                  <div className="hero-left-middle2">
                    <img src="/img/coming soon.png" alt="" />
                  </div>
                  <div className="hero-left-bottom2">
                    <div className="hero-left-bottom-texts2">
                      <p>WEB SITE</p>
                      <h1>Coming soon</h1>
                    </div>
                    <div className="hero-left-bottom-icon">{ArrowSvg}</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
