import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
export default function Home() {
  return (
  <main className=" w-screen flex flex-col justify-center items-center">
      
          <HeroSection />
          <Features/>
          <Cards/>
          <Footer/>
  </main> 
  )
}
