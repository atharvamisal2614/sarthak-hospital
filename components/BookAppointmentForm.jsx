import React, { useState } from 'react';

const BookAppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name}`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      date: '',
      time: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side: Heading and Description */}
          <div className="flex flex-col justify-start text-justify">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4 underline">Book an Appointment</h2>
            <p className="text-lg text-gray-700 mb-6">
              Schedule your appointment with one of our experienced doctors. Fill out the form to select the department, choose a convenient time, and let us know if you have any specific concerns. We’ll confirm your booking shortly.
            </p>
            <p className="text-gray-600">
              Our goal is to make healthcare accessible and convenient for everyone. Please feel free to contact us if you have any additional questions regarding your appointment.
            </p>
          </div>

          {/* Right side: Appointment Form */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Department */}
              <div className="mb-4">
                <label htmlFor="department" className="block text-gray-700">Select Department</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border rounded-md"
                >
                  <option value="">Select a department</option>
                  <option value="General Medicine">General Medicine</option>
                  <option value="Surgery">Surgery</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Cardiology">Cardiology</option>
                </select>
              </div>

              {/* Date */}
              <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              {/* Time */}
              <div className="mb-4">
                <label htmlFor="time" className="block text-gray-700">Preferred Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Additional Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  rows="4"
                  placeholder="Any additional information..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentForm;
