// import React from 'react';
// import Slider from 'react-slick';
// /* In your global CSS or component file */
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


// const Hero = () => {
//   const settings = {
//     dots: false,
//     arrow:true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 2000, // Change every 3 seconds
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const images = [
//     '/hospital-1.jpg', // Add your image paths
//     '/hospital-2.png',
    
    
//     // Add more images as needed
//   ];

//   return (
//     <div style={{ width: '100%', height: '80vh' }}>
//       <Slider {...settings}>
//         {images.map((img, index) => (
//           <div key={index}>
//             <img
//               src={img}
//               alt={`Slide ${index}`}
//               style={{
//                 width: '100%',
//                 height: '50%',
//                 objectFit: 'cover', // Ensures images cover the full area
//               }}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Hero;

import Image from 'next/image';

function Hero() {
  return (
    <div className="relative w-full">
      {/* Full-width Image */}
      <Image
        src="/hospital-2.png" // Replace with your image path
        alt="Hospital Hero Image"
        layout="responsive" // Use fill for full width and height responsiveness
        objectFit="cover" // Ensures the image covers the entire div
       width={100} height={100}
        priority={true} // Ensures the image loads quickly as it's the hero image
      />

      {/* Optional Overlay (for text or other content) */}
    </div>
  );
}

export default Hero;
