import Link from "next/link";
import { Home, ChevronRight, Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { notFound } from "next/navigation";

const articles = [
  {
    slug: "ophtalmologue-a-montdidier",
    title: "Ophtalmologue à Montdidier : Comment Accéder aux Soins Visuels Sans Délai ?",
    excerpt: "Trouver un ophtalmologue à Montdidier peut prendre plusieurs mois. Notre cabinet vous propose une alternative.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "13 janvier 2026",
    readTime: "5 min",
    image: "/images/blog/ophtalmologue-montdidier.webp",
    author: "Jennifer Loisel",
    content: `
      <p>Trouver un ophtalmologue à Montdidier et dans la Somme peut s'avérer difficile. Les délais d'attente dépassent souvent plusieurs mois, voire plus d'un an dans certains cas. Face à cette pénurie médicale, notre cabinet Relais Vision Montdidier propose une solution innovante.</p>

      <h2>Le protocole de télé-ophtalmologie</h2>
      <p>Grâce au protocole de télé-ophtalmologie, nous pouvons réaliser un bilan visuel complet et renouveler vos lunettes sans attendre des mois pour voir un ophtalmologue. Ce protocole est encadré par le <strong>Dr. Jean-Claude QUINTYN</strong>, chirurgien ophtalmologue, qui supervise chaque dossier à distance.</p>

      <h2>Comment ça fonctionne ?</h2>
      <p>Le processus est simple et rapide :</p>
      <ul>
        <li><strong>Prise de rendez-vous</strong> : Réservez en ligne sur Doctolib ou par téléphone</li>
        <li><strong>Consultation au cabinet</strong> : Jennifer Loisel réalise un bilan complet (acuité visuelle, réfraction, tension oculaire, photos du fond d'œil)</li>
        <li><strong>Analyse médicale</strong> : Le Dr. QUINTYN analyse votre dossier via une plateforme sécurisée</li>
        <li><strong>Ordonnance</strong> : Vous recevez votre ordonnance sous 8 jours sur votre espace patient</li>
      </ul>

      <h2>Qui peut bénéficier de ce service ?</h2>
      <p>Le renouvellement de lunettes via télé-ophtalmologie est accessible aux patients âgés de <strong>6 à 49 ans</strong>. Pour les patients de plus de 50 ans, la prise de rendez-vous s'effectue par téléphone au 0 806 110 504.</p>

      <h2>Prise en charge à 100%</h2>
      <p>Ce protocole est pris en charge à 100% par la Sécurité sociale (tiers payant intégral). Vous n'avez aucune avance de frais à effectuer.</p>

      <h2>Prendre rendez-vous</h2>
      <p>N'attendez plus des mois pour vos soins visuels. Prenez rendez-vous dès maintenant au cabinet Relais Vision Montdidier.</p>
    `,
  },
  {
    slug: "comprendre-bilan-orthoptique",
    title: "Comprendre le bilan orthoptique",
    excerpt: "À quoi s'attendre lors de votre première consultation ? Nous vous expliquons le déroulement d'un bilan complet.",
    category: "Conseils",
    categoryColor: "#3B82F6",
    date: "1 décembre 2025",
    readTime: "3 min",
    image: "/images/blog/bilan-orthoptique-adulte.webp",
    author: "Jennifer Loisel",
    content: `
      <p>Le bilan orthoptique est un examen approfondi de votre vision et de la coordination de vos yeux. Que vous veniez pour des maux de tête, une fatigue visuelle ou sur prescription médicale, voici ce qui vous attend.</p>

      <h2>Qu'est-ce qu'un bilan orthoptique ?</h2>
      <p>L'orthoptiste évalue le fonctionnement de vos yeux ensemble (vision binoculaire) et séparément. Ce bilan permet de détecter des troubles comme :</p>
      <ul>
        <li>Les problèmes de convergence</li>
        <li>Les strabismes</li>
        <li>La fatigue visuelle</li>
        <li>Les troubles de l'accommodation</li>
      </ul>

      <h2>Déroulement de la consultation</h2>
      <p>Le bilan dure généralement entre 20 et 45 minutes selon la complexité. Voici les étapes :</p>
      <ul>
        <li><strong>Anamnèse</strong> : Discussion sur vos symptômes, antécédents et motif de consultation</li>
        <li><strong>Mesure de l'acuité visuelle</strong> : Test de votre vision de loin et de près</li>
        <li><strong>Étude de la motilité oculaire</strong> : Observation des mouvements de vos yeux</li>
        <li><strong>Test de convergence</strong> : Évaluation de la capacité de vos yeux à converger</li>
        <li><strong>Examen de la vision binoculaire</strong> : Tests de fusion et de relief</li>
      </ul>

      <h2>Faut-il une ordonnance ?</h2>
      <p>Oui, une ordonnance médicale est nécessaire pour le bilan orthoptique. Elle peut être délivrée par votre médecin généraliste, ophtalmologue, pédiatre ou neurologue.</p>

      <h2>Et après le bilan ?</h2>
      <p>Selon les résultats, l'orthoptiste peut vous proposer des séances de rééducation orthoptique pour corriger les troubles détectés.</p>
    `,
  },
  {
    slug: "bilan-orthoptique-enfant",
    title: "Le Bilan Orthoptique chez l'Enfant",
    excerpt: "Le dépistage précoce chez l'enfant est essentiel. Découvrez comment se déroule un bilan et quels signes doivent vous alerter.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "1 décembre 2025",
    readTime: "4 min",
    image: "/images/blog/depistage-visuel.webp",
    author: "Jennifer Loisel",
    content: `
      <p>La vision joue un rôle crucial dans le développement et l'apprentissage de l'enfant. Un bilan orthoptique précoce permet de détecter et traiter les troubles visuels avant qu'ils n'impactent la scolarité.</p>

      <h2>Pourquoi faire un bilan orthoptique à votre enfant ?</h2>
      <p>Certains troubles visuels passent inaperçus car l'enfant ne se plaint pas. Le bilan permet de dépister :</p>
      <ul>
        <li><strong>L'amblyopie</strong> : Un œil "paresseux" qui ne se développe pas correctement</li>
        <li><strong>Le strabisme</strong> : Un défaut d'alignement des yeux</li>
        <li><strong>Les troubles de la réfraction</strong> : Myopie, hypermétropie, astigmatisme</li>
        <li><strong>Les troubles neurovisuels</strong> : Difficultés de coordination œil-cerveau</li>
      </ul>

      <h2>À quel âge consulter ?</h2>
      <p>Il est recommandé de faire un bilan :</p>
      <ul>
        <li>Entre 9 et 12 mois (premier dépistage)</li>
        <li>Vers 3 ans (avant l'entrée en maternelle)</li>
        <li>Vers 6 ans (entrée en CP)</li>
        <li>À tout âge en cas de signes d'alerte</li>
      </ul>

      <h2>Signes d'alerte à surveiller</h2>
      <p>Consultez si votre enfant :</p>
      <ul>
        <li>Plisse les yeux ou se frotte souvent les yeux</li>
        <li>Se rapproche très près de la télévision ou des livres</li>
        <li>A des maux de tête fréquents</li>
        <li>Confond des lettres ou saute des lignes en lecture</li>
        <li>A un œil qui "louche" même occasionnellement</li>
      </ul>

      <h2>Déroulement du bilan</h2>
      <p>Le bilan est adapté à l'âge de l'enfant avec des tests ludiques. L'orthoptiste met l'enfant en confiance pour obtenir des mesures fiables. La présence d'un parent est bien sûr possible.</p>
    `,
  },
  {
    slug: "importance-depistage-visuel-enfant",
    title: "L'importance du dépistage visuel chez l'enfant",
    excerpt: "Avant 6 ans, le système visuel est en plein développement. Détecter une amblyopie tôt est crucial.",
    category: "Conseils",
    categoryColor: "#3B82F6",
    date: "1 décembre 2025",
    readTime: "3 min",
    image: "/images/blog/depistage-visuel.webp",
    author: "Jennifer Loisel",
    content: `
      <p>Le système visuel de l'enfant se développe principalement durant les 6 premières années de vie. C'est durant cette période que le dépistage est le plus important et le plus efficace.</p>

      <h2>La plasticité cérébrale : une fenêtre d'opportunité</h2>
      <p>Avant 6-8 ans, le cerveau est particulièrement malléable. Un trouble visuel détecté tôt peut être corrigé efficacement. Après cet âge, certaines corrections deviennent plus difficiles, voire impossibles.</p>

      <h2>L'amblyopie : le danger invisible</h2>
      <p>L'amblyopie (ou "œil paresseux") touche environ 3% des enfants. L'œil atteint voit moins bien car le cerveau privilégie l'autre œil. Sans traitement précoce, cette perte de vision peut devenir permanente.</p>

      <h2>Comment se passe le dépistage ?</h2>
      <p>Le dépistage visuel comprend :</p>
      <ul>
        <li>Un test d'acuité visuelle adapté à l'âge</li>
        <li>Un examen de la réfraction (besoin de lunettes)</li>
        <li>Une vérification de l'alignement des yeux</li>
        <li>Un test de la vision des couleurs</li>
      </ul>

      <h2>Les traitements possibles</h2>
      <p>Selon le trouble détecté, plusieurs solutions existent :</p>
      <ul>
        <li>Correction optique (lunettes)</li>
        <li>Occlusion (cache-œil) pour traiter l'amblyopie</li>
        <li>Rééducation orthoptique</li>
        <li>Suivi régulier</li>
      </ul>

      <p>N'attendez pas pour faire dépister votre enfant. Plus tôt un trouble est détecté, meilleures sont les chances de correction complète.</p>
    `,
  },
  {
    slug: "bilan-orthoptique-adulte",
    title: "Bilan Orthoptique Adulte : Analyse et Coordination Visuelle",
    excerpt: "Maux de tête, fatigue visuelle ? Découvrez en quoi consiste un bilan orthoptique adulte.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "1 décembre 2025",
    readTime: "4 min",
    image: "/images/blog/bilan-orthoptique-adulte.webp",
    author: "Jennifer Loisel",
    content: `
      <p>Le bilan orthoptique n'est pas réservé aux enfants. Chez l'adulte, il permet d'identifier les causes de nombreux symptômes gênants au quotidien.</p>

      <h2>Pourquoi consulter un orthoptiste ?</h2>
      <p>Les motifs de consultation les plus fréquents chez l'adulte sont :</p>
      <ul>
        <li>Maux de tête récurrents, surtout en fin de journée</li>
        <li>Fatigue visuelle lors du travail sur écran</li>
        <li>Vision floue intermittente</li>
        <li>Sensation de tiraillement dans les yeux</li>
        <li>Difficultés de concentration</li>
        <li>Vision double (diplopie)</li>
      </ul>

      <h2>Le déroulement du bilan</h2>
      <p>Le bilan orthoptique adulte comprend plusieurs tests :</p>
      <ul>
        <li><strong>Mesure de l'acuité visuelle</strong> de loin et de près</li>
        <li><strong>Étude de la réfraction</strong> pour vérifier votre correction optique</li>
        <li><strong>Test de convergence</strong> et d'accommodation</li>
        <li><strong>Examen de la motilité oculaire</strong></li>
        <li><strong>Bilan de la vision binoculaire</strong></li>
      </ul>

      <h2>Le cas particulier du travail sur écran</h2>
      <p>Avec l'augmentation du temps passé sur les écrans, de nombreux adultes souffrent de fatigue visuelle numérique. Le bilan permet d'identifier les causes et de proposer des solutions adaptées : rééducation, conseils ergonomiques, adaptation de la correction optique.</p>

      <h2>Et après ?</h2>
      <p>Si des troubles sont détectés, des séances de rééducation orthoptique peuvent être prescrites. Elles permettent de "remuscler" vos yeux et de retrouver un confort visuel durable.</p>
    `,
  },
  {
    slug: "la-fatigue-visuelle-numerique",
    title: "La fatigue visuelle numérique : symptômes et solutions",
    excerpt: "Les écrans font partie de notre quotidien. Apprenez à reconnaître les signes de fatigue oculaire.",
    category: "Conseils",
    categoryColor: "#3B82F6",
    date: "1 décembre 2025",
    readTime: "4 min",
    image: "/images/blog/fatigue-visuelle.webp",
    author: "Jennifer Loisel",
    content: `
      <p>Ordinateur, smartphone, tablette... Nous passons en moyenne 6 à 8 heures par jour devant des écrans. Cette exposition prolongée peut entraîner une fatigue visuelle numérique, aussi appelée syndrome de vision informatique.</p>

      <h2>Les symptômes à reconnaître</h2>
      <p>La fatigue visuelle numérique se manifeste par :</p>
      <ul>
        <li>Yeux secs, qui picotent ou qui brûlent</li>
        <li>Vision floue, surtout en fin de journée</li>
        <li>Maux de tête frontaux</li>
        <li>Douleurs dans la nuque et les épaules</li>
        <li>Difficultés à passer de la vision de près à la vision de loin</li>
        <li>Sensibilité accrue à la lumière</li>
      </ul>

      <h2>Pourquoi les écrans fatiguent nos yeux ?</h2>
      <p>Plusieurs facteurs expliquent cette fatigue :</p>
      <ul>
        <li><strong>Clignement réduit</strong> : Devant un écran, nous clignons 3 fois moins, ce qui assèche les yeux</li>
        <li><strong>Effort d'accommodation</strong> : Les yeux doivent constamment faire la mise au point</li>
        <li><strong>Lumière bleue</strong> : Elle peut perturber le sommeil et fatiguer la rétine</li>
        <li><strong>Distance fixe</strong> : Les yeux ne changent pas de distance de mise au point</li>
      </ul>

      <h2>La règle du 20-20-20</h2>
      <p>Pour soulager vos yeux, appliquez cette règle simple : toutes les <strong>20 minutes</strong>, regardez un objet à <strong>20 pieds</strong> (environ 6 mètres) pendant <strong>20 secondes</strong>.</p>

      <h2>Autres conseils pratiques</h2>
      <ul>
        <li>Positionnez l'écran à 50-70 cm de vos yeux</li>
        <li>Réglez la luminosité de l'écran pour qu'elle corresponde à l'éclairage ambiant</li>
        <li>Utilisez des larmes artificielles si vos yeux sont secs</li>
        <li>Faites des pauses régulières</li>
        <li>Consultez pour un bilan orthoptique si les symptômes persistent</li>
      </ul>
    `,
  },
  {
    slug: "bilan-neurovisuel",
    title: "Bilan Neurovisuel : Décodez les Troubles des Apprentissages",
    excerpt: "Dyslexie, dyspraxie, troubles de l'attention ? Le bilan neurovisuel identifie les liens entre vision et apprentissages.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "1 décembre 2025",
    readTime: "5 min",
    image: "/images/blog/bilan-neurovisuel.webp",
    author: "Jennifer Loisel",
    content: `
      <p>Les troubles des apprentissages (DYS, TDA/H) ont souvent une composante visuelle méconnue. Le bilan neurovisuel permet d'explorer le lien entre la vision et le cerveau.</p>

      <h2>Qu'est-ce que la neurovision ?</h2>
      <p>La neurovision étudie comment le cerveau traite les informations visuelles. Voir ne se limite pas à avoir une bonne acuité visuelle : il faut aussi que le cerveau interprète correctement ce que les yeux perçoivent.</p>

      <h2>Les fonctions neurovisuelles évaluées</h2>
      <p>Le bilan neurovisuel explore :</p>
      <ul>
        <li><strong>Les saccades oculaires</strong> : Mouvements rapides des yeux lors de la lecture</li>
        <li><strong>La poursuite oculaire</strong> : Capacité à suivre un objet en mouvement</li>
        <li><strong>La fixation</strong> : Stabilité du regard sur un point fixe</li>
        <li><strong>L'attention visuelle</strong> : Capacité à sélectionner les informations pertinentes</li>
        <li><strong>La mémoire visuelle</strong> : Capacité à retenir des informations visuelles</li>
        <li><strong>La coordination œil-main</strong></li>
      </ul>

      <h2>Pour qui est indiqué ce bilan ?</h2>
      <p>Le bilan neurovisuel est recommandé pour :</p>
      <ul>
        <li>Les enfants avec des difficultés scolaires inexpliquées</li>
        <li>Les enfants diagnostiqués DYS (dyslexie, dyspraxie, dyscalculie)</li>
        <li>Les enfants ou adultes avec TDA/H</li>
        <li>Les adultes HPI (Haut Potentiel Intellectuel) avec une fatigue visuelle</li>
        <li>Toute personne avec des difficultés de lecture ou de concentration</li>
      </ul>

      <h2>La rééducation neurovisuelle</h2>
      <p>Si des troubles sont détectés, une rééducation spécifique peut être mise en place. Elle vise à améliorer les compétences visuelles déficitaires et peut considérablement améliorer le confort scolaire ou professionnel.</p>
    `,
  },
  {
    slug: "renouvellement-lunettes-depistage",
    title: "Renouvellement de lunettes et dépistage de pathologie oculaire",
    excerpt: "Découvrez comment le cabinet assure le renouvellement de lunettes et le dépistage de pathologies.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "1 décembre 2025",
    readTime: "4 min",
    image: "/images/blog/renouvellement-lunette.webp",
    author: "Jennifer Loisel",
    content: `
      <p>Grâce au protocole Relais Vision, notre cabinet peut renouveler vos lunettes tout en assurant un dépistage des pathologies oculaires, le tout sous supervision médicale.</p>

      <h2>Le protocole de renouvellement</h2>
      <p>Pour les patients de 6 à 49 ans, nous pouvons renouveler votre ordonnance de lunettes sans que vous ayez besoin de consulter un ophtalmologue. Ce protocole comprend :</p>
      <ul>
        <li>Mesure de l'acuité visuelle</li>
        <li>Réfraction (détermination de votre correction)</li>
        <li>Mesure de la tension oculaire</li>
        <li>Photos du fond d'œil</li>
      </ul>

      <h2>Le dépistage des pathologies</h2>
      <p>Au-delà du simple renouvellement, ce protocole permet de dépister des pathologies oculaires comme :</p>
      <ul>
        <li>Le glaucome (via la mesure de tension)</li>
        <li>La rétinopathie diabétique</li>
        <li>La DMLA (Dégénérescence Maculaire Liée à l'Âge)</li>
        <li>D'autres anomalies du fond d'œil</li>
      </ul>

      <h2>La supervision médicale</h2>
      <p>Chaque dossier est transmis au <strong>Dr. Jean-Claude QUINTYN</strong>, chirurgien ophtalmologue, qui analyse les résultats et valide l'ordonnance. En cas d'anomalie détectée, vous serez orienté vers une consultation ophtalmologique.</p>

      <h2>Prise en charge et remboursement</h2>
      <p>Ce protocole est pris en charge à 100% par la Sécurité sociale pour les patients éligibles. Le tiers payant intégral est appliqué : vous n'avez aucune avance de frais.</p>
    `,
  },
  {
    slug: "reeducation-orthoptique",
    title: "La Rééducation Orthoptique : Pour qui et pourquoi ?",
    excerpt: "Tout savoir sur la rééducation orthoptique : ses objectifs, son déroulement et ses bénéfices.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "1 décembre 2025",
    readTime: "4 min",
    image: "/images/blog/reeducation-orthoptique.webp",
    author: "Jennifer Loisel",
    content: `
      <p>La rééducation orthoptique est une "gymnastique des yeux" qui permet de corriger ou d'améliorer certains troubles de la vision. Elle intervient après un bilan qui a identifié des dysfonctionnements.</p>

      <h2>Quels troubles peut-on rééduquer ?</h2>
      <p>La rééducation orthoptique est efficace pour :</p>
      <ul>
        <li>L'insuffisance de convergence</li>
        <li>Les troubles de l'accommodation</li>
        <li>La fatigue visuelle</li>
        <li>Certains strabismes</li>
        <li>Les troubles neurovisuels</li>
        <li>Les séquelles de paralysie oculomotrice</li>
      </ul>

      <h2>Comment se déroulent les séances ?</h2>
      <p>Une séance de rééducation dure généralement 20 à 30 minutes. L'orthoptiste propose des exercices adaptés à votre trouble :</p>
      <ul>
        <li>Exercices de convergence avec des cibles</li>
        <li>Exercices de poursuite et de saccades</li>
        <li>Travail sur la fusion binoculaire</li>
        <li>Exercices de coordination œil-main</li>
        <li>Exercices à faire à domicile entre les séances</li>
      </ul>

      <h2>Combien de séances sont nécessaires ?</h2>
      <p>Le nombre de séances varie selon le trouble et son ancienneté. En général, une rééducation comprend entre 10 et 20 séances, à raison d'une à deux par semaine. Les résultats apparaissent progressivement.</p>

      <h2>La rééducation est-elle remboursée ?</h2>
      <p>Oui, les séances de rééducation orthoptique sont prises en charge par la Sécurité sociale sur prescription médicale. Le remboursement est de 60% par la Sécurité sociale, le reste étant généralement couvert par la mutuelle.</p>
    `,
  },
  {
    slug: "diplopie-strabisme",
    title: "Diplopie et Strabisme : Comprendre et Traiter",
    excerpt: "La diplopie (vision double) et le strabisme sont des troubles de la vision binoculaire.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "1 décembre 2025",
    readTime: "4 min",
    image: "/images/blog/diplopie.webp",
    author: "Jennifer Loisel",
    content: `
      <p>La diplopie (vision double) et le strabisme sont deux troubles distincts mais liés, qui affectent la coordination des deux yeux.</p>

      <h2>Qu'est-ce que la diplopie ?</h2>
      <p>La diplopie est le fait de voir double. Elle peut être :</p>
      <ul>
        <li><strong>Monoculaire</strong> : Persiste en fermant un œil (cause souvent optique)</li>
        <li><strong>Binoculaire</strong> : Disparaît en fermant un œil (cause musculaire ou neurologique)</li>
      </ul>

      <h2>Qu'est-ce que le strabisme ?</h2>
      <p>Le strabisme est un défaut d'alignement des yeux. Un œil regarde droit devant tandis que l'autre dévie. Il peut être :</p>
      <ul>
        <li><strong>Convergent</strong> : L'œil dévie vers l'intérieur</li>
        <li><strong>Divergent</strong> : L'œil dévie vers l'extérieur</li>
        <li><strong>Vertical</strong> : L'œil dévie vers le haut ou le bas</li>
      </ul>

      <h2>Le bilan orthoptique</h2>
      <p>En cas de diplopie ou de strabisme, un bilan orthoptique approfondi est essentiel pour :</p>
      <ul>
        <li>Mesurer la déviation (angle du strabisme)</li>
        <li>Identifier les muscles atteints</li>
        <li>Évaluer la vision binoculaire résiduelle</li>
        <li>Orienter vers le traitement adapté</li>
      </ul>

      <h2>Les traitements possibles</h2>
      <p>Selon le diagnostic, plusieurs options thérapeutiques existent :</p>
      <ul>
        <li>Correction optique (prismes, lunettes)</li>
        <li>Rééducation orthoptique</li>
        <li>Injection de toxine botulique</li>
        <li>Chirurgie dans certains cas</li>
      </ul>
    `,
  },
  {
    slug: "bilan-basse-vision",
    title: "Le Bilan Basse Vision",
    excerpt: "Le bilan Basse Vision évalue les déficiences visuelles sévères et propose des solutions.",
    category: "Informations",
    categoryColor: "#3BD1F7",
    date: "1 décembre 2025",
    readTime: "3 min",
    image: "/images/blog/bilan basse vision.webp",
    author: "Jennifer Loisel",
    content: `
      <p>La basse vision concerne les personnes dont la déficience visuelle ne peut pas être entièrement corrigée par des lunettes, des lentilles ou un traitement médical.</p>

      <h2>Qui est concerné ?</h2>
      <p>La basse vision peut résulter de diverses pathologies :</p>
      <ul>
        <li>DMLA (Dégénérescence Maculaire Liée à l'Âge)</li>
        <li>Glaucome avancé</li>
        <li>Rétinopathie diabétique</li>
        <li>Rétinite pigmentaire</li>
        <li>Pathologies du nerf optique</li>
      </ul>

      <h2>L'objectif du bilan</h2>
      <p>Le bilan basse vision vise à :</p>
      <ul>
        <li>Évaluer précisément les capacités visuelles restantes</li>
        <li>Identifier les besoins spécifiques du patient</li>
        <li>Proposer des aides techniques adaptées</li>
        <li>Mettre en place une rééducation si nécessaire</li>
      </ul>

      <h2>Les aides proposées</h2>
      <p>Selon les besoins, différentes aides peuvent être recommandées :</p>
      <ul>
        <li>Loupes et systèmes grossissants</li>
        <li>Éclairages adaptés</li>
        <li>Filtres spéciaux</li>
        <li>Aides électroniques (télé-agrandisseurs)</li>
        <li>Logiciels de grossissement pour ordinateur</li>
      </ul>

      <h2>La rééducation basse vision</h2>
      <p>L'orthoptiste peut proposer une rééducation pour apprendre à utiliser au mieux la vision restante et les aides techniques, permettant de retrouver une meilleure autonomie au quotidien.</p>
    `,
  },
  {
    slug: "retinopathie-diabetique",
    title: "Dépistage de la Rétinopathie Diabétique",
    excerpt: "Comprendre l'importance du dépistage de la rétinopathie diabétique.",
    category: "Conseils",
    categoryColor: "#3B82F6",
    date: "1 décembre 2025",
    readTime: "4 min",
    image: "/images/blog/retino-diabetique.webp",
    author: "Jennifer Loisel",
    content: `
      <p>La rétinopathie diabétique est une complication du diabète qui affecte les vaisseaux sanguins de la rétine. C'est la première cause de cécité avant 65 ans en France.</p>

      <h2>Qu'est-ce que la rétinopathie diabétique ?</h2>
      <p>L'excès de sucre dans le sang fragilise les petits vaisseaux de la rétine. Avec le temps, ces vaisseaux peuvent :</p>
      <ul>
        <li>Fuir et provoquer un œdème</li>
        <li>Se boucher, privant la rétine d'oxygène</li>
        <li>Proliférer de manière anarchique</li>
      </ul>

      <h2>Pourquoi le dépistage est-il crucial ?</h2>
      <p>La rétinopathie diabétique évolue souvent sans symptômes au début. Quand la vision baisse, les lésions sont déjà avancées. Un dépistage régulier permet de :</p>
      <ul>
        <li>Détecter les lésions précocement</li>
        <li>Traiter avant que la vision ne soit atteinte</li>
        <li>Préserver la vue à long terme</li>
      </ul>

      <h2>Le dépistage au cabinet</h2>
      <p>Notre cabinet peut réaliser le dépistage de la rétinopathie diabétique grâce à :</p>
      <ul>
        <li>La photographie du fond d'œil</li>
        <li>L'analyse des images par le Dr. QUINTYN</li>
        <li>L'orientation vers un ophtalmologue si nécessaire</li>
      </ul>

      <h2>À quelle fréquence se faire dépister ?</h2>
      <p>Il est recommandé de faire un fond d'œil :</p>
      <ul>
        <li>Une fois par an pour tous les diabétiques</li>
        <li>Plus fréquemment en cas de diabète mal équilibré</li>
        <li>Pendant la grossesse pour les diabétiques</li>
      </ul>

      <p>N'attendez pas d'avoir des symptômes : faites-vous dépister régulièrement.</p>
    `,
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cloud-50 pt-36 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center flex-wrap gap-2 text-sm text-cloud-600 mb-8">
          <Link href="/" className="hover:text-ocean-600 transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Accueil</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-cloud-400" />
          <Link href="/blog" className="hover:text-ocean-600 transition-colors">Le Blog</Link>
          <ChevronRight className="w-4 h-4 text-cloud-400" />
          <span className="text-ocean-800 font-medium truncate max-w-[200px]">{article.title}</span>
        </nav>

        <article>
          <div className="mb-8">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white mb-4" style={{ backgroundColor: article.categoryColor }}>
              {article.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-ocean-900 mb-6 leading-tight">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-cloud-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} de lecture</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden mb-12">
            <img src={article.image} alt={article.title} className="w-full h-64 md:h-96 object-cover" />
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-cloud-100">
            <div className="prose prose-lg prose-ocean max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-800 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Retour aux articles
            </Link>
            <a href="https://www.doctolib.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean-900 text-white font-bold rounded-full hover:bg-ocean-800 transition-all shadow-lg">
              Prendre rendez-vous
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}