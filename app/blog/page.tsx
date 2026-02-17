import Link from "next/link";
import { Sparkles, Home, ChevronRight, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { client, urlFor } from "@/sanity/lib/client";
import { articlesQuery } from "@/sanity/lib/queries";
import BlogFilters from "./BlogFilters";

async function getArticles() {
  return await client.fetch(articlesQuery);
}

function formatDate(dateString: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPage() {
  const articles = await getArticles();

  const formattedArticles = articles?.map((article: any) => ({
    id: article._id,
    slug: article.slug?.current,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category?.title || "Non classé",
    categoryColor: article.category?.color || "#3BD1F7",
    date: formatDate(article.publishedAt),
    readTime: article.readTime || "2 min",
    image: article.mainImage ? urlFor(article.mainImage).width(600).height(400).url() : null,
  })) || [];

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

      <BlogFilters articles={formattedArticles} />

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