"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Sparkles, ScanEye, Eye, BrainCircuit, Glasses, Activity, Baby,
  CircleCheck, ArrowRight, Home, ChevronRight, HelpCircle,
  X, Clock, Users, Euro, FileText, HeartPulse,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  detail: {
    descriptionLongue: string;
    deroulement: string[];
    pourQui: string[];
    tarif: string;
    remboursement: string;
  };
};

const services: Service[] = [
  {
    title: "Bilan Adulte & Diplopie",
    description: "Céphalées persistantes, yeux fatigués, vision dédoublée ? Ce bilan explore votre vision binoculaire et votre convergence pour soulager durablement l'inconfort visuel lié au travail sur écran.",
    icon: ScanEye,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    detail: {
      descriptionLongue: "Le bilan adulte réalise une évaluation complète de la fonction visuelle : acuité, convergence, vision binoculaire, phories et oculomotricité. Il est particulièrement adapté aux patients souffrant de fatigue visuelle chronique, de maux de tête liés à l'effort visuel, ou de diplopie (vision double) apparue après un traumatisme ou progressivement.",
      deroulement: [
        "Recueil détaillé de vos plaintes et de votre historique visuel",
        "Mesure de l'acuité visuelle de loin et de près",
        "Évaluation de la vision binoculaire, de la convergence et des phories",
        "Analyse des mouvements oculaires (saccades, poursuite)",
        "Restitution orale et remise d'un compte-rendu écrit",
      ],
      pourQui: [
        "Adultes souffrant de céphalées ou de fatigue visuelle",
        "Travailleurs sur écran (télétravail, bureau)",
        "Patients présentant une vision dédoublée",
        "Suites d'un traumatisme crânien ou d'un AVC",
      ],
      tarif: "28,92 €",
      remboursement: "Remboursé par la Sécurité Sociale sur prescription médicale. Complément possible selon votre mutuelle.",
    },
  },
  {
    title: "Bilan Neurovisuel Enfant",
    description: "Votre enfant peine à lire, se plaint des yeux en classe ou a été repéré DYS ou TDAH ? Le bilan neurovisuel explore les liens entre vision et apprentissage pour lever les obstacles scolaires.",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    detail: {
      descriptionLongue: "Le bilan neurovisuel enfant va au-delà du simple contrôle de vue. Il évalue les fonctions visuelles impliquées dans les apprentissages : exploration visuelle, saccades de lecture, mémoire visuelle, perception spatiale et coordination œil-main. Une prise en charge précoce peut transformer la scolarité d'un enfant en difficulté.",
      deroulement: [
        "Entretien approfondi avec les parents sur le vécu scolaire et quotidien",
        "Bilan orthoptique de base (acuité, motilité, vision binoculaire)",
        "Évaluation des saccades de lecture et de l'exploration visuelle",
        "Tests de perception et de mémoire visuelle",
        "Restitution aux parents avec préconisations concrètes",
      ],
      pourQui: [
        "Enfants en difficultés de lecture, d'écriture ou de copie",
        "Enfants présentant un trouble DYS ou TDAH",
        "Enfants HPI avec fatigue cognitive",
        "Signalement par un enseignant, pédiatre ou orthophoniste",
      ],
      tarif: "28,92 €",
      remboursement: "Remboursé par la Sécurité Sociale sur prescription médicale. Complément possible selon votre mutuelle.",
    },
  },
  {
    title: "Bilan Neurovisuel Adulte",
    description: "Fatigue mentale, difficultés de concentration, TDAH ou HPI ? Le bilan neurovisuel adulte révèle les dysfonctions visuelles silencieuses qui épuisent votre cerveau au quotidien.",
    icon: BrainCircuit,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
    detail: {
      descriptionLongue: "Chez l'adulte, certains troubles neurovisuels passent inaperçus pendant des années tout en générant une fatigue cognitive intense, une lenteur de lecture ou des difficultés de concentration. Ce bilan explore les fonctions visuelles supérieures : saccades, perception spatiale, mémoire visuelle et vitesse de traitement de l'information visuelle.",
      deroulement: [
        "Anamnèse détaillée (plaintes, contexte de vie, antécédents médicaux)",
        "Bilan orthoptique complet",
        "Évaluation des saccades et de la poursuite oculaire",
        "Tests de perception et de mémoire visuelle",
        "Compte-rendu personnalisé avec plan de prise en charge",
      ],
      pourQui: [
        "Adultes TDAH, HPI ou présentant une fatigue cognitive inexpliquée",
        "Personnes en reconversion ou surcharge professionnelle",
        "Patients post-AVC ou post-traumatisme crânien",
        "Adultes lents en lecture malgré un bon niveau scolaire",
      ],
      tarif: "28,92 €",
      remboursement: "Remboursé par la Sécurité Sociale sur prescription médicale. Complément possible selon votre mutuelle.",
    },
  },
  {
    title: "Renouvellement Lunettes",
    description: "Plus besoin d'attendre des mois chez l'ophtalmologiste. Dans le cadre du protocole de coopération, Jennifer Loisel renouvelle votre correction optique pour les patients de 6 à 49 ans.",
    icon: Glasses,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80",
    detail: {
      descriptionLongue: "Grâce au protocole de coopération entre orthoptistes et ophtalmologistes, il est possible de renouveler et d'adapter une correction optique sans passer par une consultation ophtalmologique, sous certaines conditions. Vous repartez avec une ordonnance valide à présenter directement à votre opticien.",
      deroulement: [
        "Vérification de votre dernière ordonnance et de sa date",
        "Mesure objective et subjective de la réfraction",
        "Adaptation de la correction si nécessaire",
        "Émission d'une nouvelle ordonnance valide",
      ],
      pourQui: [
        "Patients de 6 à 49 ans porteurs de lunettes",
        "Absence d'antécédents ophtalmologiques particuliers",
        "Renouvellement d'une correction stable",
        "Patients souhaitant gagner du temps sur les délais de consultation",
      ],
      tarif: "21,70 €",
      remboursement: "Tiers payant intégral disponible sur la part Sécurité Sociale. Remboursement complémentaire selon mutuelle.",
    },
  },
  {
    title: "Rééducation Orthoptique",
    description: "Yeux qui tirent, maux de tête sur écran, strabisme ? La rééducation orthoptique renforce les muscles oculaires et restaure un confort visuel durable grâce à des exercices personnalisés.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    detail: {
      descriptionLongue: "La rééducation orthoptique est un traitement fonctionnel basé sur des exercices visuels progressifs et ciblés. Elle vise à rétablir l'équilibre oculomoteur, améliorer la convergence et renforcer la vision binoculaire. Le protocole est toujours individualisé selon les résultats du bilan initial.",
      deroulement: [
        "Bilan de départ pour établir le programme de rééducation",
        "Séances individuelles de 20 à 30 minutes en cabinet",
        "Exercices complémentaires à réaliser à domicile",
        "Réévaluations régulières pour ajuster le protocole",
        "Bilan de fin de traitement pour mesurer les progrès",
      ],
      pourQui: [
        "Enfants et adultes avec insuffisance de convergence",
        "Patients présentant un strabisme fonctionnel ou accommodatif",
        "Personnes souffrant de fatigue visuelle résistante",
        "Suivi post-opératoire après chirurgie du strabisme",
      ],
      tarif: "13,16 € / séance",
      remboursement: "Prise en charge à 60 % par la Sécurité Sociale sur prescription. Remboursement complémentaire selon mutuelle.",
    },
  },
  {
    title: "Bilan Orthoptique Enfant",
    description: "Strabisme, œil paresseux, troubles de la réfraction : le dépistage précoce est la clé d'une vision saine. Jennifer Loisel examine votre enfant dès le plus jeune âge dans un cadre adapté et rassurant.",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
    detail: {
      descriptionLongue: "Le développement visuel de l'enfant est fragile et se joue essentiellement avant 7 ans. Un bilan précoce permet de détecter et traiter à temps les troubles qui, s'ils sont ignorés, peuvent laisser des séquelles permanentes. Le bilan est réalisé de façon ludique, à l'aide de tests adaptés à chaque tranche d'âge.",
      deroulement: [
        "Échange avec les parents sur les observations au quotidien",
        "Mesure de l'acuité visuelle adaptée à l'âge de l'enfant",
        "Examen de l'alignement oculaire et de la motilité",
        "Évaluation de la vision binoculaire et de la stéréoscopie",
        "Explication des résultats aux parents et plan de suivi",
      ],
      pourQui: [
        "Nourrissons dès 9 mois et jeunes enfants",
        "Enfants signalés par le pédiatre ou le médecin scolaire",
        "Antécédents familiaux de strabisme ou d'amblyopie",
        "Enfant qui plisse les yeux, se frotte les yeux ou se plaint de la vue",
      ],
      tarif: "28,92 €",
      remboursement: "Remboursé par la Sécurité Sociale sur prescription médicale. Complément possible selon votre mutuelle.",
    },
  },
  {
    title: "Rétinopathie Diabétique",
    description: "Vous êtes diabétique ? Un suivi régulier du fond d'œil est indispensable. Dans le cadre d'une coopération médecin–orthoptiste–ophtalmologue, nous assurons cet examen de prévention.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80",
    detail: {
      descriptionLongue: "La rétinopathie diabétique est la première cause de cécité chez les adultes en âge de travailler. Un dépistage régulier permet de détecter les lésions à un stade précoce et d'intervenir avant toute perte visuelle irréversible. Cet examen s'intègre dans un parcours de soins coordonné entre votre médecin traitant, l'orthoptiste et l'ophtalmologue.",
      deroulement: [
        "Vérification de votre traitement et de votre équilibre glycémique",
        "Instillation d'un collyre pour dilater la pupille si nécessaire",
        "Photographie du fond d'œil",
        "Transmission des clichés à l'ophtalmologue pour lecture",
        "Compte-rendu adressé à votre médecin traitant",
      ],
      pourQui: [
        "Patients diabétiques de type 1 ou type 2",
        "Suivi annuel recommandé pour tout patient diabétique",
        "Patients adressés par leur médecin généraliste",
        "Personnes souhaitant un accès rapide au dépistage",
      ],
      tarif: "Sur ordonnance",
      remboursement: "Pris en charge à 100 % dans le cadre de l'ALD Diabète sur prescription médicale.",
    },
  },
];

