export default function WhyChooseUs() {
  const advantages = [
    {
      title: "Tailored Strategies",
      description: "Personalized immigration solutions based on your unique profile",
      icon: "✓"
    },
    {
      title: "Industry Expertise",
      description: "Specialized services for tech, business, education, and research professionals",
      icon: "✓"
    },
    {
      title: "Cross-Border Knowledge",
      description: "Licensed in Michigan (U.S.) and Ontario (Canada) with global experience",
      icon: "✓"
    },
    {
      title: "Proven Success",
      description: "Trusted by VC-backed founders, multinational executives, and high-achieving professionals",
      icon: "✓"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
          Why Choose Crossing Frontiers?
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl text-green-500 font-bold">
                  {advantage.icon}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 