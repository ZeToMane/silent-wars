import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.scss";

import clsx from "clsx";

import css from "./page.module.scss";

export const metadata: Metadata = {
  title: "Silent Wars",
  description: "Les guerres invisibles",
};

// Humane font variants
const humaneLight = localFont({
  src: "./fonts/Humane-Light.woff",
  weight: "300",
  style: "normal",
  variable: "--font-humane-light",
  display: "swap",
});

const humaneRegular = localFont({
  src: "./fonts/Humane-Regular.woff",
  weight: "400",
  style: "normal",
  variable: "--font-humane-regular",
  display: "swap",
});

const humaneBold = localFont({
  src: "./fonts/Humane-Bold.woff",
  weight: "700",
  style: "normal",
  variable: "--font-humane-bold",
  display: "swap",
});

// Reglo font
const regloBold = localFont({
  src: "./fonts/reglo-bold-webfont.woff",
  weight: "700",
  style: "normal",
  variable: "--font-reglo-bold",
  display: "swap",
});

//SF Pro Display
const sfProBold = localFont({
  src: "./fonts/sfprodisplaybold.woff",
  weight: "700",
  style: "normal",
  variable: "--font-sf-pro-bold",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        humaneLight.variable,
        humaneRegular.variable,
        humaneBold.variable,
        regloBold.variable,
        sfProBold.variable
      )}
    >
      <body>
        <div className={clsx(css.container)}>
          {/* container */}
          <Link href="/">
            <div className={clsx(css["header-container"])}>
              {/* header-container */}
              <h1 /* className={clsx(humaneBold.variable)} */>SILENT WARS</h1>
            </div>
          </Link>
          {children}
        </div>
      </body>
    </html>
  );
}
