import Hero from "@/sections/hero";
import Navbar from "@/sections/navbar";
import { Toolbar } from "@/sections/tololbar";
import Services from "@/sections/services";
import Footer from "@/sections/footer";
import {Location} from "@/sections/location";
import {AppointmentSection} from "@/sections/booking";


export default function Home() {
  return (
   <>
   <Navbar/>
   <Toolbar/>
   <Hero/>
   <Services/>
   <Location/>
   <AppointmentSection/>
   <Footer/>
   </>
  )
}
