import clsx from "clsx";

import css from "./Sections.module.scss";

import { Slider } from "@/components/Slider";

export function Sections() {
  return (
    <div className={clsx(css["sections-container"])}>
      <div className={css.Sections}>
        <Slider />
      </div>
      <div className={clsx(css.Sections, css["à-propos"])}>
        <h2>À PROPOS</h2>
        <p>
          Certaines guerres font rage dans le silence. Elles frappent le Soudan,
          la Birmanie, la RDC, le Yémen ou encore le Cameroun, mais restent
          absentes des médias.
        </p>
        <p>
          À travers ce projet, nous avons choisi de les mettre en lumière. Cinq
          conflits parmi tant d’autres, trop souvent ignorés.
        </p>
        <p>
          Pour attirer l’attention, nous avons détourné les codes du cinéma. En
          montant de fausses bandes-annonces à partir de films existants, nous
          créons une illusion… qui bascule rapidement dans la réalité. À la fin
          de chaque vidéo, un message rappelle : ce n’est pas un film.
        </p>
        <p>
          Sur ce site, vous trouverez nos vidéos, nos affiches, et des
          ressources pour comprendre ces guerres oubliées. Parce que
          l’indifférence ne doit plus être une option.
        </p>
      </div>
    </div>
  );
}
