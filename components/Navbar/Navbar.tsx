import clsx from "clsx";

import css from "./Navbar.module.scss";

type NavbarProps = {
  setActiveSection: (section: "about" | "trailers") => void;
  activeSection: "about" | "trailers";
};

export function Navbar({ setActiveSection, activeSection }: NavbarProps) {
  return (
    <div className={css.Navbar}>
      <p
        className={clsx(css.link, activeSection === "about" && css.active)}
        onClick={() => {
          setActiveSection("about");
        }}
      >
        À propos
      </p>
      <p
        className={clsx(css.link, activeSection === "trailers" && css.active)}
        onClick={() => {
          setActiveSection("trailers");
        }}
      >
        Bande d'annonces
      </p>
    </div>
  );
}
