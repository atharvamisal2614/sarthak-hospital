import Image from 'next/image';

function Welcome() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 mt-4 md:mt-8">
      {/* Welcome text above the image (for mobile view) */}
      <h1 className="text-3xl font-bold text-customBlue underline text-center mb-4 md:hidden">
        Welcome to Sarthak Hospital
      </h1>

      {/* Left side - Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/hospital-image.jpg" // Replace with your image path
          alt="Hospital"
          width={800}
          height={600}
          className="rounded-lg shadow-md object-cover w-full h-auto md:h-full"
        />
      </div>

      {/* Right side - Welcome text and description */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-10">
        {/* Welcome text - hidden in mobile, shown in desktop */}
        <h1 className="hidden md:block text-3xl font-bold text-customBlue">
          Welcome to Sarthak Hospital
        </h1>

        <p className="mt-4 text-customGreen text-lg leading-relaxed text-justify">
          Our hospital is committed to providing the highest standard of care and ensuring that
          our patients receive the best possible treatment. With state-of-the-art facilities, a
          highly qualified medical team, and compassionate staff, we are here to serve your needs.
          Whether it is routine check-ups, specialized treatments, or emergency care, we are fully
          equipped to handle all your medical needs with excellence.
        </p>
        <p className="mt-4 text-customGreen text-lg leading-relaxed text-justify">
          We believe in a patient-centered approach, ensuring that each individual is treated with
          dignity, respect, and personalized care. Our services range from outpatient consultations,
          diagnostic imaging, and surgeries to comprehensive rehabilitation programs. Your health
          and well-being are our top priorities.
        </p>
        <p className="mt-4 text-customGreen text-lg leading-relaxed text-justify">
          Thank you for choosing our hospital, and we look forward to being your trusted partner in
          health.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
