
import localFont from "next/font/local";

import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import NewsAndUpdates from "@/components/NewsandUpdate";
import BookAppointmentForm from "@/components/BookAppointmentForm";

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
   <Services />
   <Testimonials />
   <NewsAndUpdates />
   <BookAppointmentForm />
    </>
  );
}
