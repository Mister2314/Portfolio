import { useEffect, useRef } from "react";
import Header from "../Header";
import PageStyles from "../PageStyles";
import { useAos } from "../useAos";
import { useLoadingScreen } from "../useLoadingScreen";

/** Exact port of the original assets/js/blog.js TxtType typewriter. */
class TxtType {
  toRotate: string[];
  el: HTMLElement;
  loopNum = 0;
  period: number;
  txt = "";
  isDeleting = false;
  private stopped = false;

  constructor(el: HTMLElement, toRotate: string[], period: string | null) {
    this.toRotate = toRotate;
    this.el = el;
    this.period = parseInt(period || "", 10) || 2000;
    this.tick();
  }

  tick = () => {
    if (this.stopped) return;
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(this.tick, delta);
  };

  stop() {
    this.stopped = true;
  }
}

export default function Blog() {
  useAos();
  useLoadingScreen(1500, true);
  const typewriteRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = typewriteRef.current;
    let writer: TxtType | undefined;
    if (el) {
      const toRotate = el.getAttribute("data-type");
      const period = el.getAttribute("data-period");
      if (toRotate) {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          // Reduced motion: print the phrase once, no loop, still caret.
          const first = (JSON.parse(toRotate) as string[])[0];
          el.innerHTML = '<span class="wrap">' + first + "</span>";
        } else {
          writer = new TxtType(
            el,
            JSON.parse(toRotate) as string[],
            period
          );
        }
      }
    }

    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    return () => {
      writer?.stop();
      css.remove();
    };
  }, []);

  return (
    <>
      <PageStyles hrefs={["/css/blog.css"]} />
      <div className="loadpage" id="loadingScreen">
        <div className="animate">Loading...</div>
      </div>

      <Header />

      <section className="hero">
        <h1>
          <a
            ref={typewriteRef}
            href=""
            className="typewrite"
            data-period="2000"
            data-type='[ "Coming soon...", "Coming soon...", "Coming soon...", "Coming soon..." ]'
          >
            <span className="wrap"></span>
          </a>
        </h1>
      </section>
    </>
  );
}
