import Image from "next/image";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import OwnerSpotlight from "./components/OwnerSpotlight";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary-800">
              Crossing Frontiers P.C.
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-primary-600 hover:text-primary-800">About</a>
              <a href="#services" className="text-primary-600 hover:text-primary-800">Services</a>
              <a href="#team" className="text-primary-600 hover:text-primary-800">Team</a>
              <a href="#faq" className="text-primary-600 hover:text-primary-800">FAQ</a>
              <a href="#contact" className="text-primary-600 hover:text-primary-800">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Add scroll listener for nav transparency */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
              nav.classList.add('bg-white', 'shadow-sm');
            } else {
              nav.classList.remove('bg-white', 'shadow-sm');
            }
          });
        `
      }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-secondary-50 to-secondary-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Trust Badge */}
            <div className="absolute -top-8 right-0 bg-primary-600 text-white px-6 py-2 rounded-full transform rotate-14 shadow-lg">
              <span className="text-sm font-semibold"><span className="text-xl">100</span>+ Startups Helped</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
              You Deserve a Clear Path to U.S. Immigration Success
            </h1>
            <h2 className="text-xl md:text-2xl text-primary-600 mb-8">
              Personalized Solutions for Startups, Founders, Businesses & Professionals
            </h2>
            <p className="text-lg text-primary-700 mb-8">
              You have a vision for your future in the U.S. We&apos;re here to help you make it a reality.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors"
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
              <div className="relative">
                <div className="w-full h-[400px] bg-secondary-200 rounded-lg overflow-hidden">
                  {/* Placeholder for actual image */}
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-6 -right-6 bg-primary-800 text-white p-6 rounded-lg shadow-xl transform rotate-3">
                  <div className="text-center">
                    <span className="block text-xl font-bold">10+ Years</span>
                    <span className="text-sm">Experience</span>
                  </div>
                </div>
              </div>

              {/* Right Section - Content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary-800 mb-8">About Us</h2>
                <p className="text-primary-700">
                  At <span className="font-semibold">Crossing Frontiers P.C.</span>, we specialize in U.S. immigration law with a focus on business and employment-based solutions. Our firm is dedicated to helping entrepreneurs, professionals, and businesses navigate the complex immigration landscape.
                </p>
                
                <div className="border-l-4 border-primary-800 pl-4">
                  <p className="text-primary-700 italic">
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
                <h3 className="text-2xl font-semibold text-primary-800">Our Expertise</h3>
                
                <div className="bg-secondary-100 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-primary-800 mb-2">Services We Provide:</h4>
                  <ul className="list-disc list-inside space-y-2 text-primary-700">
                    <li>Work visas and green cards</li>
                    <li>Extraordinary ability petitions</li>
                    <li>Business immigration solutions</li>
                    <li>Cross-border legal matters</li>
                  </ul>
                </div>

                <p className="text-primary-700 mt-6">
                  Our clients include startup founders revolutionizing their industries, tech professionals driving innovation, and business executives expanding their operations to the U.S.
                </p>

                <div className="bg-secondary-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-primary-800 mb-2">Our Commitment:</h4>
                  <p className="text-primary-700">
                    With our expertise in cross-border matters and industry-specific knowledge, we help turn your U.S. immigration goals into reality. Our commitment is to provide clear guidance and reliable support throughout your immigration journey.
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="w-full h-[500px] bg-secondary-200 rounded-lg overflow-hidden">
                  {/* Placeholder for actual image */}
                </div>
                {/* Success Badge */}
                <div className="absolute -bottom-8 -left-8 bg-primary-600 text-white p-8 rounded-full shadow-xl transform -rotate-12">
                  <div className="text-center">
                    <span className="block text-2xl font-bold">Proven</span>
                    <span className="text-sm">Track Record</span>
                  </div>
                </div>
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
      <section id="contact" className="bg-primary-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Content */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-8">Start Your Immigration Journey Now</h2>
                <p className="text-secondary-100 mb-8">
                  Ready to take the next step in your U.S. immigration journey? We&apos;re here to help guide you through the process with expertise and dedication. Get in touch with us to discuss your unique situation and explore your options.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center md:justify-start space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                      href="mailto:info@crossingfrontiers.ca"
                      className="text-xl text-white hover:text-secondary-200 underline decoration-2 underline-offset-4 transition-colors"
                    >
                      info@crossingfrontiers.ca
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Image with Trust Indicators */}
              <div className="relative">
                <div className="w-full h-[400px] bg-secondary-200 rounded-lg overflow-hidden">
                  {/* Placeholder for actual image */}
                </div>
                {/* Client Badge */}
                <div className="absolute -top-6 -right-6 bg-white text-primary-800 p-6 rounded-lg shadow-xl transform rotate-6">
                  <div className="text-center">
                    <span className="block text-2xl font-bold">★★★★★</span>
                    <span className="text-sm">Client Reviews</span>
                  </div>
                </div>
                {/* Service Badge */}
                <div className="absolute -bottom-4 -left-4 bg-primary-700 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-sm font-semibold">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
