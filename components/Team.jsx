


import { FaFacebook, FaTwitter, FaGooglePlus, FaLinkedin } from "react-icons/fa";

export default function Team() {
  return (
    <section id="doctor-widget" className="in_container px-4 py-8 mt-16">
      {/* Heading and Description */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-500">Our Doctors</h2>

        
       
      </div>
      <div className="border-t-2 border-red-600 py-4 h-5 mx-auto md:w-1/12 w-1/4"></div>

      {/* Doctor Profiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        {/* Doctor 1 */}
        <div className="bg-white shadow-md text-center py-3">
          <div className="w-full h-64 mb-4">
            <img
              className="w-full h-full object-cover"
              src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/veronica-400x400.jpg"
              alt="Doctor"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-left mx-2  text-blue-500 hover:text-red-500">Dr. Veronica</h3>
          <i><p className="text-green-800 text-left mx-2">Cardiologist</p></i>
          <p className="text-gray-600 text-left mx-2 text-sm mb-4 mt-3">
            Dr. Veronica is a well-experienced cardiologist who has performed over 500 successful surgeries.
          </p>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <FaGooglePlus size={24} />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Doctor 2 */}
        <div className="bg-white shadow-md text-center py-3">
          <div className="w-full h-64 mb-4">
            <img
              className="w-full h-full object-cover"
              src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Dr-Kathirnia-400x400.jpg"
              alt="Doctor"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-left mx-2 text-blue-500 hover:text-red-500">Dr. Kathirnia</h3>
         <i> <p className="text-green-800 text-left mx-2">Orthopedic Surgeon</p> </i>
          <p className="text-gray-600 text-left mx-2 text-sm mb-4 mt-3">
            Dr. Kathirnia has over 15 years of experience in orthopedic surgery with a high success rate.
          </p>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <FaGooglePlus size={24} />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Doctor 3 */}
        <div className="bg-white shadow-md text-center py-3">
          <div className="w-full h-64 mb-4">
            <img
              className="w-full h-full object-cover"
              src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/doctor-tahu-bulat-400x400.jpg"
              alt="Doctor"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-left mx-2 text-blue-500 hover:text-red-500">Dr. Tahu-bulat</h3>
         <i> <p className="text-green-800 text-left mx-2">Neurologist</p> </i>
          <p className="text-gray-600 text-left mx-2 text-sm mb-4 mt-3">
            Dr. Tahu-bulat is an expert neurologist specializing in complex brain and spinal conditions.
          </p>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <FaGooglePlus size={24} />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Doctor 4 */}
        <div className="bg-white shadow-md text-center py-3">
          <div className="w-full h-64">
            <img
              className="w-full h-full object-cover"
              src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/pediactirc-Doctors-e1460536658595-400x400.jpg"
              alt="Doctor"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-left mx-2 text-blue-500 hover:text-red-500 mt-4">Dr. Alex Brown</h3>
        <i>  <p className="text-green-800 text-left mx-2">Pediatrician</p> </i>
          <p className="text-gray-600 text-left mx-2 text-sm mb-4 mt-3">
            Dr. Alex has been a pediatrician for over a decade, known for his gentle care of children.
          </p>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <FaGooglePlus size={24} />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
