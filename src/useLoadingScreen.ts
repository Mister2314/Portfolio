import { useEffect } from "react";

/**
 * Animated loading screen + optional scroll lock, replicating the original
 * inline scripts: the loader is hidden after `duration` ms, and on the pages
 * that had it, scrolling is disabled until the loader hides.
 */
export function useLoadingScreen(duration: number, lockScroll: boolean) {
  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();

    function disableScroll() {
      window.addEventListener("scroll", preventDefault, { passive: false });
      window.addEventListener("wheel", preventDefault, { passive: false });
      window.addEventListener("touchmove", preventDefault, { passive: false });
      window.addEventListener("keydown", preventDefault, { passive: false });
    }

    function enableScroll() {
      window.removeEventListener("scroll", preventDefault);
      window.removeEventListener("wheel", preventDefault);
      window.removeEventListener("touchmove", preventDefault);
      window.removeEventListener("keydown", preventDefault);
    }

    if (lockScroll) {
      disableScroll();
    }

    const timeout = setTimeout(() => {
      document.getElementById("loadingScreen")?.classList.add("hidden");
      if (lockScroll) {
        enableScroll();
      }
    }, duration);

    return () => {
      clearTimeout(timeout);
      if (lockScroll) {
        enableScroll();
      }
    };
  }, [duration, lockScroll]);
}
