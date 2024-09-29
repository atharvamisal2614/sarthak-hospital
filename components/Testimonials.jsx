import { FaUserCircle } from 'react-icons/fa';

function Testimonials() {
  const testimonials = [
    {
      name: 'Yash Rathod',
      feedback: 'The care I received at Sarthak Hospital was exceptional. The staff made me feel comfortable and the doctors were attentive to all my concerns.',
      date: 'August 12, 2024',
    },
    {
      name: 'Naveen Singh',
      feedback: 'I had a great experience at the hospital. The facilities are top-notch and the service was excellent. Highly recommended!',
      date: 'September 5, 2024',
    },
    {
      name: 'Madhuri Kale',
      feedback: 'From the moment I entered, I felt reassured that I was in good hands. The level of professionalism and care was incredible.',
      date: 'July 23, 2024',
    },
    {
      name: 'Sanket Bhandari',
      feedback: 'Sarthak Hospital has an amazing team. The doctors are well-trained, and I felt comfortable throughout my treatment.',
      date: 'June 30, 2024',
    },
  ];

  return (
    <div className=" py-12 px-6">
      <h1 className="text-center text-3xl font-bold text-customBlue mb-8">Patient Testimonials</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <FaUserCircle size={60} className="text-customBlue" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">{testimonial.name}</h3>
            <p className="text-gray-600 text-center mb-4 italic">&quot;{testimonial.feedback}&quot;</p>
            <p className="text-gray-400 text-center text-sm">{testimonial.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;







