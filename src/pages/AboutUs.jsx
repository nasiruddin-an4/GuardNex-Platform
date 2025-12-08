import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
              <span className="text-gray-700 font-medium">🛡️ Protecting Digital Communications Since 2024</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
              <span className="text-gray-900">About </span>
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">GuardNex</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Leveraging cutting-edge <strong>Machine Learning</strong> and <strong>Natural Language Processing</strong> to create a safer digital world, one message at a time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#mission" className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 rounded-full text-white font-semibold transition-all duration-300 shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:-translate-y-0.5">
                Our Mission
              </a>
              <a href="#team" className="px-8 py-4 bg-white hover:bg-gray-50 rounded-full text-gray-700 font-semibold transition-all duration-300 border-2 border-gray-200 hover:border-primary-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              GuardNex is an advanced multi-language spam detection system that protects users from unwanted messages across multiple platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                title: "Email Protection",
                description: "Advanced filtering for email spam and phishing attempts"
              },
              {
                icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                title: "SMS Detection",
                description: "Real-time analysis of text messages for spam content"
              },
              {
                icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
                title: "Social Media",
                description: "Protection against spam in social media messages"
              },
              {
                icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
                title: "Multi-Language",
                description: "Support for Bangla, English, and Spanish languages"
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center mb-4 transition-colors duration-300">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div id="mission" className="py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-4">
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="backdrop-blur-sm bg-white/90 rounded-3xl p-10 md:p-12 border border-gray-100 shadow-2xl relative overflow-hidden">
              <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-primary-600/5 blur-3xl rounded-full"></div>
              <div className="absolute -z-10 bottom-0 left-0 w-64 h-64 bg-accent-600/5 blur-3xl rounded-full"></div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                At <strong className="text-primary-600">GuardNex</strong>, we're committed to creating a <strong>safer digital communication environment</strong> by leveraging advanced <strong>Machine Learning</strong>, <strong>Natural Language Processing</strong> to combat unwanted spam messages across multiple platforms.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our goal is to provide individuals and businesses with <strong>powerful, easy-to-use tools</strong> that protect their time and resources from the growing threat of spam communications. We believe everyone deserves a clean inbox and safe digital interactions.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                With support for <strong>multiple languages</strong> and <strong>multi-format detection</strong> (Email, SMS, Social Media), GuardNex is designed to serve a global audience and adapt to evolving spam threats through continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powered by state-of-the-art machine learning algorithms and natural language processing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Machine Learning Models",
                description: "Advanced Naive Bayes classifiers trained on millions of spam samples across multiple languages, providing industry-leading accuracy of 99.8%.",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                color: "blue"
              },
              {
                title: "Natural Language Processing",
                description: "Multi-language NLP capabilities supporting Bangla, English, and Spanish with language-specific preprocessing and feature extraction.",
                icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
                color: "purple"
              },
              {
                title: "Real-time Detection",
                description: "Instant spam analysis with confidence scoring and detailed spam indicators, processing over 50 million messages daily.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                color: "green"
              },
              {
                title: "Continuous Learning",
                description: "Our models continuously improve through user feedback and new data, adapting to emerging spam patterns and techniques.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                color: "orange"
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className={`w-16 h-16 rounded-2xl bg-${tech.color}-100 group-hover:bg-${tech.color}-200 flex items-center justify-center mb-6 transition-colors duration-300`}>
                  <svg className={`w-8 h-8 text-${tech.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tech.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at GuardNex
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Security First",
                description: "We prioritize the protection of our users' communications and personal data with state-of-the-art security measures and continuous monitoring.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Innovation",
                description: "We continuously evolve our technology to stay ahead of emerging spam threats and provide cutting-edge solutions that set new industry standards.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                title: "User Focused",
                description: "We design our solutions with our users in mind, ensuring intuitive, accessible, and effective protection against all forms of spam.",
                gradient: "from-green-500 to-green-600"
              }
            ].map((value, index) => (
              <div key={index} className="group relative">
                <div className="h-full backdrop-blur-sm bg-white hover:bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "92.8%", label: "Detection Accuracy", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { value: "500+", label: "Messages Protected Daily", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
              { value: "3", label: "Languages Supported", icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" },
              { value: "1+", label: "Business Clients", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <div className="text-5xl font-extrabold text-white mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <p className="text-xl text-white/90 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div id="team" className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind GuardNex's innovative spam detection technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="group">
              <div className="backdrop-blur-sm bg-white hover:bg-white rounded-3xl p-10 border border-gray-100 shadow h-[500px] hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mr-6 shadow-lg shadow-primary-600/30 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-4xl font-bold text-white">N</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-1">Nasir Uddin</h3>
                      <p className="text-lg text-primary-600 font-semibold">Co-founder</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Leads the development of our ML algorithms and spam detection systems. With deep expertise in machine learning, natural language processing, and cybersecurity, Nasir ensures that our technology remains innovative, accurate, and ahead of emerging digital threats.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-600 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300 group/icon">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="group">
              <div className="backdrop-blur-sm bg-white hover:bg-white rounded-3xl p-10 border border-gray-100 shadow h-[500px] hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mr-6 shadow-lg shadow-accent-600/30 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-4xl font-bold text-white">R</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-1">Wazid Ahmmed Razi</h3>
                      <p className="text-lg text-accent-600 font-semibold">Co-founder</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Leads the platform’s architecture and user experience design, ensuring every interaction is intuitive, efficient, and accessible. With a strong commitment to user-centered development, he transforms complex technology into a seamless experience suitable for individuals, businesses, and enterprise clients alike.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-accent-600 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary-600 to-accent-600 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Communications?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of users and businesses who trust GuardNex to keep their inboxes clean and secure
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="px-10 py-4 bg-white hover:bg-gray-100 rounded-full text-primary-600 font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Get Started Free
            </Link>
            <Link
              to="/business"
              className="px-10 py-4 bg-primary-700 hover:bg-primary-800 rounded-full text-white font-bold text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 hover:-translate-y-1"
            >
              Enterprise Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
