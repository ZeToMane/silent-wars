"use client";

import clsx from "clsx";

import css from "./LanguageSwitcher.module.scss";

import { usePathname, useRouter } from "next/navigation";

const slugMap = {
  frToEn: {
    soudan: "sudan",
    yemen: "yemen",
    cameroun: "cameroon",
    birmanie: "birmanie",
    rdc: "drc",
  },
  enToFr: {
    sudan: "soudan",
    yemen: "yemen",
    cameroon: "cameroun",
    birmanie: "birmanie",
    drc: "rdc",
  },
} as const;

type Props = {
  lang: "fr" | "en";
};

export function LanguageSwitcher({ lang }: Props) {
  const pathname = usePathname(); // e.g. /fr/soudan
  const router = useRouter();

  const handleSwitch = () => {
    const segments = pathname.split("/").filter(Boolean); // ["fr", "soudan"]
    const currentLang = segments[0];
    const currentSlug = segments[1];

    console.log("segments: ", segments);
    console.log("currentLang: ", currentLang);
    console.log("currentSlug: ", currentSlug);

    if (!currentLang) return;

    const newLang = currentLang === "fr" ? "en" : "fr";
    const newSlug =
      currentLang === "fr"
        ? slugMap.frToEn[currentSlug as keyof typeof slugMap.frToEn]
        : slugMap.enToFr[currentSlug as keyof typeof slugMap.enToFr];

    console.log("newSlug", newSlug);

    if (newSlug) {
      router.push(`/${newLang}/${newSlug}`);
    } else {
      router.push(`/${newLang}`);
    }
  };

  return (
    <button className={clsx(css.Button)} onClick={handleSwitch}>
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );
}
