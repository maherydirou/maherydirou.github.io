// Liste globale des projets
const PROJECTS = [
  {
    name: "Projet Informatique 1A: Ordonnancement d'observations d'étoiles",
    slug: "project-1",
    description: "Ce projet consiste à concevoir un programme en Python permettant d’optimiser la planification des observations d’un télescope, en tenant compte des contraintes de visibilité des cibles astronomiques et des conditions météorologiques. L’objectif est de maximiser la valeur scientifique des observations grâce à un algorithme d’ordonnancement et à un modèle de prédiction de la qualité des images. Au sein de l’équipe, j’étais responsable de l’architecture de la solution Python et du développement du code."
  },
  {
    name: "Nom du projet 2",
    slug: "project-2",
    description:"description projet 2"
  },
  {
    name: "Nom du projet 3",
    slug: "project-3",
    description: "description projet 3"
  },
];


const slug = document.body.dataset.project;
const project = PROJECTS.find(p => p.slug === slug);

if (project) {
  document.getElementById("project-name").textContent = project.name;
  document.getElementById("project-description").textContent = project.description;
}