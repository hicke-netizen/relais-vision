import { Calendar, Eye, FileText, Glasses } from "lucide-react";

export default function ParcoursSection() {
  const steps = [
    {
      number: "1",
      icon: Calendar,
      title: "Prise de RDV",
      description: "Prenez rendez-vous en ligne sur Doctolib ou par téléphone. Sélectionnez le motif \"Renouvellement de lunettes 6-49 ans\".",
    },
    {
      number: "2",
      icon: Eye,
      title: "Consultation",
      description: "Jennifer réalise un bilan complet : acuité visuelle, réfraction, tension oculaire et photos du fond d'œil.",
    },
    {
      number: "3",
      icon: FileText,
      title: "Analyse Médicale",
      description: "Le Dr Jean-Claude QUINTYN analyse votre dossier complet à distance via une plateforme sécurisée de télé-médecine.",
    },
    {
      number: "4",
      icon: Glasses,
      title: "Ordonnance",
      description: "Si aucune pathologie n'est détectée, vous recevez votre ordonnance valable sous 8 jours sur votre espace patient. Dans le cas inverse, un courrier d'adressage sera édité.",
    },
  ];

  return (
    <section className="py-24 bg-ocean-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="section-title">Le Parcours Patient</h2>
          <div className="text-xl text-cloud-700 max-w-3xl mx-auto">
            Le protocole de télé-ophtalmologie Relais Vision en 4 étapes simples pour votre renouvellement de lunettes.
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-ocean-200 via-ocean-300 to-ocean-200 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Icon Circle */}
              <div className="w-24 h-24 bg-white border-4 border-ocean-100 rounded-full flex items-center justify-center text-ocean-600 font-bold shadow-sm mb-8 group-hover:border-ocean-500 group-hover:text-ocean-500 transition-all duration-300 z-10 relative">
                <step.icon className="w-8 h-8" />
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-ocean-900 text-white rounded-full flex items-center justify-center font-serif font-bold">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif font-bold text-2xl text-ocean-900 mb-3">{step.title}</h3>
              <div className="text-cloud-700 leading-relaxed px-2">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}