import { useState } from "react";
import { FaGithub, FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaCalculator, FaCode, FaSyncAlt, FaTasks } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Calculator",
    desc: "A simple web-based calculator built using JavaScript and styled with CSS.",
    icon: <FaCalculator size={40} className="text-pink-200 mb-2 mx-auto" />,
    link: "/calculator/index.html"
  },
  {
    title: "Array & Objects",
    desc: "A JavaScript activity exploring arrays and object manipulation techniques.",
    icon: <FaCode size={40} className="text-pink-200 mb-2 mx-auto" />,
    link: "/array_objects/index.html"
  },
  {
    title: "Loop Exercise",
    desc: "Practiced different looping structures to solve basic programming challenges.",
    icon: <FaSyncAlt size={40} className="text-pink-200 mb-2 mx-auto" />,
    link: "/loop/index.html"
  },
  {
    title: "To-Do List App",
    desc: "A task management mini-app using React with local storage support.",
    icon: <FaTasks size={40} className="text-pink-200 mb-2 mx-auto" />,
    link: "/to_do_list/index.html"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full flex items-center justify-between px-10 py-4 bg-black/40 backdrop-blur-md shadow-md z-50">
        <h1 className="text-2xl font-bold text-pink-300">Mary Claire Callejo</h1>
        <div className="lg:hidden" onClick={toggleMenu}>
          <div className="w-6 h-1 bg-pink-300 mb-1" />
          <div className="w-6 h-1 bg-pink-300 mb-1" />
          <div className="w-6 h-1 bg-pink-300" />
        </div>
        <ul className={`lg:flex gap-8 text-lg font-medium ${isMenuOpen ? 'flex' : 'hidden'} lg:block`}>
          {["Home", "About", "Projects", "Social"].map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer hover:text-pink-400 transition ${activeTab === tab ? "text-pink-400 underline" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>

      {/* Background */}
      <div
        className="pt-28 px-6 min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-sm z-0" />

        {/* Content Container */}
        <div className="relative z-10">
          {/* Home */}
          {activeTab === "Home" && (
            <motion.div
              className="flex flex-col items-center justify-center mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/claire.jpg"
                alt="Mary Claire Callejo"
                className="w-48 h-48 rounded-full border-4 border-pink-200 shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <h2 className="mt-6 text-4xl font-extrabold text-pink-200 drop-shadow-lg tracking-wide">
                Mary Claire Callejo
              </h2>
              <p className="text-lg text-white/90 mt-2 italic">
                Third-Year IT Student · Curious Coder · Tech Explorer in the Making
              </p>
              <p className="text-sm text-white/80 mt-1">
                Abra State Institute of Science and Technology – Main Campus
              </p>
              <p className="text-base text-pink-100 mt-3 max-w-md">
                “Every line of code I write brings me one step closer to the future I’m building.”
              </p>
            </motion.div>
          )}

          {/* About */}
          {activeTab === "About" && (
            <motion.section
              className="max-w-3xl mx-auto mt-12 bg-white/10 p-10 rounded-3xl backdrop-blur-md shadow-2xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-bold text-pink-200 mb-4">About Me</h2>
              <p className="text-lg text-white leading-relaxed">
                Hi there! I'm <span className="font-semibold text-pink-300">Mary Claire Callejo</span>, a third-year IT student who loves exploring how technology can solve everyday problems. I enjoy learning by building small projects using tools like <span className="text-pink-200">Flask</span> and <span className="text-pink-200">XAMPP</span>. I'm still growing my skills, but I’m excited about the journey ahead and passionate about making an impact through code.
              </p>
              <img
                src="/claire.jpg"
                alt="Mary Claire Callejo"
                className="w-28 h-28 rounded-full shadow-lg mt-6 mx-auto hover:rotate-3 hover:scale-105 transition-transform duration-300"
              />
            </motion.section>
          )}

          {/* Projects */}
          {activeTab === "Projects" && (
            <motion.section
              className="relative mt-12 rounded-3xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

              {/* Projects Content */}
              <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/60 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 block text-center"
                  >
                    {project.icon}
                    <h3 className="text-xl font-semibold text-pink-200">{project.title}</h3>
                    <p className="text-sm text-white mb-3">{project.desc}</p>
                  </a>
                ))}
              </div>
            </motion.section>
          )}

          {/* Social */}
          {activeTab === "Social" && (
            <motion.section
              className="max-w-3xl mx-auto mt-12 p-10 rounded-3xl backdrop-blur-md shadow-2xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-bold text-pink-200 mb-4">Connect with Me</h2>
              <div className="flex justify-center gap-6 flex-wrap">
                <a
                  href="https://github.com/maryclaire16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-200 hover:text-pink-400 transition flex flex-col items-center w-36"
                >
                  <FaGithub size={36} />
                  <div className="font-semibold mt-2">GitHub</div>
                  <div className="text-sm text-white text-center">View my repositories and projects.</div>
                </a>

                <a
                  href="https://facebook.com/MaryClaireCallejo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-200 hover:text-pink-400 transition flex flex-col items-center w-36"
                >
                  <FaFacebook size={36} />
                  <div className="font-semibold mt-2">Facebook</div>
                  <div className="text-sm text-white text-center">Let’s connect and chat.</div>
                </a>

                <a
  href="mailto:brianchristophercarreon@gmail.com?subject=Let's%20Connect&body=Hi%20Mary%20Claire%2C%0A%0AI'd%20like%20to%20reach%20out%20regarding..."
  className="text-pink-200 hover:text-pink-400 transition flex flex-col items-center w-36"
>
  <FaEnvelope size={36} />
  <div className="font-semibold mt-2">Email</div>
  <div className="text-sm text-white text-center">Send me a message anytime.</div>
</a>



                <a
                  href="https://linkedin.com/in/maryclairecallejo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-200 hover:text-pink-400 transition flex flex-col items-center w-36"
                >
                  <FaLinkedin size={36} />
                  <div className="font-semibold mt-2">LinkedIn</div>
                  <div className="text-sm text-white text-center">View my profile and connect.</div>
                </a>
              </div>

              <div className="mt-6 text-white">
                <p>I'm open to collaborations, discussions, and opportunities. Reach out anytime!</p>
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  );
}
