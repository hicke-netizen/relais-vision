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
  <img
    src="/images/devanture relais vision montdidier.webp"
    alt="Équipements du cabinet"
    className="w-full h-full object-cover"
  />
</div>
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-bold text-lg">Cabinet Relais Vision</p>
            </div>
          </div>

          {/* Side Images */}
          <div className="flex flex-col gap-6 h-full">
            {/* Image 1 */}
            <div className="flex-1 relative group rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-ocean-100 to-cloud-100">
              <div className="w-full h-full flex items-center justify-center">
  <img
    src="/images/photo-interieur.jpg"
    alt="Intérieur du cabinet"
    className="w-full h-full object-cover"
  />
</div>
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-medium">Équipements de dernière génération</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="flex-1 relative group rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-cloud-100 to-ocean-50">
              <div className="w-full h-full flex items-center justify-center">
  <img
    src="/images/photos-equipements.jpg"
    alt="Intérieur du cabinet"
    className="w-full h-full object-cover"
  />
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