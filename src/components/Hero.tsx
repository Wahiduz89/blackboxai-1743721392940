'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  const technologies = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-xl mb-4">
              Full Stack
              <span className="text-gradient block">Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Crafting responsive and user-friendly web applications with modern technologies.
              Passionate about creating seamless user experiences and robust backend solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 border-2 border-gray-800 dark:border-gray-200 rounded-lg hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="animate-float">
              <div className="relative w-full h-[400px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-semibold mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="px-3 py-1 bg-white/20 rounded-full text-white text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;