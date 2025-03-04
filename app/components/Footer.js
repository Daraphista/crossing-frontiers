export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Services", href: "#services" },
        { name: "Meet the Team", href: "#team" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Immigration Services",
      links: [
        { name: "Work Visas", href: "#services" },
        { name: "Green Cards", href: "#services" },
        { name: "Business Immigration", href: "#services" },
        { name: "Startup Visas", href: "#services" },
        { name: "Employment-Based", href: "#services" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "info@crossingfrontiers.ca", href: "mailto:info@crossingfrontiers.ca" },
        { name: "Schedule Consultation", href: "#contact" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Crossing Frontiers P.C.</h3>
            <p className="text-gray-400 text-sm">
              Strategic U.S. immigration solutions for entrepreneurs, businesses, and professionals.
            </p>
            <div className="pt-2">
              <div className="inline-block bg-blue-900 px-4 py-2 rounded-lg text-sm">
                Licensed in U.S. & Canada
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Crossing Frontiers P.C. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 