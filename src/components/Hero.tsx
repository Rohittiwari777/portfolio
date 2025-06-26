import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hi, I'm Rohit 👋
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-6">
            An Aspiring Software Developer
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-gray-300 mb-2">
            Fueled by curiosity, driven by creativity.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-2">
            I build solutions, solve problems, and dream in code.
          </p>
          <p className="text-lg md:text-xl text-purple-300 font-semibold">
            Let's create something meaningful together.
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="#contact" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com/Rohittiwari777" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/rohit-tiwari-23b14324b" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
