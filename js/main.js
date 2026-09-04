/* =========================================================
   ICONS — small inline SVGs, no icon-font dependency
   ========================================================= */
const ICONS = {
  github:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.53-1.11-1.53-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.32 9.32 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.61.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5V21H3.2V8.75Zm6.25 0h3.36v1.68h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35V21h-3.5v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9.45V8.75Z"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/></svg>',
  external:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M8 5H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-3"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m9 18-6-6 6-6M15 6l6 6-6 6"/></svg>',
  leetcode:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 3 12l9 9M21 12H9"/></svg>',
  copy:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>',
};

const D = PORTFOLIO_DATA;
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* =========================================================
   THEME
   ========================================================= */
(function initTheme() {
  const root = document.documentElement;
  const isLight = root.classList.contains("light-init");
  root.classList.remove("light-init");
  if (isLight) document.body.classList.add("light");

  const btn = $("#themeToggle");
  const icon = $("#themeIcon");
  const sunPath = "M12 4V2M12 22v-2M4.9 4.9 3.5 3.5M20.5 20.5l-1.4-1.4M4.9 19.1l-1.4 1.4M20.5 3.5l-1.4 1.4M22 12h-2M4 12H2M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z";
  const moonPath = "M21 12.5A8.5 8.5 0 1 1 11.5 3a7 7 0 0 0 9.5 9.5Z";

  function paint() {
    const light = document.body.classList.contains("light");
    icon.innerHTML = `<path d="${light ? sunPath : moonPath}"/>`;
  }
  paint();

  btn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
    paint();
  });
})();

/* =========================================================
   RENDER: PROJECTS
   ========================================================= */
function linkRow(project) {
  const links = [];
  if (project.liveUrl) {
    links.push(
      `<a class="project-link" href="${project.liveUrl}" target="_blank" rel="noopener">${ICONS.external} Live</a>`
    );
  }
  const gh = project.githubUrl || D.links.github;
  links.push(
    `<a class="project-link" href="${gh}" target="_blank" rel="noopener">${ICONS.github} ${
      project.githubUrl ? "Source" : "GitHub profile"
    }</a>`
  );
  return `<div class="project-links">${links.join("")}</div>`;
}

function renderFeatured() {
  const el = $("#featuredProjects");
  el.innerHTML = D.projects
    .filter((p) => p.featured)
    .map(
      (p) => `
    <article class="project reveal">
      <div class="project-top">
        <div>
          <h3 class="project-name">${p.name}</h3>
          <p class="project-tagline">${p.tagline}</p>
        </div>
        <span class="status-pill">${p.status}</span>
      </div>
      <p class="project-desc">${p.description}</p>
      <div class="project-stack">${p.stack.map((s) => `<span class="tag">${s}</span>`).join("")}</div>
      ${
        p.features.length || p.challenges.length
          ? `<div class="project-details">
              ${
                p.features.length
                  ? `<div><h4>Key functionality</h4><ul>${p.features.map((f) => `<li>${f}</li>`).join("")}</ul></div>`
                  : ""
              }
              ${
                p.challenges.length
                  ? `<div><h4>Real challenges debugged</h4><ul>${p.challenges.map((c) => `<li>${c}</li>`).join("")}</ul></div>`
                  : ""
              }
            </div>`
          : ""
      }
      ${linkRow(p)}
    </article>`
    )
    .join("");
}

function renderMore() {
  const el = $("#moreProjects");
  el.innerHTML = D.projects
    .filter((p) => !p.featured)
    .map(
      (p) => `
    <article class="project-mini reveal">
      <h3>${p.name}</h3>
      <p>${p.tagline}</p>
      <div class="project-stack">${p.stack.map((s) => `<span class="tag">${s}</span>`).join("")}</div>
      ${linkRow(p)}
    </article>`
    )
    .join("");
}

/* =========================================================
   RENDER: PROGRESS LOG
   ========================================================= */
function renderLog() {
  const el = $("#progressLog");
  el.innerHTML = D.progressLog
    .map(
      (item) => `
    <div class="log-item reveal ${item.current ? "current" : ""}">
      <span class="log-dot"></span>
      <div class="log-stage">${item.stage}</div>
      <div class="log-title">${item.title}</div>
      <p class="log-detail">${item.detail}</p>
      <div class="log-tags">${item.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    </div>`
    )
    .join("");
}

/* =========================================================
   RENDER: PROBLEM SOLVING
   ========================================================= */
