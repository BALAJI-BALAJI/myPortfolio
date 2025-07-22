import React from 'react';
import Header from '../shared/Header';

const About: React.FC = () => {
  return (
    <>
    <Header />
    <section className="bg-gray-900 text-white px-6 md:px-20 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-purple-500 inline-block pb-1">
          About Me
        </h2>
        <p className="text-lg leading-7 mb-4">
          Hello! I'm <span className="text-purple-400 font-semibold">Balaji K N</span>, a passionate and detail-oriented <strong>Front-End React Developer</strong> from India. I specialize in building responsive, user-friendly, and modern web interfaces using <span className="text-purple-400">React.js, TypeScript, JavaScript, Tailwind CSS, and HTML/CSS</span>.
        </p>
        <p className="text-lg leading-7 mb-4">
          I completed my <strong>Bachelor of Computer Applications (BCA)</strong> from <strong>Vels University, Pallavaram</strong>. During my academic journey, I actively engaged in building real-time projects that honed my development and problem-solving skills.
        </p>
        <p className="text-lg leading-7 mb-4">
          In <strong>July 2024 – Present (2025)</strong>, I joined <strong>DD Infotech</strong>, where I worked on several live projects including a <strong>food booking app</strong>, various <strong>responsive websites</strong>, and <strong>e-commerce platforms</strong> using <strong>React.js and TypeScript</strong>. This helped me improve my <strong>UI development</strong>, <strong>team collaboration</strong>, and <strong>code management using Git</strong>.
        </p>
        <p className="text-lg leading-7 mb-4">
          From <strong>May 2024 to July 2024</strong>, I completed a <strong>3-month Front-End Development internship at DD Infotech</strong>, where I contributed to real-time projects such as a <strong>food ordering app</strong>, dynamic websites, and e-commerce platforms using <strong>React.js and TypeScript</strong>. This experience sharpened my skills in building modern user interfaces, enhanced my ability to collaborate within a development team, and strengthened my workflow with <strong>version control tools like Git</strong>.
        </p>
        <p className="text-lg leading-7 mb-4">
          I’ve also built a variety of practical projects, including a <strong>Food ordering app</strong> , an <strong>Amazon simulation</strong> , and a <strong>portfolio site</strong>, applying real-world design patterns, component-based architecture, and performance optimization techniques.
        </p>
        <p className="text-lg leading-7">
          Currently, I’m sharpening my skills further by exploring <strong>animations, UI libraries, and modern React workflows</strong>. My goal is to grow into a full-time front-end developer role and contribute to building clean, scalable, and impactful digital solutions.
        </p>
        <p className="text-lg leading-7 mt-4">
          Thank you for taking the time to learn more about me!
        </p>
      </div>
    </section>
    </>
    
  );
};

export default About;
