import React from 'react';
import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const NewsAndUpdates = () => {
  const newsItems = [
    {
      id: 1,
      title:  'New Surgical Wing Opening',
      date: 'September 25, 2024',
      description: 'We are thrilled to announce the opening of our state-of-the-art surgical wing, offering advanced surgical services.',
      image: '/surgical-wing.jpeg',
    },
    {
      id: 2,
      title: 'COVID-19 Vaccination Drive',
      date: 'October 5, 2024',
      description: 'Our hospital is organizing a COVID-19 vaccination drive. All citizens are welcome to register online for their shots.',
      image: '/vaccination-drive.jpg',
    },
    {
      id: 3,
      title: 'Annual Health Camp',
      date: 'November 15, 2024',
      description: 'Join us at our annual health camp offering free health check-ups and consultations for the community.',
      image: '/health-camp.jpg',
    },
    // Add more news items as needed
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-500 underline">Latest News & Updates</h2>
          <p className="mt-3 text-lg text-gray-600">
            Stay updated with the latest news, events, and announcements from our hospital.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={news.image}  // Correctly using the 'image' key from each news object
                  alt={news.title}
                  layout="fill"
                
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-500">{news.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mt-2 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>{news.date}</span>
                </div>
                <p className="text-gray-600">{news.description}</p>
                
                {/* Read more */}
                <div className="mt-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                    Read more <FaChevronRight className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