function renderSolve() {
  const el = $("#solveGrid");
  const p = D.problemSolving;
  const linkButtons = [];
  if (D.links.leetcode) linkButtons.push(`<a class="project-link" href="${D.links.leetcode}" target="_blank" rel="noopener">${ICONS.leetcode} LeetCode</a>`);
  if (D.links.gfg) linkButtons.push(`<a class="project-link" href="${D.links.gfg}" target="_blank" rel="noopener">${ICONS.external} GeeksforGeeks</a>`);

  el.innerHTML = `
    <div class="solve-card reveal">
      <h3>Topics in practice</h3>
      <div class="solve-topics">${p.topics.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    </div>
    <div class="solve-card reveal">
      <h3>Platforms</h3>
      <div class="solve-topics">${p.platforms.map((pl) => `<span class="tag">${pl}</span>`).join("")} <span class="tag">${p.language}</span></div>
      ${
        linkButtons.length
          ? `<div class="solve-links">${linkButtons.join("")}</div>`
          : `<p class="solve-empty-note" style="margin-top:14px;">Profile links go live here once added.</p>`
      }
    </div>`;
}

/* =========================================================
   RENDER: LEARNING
   ========================================================= */
function renderLearning() {
  const el = $("#learnList");
  el.innerHTML = D.currentlyLearning
    .map(
      (item) => `
    <div class="learn-row reveal">
      <span class="learn-topic">${item.topic}</span>
      <span class="learn-status ${item.status}"><span class="led"></span>${item.note}</span>
    </div>`
    )
    .join("");
}

/* =========================================================
   RENDER: REMOTE
   ========================================================= */
function renderRemote() {
  const el = $("#remotePanelWrap");
  el.innerHTML = `
    <div class="remote-panel">
      <div>
        <h2>${D.remote.heading}</h2>
        <p>${D.remote.body}</p>
        <div class="remote-types">${D.remote.types.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
      <a href="#contact" class="btn btn-solid">Get in touch</a>
    </div>`;
}

/* =========================================================
   RENDER: CONTACT + FOOTER
   ========================================================= */
function renderContact() {
  const el = $("#contactGrid");
  const cards = [];

  if (D.links.email) {
    cards.push(`
      <div class="contact-card">
        <a class="contact-card-hit" href="mailto:${D.links.email}" aria-label="Email ${D.links.email}"></a>
        <span class="icon-circle">${ICONS.mail}</span>
        <span class="contact-card-text"><span class="label">EMAIL</span><br><span class="value">${D.links.email}</span></span>
        <button class="copy-btn" id="emailCopyBtn" type="button" aria-label="Copy email address to clipboard">${ICONS.copy}</button>
      </div>`);
  }
  cards.push(`
    <a class="contact-card" href="${D.links.github}" target="_blank" rel="noopener">
      <span class="icon-circle">${ICONS.github}</span>
      <span><span class="label">GITHUB</span><br><span class="value">codexshiv-dev</span></span>
    </a>`);
  cards.push(`
    <a class="contact-card" href="${D.links.linkedin}" target="_blank" rel="noopener">
      <span class="icon-circle">${ICONS.linkedin}</span>
      <span><span class="label">LINKEDIN</span><br><span class="value">Shivnath Gupta</span></span>
    </a>`);

  el.innerHTML = cards.join("");

  const copyBtn = $("#emailCopyBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      navigator.clipboard.writeText(D.links.email).then(() => {
        const toast = $("#copyToast");
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 1800);
      });
    });
  }
}

function renderFooter() {
  const el = $("#footerLinks");
  el.innerHTML = `
    <a href="${D.links.github}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>
    <a href="${D.links.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>`;
}

/* =========================================================
   TYPING ROLE LINE
   ========================================================= */
function initTyping() {
  const target = $("#typingRole");
  if (!target) return;
  const lines = D.identity.focusLines;
  let i = 0,
    j = 0,
    deleting = false;

  function step() {
    const current = lines[i];
    j += deleting ? -1 : 1;
    target.textContent = current.substring(0, j);

    if (!deleting && j === current.length) {
      deleting = true;
      return setTimeout(step, 1400);
    }
    if (deleting && j === 0) {
      deleting = false;
      i = (i + 1) % lines.length;
    }
    setTimeout(step, deleting ? 40 : 80);
  }
  step();
}

/* =========================================================
   NAV: scroll-spy + mobile menu
   ========================================================= */
function initNav() {
  const links = $$("[data-nav]");
  const sections = links
    .map((a) => document.getElementById(a.getAttribute("href").replace("#", "")))
    .filter(Boolean);

  function onScroll() {
    const y = window.scrollY + 140;
    let activeId = sections[0] && sections[0].id;
    sections.forEach((sec) => {
      if (y >= sec.offsetTop) activeId = sec.id;
    });
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${activeId}`));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const menuBtn = $("#menuBtn");
  const mobileMenu = $("#mobileMenu");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("open"));
    $$("#mobileMenu a").forEach((a) =>
      a.addEventListener("click", () => mobileMenu.classList.remove("open"))
    );
  }
}

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */
function initReveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderMore();
  renderLog();
  renderSolve();
  renderLearning();
  renderRemote();
  renderContact();
  renderFooter();
  initTyping();
  initNav();
  initReveal();
});
