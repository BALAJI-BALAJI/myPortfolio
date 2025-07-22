import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Header from "../shared/Header";

const Contact: React.FC = () => {
  return (
    <>
    <Header />
    <section className="bg-[#0f172a] text-white px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-500 text-center mb-4">
          Contact Me
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          I'm actively looking for Front-End Developer opportunities. Whether you have a job, freelance project, or collaboration, feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Contact Info */}
          <div className="space-y-6">
            <div>
              <p className="text-purple-400 font-semibold">Email</p>
              <p>balajimsd278@gmail.com</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold">Phone / WhatsApp</p>
              <p>+91-9080666042</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold">Location</p>
              <p>India (Open to remote & relocation)</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/in/balaji-k-n-977696306/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} className="text-white bg-purple-600 p-1 rounded hover:bg-purple-700 transition" />
              </a>
              <a href="https://github.com/BALAJI-BALAJI?tab=repositories" target="_blank" rel="noopener noreferrer">
                <FaGithub size={28} className="text-white bg-purple-600 p-1 rounded hover:bg-purple-700 transition" />
              </a>
              <a href="https://www.instagram.com/balaji_its_sha/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} className="text-white bg-purple-600 p-1 rounded hover:bg-purple-700 transition" />
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition text-white font-semibold px-6 py-3 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
