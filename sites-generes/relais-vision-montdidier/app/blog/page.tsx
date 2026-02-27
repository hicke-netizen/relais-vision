"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Home, ChevronRight, Calendar, Clock, ArrowRight, Search, ArrowUpDown, BookOpen } from "lucide-react";

const articles = [
  {
    slug: "ophtalmologue-a-montdidier",
    title: "Ophtalmologue à Montdidier : Comment Accéder aux Soins Visuels Sans Délai ?",
    excerpt: "Trouver un ophtalmologue à Montdidier peut prendre plusieurs mois. Notre cabinet vous propose une alternative : une prise en charge complète en collaboration directe avec le Dr Jean-Claude QUINTYN.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "13 janvier 2026",
    readTime: "5 min",
    image: "/images/blog/ophtalmologue-montdidier.webp",
  },
  {
    slug: "comprendre-bilan-orthoptique",
    title: "Comprendre le bilan orthoptique",
    excerpt: "À quoi s'attendre lors de votre première consultation ? Nous vous expliquons le déroulement d'un bilan complet et les différents tests effectués.",
    category: "Conseils",
    categoryColor: "#3B82F6",
    date: "1 décembre 2025",
    readTime: "1 min",
    image: "/images/blog/bilan-orthoptique-adulte.webp",
  },
  {
    slug: "bilan-orthoptique-enfant",
    title: "Le Bilan Orthoptique chez l'Enfant",
    excerpt: "Le dépistage précoce chez l'enfant est essentiel. Découvrez comment se déroule un bilan et quels signes doivent vous alerter.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "1 décembre 2025",
    readTime: "2 min",
    image: "/images/blog/depistage-visuel.webp",
  },
  {
    slug: "importance-depistage-visuel-enfant",
    title: "L'importance du dépistage visuel chez l'enfant",
    excerpt: "Avant 6 ans, le système visuel est en plein développement. Détecter une amblyopie tôt est crucial pour garantir une bonne vision à vie.",
    category: "Conseils",
    categoryColor: "#3B82F6",
    date: "1 décembre 2025",
    readTime: "2 min",
    image: "/images/blog/depistage-visuel.webp",
  },
  {
    slug: "bilan-orthoptique-adulte",
    title: "Bilan Orthoptique Adulte : Analyse et Coordination Visuelle",
    excerpt: "Maux de tête, fatigue visuelle ? Découvrez en quoi consiste un bilan orthoptique adulte et comment il peut soulager vos symptômes.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "1 décembre 2025",
    readTime: "3 min",
    image: "/images/blog/bilan-orthoptique-adulte.webp",
  },
  {
    slug: "la-fatigue-visuelle-numerique",
    title: "La fatigue visuelle numérique : symptômes et solutions",
    excerpt: "Les écrans font partie de notre quotidien. Apprenez à reconnaître les signes de fatigue oculaire et découvrez des exercices simples.",
    category: "Conseils",
    categoryColor: "#3B82F6",
    date: "1 décembre 2025",
    readTime: "2 min",
    image: "/images/blog/fatigue-visuelle.webp",
  },
  {
    slug: "bilan-neurovisuel",
    title: "Bilan Neurovisuel : Décodez les Troubles des Apprentissages",
    excerpt: "Dyslexie, dyspraxie, troubles de l'attention ? Le bilan neurovisuel permet d'identifier les liens entre vision et apprentissages.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "1 décembre 2025",
    readTime: "2 min",
    image: "/images/blog/bilan-neurovisuel.webp",
  },
  {
    slug: "renouvellement-lunettes-depistage",
    title: "Renouvellement de lunettes et dépistage de pathologie oculaire",
    excerpt: "Découvrez comment le cabinet assure le renouvellement de lunettes et le dépistage de pathologies via le protocole de téléophtalmologie.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "1 décembre 2025",
    readTime: "3 min",
    image: "/images/blog/renouvellement-lunette.webp",
  },
  {
    slug: "reeducation-orthoptique",
    title: "La Rééducation Orthoptique : Pour qui et pourquoi ?",
    excerpt: "Tout savoir sur la rééducation orthoptique : ses objectifs, son déroulement et ses bénéfices pour votre confort visuel.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "1 décembre 2025",
    readTime: "2 min",
    image: "/images/blog/reeducation-orthoptique.webp",
  },
  {
    slug: "diplopie-strabisme",
    title: "Diplopie et Strabisme : Comprendre et Traiter",
    excerpt: "La diplopie (vision double) et le strabisme sont des troubles de la vision binoculaire. Découvrez leurs causes et traitements.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "1 décembre 2025",
    readTime: "2 min",
    image: "/images/blog/diplopie.webp",
  },
  {
    slug: "bilan-basse-vision",
    title: "Le Bilan Basse Vision",
    excerpt: "Le bilan Basse Vision évalue les déficiences visuelles sévères et propose des solutions pour améliorer l'autonomie au quotidien.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "1 décembre 2025",
    readTime: "2 min",
    image: "/images/blog/bilan basse vision.webp",
  },
  {
    slug: "retinopathie-diabetique",
    title: "Dépistage de la Rétinopathie Diabétique",
    excerpt: "Comprendre l'importance du dépistage de la rétinopathie diabétique pour prévenir les complications visuelles graves.",
    category: "Conseils",
    categoryColor: "#3B82F6",
    date: "1 décembre 2025",
    readTime: "2 min",
    image: "/images/blog/retino-diabetique.webp",
  },
];

