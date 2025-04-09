import clsx from "clsx";

import css from "./Sections.module.scss";

import { Slider } from "@/components/Slider";
import Image from "next/image";

type sectionProps = {
  data: any;
  lang: "fr" | "en";
};

export function Sections({ data, lang }: sectionProps) {
  console.log("data", data);
  console.log("lang", lang);

  return (
    <div className={clsx(css["sections-container"])}>
      <div className={css.Sections}>
        <Slider lang={lang} />
      </div>
      <div className={clsx(css.Sections, css["à-propos"])}>
        <div>
          <h2>{data.titre}</h2>
          {(Object.values(data.paragraphes) as string[]).map(
            (paragraph, index) => (
              <p key={index}>{paragraph}</p>
            )
          )}
          {/* <p>
            Certaines guerres font rage dans le silence. Elles frappent le
            Soudan, la Birmanie, la RDC, le Yémen ou encore le Cameroun, mais
            restent absentes des médias.
          </p>
          <p>
            À travers ce projet, nous avons choisi de les mettre en lumière.
            Cinq conflits parmi tant d’autres, trop souvent ignorés.
          </p>
          <p>
            Pour attirer l’attention, nous avons détourné les codes du cinéma.
            En montant de fausses bandes-annonces à partir de films existants,
            nous créons une illusion… qui bascule rapidement dans la réalité. À
            la fin de chaque vidéo, un message rappelle : ce n’est pas un film.
          </p>
          <p>
            Sur ce site, vous trouverez nos vidéos, nos affiches, et des
            ressources pour comprendre ces guerres oubliées. Parce que
            l’indifférence ne doit plus être une option.
          </p> */}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>{data.credits}</h2>
          <Image
            width={200}
            height={100}
            src="/mmi-logo.svg"
            alt={`Affiche du film ${data.titre}`}
            className={css.logo}
          />
          {/* <p style={{ textAlign: "center" }}>Adèle BEAUNÉ</p>
          <p style={{ textAlign: "center" }}>Noémie NUNEZ</p>
          <p style={{ textAlign: "center" }}>Justine GELIS</p>
          <p style={{ textAlign: "center" }}>Pedro BARROS PARENTE</p>
          <p style={{ textAlign: "center" }}>Kévin IMART</p>
          <p style={{ textAlign: "center" }}>Charles NEVEU</p>
          <p style={{ textAlign: "center" }}>Baptiste NOGUERAS</p>
          <p style={{ textAlign: "center" }}>Enzo LUCAS</p>
          <p style={{ textAlign: "center" }}>Rose PEREIRA</p> */}
          {/* <p style={{ textAlign: "center" }}>Paul PAULY</p> */}
        </div>
      </div>
    </div>
  );
}
