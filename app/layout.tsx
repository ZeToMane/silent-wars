import type { Metadata } from "next";
import "./globals.scss";

import clsx from "clsx";

import css from "./page.module.scss";

export const metadata: Metadata = {
  title: "Silent Wars",
  description: "Les guerres invisibles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={clsx(css.container)}>
          {/* container */}
          <div className={clsx(css["header-container"])}>
            {/* header-container */}
            <h1>SILENT WARS</h1>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
