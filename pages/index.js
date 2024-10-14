
import localFont from "next/font/local";

import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BookAppointmentForm from "@/components/BookAppointmentForm";
import NewsAndUpdate from "@/components/NewsAndUpdate";
import AtGlace from "@/components/AtGlance";
import Team from "@/components/Team";

import OurExpertise from "@/components/OurExperties";
import HospitalDepartments from "@/components/HospitalDepartments";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      
   <Hero />
   <Welcome />
   <AtGlace />
   <Services />
   <Team />
   <OurExpertise />
  
   <Testimonials />
   <NewsAndUpdate />
   <BookAppointmentForm />
 <HospitalDepartments />  
    </>
  );
}
