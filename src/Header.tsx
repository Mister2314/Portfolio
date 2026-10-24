import TransitionLink from "./TransitionLink";

interface HeaderProps {
  /** Which nav entry points at the current page (rendered with href=""). */
  current?: "Home" | "About" | "Works" | "Contact";
  /** work.html and contact.html also carry data-aos="zoom-out" on each header box. */
  zoomAll?: boolean;
}

const items: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/moreabout" },
  { label: "Works", to: "/work" },
  { label: "Contact", to: "/contact" },
];

export default function Header({ current, zoomAll }: HeaderProps) {
  const z = zoomAll ? { "data-aos": "zoom-out" } : {};
  return (
    <header>
      <div data-aos="zoom-out" className="header-container">
        <div {...z} className="headerbox1">
          <h4>Morfyus</h4>
        </div>
        <div {...z} className="headerbox2">
          <ul>
            {items.map((item) =>
              item.label === current ? (
                <li key={item.label} className={item.label}>
                  <a href="" aria-current="page">{item.label}</a>
                </li>
              ) : (
                <li key={item.label} className={item.label}>
                  <TransitionLink to={item.to}>{item.label}</TransitionLink>
                </li>
              )
            )}
          </ul>
        </div>
        <div {...z} className="headerbox3">
          <a href="https://wa.me/994507032186">Let's talk</a>
        </div>
      </div>
    </header>
  );
}
