import React from 'react';
import { ExternalLink, Github, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Disease Detection from X-ray",
      description: "Built a system to detect diseases (like pneumonia) using machine learning on X-ray images.",
      details: [
        "Used Python, deep learning models, and medical datasets",
        "Learned about AI in healthcare, data preprocessing, and evaluation techniques",
        "Combines healthcare and AI to make a difference"
      ],
      tech: ["Python", "Machine Learning", "Deep Learning", "Medical AI"],
      icon: Activity,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "File Compression using Huffman Coding",
      description: "Implemented a file compression system using Huffman coding algorithm for efficient data storage.",
      details: [
        "Built a complete compression and decompression system",
        "Implemented Huffman tree construction and encoding/decoding algorithms",
        "Achieved significant file size reduction while maintaining data integrity"
      ],
      tech: ["c++", "Data Structures", "Algorithms", "File I/O","flask"],
      icon: Activity,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🚀 Projects
          </h2>
          <p className="text-xl text-gray-600">Things I've built with passion</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mr-4`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-dashed border-blue-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">More Projects Coming Soon!</h3>
              <p className="text-gray-600">I'm constantly building and learning new things.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
