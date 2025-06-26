
import React from 'react';
import { Code2, Heart, Mountain, Gamepad2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              🧑‍💻 About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hey there! I'm Rohit — a curious and passionate aspiring software developer from Almora.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Since I was a kid, I've been fascinated by the power of technology. That childhood spark led me to pursue Computer Science, and today, I'm turning those dreams into reality — one line of code at a time.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Problem-solving is my favorite part of development. Whether it's cracking a tough algorithm or designing an interactive frontend, I love the challenge and satisfaction that comes with it.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technically, I'm skilled in:</h3>
                <p className="text-lg text-gray-700 font-mono">
                  🛠️ C++ | Python | Machine Learning | React
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-3">Featured Project</h3>
                <p className="text-blue-100">
                  One of the most fulfilling projects I've worked on was building a <strong>disease detection system from X-ray images</strong> — combining healthcare and AI to make a difference.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Mountain className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Nature Lover</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Gamepad2 className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Gamer</p>
                </div>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <p className="text-lg font-semibold text-gray-900 mb-2">My biggest belief?</p>
                <p className="text-purple-700 font-medium">
                  "Every long journey begins with a small step."
                </p>
                <p className="text-gray-600 mt-2">
                  And I'm excited to keep walking — toward better skills, better solutions, and a better future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
