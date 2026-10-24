import { Link } from "react-router-dom";
import Header from "../Header";
import PageStyles from "../PageStyles";
import { useAos } from "../useAos";
import { useLoadingScreen } from "../useLoadingScreen";

export default function MoreAbout() {
  useAos();
  useLoadingScreen(1500, true);

  return (
    <>
      <PageStyles hrefs={["/css/moreabout.css"]} />
      <div className="loadpage" id="loadingScreen">
        <div className="animate">Loading...</div>
      </div>

      <Header current="About" />

      <section className="hero">
        <div className="left-page">
          <div data-aos="fade-up" className="box-container">
            <div className="box">
              <div className="box-top">
                <img src="/img/Kaneki Ken Icon.png" alt="" />
              </div>
              <div className="box-medium">
                <h3>Hüseynli Xəyal</h3>
                <p>@Morpheus2314</p>
              </div>
              <div className="box-medium-2">
                <a
                  target="_blank"
                  href="https://www.instagram.com/morphy2314"
                  className="instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="CurrentColor"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Mister2314"
                  className="github"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="CurrentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                    />
                  </svg>
                </a>
              </div>

              <Link to="/contact" className="box-bottom">
                <p>Contact Me</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="right-page">
          <div data-aos="fade-up" className="right-first">
            <h2>ABOUT ME</h2>
            <p>
              Hi. My name is Xeyal and I'm 17 years old. I'm studying at the
              College of Industry and Technology. I'm taking a course at Matrix
              Training Center to become a Front-End Developer.
              <br />
              <br />
              <br />
              My knowledge is too little to be a developer, but I'm doing my
              best to learn. I've almost learned HTML and CSS now, but my
              knowledge of JS is very little.
            </p>
          </div>
          <div data-aos="fade-up" className="right-second">
            <h2>EDUCATION</h2>
            <h5>2022-2025</h5>
            <h4>
              Repair and servicing of computer network equipment
            </h4>
            <h6>
              College of İndustry and Technology
            </h6>
            <p>
              Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
              porttitor rhoncus dolor purus non enim praesent in elementum sahas
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etisam dignissim diam quis enim lobortis viverra orci sagittis eu
              volutpat odio facilisis mauris sit.
            </p>
            <h5>2022.07-2022.11</h5>
            <h4>Front End Developer</h4>
            <h6>Matrix Academy</h6>
            <p>
              Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
              porttitor rhoncus dolor purus non enim praesent in elementum sahas
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etisam dignissim diam quis enim lobortis viverra orci sagittis eu
              volutpat odio facilisis mauris sit.
            </p>
          </div>
          <div data-aos="fade-up" className="right-end">
            <div className="right-end-left">
              <h2>SKILLS</h2>
              <span>70%</span>
              <h4>HTML</h4>
              <p>Non enim praesent</p>

              <span>70%</span>
              <h4>CSS</h4>
              <p>Non enim praesent</p>

              <span>10%</span>
              <h4>JavaScript</h4>
              <p>Non enim praesent</p>
            </div>
            <div className="right-end-right">
              <h2>AWARDS</h2>
              <span>Matrix Academy</span>
              <h4>Front End Development</h4>
              <p>Non enim praesent</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
