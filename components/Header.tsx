"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Calendar, HelpCircle, Accessibility } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Le Cabinet", href: "/" },
    { name: "Soins & Expertise", href: "/services" },
    { name: "Le Blog", href: "/blog" },
    { name: "Infos & Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar - Bleu foncé */}
      <div className="bg-ocean-900 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-sm">
          <span className="text-ocean-200 mr-1">Info Cabinet :</span>
          <span>Renouvellement de lunettes +50 ans ? Prenez RDV par téléphone via notre secrétariat au</span>
          <a href="tel:0806110504" className="font-bold ml-1 text-white hover:underline">0 806 110 504</a>
        </div>
      </div>

      {/* Main Navigation - Fond blanc/transparent avec blur */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-cloud-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-ocean-600 rounded-xl flex items-center justify-center shadow-md group-hover:bg-ocean-700 transition-colors">
                
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-ocean-900 text-lg leading-tight">Cabinet d&apos;Orthoptie</span>
                <span className="text-ocean-600 text-sm font-medium">Montdidier</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="px-4 py-2 text-cloud-700 hover:text-ocean-600 hover:bg-ocean-50 rounded-lg font-medium transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side - CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="https://www.doctolib.fr/cabinet-paramedical/montdidier/relais-vision-montdidier-jennifer-loisel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-ocean-900 text-white font-bold rounded-full hover:bg-ocean-800 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Rendez-vous
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-cloud-600 hover:text-ocean-600 hover:bg-ocean-50 rounded-lg transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-cloud-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="px-4 py-3 text-cloud-700 hover:text-ocean-600 hover:bg-ocean-50 rounded-lg font-medium transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Menu Footer */}
            <div className="mt-6 pt-6 border-t border-cloud-100 space-y-4">
              <div className="text-sm text-cloud-500 font-medium">Patientèle</div>
              <a 
                href="https://www.doctolib.fr/cabinet-paramedical/montdidier/relais-vision-montdidier-jennifer-loisel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 w-full py-3 bg-ocean-900 text-white font-bold rounded-full hover:bg-ocean-800 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Prendre Rendez-vous
              </a>
              
              <div className="flex items-center justify-center gap-6 pt-2">
                <button className="flex items-center gap-2 text-cloud-500 hover:text-ocean-600 text-sm transition-colors">
                  <HelpCircle className="w-4 h-4" />
                  Besoin d&apos;aide ?
                </button>
                <button className="flex items-center gap-2 text-cloud-500 hover:text-ocean-600 text-sm transition-colors">
                  <Accessibility className="w-4 h-4" />
                  Accessibilité
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}