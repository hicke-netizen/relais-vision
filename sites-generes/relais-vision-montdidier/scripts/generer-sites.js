// ============================================================
// SCRIPT DE GÉNÉRATION AUTOMATIQUE DES SITES RELAIS VISION
// ============================================================
// 
// COMMENT UTILISER CE SCRIPT :
//
// 1. Place ce fichier dans un dossier "scripts" à la racine du projet
// 2. Remplis le fichier praticiens.csv avec les données de chaque praticien
// 3. Lance la commande : node scripts/generer-sites.js
// 4. Les sites générés apparaissent dans le dossier "sites-generes/"
// 5. Chaque dossier est prêt à être poussé sur GitHub et déployé sur Vercel
//
// ============================================================

const fs   = require("fs");
const path = require("path");

// ---------- Lecture du CSV ----------

function lireCSV(cheminFichier) {
  const contenu = fs.readFileSync(cheminFichier, "utf-8");
  const lignes  = contenu.trim().split("\n");
  const entetes = lignes[0].split(",");

  return lignes.slice(1).map((ligne) => {
    // Gestion des virgules à l'intérieur des guillemets
    const valeurs = [];
    let courant   = "";
    let dansGuillemets = false;

    for (let i = 0; i < ligne.length; i++) {
      const char = ligne[i];
      if (char === '"') {
        dansGuillemets = !dansGuillemets;
      } else if (char === "," && !dansGuillemets) {
        valeurs.push(courant.trim());
        courant = "";
      } else {
        courant += char;
      }
    }
    valeurs.push(courant.trim());

    const obj = {};
    entetes.forEach((entete, i) => {
      obj[entete.trim()] = valeurs[i] || "";
    });
    return obj;
  });
}

// ---------- Génération du siteConfig.ts ----------

function genererSiteConfig(p) {
  // Les spécialités sont séparées par | dans le CSV
  const specialitesPraticienne     = p.specialitesPraticienne.split("|").map((s) => `"${s.trim()}"`).join(",\n    ");
  const specialitesOphtalmologue   = p.specialitesOphtalmologue.split("|").map((s) => `"${s.trim()}"`).join(",\n    ");

  return `// ============================================================
// CONFIGURATION — Cabinet Relais Vision ${p.ville}
// Généré automatiquement le ${new Date().toLocaleDateString("fr-FR")}
// ============================================================

const siteConfig = {
  // 🏙️ Identité du cabinet
  ville: "${p.ville}",
  codePostal: "${p.codePostal}",
  region: "${p.region}",

  // 👩 Orthoptiste
  praticienne: "${p.praticienne}",
  bioPraticienne: "${p.bioPraticienne}",
  specialitesPraticienne: [
    ${specialitesPraticienne},
  ],
  photoPraticienne: "${p.photoPraticienne}",

  // 👨‍⚕️ Ophtalmologue référent
  ophtalmologue: "${p.ophtalmologue}",
  titreOphtalmologue: "${p.titreOphtalmologue}",
  bioOphtalmologue: "${p.bioOphtalmologue}",
  specialitesOphtalmologue: [
    ${specialitesOphtalmologue},
  ],
  photoOphtalmologue: "${p.photoOphtalmologue}",

  // 🩺 Médecin superviseur
  medecin: "${p.medecin}",

  // 📍 Adresse
  adresseLigne1: "${p.adresseLigne1}",
  adresseLigne2: "${p.adresseLigne2}",

  // 📞 Contact
  telephone: "${p.telephone}",
  telephoneAffiche: "${p.telephoneAffiche}",
  email: "${p.email}",

  // 🔗 Doctolib
  doctolibUrl: "${p.doctolibUrl}",

  // 🕐 Horaires
  horaires: [
    { jours: "${p.horaire1Jours}", heures: "${p.horaire1Heures}" },
    { jours: "${p.horaire2Jours}", heures: "${p.horaire2Heures}" },
    { jours: "${p.horaire3Jours}", heures: "${p.horaire3Heures}" },
    { jours: "${p.horaire4Jours}", heures: "${p.horaire4Heures}" },
  ],

  // 🖼️ Photos cabinet
  photoDevanture:   "${p.photoDevanture}",
  photoInterieur:   "${p.photoInterieur}",
  photoEquipements: "${p.photoEquipements}",
};

export default siteConfig;
`;
}

// ---------- Copie récursive du template ----------

function copierDossier(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  const elements = fs.readdirSync(source);

  for (const element of elements) {
    // On ignore ces dossiers pour ne pas copier des centaines de fichiers inutiles
    if (["node_modules", ".git", ".next", "sites-generes"].includes(element)) continue;

    const cheminSource = path.join(source, element);
    const cheminDest   = path.join(destination, element);
    const stat         = fs.statSync(cheminSource);

    if (stat.isDirectory()) {
      copierDossier(cheminSource, cheminDest);
    } else {
      fs.copyFileSync(cheminSource, cheminDest);
    }
  }
}

// ---------- Programme principal ----------

function main() {
  const cheminCSV      = path.join(__dirname, "../praticiens.csv");
  const dossierSortie  = path.join(__dirname, "../sites-generes");
  const dossierTemplate = path.join(__dirname, ".."); // racine du projet = template

  // Vérification que le CSV existe
  if (!fs.existsSync(cheminCSV)) {
    console.error("❌ Fichier praticiens.csv introuvable !");
    console.error("   Place le fichier praticiens.csv à la racine du projet.");
    process.exit(1);
  }

  const praticiens = lireCSV(cheminCSV);
  console.log(`\n🚀 Génération de ${praticiens.length} site(s)...\n`);

  for (const praticien of praticiens) {
    const nomDossier = `relais-vision-${praticien.ville.toLowerCase().replace(/\s+/g, "-")}`;
    const cheminSite = path.join(dossierSortie, nomDossier);

    // Supprime l'ancien dossier si il existe déjà
    if (fs.existsSync(cheminSite)) {
      fs.rmSync(cheminSite, { recursive: true });
    }

    console.log(`📁 Copie du template pour ${praticien.ville}...`);
    copierDossier(dossierTemplate, cheminSite);

    console.log(`⚙️  Génération du siteConfig.ts pour ${praticien.ville}...`);
    const contenuConfig = genererSiteConfig(praticien);
    fs.writeFileSync(path.join(cheminSite, "siteConfig.ts"), contenuConfig, "utf-8");

    console.log(`✅ Site ${praticien.ville} généré → sites-generes/${nomDossier}/\n`);
  }

  console.log("🎉 Tous les sites ont été générés dans le dossier sites-generes/");
  console.log("\n📋 Prochaines étapes pour chaque site :");
  console.log("   1. Ajoute les photos dans public/images/");
  console.log("   2. Crée un repo GitHub : hicke-netizen/relais-vision-[ville]");
  console.log("   3. git init → git add . → git commit → git push");
  console.log("   4. Connecte le repo à Vercel → déploiement automatique !");
}

main();