import React from "react";
import { Link } from "react-router-dom";

// Business Prospects Data
const businessData = {
  title: "Business Prospects of the GuardNex System",
  prospects: [
    {
      id: 1,
      title: "Commercial Anti-Spam Service for Companies",
      description: "Organizations can deploy GuardNex to filter spam messages across their internal communication systems, reducing the risk of phishing, fraud, and data breaches. This offers a valuable cybersecurity solution for businesses of all sizes.",
      icon: "shield",
      color: "blue",
      gradient: "from-blue-50 to-white",
      border: "border-blue-100",
      iconBg: "bg-blue-600"
    },
    {
      id: 2,
      title: "Integration with Telecom and Messaging Providers",
      description: "Telecom operators, SMS gateway providers, and messaging platforms can integrate GuardNex to automatically detect spam in customer messages. This can be offered as a premium safety feature or bundled service.",
      icon: "network",
      color: "purple",
      gradient: "from-purple-50 to-white",
      border: "border-purple-100",
      iconBg: "bg-purple-600"
    },
    {
      id: 3,
      title: "Subscription-Based SaaS Platform",
      description: "GuardNex can be deployed as a cloud-based Software-as-a-Service where users or businesses subscribe monthly to check messages, view analytics, and manage spam detection through an online dashboard.",
      icon: "cloud",
      color: "green",
      gradient: "from-green-50 to-white",
      border: "border-green-100",
      iconBg: "bg-green-600"
    },
    {
      id: 4,
      title: "Licensing for Educational and Government Institutions",
      description: "Schools, universities, and government offices often deal with fraudulent messages. GuardNex can be licensed as a secure multilingual spam detection system to protect large user bases efficiently.",
      icon: "building",
      color: "orange",
      gradient: "from-orange-50 to-white",
      border: "border-orange-100",
      iconBg: "bg-orange-600"
    },
    {
      id: 5,
      title: "Expansion into Mobile and Enterprise Security Applications",
      description: "By adding Android/iOS app support, the system can evolve into a full digital-security product. It can later expand into enterprise-level solutions such as secure communication apps, fraud-detection tools, and multilingual NLP-based security systems.",
      icon: "mobile",
      color: "indigo",
      gradient: "from-indigo-50 to-white",
      border: "border-indigo-100",
      iconBg: "bg-indigo-600"
    }
  ]
};

// Icon components mapping
const getIcon = (iconName) => {
  const icons = {
    shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    network: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    cloud: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    building: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    mobile: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
  };
  return icons[iconName] || icons.shield;
};

const Business = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-50 text-primary-600 font-medium text-sm mb-6">
            Enterprise Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8">
            <span className="block text-gray-900">
              Protect Your Business from
            </span>
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Spam Threats
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Comprehensive spam protection solutions designed for businesses of
            all sizes. Secure your communication channels and protect your
            employees.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-full text-white font-medium transition-all duration-300 shadow-lg shadow-primary-600/20"
            >
              Contact Sales
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 bg-white hover:bg-gray-50 rounded-full text-gray-700 font-medium transition-all duration-300 border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>


      {/* Business Prospects Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {businessData.title}
          </h2>
          <p className="text-lg text-gray-600">
            Discover the immense potential and growth opportunities in the spam detection market
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto">
          {businessData.prospects.map((prospect) => (
            <div
              key={prospect.id}
              className={`bg-gradient-to-br ${prospect.gradient} p-8 rounded-2xl shadow ${prospect.border} hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${prospect.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={getIcon(prospect.icon)}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {prospect.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {prospect.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Join the Future of Spam Protection?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with GuardNex and be part of the next generation of cybersecurity solutions
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/register"
              className="px-8 py-4 bg-white hover:bg-gray-100 rounded-full text-blue-600 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-700 hover:bg-blue-800 rounded-full text-white font-semibold transition-all duration-300 border-2 border-white/20 hover:border-white/40"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Business;
