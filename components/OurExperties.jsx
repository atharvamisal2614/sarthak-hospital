import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const expertiseData = [
  {
    title: 'Brain Tumor',
    description: 'Advanced imaging techniques allow for early detection and intervention in brain tumors, significantly improving patient outcomes.',
    doctor: 'Dr. Aisha Khan',
    experience: '10 years',
    videoSrc: '/brain_tumor.mp4', // Ensure this is the correct path for your video
  },
  {
    title: 'Cardiology',
    description: 'Our cardiology department provides comprehensive care for heart conditions, including diagnostics, treatment, and prevention strategies.',
    doctor: 'Dr. Vikram Singh',
    experience: '15 years',
    videoSrc: '/cardiology.mp4', // Ensure this is the correct path for your video
  },
  {
    title: 'Orthopedics',
    description: 'Specializing in musculoskeletal conditions, our orthopedic team uses advanced techniques for surgery and rehabilitation.',
    doctor: 'Dr. Rajesh Patel',
    experience: '12 years',
    videoSrc: '/ortho.mp4', // Ensure this is the correct path for your video
  },
  {
    title: 'Gastroenterology',
    description: 'Our gastroenterology team offers diagnostics and treatment for digestive disorders, focusing on patient-centered care.',
    doctor: 'Dr. Neha Sharma',
    experience: '8 years',
    videoSrc: '/gastro.mp4', // Ensure this is the correct path for your video
  },
  {
    title: 'Oncology',
    description: 'Expert oncologists provide comprehensive cancer care, offering support through treatment and survivorship and this is handled by our experts.',
    doctor: 'Dr. Anil Gupta',
    experience: '11 years',
    videoSrc: '/oncology.mp4', // Ensure this is the correct path for your video
  },
  {
    title: 'Neurology',
    description: 'Our neurology department focuses on diagnosing and treating disorders of the nervous system, providing specialized care for each patient.',
    doctor: 'Dr. Priya Verma',
    experience: '14 years',
    videoSrc: '/neurology.mp4', // Ensure this is the correct path for your video
  },
];

const OurExpertise = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-customBlue mb-8">Our Expertise</h2>
      <div className="row">
        {expertiseData.map((expert, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <video 
                className="card-img-top" 
                width="100%" 
                height="300" 
                controls 
                autoPlay 
                loop 
                muted
              >
                <source src={expert.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body">
                <h5 className="card-title">{expert.title}</h5>
                <p className="card-text">{expert.description}</p>
                <p className="card-text">
                  <strong>Expert: </strong>{expert.doctor} <br />
                  <strong>Experience: </strong>{expert.experience}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExpertise;
