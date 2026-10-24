import { useEffect } from "react";

/**
 * Injects the page's stylesheets exactly like the original multi-page site
 * (one <link> per page, in the original order) and removes them on unmount,
 * so per-page selectors can never collide across routes.
 */
export default function PageStyles({ hrefs }: { hrefs: string[] }) {
  useEffect(() => {
    const links = hrefs.map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
      return link;
    });
    return () => {
      for (const link of links) {
        link.remove();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
