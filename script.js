// Données adaptées au projet LOGEBOX ETUDIANT
const questions = [
  "1. Pourquoi le projet s'appelle-t-il 'LOGEBOX ÉTUDIANT' ?",
  "1. Quel est l'objectif du projet LOGEBOX ?",
  '2. Pourquoi a-t-on besoin de ce projet ?',
  "3. Qu'est-ce qu'on doit aménager exactement ?",
  '4. Quelles pièces doit contenir le container ?',
  '5. Quelles sont les règles importantes à respecter ?',
  '6. Combien de conteneurs va-t-on aménager ?',
  "7. Qu'est-ce qu'on doit prévoir pour le confort ?",
  "8. Comment doit être l'isolation du container ?",
  '9. Où doit être située la résidence étudiante ?',
];

const answers = [
  "C'est un nom malin qui explique tout :<br><br>" +
    "🔹 <b>LOGE</b> comme LOGEMENT - parce que c'est un lieu pour vivre<br>" +
    "🔹 <b>BOX</b> comme la BOÎTE - car c'est aménagé dans un container<br>" +
    "🔹 <b>ÉTUDIANT</b> - parce que c'est fait spécialement pour les étudiants !<br><br>" +
    "C'est court, facile à retenir et ça décrit bien le projet !",
  'Construire des logements pas chers, rapides et faciles à bâtir pour les étudiants.',
  "Parce qu'il n'y a pas assez de logements pour les étudiants, les loyers sont trop chers et les logements trop petits ou trop loin des universités.",
  'Un container maritime de dimensions :<br>- Extérieur: 12,19m x 2,43m x 2,59m<br>- Intérieur: 12,03m x 2,35m x 2,39m',
  'Le container doit contenir :<br>- une chambre<br>- un séjour<br>- une cuisine<br>- une salle de bain',
  '- Respecter la réglementation thermique RT2020<br>- Le loyer doit être moins cher que le marché<br>- Prévoir des fenêtres dans la chambre et le séjour<br>- Une entrée assez grande pour les meubles',
  'On va aménager 6 conteneurs pour créer une petite résidence étudiante.',
  "Il faut prévoir :<br>- l'éclairage<br>- le chauffage<br>- la robinetterie et les WC",
  "L'isolation doit être suffisante pour l'hiver et l'été, sans trop réduire l'espace à l'intérieur.",
  "La résidence doit être située près des universités pour que les étudiants n'aient pas à faire de longs trajets.",
];

const tasks = [
  '<b>Comprendre le projet</b>:<br>Lire et comprendre le cahier des charges',
  "<b>Dessiner l'ébauche</b>:<br>Faire un premier dessin à main levée de l'aménagement",
  '<b>Prendre les mesures</b>:<br>Noter toutes les dimensions du container et des meubles',
  "<b>Faire le plan</b>:<br>Réaliser un plan précis de l'aménagement intérieur",
  '<b>Modéliser en 3D</b>:<br>Créer une version numérique 3D du container aménagé',
  "<b>Choisir l'implantation</b>:<br>Décider comment disposer les 6 conteneurs sur le terrain",
  "<b>Vérifier les règles</b>:<br>S'assurer qu'on respecte toutes les exigences du cahier des charges",
  '<b>Préparer la présentation</b>:<br>Organiser nos idées pour expliquer notre projet',
  '<b>Présenter le projet</b>:<br>Montrer nos plans et maquettes au maire',
];

// Initialisation
const questionsContainer = document.getElementById('questions-container');
const dialogueBox = document.getElementById('dialogue-box');
const mayorGif = document.getElementById('mayor-gif');

// Créer les boutons de questions
questions.forEach((question, index) => {
  const btn = document.createElement('button');
  btn.className = 'question-btn';
  btn.textContent = question;
  btn.onclick = () => showAnswer(index);
  questionsContainer.appendChild(btn);
});

function showAnswer(index) {
  // Démarrer l'animation
  mayorGif.src = 'maire-speak.gif';

  // Afficher la réponse
  if (/*index === 2 || index === 4*/ false) {
    dialogueBox.innerHTML = `
      <p><strong>Réponse :</strong> ${answers[index]}</p>
      <button class="task-btn" onclick="showTasks()">Voir les étapes du projet</button>
    `;
  } else {
    dialogueBox.innerHTML = `<p><strong>Réponse :</strong> ${answers[index]}</p>`;
  }

  // Revenir à l'image normale après 8 secondes
  setTimeout(() => {
    mayorGif.src = 'maire-silent.gif';
  }, 8000);
}

function showTasks() {
  dialogueBox.innerHTML = `
    <p><strong>Les étapes de notre projet :</strong></p>
    <ol>
      ${tasks
        .map(
          (task) =>
            `<li style="margin-left: 0; padding-left: 0; text-align: left; list-style-position: outside;">${task}</li>`
        )
        .join('')}
    </ol>
  `;
}
