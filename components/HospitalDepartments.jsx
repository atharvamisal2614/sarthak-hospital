import React from 'react';

const HospitalDepartments = () => {
  const departments = [
    {
      title: "Cardiology",
      imgSrc: "https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/06/Depositphotos_24648537_original-400x400.jpg",
      link: "https://demo2.themewarrior.com/hospitalplus/department/cardiology/",
      description: "Here is the story of a lovely lady, who was bringing up three very lovely..."
    },
    {
      title: "Dental",
      imgSrc: "https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/02/Depositphotos_5711983_original-400x400.jpg",
      link: "https://demo2.themewarrior.com/hospitalplus/department/dental/",
      description: "We never thought of findin' a place where we belong. Don't have to stand..."
    },
    {
      title: "Neurologist",
      imgSrc: "https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_42539851_department.jpg",
      link: "https://demo2.themewarrior.com/hospitalplus/department/neurologist/",
      description: "You unlock this door with the key of imagination. Beyond it is another dimension:..."
    },
    {
      title: "Pediatric",
      imgSrc: "https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/06/Depositphotos_11882261_original-400x400.jpg",
      link: "https://demo2.themewarrior.com/hospitalplus/department/pediatric/",
      description: "One thousand years ago, superstition and the sword ruled. It was a time of..."
    },
    {
      title: "Pulmonary",
      imgSrc: "https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_10069934_original-400x400.jpg",
      link: "https://demo2.themewarrior.com/hospitalplus/department/pulmonary/",
      description: "Life is like a hurricane here in Duckburg. Race cars, lasers, aeroplanes - it is..."
    },
    {
      title: "Traumatology",
      imgSrc: "https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_11295039_original-400x400.jpg",
      link: "https://demo2.themewarrior.com/hospitalplus/department/traumatology/",
      description: "Your tread must be light and sure, as though your path were upon rice..."
    },
    {
      title: "Urology",
      imgSrc: "https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_42548065_original-400x400.jpg",
      link: "https://demo2.themewarrior.com/hospitalplus/department/urology/",
      description: "They're creepy and they're kooky, mysterious and spooky. They're all together ooky, the Addams..."
    },
    {
      title: "Xray",
      imgSrc: "https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_80150830_original-400x400.jpg",
      link: "https://demo2.themewarrior.com/hospitalplus/department/xray/",
      description: "I bet we been together for a million years, And I bet we'll be..."
    },
  ];

  return (
    <div className="py-10 mx-5">
      <h3 className="text-3xl font-bold text-center text-blue-500 mt-16 mb-6">
        Hospital Departments
       
      </h3>
      <div className="border-t-2 border-red-600 py-4 h-5 mx-auto md:w-1/12 w-1/4"></div>

      <section id="service-widget" className="homepage-widget in_container">
        <div id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div key={index} className="shadow-lg rounded overflow-hidden transition-transform transform ">
              <a href={dept.link} title={dept.title}>
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={dept.imgSrc} 
                  alt={dept.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-500 hover:text-red-500">{dept.title}</h3>
                  <p className="text-sm text-green-800">{dept.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HospitalDepartments;
