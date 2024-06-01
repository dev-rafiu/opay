import { Prosto_One, Rubik, Poppins } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const rubik = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

//  ${prosto_one.variable}
// const prosto_one = Prosto_One({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-prosto-one",
// });

export const metadata = {
  title: "Opay re-design",
  description: "A re-design of opay's website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${poppins.variable}`}>
        <div className="container">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
