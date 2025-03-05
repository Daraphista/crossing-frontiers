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
    <footer className="bg-primary-900 text-white">
      <div className="container px-6 py-12 mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col justify-between gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Crossing Frontiers P.C.</h3>
            <p className="text-secondary-200 max-w-sm text-sm">
              Strategic U.S. immigration solutions for entrepreneurs, businesses, and professionals.
            </p>
            <div className="pt-2">
              <div className="bg-primary-800 inline-block px-4 py-2 text-sm rounded-lg">
                Licensed in U.S. & Canada
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-secondary-200 hover:text-white text-sm transition-colors"
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
        <div className="border-primary-800 pt-8 mt-12 border-t">
          <div className="md:flex-row md:space-y-0 flex flex-col items-center justify-between space-y-4">
            <div className="text-secondary-200 text-sm">
              © {currentYear} Crossing Frontiers P.C. All rights reserved.
            </div>
            <div className="text-secondary-200 flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 