import { flushSync } from "react-dom";
import { Link, useNavigate, type LinkProps } from "react-router-dom";

/**
 * Route transitions via the View Transitions API (Baseline 2025 — Chrome/Edge 111+,
 * Safari 18, Firefox 144). Falls back to a 180ms CSS fade (route-fade) when the
 * browser lacks startViewTransition. The DOM update is flushed synchronously inside
 * the transition callback so React Router's swap is captured by the transition.
 */
export default function TransitionLink({ onClick, ...props }: LinkProps) {
  const navigate = useNavigate();

  return (
    <Link
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        if (
          !document.startViewTransition ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          const root = document.getElementById("root");
          root?.classList.add("route-fade");
          navigate(props.to);
          window.setTimeout(() => root?.classList.remove("route-fade"), 250);
          return;
        }
        document.startViewTransition(() => {
          flushSync(() => navigate(props.to));
        });
      }}
    />
  );
}
