/* ---------- Projects ---------- */
const projects = [
  {
    name: 'Cybersecurity Vulnerability Audit Scanner',
    tagline: 'Enterprise web application security auditing platform',
    description:
      'Platform dual-mode (Web Dashboard + Python CLI) dengan JWT/RBAC, audit log PostgreSQL, NVD + CISA KEV, SSE scan streaming, dan export SARIF. Engine eksperimen dalam Go dan Rust (FFI).',
    stack: ['React', 'Express', 'PostgreSQL', 'Python', 'Go', 'Rust', 'Docker'],
    link: 'https://github.com/RyzanZavio/cybersecurity-vulnerability-audit-scanner',
  },
];

const container = document.getElementById('project-grid');
projects.forEach((p) => {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <h3>${p.name}</h3>
    <p class="tagline">${p.tagline}</p>
    <p>${p.description}</p>
    <div class="stack">${p.stack.map((s) => `<span>${s}</span>`).join('')}</div>
    <a href="projects/scanner.html">Lihat detail →</a>
    &nbsp;·&nbsp;
    <a href="${p.link}" target="_blank" rel="noreferrer">GitHub</a>
  `;
  container.appendChild(card);
});

/* ---------- Presentation slides ---------- */
const slidesID = [
  {
    title: 'Cybersecurity Vulnerability Audit Scanner',
    body: 'Tools unggulan saya: platform audit keamanan aplikasi web tingkat enterprise. Dua mode sekaligus — <b>Web Dashboard</b> untuk tim, dan <b>Python CLI</b> tanpa ketergantungan Node.',
  },
  {
    title: 'Masalah yang Diselesaikan',
    body: 'Audit keamanan biasanya manual, lambat, dan hasilnya tersebar. Tools ini mengotomatisasi scanning sesuai OWASP, filter soft-404, scoring CVSS, dan export laporan standar <b>SARIF 2.1.0</b>.',
  },
  {
    title: 'Fitur Utama',
    body: 'JWT access + refresh token, role admin/analyst/viewer, audit log immutable PostgreSQL, streaming scan SSE, integrasi NVD + CISA KEV, webhook, scheduler, dan guard SSRF.',
  },
  {
    title: 'Dibangun Dengan',
    body: 'React 19 + Express + PostgreSQL untuk dashboard; Python CLI mandiri; engine eksperimen <b>Go</b> dan FFI <b>Rust</b>; siap di-deploy dengan Docker Compose.',
  },
];

const slidesEN = [
  {
    title: 'Cybersecurity Vulnerability Audit Scanner',
    body: 'My flagship tool: an enterprise-grade web application security auditing platform. Dual-mode — <b>Web Dashboard</b> for teams, and a standalone <b>Python CLI</b> with no Node dependency.',
  },
  {
    title: 'Problem It Solves',
    body: 'Security audits are usually manual, slow, and scattered. This automates OWASP-aligned scanning, soft-404 filtering, CVSS scoring, and exports standard <b>SARIF 2.1.0</b> reports.',
  },
  {
    title: 'Key Features',
    body: 'JWT access + refresh tokens, admin/analyst/viewer roles, immutable PostgreSQL audit log, SSE scan streaming, NVD + CISA KEV integration, webhooks, scheduler, and SSRF guard.',
  },
  {
    title: 'Built With',
    body: 'React 19 + Express + PostgreSQL dashboard; standalone Python CLI; experimental <b>Go</b> engine and <b>Rust</b> FFI; deployable with Docker Compose.',
  },
];

let slides = slidesID;
let lang = 'id';

const slideEl = document.getElementById('slide');
const counterEl = document.getElementById('counter');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const toProjectsBtn = document.getElementById('to-projects');
let slideIndex = 0;

function renderSlide() {
  const s = slides[slideIndex];
  slideEl.innerHTML = `<h3>${s.title}</h3><p>${s.body}</p>`;
  counterEl.textContent = `${slideIndex + 1} / ${slides.length}`;
  prevBtn.disabled = slideIndex === 0;
  prevBtn.textContent = lang === 'id' ? '‹ Sebelumnya' : '‹ Previous';
  nextBtn.textContent = slideIndex === slides.length - 1
    ? (lang === 'id' ? 'Selesai' : 'Done')
    : (lang === 'id' ? 'Selanjutnya ›' : 'Next ›');
  toProjectsBtn.textContent = lang === 'id' ? 'Lanjutkan Melihat Proyek →' : 'Continue to Projects →';
  toProjectsBtn.hidden = slideIndex !== slides.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (slideIndex > 0) { slideIndex--; renderSlide(); }
});

nextBtn.addEventListener('click', () => {
  if (slideIndex < slides.length - 1) { slideIndex++; renderSlide(); }
});

toProjectsBtn.addEventListener('click', () => {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

renderSlide();

/* ---------- Language toggle ID/EN ---------- */
const textsID = [
  'Developer — keamanan aplikasi web & tooling.',
  'Suka membangun tools yang bernilai.',
  'React • Node • Python • Go • Rust',
];
const textsEN = [
  'Developer — web app security & tooling.',
  'I love building valuable tools.',
  'React • Node • Python • Go • Rust',
];
let texts = textsID;

const i18n = {
  nav_home: ['Beranda', 'Home'],
  nav_about: ['Profil', 'About'],
  nav_skills: ['Keahlian', 'Skills'],
  nav_achv: ['Pencapaian', 'Achievements'],
  nav_projects: ['Proyek', 'Projects'],
  nav_contact: ['Kontak', 'Contact'],
  contact_label: ['Kontak:', 'Contact:'],
  badge1: ['Web<br>Development', 'Web<br>Development'],
  badge2: ['Web Security', 'Web Security'],
  badge3: ['Tooling', 'Tooling'],
  cta_projects: ['Lihat Proyek →', 'View Projects →'],
  h_about: ['Profil', 'About'],
  about_p: [
    'Saya <b>Muhammad Rayzan Zavio</b>, siswa SMK jurusan Teknik Komputer dan Jaringan dengan minat pada cybersecurity dan software engineering. Saya membangun proyek nyata seperti platform audit keamanan berbasis web, dan mendokumentasikannya secara terbuka.',
    'I am <b>Muhammad Rayzan Zavio</b>, a vocational high school student majoring in Computer and Network Engineering, with an interest in cybersecurity and software engineering. I build real projects like a web-based security audit platform, documented openly.',
  ],
  h_skills: ['Keahlian', 'Skills'],
  h_achv: ['Pencapaian', 'Achievements'],
  achv_title: ['Sertifikasi', 'Certification'],
  achv_desc: ['Sertifikat profesional yang sudah saya raih. Klik untuk verifikasi di Credly.', 'Professional certificate I have earned. Click to verify on Credly.'],
  h_projects: ['Proyek', 'Projects'],
  h_presentation: ['Presentasi Tools', 'Tools Presentation'],
  terminal_p: ['Coba tanyakan tentang saya. Ketik <code>help</code>.', 'Ask me anything. Type <code>help</code>.'],
  h_contact: ['Kontak', 'Contact'],
  contact_p: ['Untuk kolaborasi atau diskusi proyek, hubungi saya di:', 'For collaboration or project discussion, reach me at:'],
  footer: ['© 2026 Muhammad Rayzan Zavio — HTML • CSS • JavaScript', '© 2026 Muhammad Rayzan Zavio — HTML • CSS • JavaScript'],
  prev: ['‹ Sebelumnya', '‹ Previous'],
  next: ['Selanjutnya ›', 'Next ›'],
  to_projects: ['Lanjutkan Melihat Proyek →', 'Continue to Projects →'],
};

const langBtn = document.getElementById('lang-toggle');

langBtn.addEventListener('click', () => {
  lang = lang === 'id' ? 'en' : 'id';
  langBtn.textContent = lang === 'id' ? 'EN' : 'ID';
  texts = lang === 'id' ? textsID : textsEN;
  t = 0; d = 0; deleting = false;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (i18n[key]) el.innerHTML = i18n[key][lang === 'id' ? 0 : 1];
  });
  slides = lang === 'id' ? slidesID : slidesEN;
  slideIndex = 0;
  renderSlide();
});

/* ---------- Typing effect ---------- */
const typedEl = document.getElementById('typed');
let t = 0, d = 0, deleting = false;

(function typeLoop() {
  const current = texts[t];
  typedEl.textContent = current.slice(0, d);

  if (!deleting && d < current.length) {
    d++;
    setTimeout(typeLoop, 60);
  } else if (!deleting && d === current.length) {
    deleting = true;
    setTimeout(typeLoop, 1800);
  } else if (deleting && d > 0) {
    d--;
    setTimeout(typeLoop, 30);
  } else {
    deleting = false;
    t = (t + 1) % texts.length;
    setTimeout(typeLoop, 400);
  }
})();

/* ---------- Interactive terminal ---------- */
const output = document.getElementById('terminal-output');
const form = document.getElementById('terminal-form');
const input = document.getElementById('terminal-input');

const responsesID = {
  help: 'Perintah tersedia:\n  about   — siapa saya\n  tools   — daftar tools saya\n  stack   — teknologi yang saya pakai\n  contact — cara menghubungi saya\n  clear   — bersihkan terminal',
  about: 'Saya Muhammad Rayzan Zavio, developer yang fokus pada keamanan aplikasi web dan tooling.',
  tools: '1. Cybersecurity Vulnerability Audit Scanner — platform audit keamanan web (dual-mode: Web Dashboard + Python CLI).',
  stack: 'React • Express • PostgreSQL • Python • Go • Rust • Docker',
  contact: 'Email: rayzanzavio@gmail.com',
};

const responsesEN = {
  help: 'Available commands:\n  about   — who I am\n  tools   — my tools\n  stack   — technologies I use\n  contact — how to reach me\n  clear   — clear the terminal',
  about: 'I am Muhammad Rayzan Zavio, a developer focused on web application security and tooling.',
  tools: '1. Cybersecurity Vulnerability Audit Scanner — a web security auditing platform (dual-mode: Web Dashboard + Python CLI).',
  stack: 'React • Express • PostgreSQL • Python • Go • Rust • Docker',
  contact: 'Email: rayzanzavio@gmail.com',
};

function print(html, cls = '') {
  const div = document.createElement('div');
  if (cls) div.className = cls;
  div.innerHTML = html;
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cmd = input.value.trim().toLowerCase();
  if (!cmd) return;

  print(`$ ${cmd}`, 'cmd');

  const responses = lang === 'id' ? responsesID : responsesEN;
  if (cmd === 'clear') {
    output.innerHTML = '';
  } else if (responses[cmd]) {
    print(responses[cmd].replace(/\n/g, '<br>'));
  } else {
    print(lang === 'id'
      ? `Perintah tidak dikenal: "${cmd}". Ketik "help".`
      : `Unknown command: "${cmd}". Type "help".`, 'err');
  }

  input.value = '';
});
