import clsx from "clsx";

import css from "./Slider.module.scss";

import Image from "next/image";
import Link from "next/link";

import data from "@/public/data/data.json";

type sliderProps = {
  lang: "fr" | "en";
};

export function Slider({ lang }: sliderProps) {
  // Get the current language data
  const langData = data[lang][0];

  // Filter only valid keys (remove about/à propos, yemen, rdc)
  const conflictKeys = Object.keys(langData).filter(
    (key) =>
      !["about", "à propos", "rdc", "birmanie", "drc"].includes(
        key.toLowerCase()
      )
  );

  console.log("langData", langData);

  console.log("conflictKeys", conflictKeys);
  return (
    <div className={css.Slider}>
      <div className={css.sidebar}>
        {conflictKeys.map((key, index) => {
          const item = (langData as Record<string, any>)[key][0];
          const isActive = item.disponible !== "";

          const posterClass = clsx(css.poster, {
            [css.active]: isActive,
          });

          const imgClass = clsx(css["poster-image"], {
            [css.active]: isActive,
          });

          const content = (
            <Image
              src={item.src}
              alt={`Affiche du film ${item.titre}`}
              fill
              priority
              className={imgClass}
            />
          );

          return (
            <div className={posterClass} key={key}>
              {isActive ? (
                <Link href={`/${lang}/${item.pays.toLowerCase()}`}>
                  {content}
                </Link>
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
{
  /* <div className={css.Slider}>
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
    </div> */
}