const faqs = [
  {
    question: "Une ordonnance est-elle indispensable ?",
    answer: "Oui, une prescription médicale est requise pour bénéficier d'un remboursement. Elle peut être délivrée par votre médecin généraliste, ophtalmologiste, pédiatre, neurologue ou ORL.",
  },
  {
    question: "Quelle est la durée d'un bilan orthoptique ?",
    answer: "Un bilan dure en général entre 30 et 45 minutes. Pour les bilans neurovisuels, comptez jusqu'à une heure selon les tests réalisés.",
  },
  {
    question: "Acceptez-vous la carte vitale et la mutuelle ?",
    answer: "Oui, nous acceptons la carte vitale et pratiquons le tiers payant sur la part obligatoire. Rapprochez-vous de votre mutuelle pour connaître votre prise en charge complémentaire.",
  },
  {
    question: "Faut-il venir avec ses lunettes ou lentilles ?",
    answer: "Oui, venez avec votre correction habituelle. Si vous portez des lentilles, il peut être utile de les retirer avant certains tests — nous vous le préciserons à l'accueil.",
  },
  {
    question: "À partir de quel âge peut-on consulter ?",
    answer: "Dès 9 mois pour un premier bilan de dépistage. Plus le trouble est détecté tôt, plus la prise en charge est efficace.",
  },
  {
    question: "Combien de séances de rééducation faut-il prévoir ?",
    answer: "Le nombre de séances dépend des troubles identifiés lors du bilan. En moyenne, un protocole de rééducation comprend entre 10 et 20 séances, réparties sur plusieurs mois.",
  },
];

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ocean-950/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[2rem] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-52 rounded-t-[2rem] overflow-hidden">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 to-transparent" />
          <div className="absolute bottom-5 left-6 flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl">
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-white">{service.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-ocean-900 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-8 flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-ocean-500" />
              <h3 className="font-bold text-ocean-900 uppercase tracking-wider text-sm">Description</h3>
            </div>
            <p className="text-cloud-600 leading-relaxed">{service.detail.descriptionLongue}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-ocean-500" />
              <h3 className="font-bold text-ocean-900 uppercase tracking-wider text-sm">Déroulement de la séance</h3>
            </div>
            <ol className="flex flex-col gap-2">
              {service.detail.deroulement.map((etape, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-ocean-100 text-ocean-700 text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-cloud-600">{etape}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-ocean-500" />
              <h3 className="font-bold text-ocean-900 uppercase tracking-wider text-sm">Pour qui ?</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {service.detail.pourQui.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CircleCheck className="w-4 h-4 text-ocean-500 shrink-0" />
                  <span className="text-cloud-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ocean-50 rounded-2xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <Euro className="w-5 h-5 text-ocean-500" />
              <h3 className="font-bold text-ocean-900 uppercase tracking-wider text-sm">Tarif & Remboursement</h3>
            </div>
            <span className="text-3xl font-serif font-bold text-ocean-900">{service.detail.tarif}</span>
            <p className="text-cloud-600 text-sm leading-relaxed">{service.detail.remboursement}</p>
          </div>

          <a
            href="https://www.doctolib.fr/cabinet-paramedical/montdidier/relais-vision-montdidier-jennifer-loisel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ocean-900 text-white font-bold rounded-full hover:bg-ocean-800 transition-all shadow-lg hover:shadow-xl"
          >
            Prendre rendez-vous
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <main className="min-h-screen bg-cloud-50 pt-36 pb-20">
      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}

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

      {/* Hero */}
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
            <button
              key={index}
              onClick={() => setSelectedService(service)}
              className="group relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 text-left"
            >
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-sm">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-3xl font-serif font-bold text-white leading-tight">{service.title}</h3>
                  <p className="text-ocean-100 text-base leading-relaxed line-clamp-3">{service.description}</p>
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
            </button>
          ))}
        </div>
      </div>

      {/* Tarifs */}
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
                Cabinet conventionné secteur 1. Aucun dépassement d&apos;honoraires. Tiers payant intégral disponible pour le renouvellement de lunettes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Secteur 1 conventionné", "Carte Vitale acceptée", "Tiers Payant Intégral"].map((item) => (
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

      {/* Rééducation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-ocean-600 rounded-[3rem] rotate-3 group-hover:rotate-1 transition-transform duration-500 opacity-10" />
            <div className="relative rounded-[3rem] shadow-2xl w-full aspect-[4/3] overflow-hidden border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="Rééducation orthoptique"
                className="w-full h-full object-cover"
              />
            </div>
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
          <div>
            <span className="text-ocean-600 font-bold tracking-widest uppercase text-sm mb-4 block">Parcours de soin</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mb-8 leading-tight">
              La Rééducation Orthoptique
            </h2>
            <p className="text-lg text-cloud-600 mb-10 leading-relaxed">
              Prescrite à la suite du bilan si des troubles sont identifiés, la rééducation orthoptique repose sur des exercices visuels progressifs et personnalisés. L&apos;objectif : rétablir l&apos;équilibre oculomoteur et retrouver un confort visuel durable au quotidien.
            </p>
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

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm text-ocean-600 mb-6 border border-cloud-100 transform rotate-3">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-ocean-900 mb-4">Questions Fréquentes</h2>
          <p className="text-lg text-cloud-600">Tout ce que vous devez savoir avant votre première consultation</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-3xl border border-cloud-100 hover:border-ocean-100 shadow-sm">
              <summary className="w-full flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-serif font-bold text-lg text-cloud-800 group-hover:text-ocean-800 transition-colors">
                  {faq.question}
                </span>
                <span className="p-2 rounded-full bg-cloud-50 text-cloud-400 group-hover:bg-ocean-50 group-hover:text-ocean-600 transition-all shrink-0">
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-cloud-600 leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 text-center border border-cloud-100 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-6">
            Prêt à prendre soin de votre vue ?
          </h2>
          <p className="text-lg text-cloud-600 mb-8 max-w-2xl mx-auto">
            Jennifer Loisel vous accueille au cabinet Relais Vision de Montdidier pour un bilan personnalisé et une prise en charge adaptée à vos besoins.
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
