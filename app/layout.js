import "./globals.css";
import { Poppins } from "next/font/google";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";

const Poppin = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Next Dine",
  description: "Nexteons ERP Product for Restaurants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Poppin.className}>
        <div className=" w-screen flex flex-col justify-center items-center">
          <NavBar />
          <HeroSection />
          <Features/>
          <Cards/>
          <Footer/>
          {children}
        </div>
      </body>
    </html>
  );
}
