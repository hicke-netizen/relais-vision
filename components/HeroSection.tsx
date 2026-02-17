import Link from "next/link";
import { Sparkles, CircleCheck, Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 lg:pt-40">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-ocean-100/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-100/40 rounded-full blur-[80px] mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ocean-100 shadow-sm text-ocean-800 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 text-ocean-600" />
            <span>Relais Vision Montdidier • Hauts-de-France</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-ocean-900 leading-[1.1] mb-8 tracking-tight">
            Votre santé visuelle<br />
            <span className="italic text-ocean-600">est notre priorité</span>
          </h1>

          {/* Description */}
          <div className="text-lg text-cloud-600 mb-8 max-w-xl leading-relaxed">
            Bienvenue au <b>Cabinet d&apos;orthoptie et de téléophtalmologie de Montdidier</b>. <b>Jennifer Loisel</b> vous accompagne dans une démarche globale : du bilan visuel à la rééducation neurovisuelle, en passant par l&apos;optimisation de la performance oculaire.
          </div>

          <div className="text-base text-cloud-500 mb-10 max-w-lg">
            Que ce soit pour soulager une <b>fatigue visuelle</b>, accompagner des <b>troubles des apprentissages</b> ou <b>renouveler vos lunettes</b>, nous allions expertise clinique et technologies de pointe sous la supervision médicale du <b>Dr. Jean-Claude QUINTYN</b>.
          </div>

          {/* Info Box */}
          <div className="bg-ocean-50/50 border border-ocean-100 p-5 rounded-2xl mb-10 max-w-md backdrop-blur-sm">
            <div className="text-base text-ocean-900 font-bold flex items-center gap-3">
              <CircleCheck className="w-6 h-6 text-green-600 shrink-0" />
              <span>Renouvellement lunettes 6-49 ans</span>
            </div>
            <div className="text-sm text-ocean-700 ml-9 mt-1 font-medium">
              Prise en charge à 100% par la Sécurité sociale. Aucune avance de frais.
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://www.doctolib.fr/cabinet-paramedical/montdidier/relais-vision-montdidier-jennifer-loisel" target="_blank" rel="noopener noreferrer" className="btn-primary group">
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Prendre rendez-vous</span>
            </a>
            <Link href="/services" className="btn-secondary">
              Nos Services
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-ocean-900/10 aspect-[4/5] lg:aspect-auto h-[400px] lg:h-[600px] hover:scale-[1.02] transition-transform duration-700 ease-out mx-auto lg:mx-0 w-full max-w-md lg:max-w-none bg-gradient-to-br from-ocean-100 to-ocean-50">
            {/* Placeholder pour l'image */}
            <img src="/images/jeniifer-loisel.png" alt="Cabinet d'Orthoptie Montdidier" className="w-full h-full object-cover" />
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-3xl shadow-xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-ocean-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <p className="text-ocean-600 font-medium">Ajoutez votre photo ici</p>
              </div>
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-transparent" />
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 text-white">
              <div className="font-serif text-3xl lg:text-4xl font-medium mb-2 leading-tight">Cabinet d&apos;Orthoptie à Montdidier</div>
              <div className="text-ocean-100 text-lg font-light">Une collaboration innovante pour votre vue.</div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -top-8 -right-4 lg:-right-8 z-20 bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/60 animate-bounce-slow hidden sm:block max-w-[260px] hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col gap-3">
              <div className="bg-gradient-to-br from-ocean-50 to-white w-12 h-12 flex items-center justify-center rounded-2xl text-ocean-600 shadow-sm border border-ocean-50">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] text-ocean-400 font-bold uppercase tracking-wider mb-1">Expertise</div>
                <div className="text-ocean-900 font-serif font-bold text-lg leading-tight">Neurovisuel & Performance Visuelle</div>
              </div>
            </div>
          </div>

          {/* Border decoration */}
          <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-ocean-100 rounded-[3rem] -z-10 hidden lg:block" />
        </div>
      </div>
    </section>
  );
}