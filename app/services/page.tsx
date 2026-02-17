import Link from "next/link";
import { 
  Sparkles, 
  ScanEye, 
  Eye, 
  BrainCircuit, 
  Glasses, 
  Activity, 
  Baby,
  CircleCheck,
  ArrowRight,
  Home,
  ChevronRight,
  HelpCircle
} from "lucide-react";

export const metadata = {
  title: "Nos Services | Cabinet d'Orthoptie Montdidier",
  description: "Découvrez nos services orthoptiques : bilan neurovisuel, renouvellement de lunettes, rééducation orthoptique. Jennifer Loisel, orthoptiste à Montdidier.",
};

const services = [
  {
    title: "Bilan Adulte & Diplopie",
    description: "Maux de tête, yeux qui tirent, vision floue en fin de journée ? Ce bilan analyse votre vision binoculaire et votre convergence pour proposer des solutions concrètes contre la fatigue visuelle numérique.",
    icon: ScanEye,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80",
  },
  {
    title: "Bilan Neurovisuel Enfant",
    description: "Difficultés scolaires, lecture hachée, enfant DYS ou TDAH ? Le bilan neurovisuel identifie les freins visuels à l'apprentissage pour aider votre enfant à réussir.",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&q=80",
  },
  {
    title: "Bilan Neurovisuel Adulte",
    description: "Fatigue, concentration, TDAH, HPI ? Le bilan neurovisuel adulte identifie les blocages visuels qui épuisent votre cerveau. Libérez votre potentiel cognitif.",
    icon: BrainCircuit,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&q=80",
  },
  {
    title: "Renouvellement Lunettes",
    description: "Sous certaines conditions (6-49 ans), nous pouvons renouveler et adapter votre correction optique. Un gain de temps précieux pour changer vos lunettes.",
    icon: Glasses,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500&q=80",
  },
  {
    title: "Rééducation Orthoptique",
    description: "Maux de tête, fatigue sur écran, yeux qui tirent ? La rééducation orthoptique permet de remuscler vos yeux pour retrouver un confort visuel durable.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80",
  },
  {
    title: "Bilan Orthoptique Enfant",
    description: "Le bilan orthoptique enfant permet de dépister et traiter précocement le strabisme, l'amblyopie et les troubles de la réfraction. Un suivi régulier garantit un développement visuel optimal.",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=80",
  },
];

