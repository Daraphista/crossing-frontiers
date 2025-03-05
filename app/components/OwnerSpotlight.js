export default function OwnerSpotlight() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="md:grid-cols-2 grid items-center gap-12">
            {/* Left Column - Image and Quick Info */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="/founder-spotlight.png"
                  alt="Alyssa Hussein - Immigration Attorney"
                  className="aspect-square object-cover w-full rounded-lg shadow-lg"
                />
                <div className="-bottom-6 -right-6 bg-primary-600 border-primary-500 text-secondary-50 absolute p-6 border-2 rounded-lg shadow-xl">
                  <h3 className="mb-2 text-xl font-semibold">Licensed in</h3>
                  <ul className="space-y-1">
                    <li>• Michigan (U.S.)</li>
                    <li>• Ontario (Canada)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-secondary-50 border-secondary-100 p-6 mt-12 border-2 rounded-lg">
                <h3 className="text-primary-800 mb-3 text-lg font-semibold">Education</h3>
                <ul className="text-primary-700 space-y-2">
                  <li>• Juris Doctor - University of Windsor, Faculty of Law</li>
                  <li>• Juris Doctor - Detroit Mercy School of Law</li>
                  <li>• Honours B.A. - University of Toronto
                    <span className="text-primary-600 block ml-4 text-sm">
                      Gender Studies, Political Science & History
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Bio */}
            <div className="space-y-6">
              <h2 className="text-primary-800 text-3xl font-bold">
                Meet Alyssa Hussein
              </h2>
              <div className="text-primary-700 space-y-6">
                <p className="leading-relaxed">
                  Alyssa Hussein is a business and employment-based immigration attorney representing companies and individuals seeking temporary or permanent legal status in the United States based on employment, trade or investment. Alyssa has experience representing multinational technology companies as well as growing companies, including startups and founders. She is passionate about strategizing with clients on their immigration journey.
                </p>
                <div className="border-primary-800 py-2 pl-6 border-l-4">
                  <p className="text-primary-800 text-lg font-medium">
                    &ldquo;I believe in creating clear, strategic pathways for my clients&apos; immigration success.&rdquo;
                  </p>
                </div>
                <p className="leading-relaxed">
                  With international experience spanning the Middle East and Asia, Alyssa brings a global perspective to immigration law. Her diverse background and comprehensive understanding of cross-border matters enable her to provide nuanced, effective solutions for her clients&apos; immigration needs.
                </p>
                <div className="bg-secondary-50 border-secondary-100 p-6 border-2 rounded-lg">
                  <h3 className="text-primary-800 mb-3 text-lg font-semibold">Areas of Focus</h3>
                  <ul className="text-primary-700 grid grid-cols-2 gap-3">
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