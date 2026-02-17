import { Calendar, ExternalLink } from "lucide-react";

export default function EquipeSection() {
  return (
    <section className="py-24 bg-cloud-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="section-title mb-4">Notre Équipe</h2>
          <div className="text-xl text-cloud-600 max-w-2xl mx-auto">
            Des professionnels diplômés, passionnés par la rééducation et l&apos;optimisation visuelle.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Jennifer Loisel */}
          <div className="h-full">
            <div className="bg-white rounded-[2.5rem] overflow-hidden transition-all duration-300 group border border-cloud-100 flex flex-col h-full">
              <div className="h-72 overflow-hidden relative">
                <img src="/images/jeniifer-loisel.png" alt="Jennifer Loisel - Orthoptiste à Montdidier" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white drop-shadow-md">
                  <h3 className="text-3xl font-serif font-bold mb-2">Jennifer Loisel</h3>
                  <p className="text-ocean-100 text-base font-medium tracking-wide">Orthoptiste Diplômée d&apos;État</p>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-ocean-600 border-l-2 border-ocean-500 pl-3">Référent Orthoptiste</div>
                </div>

                <div className="mb-6 text-base leading-relaxed text-cloud-700 flex-grow">
                  Diplômée de la faculté de médecine d&apos;Amiens. Elle se consacre particulièrement aux <strong>bilans Neurovisuels</strong> et à <strong>l&apos;analyse des troubles des apprentissages</strong>, ainsi qu&apos;à <strong>l&apos;optimisation de la vision</strong> pour un confort quotidien optimal.
                </div>

                <div className="space-y-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {["Neurovision", "Vision & Sport", "Troubles DYS et TDA/H", "Strabologie", "Réfraction"].map((specialty) => (
                      <span key={specialty} className="px-3 py-1 bg-ocean-50 text-ocean-800 text-xs font-bold rounded-full">{specialty}</span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-cloud-100 flex flex-col gap-2">
                    <a href="https://www.doctolib.fr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 px-4 font-bold rounded-xl transition-colors text-sm bg-ocean-600 text-white hover:bg-ocean-700">
                      <Calendar className="w-4 h-4" />
                      Renouvellement de Lunettes
                    </a>
                    <a href="https://www.doctolib.fr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 px-4 font-bold rounded-xl transition-colors text-sm bg-ocean-600 text-white hover:bg-ocean-700">
                      <Calendar className="w-4 h-4" />
                      Orthoptie / Neurovisuel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dr. Sofiane Souissi */}
          <div className="h-full">
            <div className="bg-white rounded-[2.5rem] overflow-hidden transition-all duration-300 group border border-cloud-100 flex flex-col h-full">
              <div className="h-72 overflow-hidden relative">
                <img src="/images/Soufiane-Souissi.png" alt="Dr. Sofiane Souissi - Chirurgien Ophtalmologue" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white drop-shadow-md">
                  <h3 className="text-3xl font-serif font-bold mb-2">Dr. Sofiane Souissi</h3>
                  <p className="text-ocean-100 text-base font-medium tracking-wide">Chirurgien Ophtalmologue</p>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-ocean-600 border-l-2 border-ocean-500 pl-3">Référent médical du cabinet Relais Vision Montdidier</div>
                </div>

                <div className="mb-6 text-base leading-relaxed text-cloud-700 flex-grow">
                  <strong>Ophtalmologue reconnu</strong>. Il apporte sa caution médicale en supervisant l&apos;analyse des dossiers de télé-ophtalmologie, garantissant la sécurité du diagnostic.
                </div>

                <div className="space-y-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {["Segment antérieur", "Cataracte", "Contactologie", "Chirurgie Réfractive", "Cornée", "Glaucome"].map((specialty) => (
                      <span key={specialty} className="px-3 py-1 bg-ocean-50 text-ocean-800 text-xs font-bold rounded-full">{specialty}</span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-cloud-100 flex flex-col gap-2">
                    <a href="#contact" className="flex items-center justify-center gap-2 w-full py-2.5 px-4 font-bold rounded-xl transition-colors text-sm bg-ocean-50 text-ocean-700 hover:bg-ocean-100">
                      Formulaire de contact
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a href="https://www.doctolib.fr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 px-4 font-bold rounded-xl transition-colors text-sm bg-ocean-600 text-white hover:bg-ocean-700">
                      <Calendar className="w-4 h-4" />
                      RDV Doctolib
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}