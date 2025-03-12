import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const roles = [
    "Hey, I'm Vaibhav",
    'Cybersecurity Enthusiast',
    'Network Engineer',
    'IT Student'
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-neutral-900 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="space-x-6 mx-auto">
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#resume" className="hover:text-gray-400">Resume</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </nav>
        </div>
      </header>

      <section className="py-32 text-center">
        <motion.h2 
          className="text-5xl font-bold mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {roles[currentRole]}
        </motion.h2>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Port Scanner', link: 'https://github.com/your-github/port-scanner' },
              { name: 'MAC Address Changer', link: 'https://github.com/your-github/mac-address-changer' },
              { name: 'Honeypot', link: 'https://github.com/your-github/honeypot' },
              { name: 'Ping Sweeper', link: 'https://github.com/your-github/ping-sweeper' },
              { name: 'Brute Force SSH Login', link: 'https://github.com/your-github/brute-force-ssh' },
              { name: 'MITM Attack Simulation', link: 'https://github.com/your-github/mitm-attack' },
            ].map(project => (
              <motion.div 
                key={project.name} 
                className="p-4 border rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-all shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  {project.name}
                  <svg className="w-5 h-5 text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </h4>
                <a 
                  href={project.link} 
                  className="text-teal-400 hover:text-teal-300 mt-2 block"
                >View on GitHub</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="py-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">Resume</h3>
        <a
          href="https://your-resume-link.com"
          className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-500 transition-all"
        >
          Download Resume
        </a>
      </section>

      <section id="contact" className="py-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
        <p>Email: your-email@gmail.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/your-profile" className="text-teal-400 hover:text-teal-300">linkedin.com/in/your-profile</a></p>
      </section>

      <footer className="bg-neutral-900 text-white py-6 text-center">
        <p className="text-sm text-gray-500">&copy; 2025. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
