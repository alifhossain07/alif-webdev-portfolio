import { FaUserTie, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import React from "react";

const Contact = () => {
  return (
    <div className="py-20 ">
      <div className="w-10/12 mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold font-title">
            <span className="text-sky-500">Get</span> in Touch
          </h1>
          <p className="text-xl font-text text-gray-600 mt-3">
            Feel free to reach out for any inquiries or collaborations.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
          {/* Freelancer Status */}
          <div className=" bg-sky-100 duration-500 hover:bg-sky-200 p-6 shadow-lg rounded-xl flex flex-row items-center gap-4">
            <FaUserTie className="text-sky-500 w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold">Freelancer</h2>
              <p className="text-gray-600">Available</p>
            </div>
          </div>

          {/* Email Section */}
          <div className=" bg-sky-100 duration-500 hover:bg-sky-200 p-6 shadow-lg rounded-xl flex flex-row items-center gap-4">
            <FaEnvelope className="text-sky-500 w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold">Email</h2>
              <p className="text-gray-600">info@example.com</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className=" bg-sky-100 duration-500 hover:bg-sky-200 p-6 shadow-lg rounded-xl flex flex-row items-center gap-4">
            <FaPhoneAlt className="text-sky-500 w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold">Phone</h2>
              <p className="text-gray-600">+880 1234 567 890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
