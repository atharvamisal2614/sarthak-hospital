
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const teamData = [
  {
    name: 'Dr. Aisha Khan',
    qualification: 'MBBS, MD',
    specialty: 'General Medicine',
    description: 'Dr. Aisha has over 10 years of experience in providing comprehensive primary care. She specializes in managing chronic diseases and believes in a holistic approach to health care, ensuring that her patients receive personalized attention and care.',
    image: '/dr-1.png', // Replace with your image path
  },
  {
    name: 'Dr. Rajesh Patel',
    qualification: 'MBBS, MS',
    specialty: 'Orthopedics',
    description: 'With a specialization in bone and joint surgeries, Dr. Rajesh is dedicated to restoring mobility to his patients. His expertise in minimally invasive techniques helps to reduce recovery time, allowing patients to return to their daily activities quickly.',
    image: '/doctor-2.png', // Replace with your image path
  },
  {
    name: 'Dr. Neha Sharma',
    qualification: 'MBBS, DNB',
    specialty: 'Pediatrics',
    description: 'Dr. Neha is passionate about providing the best care for children and has a gentle approach to treatments. With a focus on preventative care, she educates parents on healthy lifestyle choices for their children, ensuring a bright future for them.',
    image: '/dr-neha.png', // Replace with your image path
  },
  {
    name: 'Dr. Vikram Singh',
    qualification: 'MBBS, MD',
    specialty: 'Cardiology',
    description: 'A specialist in heart health, Dr. Vikram provides advanced treatment options and patient-centered care. He emphasizes the importance of lifestyle changes alongside medical treatments to enhance his patients’ heart health and overall well-being.',
    image: '/dr-3.png', // Replace with your image path
  },
];

const Team = () => {
  return (
    <div className="p-6 mt-24">
      <h2 className="text-3xl font-bold text-center text-customBlue mb-8">Our Dedicated Team</h2>
      <Carousel interval={3000} fade>
        {teamData.map((doctor, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div className="w-100 w-md-50">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="d-block w-100"
                  style={{ objectFit: 'cover', height: '650px' }} // Adjusted height for mobile view
                />
              </div>
              <div className="w-100 w-md-50 p-4">
                <h3 className="text-xl font-bold">{doctor.name}</h3>
                <p className="text-gray-700">{doctor.qualification}</p>
                <p className="text-gray-600">{doctor.specialty}</p>
                <p>{doctor.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Team;
