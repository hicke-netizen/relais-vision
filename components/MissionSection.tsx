export default function MissionSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <span className="section-badge">Notre Histoire & Mission</span>
            <h2 className="section-title leading-tight">Une réponse locale et une expertise pointue</h2>
            
            <div className="space-y-6 text-cloud-700 text-lg leading-relaxed text-justify">
              <p>
                Fondé en réponse à la pénurie médicale locale, le <b>Cabinet Relais Vision Montdidier</b> a rapidement évolué pour devenir un pôle d&apos;excellence en santé visuelle. Au-delà du simple renouvellement de lunettes, nous avons développé une approche intégrative de l&apos;orthoptie.
              </p>
              <p>
                Nous croyons que la vision est le moteur de l&apos;apprentissage et de la performance. C&apos;est pourquoi nous nous sommes spécialisés dans les <strong>troubles neurovisuels</strong> (DYS, TDA/H, difficultés scolaires) et l&apos;<strong>optimisation visuelle</strong> pour les sportifs et les patients exigeants.
              </p>
              <p>
                Notre collaboration étroite avec le <b>Dr. Jean-Claude QUINTYN</b> et <b>les professionnels de santé de la Somme</b> garantit un parcours de soin fluide, sécurisé et sans délai d&apos;attente excessif.
              </p>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="h-full">
              <div className="bg-cloud-50 p-8 rounded-[2.5rem] hover:scale-105 transition-transform duration-300 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-5xl font-serif font-bold text-ocean-700 mb-2">100%</h3>
                  <p className="text-ocean-900 font-bold text-lg mb-1">Prise en charge</p>
                </div>
                <div className="text-sm text-cloud-600 leading-snug mt-4">
                  Sécurité Sociale (Tiers Payant) pour les actes conventionnés.
                </div>
              </div>
            </div>

            <div className="h-full">
              <div className="bg-ocean-50 mt-12 p-8 rounded-[2.5rem] hover:scale-105 transition-transform duration-300 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-5xl font-serif font-bold text-ocean-800 mb-2">6-49 ans</h3>
                  <p className="text-ocean-900 font-bold text-lg mb-1">Âge éligible</p>
                </div>
                <div className="text-sm text-cloud-600 leading-snug mt-4">
                  Protocole Télé-ophtalmologique pour le renouvellement rapide de votre ordonnance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}