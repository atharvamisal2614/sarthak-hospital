import Image from "next/image";
import localFont from "next/font/local";

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
      <header className="text-gray-600 body-font shadow-xl bg-blue-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src="/hospital-logo.jpg" alt="Sarthak Hospital Logo" width={80} height={80} />
            <span className="ml-3 text-xl">Sarthak Hospital</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#" className="mr-5 font-bold text-xl hover:text-gray-900">Home</a>
            <a href="#" className="mr-5 font-bold text-xl hover:text-gray-900">About</a>
            <a href="#" className="mr-5 font-bold text-xl hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <div className="flex flex-col md:flex-row justify-center items-center h-screen p-5">
        <div className="text-center md:text-left p-5">
          <h1 className="font-bold text-2xl">
            This website is <br />
            <span className="italic text-4xl">under construction</span>
          </h1>
        </div>

        <div className="p-5">
          <Image
            src="/under-construction-og.png"
            alt="Under Construction Image"
            width={700}
            height={700}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
