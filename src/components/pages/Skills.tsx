import Header from "../shared/Header";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiRedux, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiFramer, SiReactrouter, SiTypescript, SiNetlify, SiVercel, SiPostman, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" size={40} /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={40} /> },
  { name: "Redux", icon: <SiRedux className="text-purple-400" size={40} /> },
  { name: "TypeScript", icon: <SiTypescript className="text-yellow-500" size={40} /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" size={40} /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" size={40} /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" size={40} /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" size={40} /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" size={40} /> },
  { name: "Github", icon: <FaGithub className="text-black" size={40} /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" size={40} /> },
  { name: "React Router", icon: <SiReactrouter className="text-rose-500" size={40} /> },
  { name: "Netlify", icon: <SiNetlify className="text-cyan-500" size={40} /> },
  { name: "Vercel", icon: <SiVercel className="text-white" size={40} /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" size={40} /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={40} /> },


  
];

const Skills: React.FC = () => {
  return (
    <>
    <Header />
        <section className="bg-[#0f172a] text-white px-6 md:px-20 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-10 border-b-2 pb-2 border-purple-600 inline-block">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border-2 border-purple-500 hover:border-purple-700 p-6 rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>

  );
};

export default Skills;
