import { useEffect } from "react";

/**
 * AOS-like scroll reveals via IntersectionObserver.
 * Elements carrying `data-aos` animate when they enter the viewport
 * (AOS default anchor: element top meets viewport bottom - 120px offset),
 * and re-hide when they leave (once: false, AOS default).
 */
export function useAos() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-aos]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          } else {
            entry.target.classList.remove("aos-animate");
          }
        }
      },
      { rootMargin: "0px 0px -120px 0px" }
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);
}
