export default function Services() {
  const visaCategories = [
    {
      title: "Treaty-Based Visas",
      items: [
        { name: "TN Visa", description: "For Canadian and Mexican professionals" },
        { name: "E-1 & E-2 Visas", description: "For entrepreneurs, traders, and investors from treaty countries" }
      ]
    },
    {
      title: "Specialty Occupation Visas",
      items: [
        { name: "H-1B Visa", description: "For professionals in specialty occupations" },
        { name: "E-3 Visa", description: "Exclusively for Australian nationals" },
        { name: "H-1B1 Visa", description: "Available to Chilean and Singaporean professionals" }
      ]
    },
    {
      title: "Intracompany Transfers",
      items: [
        { name: "L-1 Visa", description: "For executives, managers, and specialized employees transferring to a U.S. office or launching a new U.S. branch" }
      ]
    },
    {
      title: "Extraordinary Ability Visas",
      items: [
        { name: "O-1 Visa", description: "For individuals recognized for extraordinary ability in science, business, arts, sports, motion picture & television industries" }
      ]
    }
  ];

  const greenCardCategories = [
    {
      title: "EB-1: Priority Workers",
      items: [
        { name: "EB-1A", description: "For individuals with extraordinary ability" },
        { name: "EB-1B", description: "For outstanding professors and researchers" },
        { name: "EB-1C", description: "For multinational executives and managers" }
      ]
    },
    {
      title: "EB-2: Advanced Degree & Exceptional Ability",
      items: [
        { name: "EB-2 PERM", description: "For professionals with an advanced degree" },
        { name: "EB-2 NIW", description: "For individuals with work benefiting the United States nationally" }
      ]
    },
    {
      title: "EB-3: Skilled & Other Workers",
      items: [
        { name: "EB-3 PERM", description: "For skilled, professional, and unskilled workers" }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">How We Can Help You</h2>
        
        {/* U.S. Work Visas Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-blue-800 mb-8">U.S. Work Visas</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {visaCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">{category.title}</h4>
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex flex-col">
                      <span className="font-medium text-gray-900">{item.name}</span>
                      <span className="text-gray-600 text-sm">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Green Cards Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-800 mb-8">U.S. Permanent Residence (Green Cards)</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {greenCardCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">{category.title}</h4>
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex flex-col">
                      <span className="font-medium text-gray-900">{item.name}</span>
                      <span className="text-gray-600 text-sm">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 