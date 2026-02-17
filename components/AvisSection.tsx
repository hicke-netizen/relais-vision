import { Star, Quote, ExternalLink } from "lucide-react";

export default function AvisSection() {
  const reviews = [
    {
      initial: "P",
      name: "Paul M.",
      color: "bg-orange-100 text-orange-600",
      text: "Jennifer Loisel a été une professionnelle très à l'écoute de mes attentes, m'a permis de mieux comprendre l'affection dont je suis frappé, m'a dirigé vers un service spécialisé afin de mieux en comprendre la raison exacte, et ce afin de mieux adapter le traitement qu'elle pouvait me proposer. Je recommande vivement.",
    },
    {
      initial: "J",
      name: "Julie B.",
      color: "bg-blue-100 text-blue-600",
      text: "Facile de prendre rdv via Doctolib. À l'écoute, patiente et compréhensive avec les enfants. Je recommande à 100 %.",
    },
    {
      initial: "T",
      name: "Thomas C.",
      color: "bg-emerald-100 text-emerald-600",
      text: "Orthoptiste très à l'écoute et bienveillante. Souriante et de bonne humeur, c'est un plaisir d'être reçu dans de telles circonstances par du personnel médical ! Je cherchais un rendez-vous pour un renouvellement de lunettes depuis un moment, j'ai pu trouver un créneau rapidement.",
    },
    {
      initial: "M",
      name: "Marc L.",
      color: "bg-purple-100 text-purple-600",
      text: "Super prise en charge rien à dire, je suis venu à cause d'une fatigue des yeux liée aux écrans dans le cadre de mon boulot, j'ai renouvelé les lunettes et fait quelques séances ça va beaucoup mieux.",
    },
    {
      initial: "S",
      name: "Sophie C.",
      color: "bg-blue-100 text-blue-600",
      text: "Jennifer Loisel, orthoptiste, est super agréable, explique très très bien et met totalement en confiance.",
    },
    {
      initial: "J",
      name: "Jean-Pierre A.",
      color: "bg-blue-100 text-blue-600",
      text: "Ravi d'avoir découvert ce centre d'orthoptie. J'ai appris des choses sur mes problèmes de vue (ça fait 46 ans que je porte des lunettes, c'est que maintenant qu'on m'explique correctement les choses).",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-3xl font-bold text-slate-800 tracking-tight">Google</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-6xl font-bold text-slate-900 mb-2">4.9/5</p>
            <a href="https://www.google.com/search?q=relais+vision+montdidier+avis" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ocean-600 font-medium hover:text-ocean-800 transition-colors">
              Voir tous les avis Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index}>
              <div className="bg-cloud-50 p-8 rounded-3xl border border-cloud-100 relative h-full">
                <Quote className="absolute top-6 right-6 text-ocean-100 w-10 h-10" />
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${review.color}`}>
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <figure>
                  <blockquote className="text-slate-700 leading-relaxed italic">
                    &quot;{review.text}&quot;
                  </blockquote>
                </figure>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="https://www.google.com/search?q=relais+vision+montdidier+avis" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3 bg-white border border-cloud-200 rounded-full text-slate-700 font-medium hover:bg-cloud-50 transition-colors shadow-sm">
            <img alt="Google" className="w-5 h-5" width={20} height={20} src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" />
            Voir tous les avis Google
          </a>
        </div>
      </div>
    </section>
  );
}