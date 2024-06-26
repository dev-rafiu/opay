import { Prosto_One, Rubik, Poppins } from "next/font/google";
import { WEBSITE_HOST_URL } from "./sitemap";

import "./globals.css";

import Footer from "./components/Footer";
import HeaderLayout from "./components/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const rubik = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const prosto_one = Prosto_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-prosto-one",
});

const meta = {
  title: "Opay re-design",
  description:
    "Providing secure, easy to use & affordable financial services with superfast user experience.",
  image: `${WEBSITE_HOST_URL}/opengraph-image.jpg`,
};

export const metadata = {
  metadataBase: new URL(`${WEBSITE_HOST_URL}`),
  title: {
    default: meta.title,
    template: `%s | ${meta.title}`,
  },
  description: meta.description,

  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    locale: "en-US",
    siteName: meta.title,
    type: "website",
    images: [{ url: meta.image }],
  },

  twitter: {
    title: meta.title,
    description: meta.description,
    images: [{ url: meta.image }],
    card: "summary_large_image",
  },

  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${prosto_one.variable} ${poppins.variable}`}
      >
        <div className="container flex min-h-dvh flex-col">
          <HeaderLayout />
          <main className="grow">{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
