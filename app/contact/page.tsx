import { MapPin, Phone, Mail, Clock, Info } from "lucide-react";

export const metadata = {
  title: "Contact | Cabinet d'Orthoptie Montdidier",
  description: "Contactez le cabinet d'orthoptie Relais Vision Montdidier. Jennifer Loisel vous accueille pour vos soins visuels.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cloud-50 pt-36 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-ocean-900 mb-6">Nous Trouver</h1>
          <p className="text-xl text-cloud-600">Cabinet Relais Vision Montdidier</p>
          <p className="text-lg text-ocean-600 font-medium">1 Pl. Faidherbe, 80500 Montdidier</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-cloud-100">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-ocean-50 rounded-xl text-ocean-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-ocean-900 font-bold">Le Cabinet</h3>
                  <p className="text-cloud-600 mt-2">1 Pl. Faidherbe<br />80500 Montdidier</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-ocean-50 rounded-xl text-ocean-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-ocean-900 font-bold">Téléphone</h3>
                  <p className="text-2xl text-ocean-600 mt-1 font-bold tracking-tight">0 806 110 504</p>
                  <p className="text-sm text-cloud-400 mt-1">Numéro unique Relais Vision</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-ocean-50 rounded-xl text-ocean-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-ocean-900 font-bold">Email</h3>
                  <p className="text-ocean-600 mt-1 font-medium break-all">montdidier-80@relais-vision.fr</p>
                </div>
              </div>
            </div>

            <div className="bg-ocean-900 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ocean-800 rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Clock className="w-6 h-6 text-ocean-300" />
                  <h3 className="text-xl font-serif font-bold">Horaires d&apos;ouverture</h3>
                </div>
                <ul className="space-y-4 text-ocean-100/80">
                  <li className="flex justify-between border-b border-ocean-800 pb-2">
                    <span>Lundi</span>
                    <span className="text-white">9h00 - 18h00</span>
                  </li>
                  <li className="flex justify-between border-b border-ocean-800 pb-2">
                    <span>Mardi</span>
                    <span className="text-white">9h00 - 18h00</span>
                  </li>
                  <li className="flex justify-between border-b border-ocean-800 pb-2">
                    <span>Mercredi</span>
                    <span className="text-white">9h00 - 18h00</span>
                  </li>
                  <li className="flex justify-between border-b border-ocean-800 pb-2">
                    <span>Jeudi</span>
                    <span className="text-white">Fermé</span>
                  </li>
                  <li className="flex justify-between border-b border-ocean-800 pb-2">
                    <span>Vendredi</span>
                    <span className="text-white">9h00 - 18h00</span>
                  </li>
                  <li className="flex justify-between text-ocean-400">
                    <span>Sam - Dim</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-3xl flex flex-col gap-3 border border-amber-100">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-lg">
                <Info className="w-6 h-6" />
                <span>Information Importante</span>
              </div>
              <p className="text-amber-900/80 text-sm leading-relaxed">Pour les patients de plus de 50 ans souhaitant renouveler leurs lunettes, la prise de rendez-vous s&apos;effectue uniquement par téléphone au 0 806 110 504.</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="h-full min-h-[500px] bg-white rounded-[3rem] overflow-hidden relative shadow-sm border border-cloud-100 p-2">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-cloud-100 min-h-[480px]">
                <iframe width="100%" height="100%" frameBorder="0" scrolling="no" title="Carte du cabinet" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.3429969066838!2d2.566047955567971!3d49.64783619806124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7c1944b30fe61%3A0xca62a6de5b9d89ed!2sRelais%20Vision%20Montdidier%20-%20Jennifer%20Loisel%20%2F%20T%C3%A9l%C3%A9-ophtalmologie!5e0!3m2!1sfr!2sfr!4v1771245642146!5m2!1sfr!2sfr" className="w-full h-full min-h-[480px]" loading="lazy" style={{ border: 0 }} />
                <div className="absolute bottom-6 right-6 z-10">
                  <a href="https://www.google.com/maps/place/Relais+Vision+Montdidier+-+Jennifer+Loisel+%2F+T%C3%A9l%C3%A9-ophtalmologie/@49.6478362,2.566048,17z/data=!4m15!1m8!3m7!1s0x47e7c0336527856d:0x6807fbed703852c4!2s1+Pl.+Faidherbe,+80500+Montdidier!3b1!8m2!3d49.6478363!4d2.5709135!16s%2Fg%2F11tk6xykrd!3m5!1s0x47e7c1944b30fe61:0xca62a6de5b9d89ed!8m2!3d49.6482045!4d2.5710777!16s%2Fg%2F11xfqtgdgk?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-ocean-900 text-white px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105 hover:bg-ocean-800 transition-all transform flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" />
                    Itinéraire GPS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-[3rem] p-10 md:p-16 text-center border border-cloud-100 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-6">Prendre rendez-vous</h2>
          <p className="text-lg text-cloud-600 mb-8 max-w-2xl mx-auto">Jennifer Loisel vous accueille au cabinet Relais Vision Montdidier. Prenez rendez-vous en ligne sur Doctolib ou par téléphone.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.doctolib.fr/cabinet-paramedical/montdidier/relais-vision-montdidier-jennifer-loisel/booking/motives?specialityId=4&telehealth=false&placeId=practice-689019&source=profile" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ocean-900 text-white font-bold rounded-full hover:bg-ocean-800 transition-all shadow-lg">Rendez-vous Doctolib</a>
            <a href="tel:0806110504" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ocean-900 font-bold rounded-full border-2 border-ocean-200 hover:border-ocean-900 transition-all">
              <Phone className="w-5 h-5" />
              0 806 110 504
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}