const categories = ["Tout", "Conseils", "Informations"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "Tout" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-cloud-50 pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center flex-wrap gap-2 text-sm text-cloud-600 mb-8">
          <Link href="/" className="hover:text-ocean-600 transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Accueil</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-cloud-400" />
          <span className="text-ocean-800 font-medium">Le Blog</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ocean-100/30 rounded-full blur-[120px] -z-10" />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ocean-100 shadow-sm mb-6">
          <Sparkles className="w-4 h-4 text-ocean-500" />
          <span className="text-ocean-800 font-medium text-xs tracking-widest uppercase">LE BLOG</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-ocean-900 mb-8 tracking-tight">
          <span>Actualités</span>
          <span className="text-ocean-600 italic mx-3">&</span>
          <span>Conseils</span>
        </h1>
        <p className="text-xl md:text-2xl text-cloud-600 max-w-2xl mx-auto leading-relaxed font-light">Retrouvez ici des articles pour mieux comprendre votre vision et prendre soin de vos yeux au quotidien.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-[2rem] p-2 shadow-sm border border-cloud-100 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex overflow-x-auto w-full lg:w-auto p-1 gap-1">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeCategory === category ? "text-white shadow-md bg-ocean-500" : "text-cloud-600 hover:bg-cloud-50"}`}>
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto px-2">
            <div className="relative flex-grow lg:flex-grow-0 lg:w-64 group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cloud-400" />
              <input type="text" placeholder="Rechercher un article..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-cloud-50 border-none rounded-full text-sm text-ocean-900 focus:ring-2 focus:ring-ocean-100 transition-all placeholder-cloud-400" />
            </div>
            <button className="flex items-center justify-center w-10 h-10 bg-cloud-50 rounded-full text-ocean-600 hover:bg-ocean-50 transition-colors">
              <ArrowUpDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Link key={index} href={`/blog/${article.slug}`} className="bg-white rounded-[2.5rem] overflow-hidden hover:shadow-xl transition-all duration-300 border border-cloud-100 flex flex-col group">
              <div className="h-64 overflow-hidden relative">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white" style={{ backgroundColor: article.categoryColor }}>
                  {article.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-cloud-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-ocean-900 mb-4 leading-tight group-hover:text-ocean-600 transition-colors">{article.title}</h3>
                <p className="text-cloud-600 mb-4 leading-relaxed line-clamp-3 flex-grow">{article.excerpt}</p>
                <div className="mt-auto pt-6 border-t border-cloud-100 flex justify-between items-center">
                  <span className="font-medium text-ocean-800 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Lire l&apos;article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-cloud-300 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-ocean-900 mb-2">Aucun article trouvé</h3>
            <p className="text-cloud-600">Essayez de modifier votre recherche ou vos filtres.</p>
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-24">
        <div className="bg-ocean-50 rounded-[3rem] p-12 text-center border border-ocean-100">
          <BookOpen className="w-10 h-10 text-ocean-500 mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-ocean-900 mb-4">Besoin d&apos;un avis professionnel ?</h3>
          <p className="text-cloud-700 mb-8">Ces articles sont donnés à titre informatif. Rien ne remplace un examen clinique réalisé par un professionnel de santé.</p>
          <a href="https://www.doctolib.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-ocean-900 font-bold rounded-full border border-ocean-200 hover:bg-ocean-900 hover:text-white transition-all shadow-md">Prendre rendez-vous</a>
        </div>
      </div>
    </main>
  );
}