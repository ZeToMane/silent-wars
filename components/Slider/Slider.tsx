import clsx from "clsx";

import css from "./Slider.module.scss";

import Image from "next/image";
import Link from "next/link";

export function Slider() {
  return (
    <div className={css.Slider}>
      <div className={css.sidebar}>
        <div className={clsx(css["poster"], css["active"])}>
          <Link href="/les-cris-de-khartoum">
            <Image
              src="/affiches/Soudan.webp"
              alt="Affiche du film Les Cris de Khartoum"
              fill
              className={clsx(css["poster-image"], css["active"])}
            />
          </Link>
        </div>
        <div className={css.poster}>
          <Image
            src="/affiches/Birmanie.webp"
            alt="Affiche du film Les Cris de Khartoum"
            fill
            className={clsx(css["poster-image"])}
          />
        </div>
        <div className={css.poster}>
          <Image
            src="/affiches/Cameroun.webp"
            alt="Affiche du film Les Cris de Khartoum"
            fill
            className={clsx(css["poster-image"])}
          />
        </div>
      </div>
    </div>
  );
}
