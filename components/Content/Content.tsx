"use client";

import clsx from "clsx";

import css from "./Content.module.scss";

import Image from "next/image";
import { useEffect, useState } from "react";

type contentProps = {
  data: any;
  lang: "fr" | "en";
};

function calculateDuration(from: Date, to: Date, lang: "fr" | "en") {
  const diff = Math.floor((to.getTime() - from.getTime()) / 1000); // total seconds

  const days = Math.floor(diff / (60 * 60 * 24));
  const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((diff % (60 * 60)) / 60);
  const seconds = diff % 60;

  const labels =
    lang === "fr"
      ? { d: "J", h: "H", m: "M", s: "S" }
      : { d: "D", h: "H", m: "M", s: "S" };

  return `${days}${labels.d} ${hours}${labels.h} ${minutes}${labels.m} ${seconds}${labels.s}`;
}

export function Content({ data, lang }: contentProps) {
  console.log("data inside content component: ", data);
  console.log("data statistique", data.statistiques);

  const [elapsed, setElapsed] = useState("");

  const startDate = new Date(
    data.dates.split("/").reverse().join("-") + "T00:00:00Z"
  );

  useEffect(() => {
    const updateElapsed = () => {
      setElapsed(calculateDuration(startDate, new Date(), lang));
    };

    updateElapsed(); // initialize immediately
    const interval = setInterval(updateElapsed, 1000);

    return () => clearInterval(interval); // cleanup
  }, [startDate]);

  return (
    <div className={css.Slider}>
      <div className={css.content}>
        <div className={clsx(css["poster"])}>
          <Image
            src={`${data.src}`}
            alt={`Affiche du film ${data.titre}`}
            fill
            className={clsx(css["poster-image"])}
          />
        </div>

        {/* <iframe
          width="100%"
          height="500"
          src={`${data.youtube}`}
          title={`${data.titre} - Bande annonce officielle`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe> */}

        <div style={{ width: "100%", height: "500px" }}>
          <iframe
            src={`${data.vimeo}`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{ width: "100%", height: "500px" }}
            title={`${data.titre} - Bande annonce officielle`}
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>

        <div className={clsx(css["stats-container"])}>
          <div className={clsx(css["stat"])}>
            {lang == "fr" ? <h3>MORTS</h3> : <h3>DEATHS</h3>}
            <p>{data.statistiques[1].morts}</p>
          </div>
          <div className={clsx(css["stat"])}>
            {lang == "fr" ? <h3>DÉPLACÉES</h3> : <h3>DISPLACED</h3>}
            <p>{data.statistiques[0].deplace}</p>
          </div>
          <div className={clsx(css["stat"])}>
            {lang == "fr" ? <h3>DURÉE</h3> : <h3>DURATION</h3>}
            <p>
              {/* {(() => {
                try {
                  const [day, month, year] = data.dates.split("/").map(Number);
                  const startDate = new Date(year, month - 1, day);
                  const today = new Date();
                  const diffTime = today.getTime() - startDate.getTime();
                  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                  return lang === "fr"
                    ? `${diffDays} jours de guerre`
                    : `${diffDays} days of war`;
                } catch (e) {
                  return lang === "fr" ? "Date inconnue" : "Unknown date";
                }
              })()} */}
              {elapsed}
            </p>
          </div>
        </div>

        {lang == "fr" ? <h2>CONTEXTE</h2> : <h2>CONTEXT</h2>}

        <div className={clsx(css["text"])}>
          {(Object.values(data.paragraphes) as string[]).map(
            (paragraph, index) => (
              <p key={index}>{paragraph}</p>
            )
          )}
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
