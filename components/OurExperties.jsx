const OurExpertise = () => {
  const services = [
    {
      title: "Nephrologist Care",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero tempore expedita nihil iure quis magni ullam animi quaerat ratione? Rem aut blanditiis libero hic similique quod quis perferendis repellat.",
      img: "https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Nephrologist-Care-280x215.jpg",
      alt: "Nephrologist Care",
      link: "https://demo2.themewarrior.com/hospitalplus/service/nephrologist-care/",
    },
    {
      title: "Eye Care",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero tempore expedita nihil iure quis magni ullam animi quaerat ratione? Rem aut blanditiis libero hic similique quod quis perferendis repellat." ,
      img: "https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Facility-Optic-280x215.jpg",
      alt: "Eye Care",
      link: "https://demo2.themewarrior.com/hospitalplus/service/eye-care/",
    },
    {
      title: "Pediatrician Clinic",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero tempore expedita nihil iure quis magni ullam animi quaerat ratione? Rem aut blanditiis libero hic similique quod quis perferendis repellat.",
      img: "https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/02/Depositphotos_11882261_original-280x215.jpg",
      alt: "Pediatrician Clinic",
      link: "https://demo2.themewarrior.com/hospitalplus/service/pediatrician-clinic/",
    },
    {
      title: "Prenatal Care",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero tempore expedita nihil iure quis magni ullam animi quaerat ratione? Rem aut blanditiis libero hic similique quod quis perferendis repellat.",
      img: "https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/prenatal-care-280x215.jpg",
      alt: "Prenatal Care",
      link: "https://demo2.themewarrior.com/hospitalplus/service/prenatal-care/",
    },
  ];

  return (
    <section className="py-12 mt-16">
      <h3 className="text-3xl text-center text-blue-500 font-bold mb-8">Our Experties</h3>
      <div className="border-t-2 border-red-600 py-4 h-5 mx-auto md:w-1/12 w-1/4"></div>
      <div className="container mx-auto px-4 mt-5">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 shadow-lg rounded-md overflow-hidden">
              <a href={service.link}>
                <img
                  className="w-full h-48 object-cover sm:h-40 md:h-48 lg:h-52" // Responsive height adjustments
                  src={service.img}
                  alt={service.alt}
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-500 mb-2 hover:text-red-500">
                  <a href={service.link}>{service.title}</a>
                </h3>
                <p className="text-sm text-green-800">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
