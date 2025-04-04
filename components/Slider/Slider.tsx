import clsx from "clsx";

import css from "./Slider.module.scss";

export function Slider() {
  return (
    <div className={css.Slider}>
      <div className={css.sidebar}></div>
      <div className={css.content}></div>
    </div>
  );
}
