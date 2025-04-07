import clsx from "clsx";

import css from "./Content.module.scss";

import Image from "next/image";

type contentProps = {
  data: any;
  lang: "fr" | "en";
};

export function Content({ data, lang }: contentProps) {
  console.log("data inside content component: ", data);
  return (
    <div className={css.Slider}>
      <div className={css.content}>
        {/* <h2>LES CRIS DE KHARTOUM</h2> */}
        <div className={clsx(css["poster"])}>
          <Image
            src={`${data.src}`}
            alt={`Affiche du film ${data.titre}`}
            fill
            className={clsx(css["poster-image"])}
          />
        </div>

        <iframe
          width="100%"
          height="500"
          src={`${data.youtube}`}
          title={`${data.titre} - Bande annonce officielle`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* <div className={clsx(css["text"])}>
          <p>
            Depuis 2023, le Soudan est plongé dans une guerre fratricide qui
            oppose l’armée nationale aux forces paramilitaires. Une lutte de
            pouvoir implacable, sans règle ni répit, où l’ambition des uns
            écrase la liberté des autres. Ce conflit déchire le pays de
            l’intérieur, ne laissant derrière lui que ruines, exodes et silences
            forcés.
          </p>

          <p>
            Khartoum, la capitale jadis vibrante, n’est plus qu’un champ de
            cendres. Les hôpitaux ferment, les marchés se vident, les écoles
            s’effacent. Dans les quartiers meurtris, la peur, la faim et le
            désespoir prennent le dessus. Les familles fuient sous les bombes,
            sans savoir où aller, ni ce qui les attend au prochain détour.
          </p>

          <p>
            Pris au piège d’un conflit qui les dépasse, des millions de civils
            tentent simplement de survivre. Mais quand chaque route mène à
            l’incertitude, quand même l’exil devient un risque, une question
            demeure : que reste-t-il à espérer, lorsque tout s’effondre ?
          </p>
        </div> */}
        {lang == "fr" ? <h2>CONTEXTE</h2> : <h2>CONTEXT</h2>}
        {/* <h2>CONTEXTE</h2> */}

        <div className={clsx(css["text"])}>
          {(Object.values(data.paragraphes) as string[]).map(
            (paragraph, index) => (
              <p key={index}>{paragraph}</p>
            )
          )}
          {/* <p>
            Depuis avril 2023, le Soudan est plongé dans une guerre civile
            sanglante opposant l'armée nationale (SAF) aux Forces de soutien
            rapide (RSF), une puissante milice paramilitaire. Ce conflit trouve
            ses racines dans les rivalités de pouvoir entre le général Abdel
            Fattah al-Burhan, chef de l'armée, et Mohamed Hamdan Dagalo, alias
            “Hemedti", leader des RSF. Après des années de tensions et d’accords
            fragiles, la rupture est totale, et le pays sombre dans un chaos
            meurtrier.
          </p>

          <p>
            Dès les premiers jours, la capitale Khartoum devient un véritable
            champ de bataille. Les bombardements, les combats de rue et les
            exécutions sommaires transforment la ville en ruines.
            Progressivement, la guerre s’étend aux autres régions, notamment au
            Darfour, où les RSF sont accusées de massacres ethniques rappelant
            les horreurs des années 2000.
          </p>

          <p>
            Les civils sont pris au piège dans une spirale de violence. Plus de
            8 millions de personnes sont déplacées, la famine menace, et l’accès
            aux soins devient quasi inexistant. Les hôpitaux sont détruits ou
            occupés par les combattants, laissant les blessés sans secours.
            L’économie s’effondre, et la faim devient une arme de guerre.
          </p>

          <p>
            Les tentatives de médiation, menées par l’Union africaine et des
            puissances régionales, échouent face à l’intransigeance des
            belligérants. Le Soudan s’enfonce dans l’anarchie, tandis que la
            communauté internationale reste spectatrice. La guerre continue,
            laissant derrière elle un pays en ruines et un peuple abandonné à
            son sort.
          </p> */}
        </div>

        <h2>SOURCES</h2>
        <div className={clsx(css["text"])}>
          {data.sources && data.sources.length > 0 && (
            <>
              <ul>
                {data.sources.map(
                  (source: { title: string; url: string }, index: number) => (
                    <li key={index}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.title}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
