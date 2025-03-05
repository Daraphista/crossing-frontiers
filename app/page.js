import Image from "next/image";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import OwnerSpotlight from "./components/OwnerSpotlight";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
        <div className="container px-6 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-primary-800 text-2xl font-bold">
              Crossing Frontiers P.C.
            </div>
            <div className="md:flex hidden space-x-8">
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
      <section className="pt-44 bg-gradient-to-r from-secondary-50 to-secondary-100 pb-20">
        <div className="container px-6 mx-auto">
          <div className="relative max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="-top-16 bg-primary-600 rotate-14 border-primary-500 text-secondary-50 absolute right-0 p-4 transform border-2 rounded-lg shadow-lg">
              <span className="text-sm font-semibold"><span className="text-xl">100+</span> Startups Helped</span>
            </div>
            
            <h1 className="md:text-5xl text-primary-800 mb-6 text-4xl font-bold">
              You Deserve a Clear Path to U.S. Immigration Success
            </h1>
            <h2 className="md:text-2xl text-primary-600 mb-8 text-xl">
              Personalized Solutions for Startups, Founders, Businesses & Professionals
            </h2>
            <p className="text-primary-700 mb-8 text-lg">
              You have a vision for your future in the U.S. We&apos;re here to help you make it a reality.
            </p>
            <a
              href="#contact"
              className="bg-primary-800 hover:bg-primary-700 inline-block px-8 py-4 text-lg font-semibold text-white transition-colors rounded-full"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="md:grid-cols-2 grid gap-12">
              {/* Left Section - Image */}
              <div className="relative">
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
                  <img 
                    src="/about.png"
                    alt="Alyssa Hussein, immigration attorney at Crossing Frontiers P.C."
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Experience Badge */}
                <div className="-bottom-6 -right-6 bg-primary-600 border-primary-500 rotate-3 text-secondary-50 absolute p-6 transform border-2 rounded-lg shadow-xl">
                  <div className="text-center">
                    <span className="block text-xl font-bold">10+ Years</span>
                    <span className="text-sm">Experience</span>
                  </div>
                </div>
              </div>

              {/* Right Section - Content */}
              <div className="space-y-6">
                <h2 className="text-primary-800 mb-8 text-3xl font-bold">About Us</h2>
                <p className="text-primary-700">
                  At <span className="font-semibold">Crossing Frontiers P.C.</span>, we specialize in U.S. immigration law with a focus on business and employment-based solutions. Our firm is dedicated to helping entrepreneurs, professionals, and businesses navigate the complex immigration landscape.
                </p>
                
                <div className="border-primary-800 pl-4 border-l-4">
                  <p className="text-primary-700 italic">
                    <span className="font-semibold">Alyssa Hussein</span> is an experienced immigration attorney that provides comprehensive immigration services. She understand that each case is unique and requires a tailored approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20">
        <div className="container px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="md:grid-cols-2 grid gap-12">
              {/* Left Column - Content */}
              <div>
                <h3 className="text-primary-800 text-2xl font-semibold">Our Expertise</h3>
                
                <div className="bg-secondary-50 border-secondary-100 p-4 mt-6 border-2 rounded-lg">
                  <h4 className="text-primary-800 mb-2 font-semibold">Services We Provide:</h4>
                  <ul className="text-primary-700 space-y-2 list-disc list-inside">
                    <li>Work visas and green cards</li>
                    <li>Extraordinary ability petitions</li>
                    <li>Business immigration solutions</li>
                    <li>Cross-border legal matters</li>
                  </ul>
                </div>

                <p className="text-primary-700 mt-6">
                  Our clients include startup founders revolutionizing their industries, tech professionals driving innovation, and business executives expanding their operations to the U.S.
                </p>

                <div className="bg-secondary-50 border-secondary-100 p-4 mt-6 border-2 rounded-lg">
                  <h4 className="text-primary-800 mb-2 font-semibold">Our Commitment:</h4>
                  <p className="text-primary-700">
                    With our expertise in cross-border matters and industry-specific knowledge, we help turn your U.S. immigration goals into reality. Our commitment is to provide clear guidance and reliable support throughout your immigration journey.
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="w-full h-[500px] rounded-lg overflow-hidden">
                  <img 
                    src="/our-expertise.png"
                    alt="Our expertise in immigration law"
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Success Badge */}
                <div className="-bottom-8 -left-8 bg-primary-600 -rotate-3 border-primary-500 text-secondary-50 absolute p-6 transform border-2 rounded-lg shadow-xl">
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
      <section id="contact" className="bg-primary-800 py-20 text-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="md:grid-cols-2 grid gap-12">
              {/* Left Column - Content */}
              <div className="md:text-left text-center">
                <h2 className="mb-8 text-3xl font-bold">Start Your Immigration Journey Now</h2>
                <p className="text-secondary-100 mb-8">
                  Ready to take the next step in your U.S. immigration journey? We&apos;re here to help guide you through the process with expertise and dedication. Get in touch with us to discuss your unique situation and explore your options.
                </p>
                <div className="space-y-6">
                  <div className="md:justify-start flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary-200 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                      href="mailto:info@crossingfrontiers.ca"
                      className="hover:text-secondary-200 decoration-2 underline-offset-4 text-xl text-white underline transition-colors"
                    >
                      info@crossingfrontiers.ca
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Image with Trust Indicators */}
              <div className="relative">
                <div className="w-full overflow-hidden rounded-lg">
                  <img
                    src="/calendly.png"
                    alt="Schedule a consultation"
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Client Badge */}
                <div className="-top-20 -right-20 text-primary-800 rotate-6 bg-secondary-50 border-secondary-100 absolute p-6 transform border-2 rounded-lg shadow-xl">
                  <div className="text-center">
                    <span className="block text-2xl font-bold">★★★★★</span>
                    <span className="text-sm">Client Success</span>
                  </div>
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
