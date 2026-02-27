"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Search, ArrowUpDown, BookOpen } from "lucide-react";

type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  image: string | null;
};

type Props = {
  articles: Article[];
};

const categories = ["Tout", "Conseils", "Informations"];

export default function BlogFilters({ articles }: Props) {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "Tout" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
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
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`} className="bg-white rounded-[2.5rem] overflow-hidden hover:shadow-xl transition-all duration-300 border border-cloud-100 flex flex-col group">
                <div className="h-64 overflow-hidden relative">
                  {article.image ? (
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-ocean-200 to-ocean-100 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-ocean-300" />
                    </div>
                  )}
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
        ) : (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-cloud-300 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-ocean-900 mb-2">Aucun article trouvé</h3>
            <p className="text-cloud-600">Essayez de modifier votre recherche ou vos filtres.</p>
          </div>
        )}
      </div>
    </>
  );
}