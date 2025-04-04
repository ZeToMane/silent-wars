"use client";

import { useState, useEffect } from "react";

import clsx from "clsx";

import css from "./page.module.scss";

import { Navbar } from "@/components/Navbar";
import { Sections } from "@/components/Sections";

export default function Home() {
  const [activeSection, setActiveSection] = useState<"about" | "trailers">(
    "about"
  );

  return (
    <div className={clsx(css.container)}>
      {/* container */}
      <div className={clsx(css["header-container"])}>
        {/* header-container */}
        <h1>SILENT WARS</h1>
      </div>
      <Navbar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <Sections activeSection={activeSection} />
    </div>
  );
}
