import { useState } from 'react';

function BookAppointmentForm() {
  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    email: '',
    date: '',
    department: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle form submission
    console.log(formData);
    setFormData({
      patientName: '',
    phoneNumber: '',
    email: '',
    date: '',
    department: '',
    })
  };

  return (
    <div className="relative w-full bg-white p-4"> {/* White background for the form */}
      <div className="w-full bg-blue-600 p-4 text-white flex flex-col lg:flex-row justify-between">
        {/* Check Schedules Section */}
        <div className="w-full lg:w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-4">CHECK SCHEDULES</h1>

          <div className="mb-4">
            <label className="block mb-2">Department&apos;s Name</label>
            <select className="w-full p-2 text-black rounded">
              <option value="neurologist">Neurologist</option>
              <option value="cardiologist">Cardiologist</option>
              {/* Add other options */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Doctor&apos;s Name</label>
            <select className="w-full p-2 text-black rounded">
              <option value="">Choose a Doctor</option>
              <option value="doctor1">Dr. Smith</option>
              {/* Add other options */}
            </select>
          </div>

          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
            VIEW SCHEDULE
          </button>
        </div>

        {/* Book Appointment Section */}
        <div className="w-full lg:w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-4">BOOK APPOINTMENT</h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Patient Name</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="w-full p-2 text-black rounded"
                placeholder="Enter Patient Name"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 text-black rounded"
                placeholder="Enter Phone Number"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 text-black rounded"
                placeholder="Enter Email Address"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Choose Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 text-black rounded"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full p-2 text-black rounded"
              >
                <option value="pediatric">Pediatric</option>
                {/* Add other departments */}
              </select>
            </div>

            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookAppointmentForm;
