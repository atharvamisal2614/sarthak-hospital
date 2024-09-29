import React, { useState } from 'react';

const bodyPartsData = {
  head: [
    '1. Migraine',
    '2. Headache',
    '3. Sinusitis',
    '4. Concussion',
    '5. Stroke',
    '6. Meningitis',
    '7. Brain Tumor',
    '8. Bell’s Palsy',
    '9. Trigeminal Neuralgia',
    '10. Cluster Headaches',
  ],
  chest: [
    '1. Heart Disease',
    '2. Pneumonia',
    '3. Asthma',
    '4. COPD',
    '5. Bronchitis',
    '6. Rib Fracture',
    '7. Pulmonary Embolism',
    '8. Pericarditis',
    '9. Costochondritis',
    '10. Lung Cancer',
  ],
  leg: [
    '1. Fracture',
    '2. Sprain',
    '3. Varicose Veins',
    '4. Shin Splints',
    '5. Deep Vein Thrombosis',
    '6. Muscle Tear',
    '7. Achilles Tendonitis',
    '8. Arthritis',
    '9. Restless Leg Syndrome',
    '10. Peripheral Artery Disease',
  ],
  thigh: [
    '1. Muscle Break',
    '2. Fungal Infections',
    '3. Hamstring Strain',
    '4. Quadriceps Strain',
    '5. Thigh Contusion',
    '6. Tendinitis',
    '7. Bursitis',
    '8. IT Band Syndrome',
    '9. Osteitis Pubis',
    '10. Thigh Cramps',
  ],
  // Add more body parts and related diseases...
};

const SkeletonSection = () => {
  const [selectedPart, setSelectedPart] = useState(null);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen p-4">
      <div className="relative w-full md:w-1/3">
        {/* Skeleton Image */}
        <img
          src="/skeleton.png"
          alt="Human Skeleton"
          className="w-full"
          useMap="#body-map"
        />

        {/* Image Map for Body Parts */}
        <map name="body-map">
          <area
            shape="rect"
            coords="300,50,150,100" // Adjust these coords as necessary
            alt="Head"
            onMouseEnter={() => setSelectedPart('head')}
            onMouseLeave={() => setSelectedPart(null)}
          />
          <area
            shape="rect"
            coords="300,100,150,250" // Adjust these coords as necessary
            alt="Chest"
            onMouseEnter={() => setSelectedPart('chest')}
            onMouseLeave={() => setSelectedPart(null)}
          />
          <area
            shape="rect"
            coords="250,250,400,350" // Adjust these coords as necessary
            alt="Thighs"
            onMouseEnter={() => setSelectedPart('thigh')}
            onMouseLeave={() => setSelectedPart(null)}
          />
          <area
            shape="rect"
            coords="200,400,350,600" // Adjust these coords as necessary
            alt="Leg"
            onMouseEnter={() => setSelectedPart('leg')}
            onMouseLeave={() => setSelectedPart(null)}
          />
          {/* Add more areas for other body parts */}
        </map>
      </div>

      {/* Disease Info Box */}
      <div className="ml-0 md:ml-10 mt-4 md:mt-0 w-full md:w-1/3 bg-gray-100 p-4 rounded-lg shadow-lg">
        {selectedPart ? (
          <div>
            <h2 className="text-2xl font-bold text-customBlue">{selectedPart.toUpperCase()}</h2>
            <ul className="mt-2">
              {bodyPartsData[selectedPart].map((disease, index) => (
                <li key={index} className="text-customGreen text-xl">
                  {disease}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-customBlue text-3xl font-bold">Hover over a body part to see diseases can cause.</p>
        )}
      </div>
    </div>
  );
};

export default SkeletonSection;
