import { FaUserMd, FaSyringe, FaStethoscope, FaHeart, FaBrain, FaXRay, FaPrescriptionBottleAlt, FaProcedures, FaAmbulance } from 'react-icons/fa';

const servicesData = [
  { icon: FaUserMd, name: 'General Medicine', description: 'Comprehensive primary care for all ages.' },
  { icon: FaSyringe, name: 'Vaccination', description: 'Safe and effective vaccines for all age groups.' },
  { icon: FaStethoscope, name: 'Cardiology', description: 'Advanced heart care and treatments.' },
  { icon: FaHeart, name: 'Emergency Care', description: '24/7 emergency services for critical care.' },
  { icon: FaBrain, name: 'Neurology', description: 'Expert neurological care for brain and nerve conditions.' },
  { icon: FaXRay, name: 'Radiology', description: 'Accurate diagnostic imaging and scans.' },
  { icon: FaPrescriptionBottleAlt, name: 'Pharmacy', description: 'On-site pharmacy for all prescriptions.' },
  { icon: FaProcedures, name: 'Surgical Services', description: 'State-of-the-art surgical procedures.' },
  { icon: FaAmbulance, name: 'Ambulance', description: 'Fast and reliable emergency transport services.' },
];

const Services = () => {
  return (
    <div className="p-6 md:p-10 mt-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8 underline">Our Top Notch Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center items-center text-blue-500 text-5xl mb-4">
              <service.icon />
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
