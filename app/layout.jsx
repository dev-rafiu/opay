import { Poppins, Rubik } from "next/font/google";
import "./globals.css";

import Header from "./components/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const rubik = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Opay re-design",
  description: "A re-design of opay's website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="container">
          <Header />

          {children}
        </div>
      </body>
    </html>
  );
}
