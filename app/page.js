import Image from "next/image";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import OwnerSpotlight from "./components/OwnerSpotlight";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-900">
              Crossing Frontiers P.C.
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-900">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900">Services</a>
              <a href="#team" className="text-gray-700 hover:text-blue-900">Team</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-900">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              You Deserve a Clear Path to U.S. Immigration Success
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
              Personalized Solutions for Startups, Founders, Businesses & Professionals
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              You have a vision for your future in the U.S. We're here to help you make it a reality.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Section - Image */}
              <div>
                <div className="w-full h-[400px] bg-gray-300 rounded-lg" />
              </div>

              {/* Right Section - Content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">About Us</h2>
                <p className="text-gray-700">
                  At <span className="font-semibold">Crossing Frontiers P.C.</span>, we specialize in U.S. immigration law with a focus on business and employment-based solutions. Our firm is dedicated to helping entrepreneurs, professionals, and businesses navigate the complex immigration landscape.
                </p>
                
                <div className="border-l-4 border-blue-900 pl-4">
                  <p className="text-gray-700 italic">
                    Under the leadership of <span className="font-semibold">Alyssa Hussein</span>, our experienced team provides comprehensive immigration services. We understand that each case is unique and requires a tailored approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Content */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-900">Our Expertise</h3>
                
                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Services We Provide:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Work visas and green cards</li>
                    <li>Extraordinary ability petitions</li>
                    <li>Business immigration solutions</li>
                    <li>Cross-border legal matters</li>
                  </ul>
                </div>

                <p className="text-gray-700 mt-6">
                  Our clients include startup founders revolutionizing their industries, tech professionals driving innovation, and business executives expanding their operations to the U.S.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Our Commitment:</h4>
                  <p className="text-gray-700">
                    With our expertise in cross-border matters and industry-specific knowledge, we help turn your U.S. immigration goals into reality. Our commitment is to provide clear guidance and reliable support throughout your immigration journey.
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div>
                <div className="w-full h-[500px] bg-gray-300 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Owner Spotlight Section */}
      <section id="team">
        <OwnerSpotlight />
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Content */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-8">Start Your Immigration Journey Now</h2>
                <p className="text-gray-100 mb-8">
                  Ready to take the next step in your U.S. immigration journey? We're here to help guide you through the process with expertise and dedication. Get in touch with us to discuss your unique situation and explore your options.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center md:justify-start space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                      href="mailto:info@crossingfrontiers.ca"
                      className="text-xl text-white hover:text-blue-100 underline decoration-2 underline-offset-4 transition-colors"
                    >
                      info@crossingfrontiers.ca
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Gray Square */}
              <div>
                <div className="w-full h-[400px] bg-gray-300 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
