import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import siteConfig from "@/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <span className="font-serif font-bold text-lg block">Cabinet d&apos;Orthoptie</span>
                {/* ✅ MODIFIÉ : ville depuis siteConfig */}
                <span className="text-ocean-400 text-sm">{siteConfig.ville}</span>
              </div>
            </Link>
            <p className="text-ocean-300 text-sm leading-relaxed">
              Membre du réseau <strong className="text-white">Relais Vision</strong>.<br />
              Notre équipe s&apos;engage à vous offrir des soins visuels de qualité, alliant expertise humaine et technologies de pointe pour votre santé visuelle.
            </p>
          </div>

          {/* Plan du site */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Plan du site</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-ocean-300 hover:text-white transition-colors">Le Cabinet</Link>
              </li>
              <li>
                <Link href="/services" className="text-ocean-300 hover:text-white transition-colors">Nos Services</Link>
              </li>
              <li>
                <Link href="/blog" className="text-ocean-300 hover:text-white transition-colors">Articles & Conseils</Link>
              </li>
              <li>
                {/* ✅ MODIFIÉ : URL Doctolib depuis siteConfig */}
                <a href={siteConfig.doctolibUrl} target="_blank" rel="noopener noreferrer" className="text-ocean-300 hover:text-white transition-colors">
                  Prendre Rendez-vous
                </a>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Horaires</h3>
            {/* ✅ MODIFIÉ : horaires depuis siteConfig (tableau dynamique) */}
            <ul className="space-y-3 text-sm">
              {siteConfig.horaires.map((h, i) => (
                <li key={i} className="flex justify-between">
                  <span className="text-ocean-300">{h.jours}</span>
                  <span className="text-white">{h.heures}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Nous trouver</h3>
            <ul className="space-y-4">
              <li>
                {/* ✅ MODIFIÉ : adresse et lien Maps depuis siteConfig */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${siteConfig.ville}+${siteConfig.codePostal}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-ocean-300 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-ocean-400" />
                  <span>
                    {siteConfig.adresseLigne1}<br />
                    {siteConfig.adresseLigne2}
                  </span>
                </a>
              </li>
              <li>
                {/* ✅ MODIFIÉ : téléphone depuis siteConfig */}
                <a href={`tel:${siteConfig.telephone}`} className="flex items-center text-ocean-300 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-ocean-400" />
                  {siteConfig.telephoneAffiche}
                </a>
              </li>
              <li>
                {/* ✅ MODIFIÉ : email depuis siteConfig */}
                <a href={`mailto:${siteConfig.email}`} className="flex items-center text-ocean-300 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-ocean-400" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-ocean-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* ✅ MODIFIÉ : nom du cabinet depuis siteConfig */}
            <p className="text-ocean-400 text-sm">
              © {currentYear} Cabinet d&apos;Orthoptie {siteConfig.ville}. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/mentions-legales" className="text-ocean-400 hover:text-white transition-colors">Mentions Légales</Link>
              <span className="text-ocean-700">|</span>
              <Link href="/confidentialite" className="text-ocean-400 hover:text-white transition-colors">Politique de Confidentialité</Link>
              <span className="text-ocean-700">|</span>
              <Link href="/plan-du-site" className="text-ocean-400 hover:text-white transition-colors">Plan du site</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}