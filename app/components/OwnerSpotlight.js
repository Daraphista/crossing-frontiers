export default function OwnerSpotlight() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Quick Info */}
            <div className="space-y-6">
              <div className="relative">
                {/* Placeholder for Alyssa's photo */}
                <div className="w-full aspect-[3/4] bg-secondary-200 rounded-lg shadow-lg"></div>
                <div className="absolute -bottom-6 -right-6 bg-primary-800 text-white p-6 rounded-lg shadow-xl">
                  <h3 className="text-xl font-semibold mb-2">Licensed in</h3>
                  <ul className="space-y-1">
                    <li>• Michigan (U.S.)</li>
                    <li>• Ontario (Canada)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-secondary-50 p-6 rounded-lg mt-12">
                <h3 className="text-lg font-semibold text-primary-800 mb-3">Education</h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• Juris Doctor - University of Windsor, Faculty of Law</li>
                  <li>• Juris Doctor - Detroit Mercy School of Law</li>
                  <li>• Honours B.A. - University of Toronto
                    <span className="block text-sm ml-4 text-primary-600">
                      Gender Studies, Political Science & History
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Bio */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-800">
                Meet Alyssa Hussein
              </h2>
              <div className="space-y-6 text-primary-700">
                <p className="leading-relaxed">
                  Alyssa Hussein is a business and employment-based immigration attorney representing companies and individuals seeking temporary or permanent legal status in the United States based on employment, trade or investment. Alyssa has experience representing multinational technology companies as well as growing companies, including startups and founders. She is passionate about strategizing with clients on their immigration journey.
                </p>
                <div className="border-l-4 border-primary-800 pl-6 py-2">
                  <p className="text-lg font-medium text-primary-800">
                    &ldquo;I believe in creating clear, strategic pathways for my clients&apos; immigration success.&rdquo;
                  </p>
                </div>
                <p className="leading-relaxed">
                  With international experience spanning the Middle East and Asia, Alyssa brings a global perspective to immigration law. Her diverse background and comprehensive understanding of cross-border matters enable her to provide nuanced, effective solutions for her clients&apos; immigration needs.
                </p>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">Areas of Focus</h3>
                  <ul className="grid grid-cols-2 gap-3 text-primary-700">
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">•</span>
                      Business Immigration
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">•</span>
                      Startup Visas
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">•</span>
                      Employment-Based
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">•</span>
                      Tech Industry
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 