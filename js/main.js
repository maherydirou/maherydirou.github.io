document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  populateProjectsPage();
});

/* =========================
   HEADER
========================= */
function loadHeader() {
  fetch(getPath("header.html"))
    .then(res => res.text())
    .then(html => {
      const header = document.getElementById("header");
      if (!header) return;

      header.innerHTML = html;
      populateProjectsMenu();
    });
}

/* =========================
   DROPDOWN PROJETS
========================= */
function populateProjectsMenu() {
  const menu = document.getElementById("projects-menu");
  if (!menu || typeof PROJECTS === "undefined") return;

  PROJECTS.forEach(project => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = getProjectLink(project.slug);
    a.textContent = project.name;

    li.appendChild(a);
    menu.appendChild(li);
  });
}

/* =========================
   PAGE projects.html
========================= */
function populateProjectsPage() {
  const list = document.getElementById("projects-list");
  if (!list || typeof PROJECTS === "undefined") return;

  PROJECTS.forEach(project => {
    const article = document.createElement("article");
    article.className = "project-item";

    article.innerHTML = `
      <h3>
        <a href="${getProjectLink(project.slug)}">
          ${project.name}
        </a>
      </h3>
      <p class="project-description">
        ${project.description}
      </p>
    `;

    list.appendChild(article);
  });
}

/* =========================
   PATH HELPERS (LA CLÉ 🔑)
========================= */

function isInProjectsFolder() {
  return window.location.pathname.includes("/projects/");
}

function getProjectLink(slug) {
  // si on est déjà dans /projects/
  if (isInProjectsFolder()) {
    return `${slug}.html`;
  }
  // sinon
  return `projects/${slug}.html`;
}

function getPath(file) {
  return isInProjectsFolder() ? `../${file}` : file;
}
