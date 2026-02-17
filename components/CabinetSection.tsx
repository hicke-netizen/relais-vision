export default function CabinetSection() {
  return (
    <section className="py-24 bg-cloud-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Notre Espace</span>
          <h2 className="section-title mb-4">Le Cabinet</h2>
          <div className="text-xl text-cloud-600 max-w-2xl mx-auto">
            Un espace moderne et chaleureux conçu pour votre confort et la qualité de vos soins.
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-auto md:h-[500px]">
          {/* Main Image */}
          <div className="md:col-span-2 h-full relative group rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-ocean-200 to-ocean-100">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-20 h-20 text-ocean-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-ocean-600 font-medium">Photo du cabinet à ajouter</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-bold text-lg">Cabinet Relais Vision - Parking patient</p>
            </div>
          </div>

          {/* Side Images */}
          <div className="flex flex-col gap-6 h-full">
            {/* Image 1 */}
            <div className="flex-1 relative group rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-ocean-100 to-cloud-100">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-4">
                  <svg className="w-12 h-12 text-ocean-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-ocean-600 font-medium text-sm">Photo équipements</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-medium">Équipements de dernière génération</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="flex-1 relative group rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-cloud-100 to-ocean-50">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-4">
                  <svg className="w-12 h-12 text-ocean-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <p className="text-ocean-600 font-medium text-sm">Photo intérieur</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-medium">Espace lumineux et apaisant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}