export default function Services() {
  const visaCategories = [
    {
      title: "Treaty-Based Visas",
      image: "/treaty-visa.webp",
      items: [
        { name: "TN Visa", description: "For Canadian and Mexican professionals" },
        { name: "E-1 & E-2 Visas", description: "For entrepreneurs, traders, and investors from treaty countries" }
      ]
    },
    {
      title: "Specialty Occupation Visas", 
      image: "/specialty-visa.webp",
      items: [
        { name: "H-1B Visa", description: "For professionals in specialty occupations" },
        { name: "E-3 Visa", description: "Exclusively for Australian nationals" },
        { name: "H-1B1 Visa", description: "Available to Chilean and Singaporean professionals" }
      ]
    },
    {
      title: "Intracompany Transfers",
      image: "/intracompany.webp",
      items: [
        { name: "L-1 Visa", description: "For executives, managers, and specialized employees transferring to a U.S. office or launching a new U.S. branch" }
      ]
    },
    {
      title: "Extraordinary Ability Visas",
      image: "/extraordinary-ability.webp",
      items: [
        { name: "O-1 Visa", description: "For individuals recognized for extraordinary ability in science, business, arts, sports, motion picture & television industries" }
      ]
    }
  ];

  const greenCardCategories = [
    {
      title: "EB-1: Priority Workers",
      image: "/eb-1.webp",
      items: [
        { name: "EB-1A", description: "For individuals with extraordinary ability" },
        { name: "EB-1B", description: "For outstanding professors and researchers" },
        { name: "EB-1C", description: "For multinational executives and managers" }
      ]
    },
    {
      title: "EB-2: Advanced Degree & Exceptional Ability",
      image: "/eb-2.webp",
      items: [
        { name: "EB-2 PERM", description: "For professionals with an advanced degree" },
        { name: "EB-2 NIW", description: "For individuals with work benefiting the United States nationally" }
      ]
    },
    {
      title: "EB-3: Skilled & Other Workers",
      image: "/eb-3.webp",
      items: [
        { name: "EB-3 PERM", description: "For skilled, professional, and unskilled workers" }
      ]
    }
  ];

  return (
    <section id="services" className="bg-secondary-50 py-20">
      <div className="container px-6 mx-auto">
        <h2 className="text-primary-800 mb-12 text-3xl font-bold text-center">How We Can Help You</h2>
        
        {/* U.S. Work Visas Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-primary-700 mb-8 text-2xl font-bold">U.S. Work Visas</h3>
          <div className="md:grid-cols-2 grid gap-8">
            {visaCategories.map((category, index) => (
              <div key={index} className="border-secondary-200 overflow-hidden bg-white border-2 rounded-lg shadow-lg">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={`${category.title} Overview`}
                    className="h-44 object-cover w-full"
                  />
                  <div className="bg-gradient-to-b to-white absolute inset-0 flex items-center justify-center"></div>
                  <div className="bg-gradient-to-tr from-white to-transparent absolute inset-0 flex items-center justify-center"></div>
                </div>
                <div className="relative z-10 h-full p-6 -mt-32">
                  <h4 className="text-primary-800 mb-4 text-2xl font-semibold">{category.title}</h4>
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex flex-col">
                        <span className="text-primary-700 font-medium">{item.name}</span>
                        <span className="text-primary-600 text-sm">{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Green Cards Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-primary-700 mb-8 text-2xl font-bold">U.S. Permanent Residence (Green Cards)</h3>
          <div className="md:grid-cols-2 lg:grid-cols-3 grid gap-8">
            {greenCardCategories.map((category, index) => (
              <div key={index} className="border-secondary-200 overflow-hidden bg-white border-2 rounded-lg shadow-lg">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={`${category.title} Overview`}
                    className="h-44 object-cover w-full"
                  />
                  <div className="bg-gradient-to-b to-white absolute inset-0 flex items-center justify-center"></div>
                  <div className="bg-gradient-to-tr from-white to-transparent absolute inset-0 flex items-center justify-center"></div>
                </div>
                <div className="relative z-10 h-full p-6 -mt-24">
                  <h4 className="text-primary-800 mb-4 text-2xl font-semibold">{category.title}</h4>
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex flex-col">
                        <span className="text-primary-700 font-medium">{item.name}</span>
                        <span className="text-primary-600 text-sm">{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 