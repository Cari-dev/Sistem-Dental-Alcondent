import Hero from "@/sections/hero";
import Navbar from "@/sections/navbar";
import { Toolbar } from "@/sections/tololbar";
import Details from "@/sections/details";
import Services from "@/sections/services";
import Footer from "@/sections/footer";
import {Location} from "@/sections/location";


export default function Home() {
  return (
   <>
   <Navbar/>
   <Toolbar/>
   <Hero/>
   <Details/>
   <Services/>
   <Location/>
   <Footer/>
   </>
  )
}
