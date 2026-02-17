import { Heart, Sparkles, ShieldCheck } from "lucide-react";

export default function ValeursSection() {
  const values = [
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Nous prenons le temps d'écouter chaque patient. Que ce soit pour un enfant inquiet ou un adulte fatigué, notre approche se veut rassurante, pédagogique et personnalisée pour un parcours de soin serein.",
    },
    {
      icon: Sparkles,
      title: "Performance",
      description: "Nous utilisons des protocoles de rééducation avancés pour optimiser la performance visuelle, essentielle dans le sport, la conduite ou le travail sur écran intensif. Votre vue mérite le meilleur potentiel.",
    },
    {
      icon: ShieldCheck,
      title: "Accessibilité",
      description: "La santé visuelle doit être accessible à tous. Le cabinet est aux normes PMR et nous pratiquons le Tiers Payant intégral Sécurité Sociale pour le renouvellement de lunettes, sans avance de frais.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Nos Valeurs</span>
          <h2 className="section-title">Nos Engagements</h2>
          <div className="mt-4 text-xl text-cloud-600 max-w-2xl mx-auto">
            Une pratique de l&apos;orthoptie tournée vers l&apos;excellence et l&apos;humain.
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div key={index} className="h-full">
              <div className="bg-cloud-50 p-10 rounded-[2.5rem] text-center transition-all duration-300 border border-cloud-100 group h-full flex flex-col">
                {/* Icon */}
                <div className="w-20 h-20 bg-white text-ocean-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-sm shrink-0">
                  <value.icon className="w-9 h-9" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif font-bold text-ocean-900 mb-4">{value.title}</h3>
                <div className="text-cloud-700 leading-relaxed flex-grow">{value.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}