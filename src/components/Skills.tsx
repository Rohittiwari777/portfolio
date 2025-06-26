import React from 'react';
import { Code, Database, Brain, Globe, Shield, Network } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React", "HTML", "CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend / Logic",
      icon: Code,
      skills: ["C++", "Python", "Golang"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["scikit-learn", "NumPy", "pandas"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Interests",
      icon: Network,
      skills: ["DSA", "Cybersecurity", "Networking", "ML", "Web Dev"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🧩 Skills
          </h2>
          <p className="text-xl text-gray-600">Languages & Tools I Work With</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 mx-auto`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-50 px-3 py-2 rounded-lg text-center text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
