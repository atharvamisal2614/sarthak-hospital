import { FaWalking, FaUserCheck, FaHeartbeat, FaBed, FaSmile, FaVial } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AtTheGlance = () => {
  // Initialize the Intersection Observer for detecting when elements are visible
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div className="p-6 md:p-10 mt-10">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">Sarthak Hospital at a Glance!</h2>
      <div className="border-t-2 border-red-600 py-4 h-5 mx-auto md:w-1/12 w-1/4"></div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mt-10">
        {/* 3 lakh+ footfalls */}
        <div className="flex flex-col items-center">
          <FaWalking className="text-5xl text-blue-500 mb-4" />
          <h4 className="text-2xl font-bold text-blue-500">
            {inView && <CountUp start={0} end={300000} duration={3} separator="," />}+
          </h4>
          <p>Footfalls</p>
        </div>

        {/* 1 lakh+ patient satisfaction */}
        <div className="flex flex-col items-center">
          <FaUserCheck className="text-5xl text-green-500 mb-4" />
          <h4 className="text-2xl font-bold text-green-500">
            {inView && <CountUp start={0} end={100000} duration={3} separator="," />}+
          </h4>
          <p>Patient Satisfaction</p>
        </div>

        {/* 300+ insurance tie-ups */}
        <div className="flex flex-col items-center">
          <FaHeartbeat className="text-5xl text-red-500 mb-4" />
          <h4 className="text-2xl font-bold text-red-500">
            {inView && <CountUp start={0} end={300} duration={3} separator="," />}+
          </h4>
          <p>Insurance Tie-ups</p>
        </div>

        {/* 260+ beds */}
        <div className="flex flex-col items-center">
          <FaBed className="text-5xl text-purple-500 mb-4" />
          <h4 className="text-2xl font-bold text-purple-500">
            {inView && <CountUp start={0} end={260} duration={3} separator="," />}+
          </h4>
          <p>Hospital Beds</p>
        </div>

        {/* 3 lakh+ happy patients */}
        <div className="flex flex-col items-center">
          <FaSmile className="text-5xl text-yellow-500 mb-4" />
          <h4 className="text-2xl font-bold text-yellow-500">
            {inView && <CountUp start={0} end={300000} duration={3} separator="," />}+
          </h4>
          <p>Happy Patients</p>
        </div>

        {/* 2 lakh+ blood tests done */}
        <div className="flex flex-col items-center">
          <FaVial className="text-5xl text-pink-500 mb-4" />
          <h4 className="text-2xl font-bold text-pink-500">
            {inView && <CountUp start={0} end={200000} duration={3} separator="," />}+
          </h4>
          <p>Blood Tests Done</p>
        </div>
      </div>
    </div>
  );
};

export default AtTheGlance;
