import React from 'react';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            📬 Contact
          </h2>
          <p className="text-xl text-purple-200">Let's connect and build something amazing</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-purple-300">Get In Touch</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in technology. Whether you have a project idea, want to discuss opportunities, or just want to say hello, I'd love to hear from you!
                </p>
                
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                  <span>Almora, India</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-purple-300">Let's connect on:</h4>
                
                <div className="space-y-3">
                  <a 
                    href="mailto:Rohittwari825@gmail.com" 
                    className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-6 h-6 mr-4 text-blue-400" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-300 text-sm">Rohittwari825@gmail.com</div>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/rohit-tiwari-23b14324b" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin className="w-6 h-6 mr-4 text-blue-400" />
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-gray-300 text-sm">rohit-tiwari-23b14324b</div>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/Rohittiwari777" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-6 h-6 mr-4 text-purple-400" />
                    <div>
                      <div className="font-semibold">GitHub</div>
                      <div className="text-gray-300 text-sm">Rohittiwari777</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