const faqs = [
  {
    question: "Faut-il une ordonnance ?",
    answer: "Oui, une ordonnance médicale (médecin généraliste, ophtalmologiste, pédiatre, ORL, neurologue...) est obligatoire pour le bilan et les séances de rééducation.",
  },
  {
    question: "Combien de temps dure un bilan ?",
    answer: "Le bilan orthoptique dure généralement entre 20 et 30 minutes selon la complexité des troubles.",
  },
  {
    question: "Acceptez-vous la carte vitale ?",
    answer: "Oui, nous acceptons la carte vitale et pratiquons le tiers payant sur la part obligatoire (Sécurité Sociale).",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-cloud-50 pt-36 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Fil d'ariane" className="flex items-center flex-wrap gap-2 text-sm text-cloud-600 mb-8">
          <Link href="/" className="hover:text-ocean-600 transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Accueil</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-cloud-400" />
          <span className="text-ocean-800 font-medium">Soins & Expertise</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ocean-100/30 rounded-full blur-[120px] -z-10" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ocean-100 shadow-sm mb-6">
          <Sparkles className="w-4 h-4 text-ocean-500" />
          <span className="text-ocean-800 font-medium text-xs tracking-widest uppercase">NOS SERVICES</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-ocean-900 mb-8 tracking-tight">
          <span>Expertise</span>
          <span className="text-ocean-600 italic mx-3">&</span>
          <span>Innovation</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cloud-600 max-w-2xl mx-auto leading-relaxed font-light">
          Des soins orthoptiques de pointe, adaptés à chaque patient, du dépistage à la rééducation.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative h-[450px] w-full rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-ocean-200 to-ocean-100">
                <div className="w-full h-full flex items-center justify-center">
                  <service.icon className="w-24 h-24 text-ocean-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-900/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-sm">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-3xl font-serif font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-ocean-100 text-base leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-ocean-900 group-hover:scale-110">
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:-rotate-45" />
                    </div>
                    <span className="text-white/80 text-sm font-medium uppercase tracking-wider opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      Découvrir
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tarifs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-ocean-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ocean-600/30 rounded-full blur-[120px] -mr-20 -mt-20 mix-blend-overlay" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -ml-10 -mb-10 mix-blend-overlay" />
          
          <div className="relative z-10 flex flex-col items-center text-center gap-12">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 tracking-tight">
                <span>Tarifs </span>
                <span className="text-ocean-300 italic font-light mx-2">& </span>
                <span>Remboursements</span>
              </h2>
              <p className="text-ocean-100 text-xl leading-relaxed mb-10 font-light">
                Nous sommes conventionnés. Pas de dépassement d&apos;honoraires. Tiers payant intégral pour le renouvellement de lunettes (Sécurité sociale).
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {["Conventionné", "Carte Vitale acceptée", "Tiers Payant Intégral"].map((item) => (
                  <div key={item} className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-base font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300">
                    <div className="p-1 bg-white/20 rounded-full">
                      <CircleCheck className="w-4 h-4 text-white" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rééducation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-ocean-600 rounded-[3rem] rotate-3 group-hover:rotate-1 transition-transform duration-500 opacity-10" />
            <div className="relative rounded-[3rem] shadow-2xl w-full aspect-[4/3] bg-gradient-to-br from-ocean-200 to-ocean-100 border-8 border-white flex items-center justify-center">
              <Activity className="w-32 h-32 text-ocean-400" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-cloud-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center text-ocean-600">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-cloud-500 font-bold uppercase tracking-wider">Résultats</div>
                  <div className="text-ocean-900 font-bold text-lg">Personnalisés</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-ocean-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Parcours de soin
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mb-8 leading-tight">
              La Rééducation Orthoptique
            </h2>
            <div className="text-lg text-cloud-600 mb-10 leading-relaxed">
              <p>
                Cette partie vient dans un 2ᵉ temps si le bilan révèle des troubles. Elle consiste en une série d&apos;exercices visuels personnalisés pour renforcer les muscles des yeux et améliorer la coordination binoculaire.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Vision binoculaire", "Fatigue visuelle", "Strabisme", "Amblyopie"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-cloud-100 hover:border-ocean-200 hover:shadow-md transition-all group">
                  <div className="w-8 h-8 rounded-full bg-ocean-50 flex items-center justify-center text-ocean-600 group-hover:bg-ocean-600 group-hover:text-white transition-colors">
                    <CircleCheck className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-ocean-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm text-ocean-600 mb-6 border border-cloud-100 transform rotate-3">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-ocean-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-cloud-600">
            Tout ce que vous devez savoir avant votre consultation
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-3xl border border-cloud-100 hover:border-ocean-100 shadow-sm">
              <summary className="w-full flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-serif font-bold text-lg text-cloud-800 group-hover:text-ocean-800 transition-colors">
                  {faq.question}
                </span>
                <span className="p-2 rounded-full bg-cloud-50 text-cloud-400 group-hover:bg-ocean-50 group-hover:text-ocean-600 transition-all">
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-cloud-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 text-center border border-cloud-100 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-6">
            Prêt à prendre soin de votre vue ?
          </h2>
          <p className="text-lg text-cloud-600 mb-8 max-w-2xl mx-auto">
            Jennifer Loisel vous accueille au cabinet de Montdidier pour un bilan personnalisé.
          </p>
          <a 
            href="https://www.doctolib.fr/cabinet-paramedical/montdidier/relais-vision-montdidier-jennifer-loisel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ocean-900 text-white font-bold rounded-full hover:bg-ocean-800 transition-all shadow-lg hover:shadow-xl"
          >
            Prendre rendez-vous sur Doctolib
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </main>
  );
}