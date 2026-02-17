export default function ConfidentialitePage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Politique de Confidentialité</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-6 text-lg">
            La protection de vos données personnelles est une priorité pour le Cabinet d'Orthoptie 
            de Montdidier. Cette politique explique comment nous collectons, utilisons et protégeons 
            vos informations.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Responsable du traitement</h2>
          <p className="text-slate-600 mb-4">
            Le responsable du traitement des données est :<br />
            Jennifer Loisel<br />
            12 Rue de Paris, 80500 Montdidier<br />
            Email : contact@orthoptie-montdidier.fr
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Données collectées</h2>
          <p className="text-slate-600 mb-4">
            Nous collectons les données suivantes :
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
            <li>Données d'identification (nom, prénom, date de naissance)</li>
            <li>Coordonnées (adresse, téléphone, email)</li>
            <li>Données de santé liées à votre prise en charge orthoptique</li>
            <li>Données de navigation sur le site (cookies)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Finalités du traitement</h2>
          <p className="text-slate-600 mb-4">
            Vos données sont utilisées pour :
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
            <li>La gestion de vos rendez-vous</li>
            <li>Le suivi de votre prise en charge médicale</li>
            <li>La facturation et le remboursement par l'Assurance Maladie</li>
            <li>La réponse à vos demandes de contact</li>
            <li>L'amélioration de nos services</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Base légale</h2>
          <p className="text-slate-600 mb-4">
            Le traitement de vos données repose sur :
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
            <li>L'exécution du contrat de soins</li>
            <li>Le respect de nos obligations légales (conservation du dossier médical)</li>
            <li>Votre consentement (pour l'envoi de communications)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Destinataires des données</h2>
          <p className="text-slate-600 mb-4">
            Vos données peuvent être transmises à :
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
            <li>L'ophtalmologue référent (Dr. Jean-Claude QUINTYN)</li>
            <li>L'Assurance Maladie</li>
            <li>Votre mutuelle (avec votre accord)</li>
            <li>Nos prestataires techniques (hébergement, logiciels)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Durée de conservation</h2>
          <p className="text-slate-600 mb-4">
            Vos données de santé sont conservées pendant 20 ans à compter du dernier acte de soin, 
            conformément à la réglementation en vigueur. Les données de contact sont conservées 
            pendant 3 ans après votre dernier contact avec le cabinet.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Vos droits</h2>
          <p className="text-slate-600 mb-4">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement (dans les limites légales)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité</li>
            <li>Droit d'opposition</li>
          </ul>
          <p className="text-slate-600 mb-4">
            Pour exercer ces droits, contactez-nous à : contact@orthoptie-montdidier.fr
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Cookies</h2>
          <p className="text-slate-600 mb-4">
            Notre site utilise des cookies pour :
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
            <li>Assurer le bon fonctionnement du site (cookies essentiels)</li>
            <li>Analyser la fréquentation (cookies analytiques)</li>
          </ul>
          <p className="text-slate-600 mb-4">
            Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre navigateur.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">9. Sécurité</h2>
          <p className="text-slate-600 mb-4">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
            protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">10. Contact et réclamation</h2>
          <p className="text-slate-600 mb-4">
            Pour toute question concernant cette politique ou pour exercer vos droits :<br />
            Email : contact@orthoptie-montdidier.fr<br /><br />
            Vous pouvez également introduire une réclamation auprès de la CNIL :<br />
            Commission Nationale de l'Informatique et des Libertés<br />
            3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07<br />
            www.cnil.fr
          </p>

          <p className="text-slate-500 text-sm mt-12">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>
      </div>
    </section>
  );
}
