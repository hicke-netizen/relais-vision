export default function MentionsLegalesPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Mentions Légales</h1>
        
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Éditeur du site</h2>
          <p className="text-slate-600 mb-4">
            Le site orthoptie-montdidier.fr est édité par :<br />
            <strong>Jennifer Loisel</strong><br />
            Orthoptiste Diplômée d'État<br />
            12 Rue de Paris<br />
            80500 Montdidier<br />
            Téléphone : 03 22 78 00 00<br />
            Email : contact@orthoptie-montdidier.fr
          </p>
          <p className="text-slate-600 mb-4">
            N° ADELI : [À compléter]<br />
            N° SIRET : [À compléter]
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Hébergement</h2>
          <p className="text-slate-600 mb-4">
            Le site est hébergé par :<br />
            [Nom de l'hébergeur]<br />
            [Adresse de l'hébergeur]<br />
            [Téléphone de l'hébergeur]
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Propriété intellectuelle</h2>
          <p className="text-slate-600 mb-4">
            L'ensemble du contenu du site (textes, images, vidéos, etc.) est protégé par le droit 
            d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Responsabilité</h2>
          <p className="text-slate-600 mb-4">
            Les informations fournies sur ce site le sont à titre indicatif et ne sauraient 
            remplacer une consultation médicale. Jennifer Loisel décline toute responsabilité 
            quant à l'utilisation qui pourrait être faite de ces informations.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Cookies</h2>
          <p className="text-slate-600 mb-4">
            Ce site utilise des cookies pour améliorer l'expérience utilisateur. En poursuivant 
            votre navigation, vous acceptez l'utilisation de cookies conformément à notre politique 
            de confidentialité.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Droit applicable</h2>
          <p className="text-slate-600 mb-4">
            Les présentes mentions légales sont soumises au droit français. En cas de litige, 
            les tribunaux français seront seuls compétents.
          </p>

          <p className="text-slate-500 text-sm mt-12">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>
      </div>
    </section>
  );
}
