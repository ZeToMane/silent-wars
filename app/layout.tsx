import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
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
          <div className={clsx(css.Footer)}>
            <a
              href="https://www.instagram.com/silentwars_org?igsh=M2JibnBqbnk5a210"
              target="_blank"
            >
              <Image
                width={50}
                height={50}
                src="/insta.png"
                alt="instagram"
                className={css.logo}
              />
            </a>
            <a href="https://x.com/silentwarsorg" target="_blank">
              <Image
                width={50}
                height={50}
                src="/x.png"
                alt="x"
                className={css.logo2}
              />
            </a>
            <a
              href="https://bsky.app/profile/silentwars.bsky.social"
              target="_blank"
            >
              <Image
                width={50}
                height={50}
                src="/bluesky-social.webp"
                alt="bluesky-social"
                className={css.logo}
              />
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
