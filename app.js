/* Interactive terminal portfolio — Hicham Lamrini.
   All content lives in the constants below; edit them and refresh. */

const USER = "hichamox12";
const PROMPT = `<span class="prompt-tag">${USER}@github<span class="muted">:</span><span class="path">~</span><span class="muted">$</span></span>`;
const WORDMARK = "HL";

const LINKS = {
  linkedin: { label: "linkedin.com/in/lamri-hicham", url: "https://linkedin.com/in/lamri-hicham" },
  github: { label: "github.com/hichamox12", url: "https://github.com/hichamox12" },
  email: { label: "lamrinihicham9999@gmail.com", url: "mailto:lamrinihicham9999@gmail.com" },
  phone: { label: "+212 628 678 483", url: "tel:+212628678483" },
};

const WHOAMI = {
  name: "Hicham Lamrini",
  title: "State Engineer in Computer Science · R&D AI Software Engineer",
  location: "Casablanca, Morocco",
  summary:
    "R&D software engineer specialised in AI, with hands-on experience building web and mobile applications " +
    "and designing AI agents. Comfortable with backend APIs, React and Angular front-ends, unit testing and " +
    "Docker deployments. I integrate AI components and semantic-search solutions — RAG and vector search — " +
    "with a strong focus on code quality, maintainability and scalability.",
};

const JOBS = [
  {
    role: "AI Engineer & IT Support",
    company: "Sopra Banking Software (SBS)",
    place: "Casablanca",
    type: "Final-year internship",
    dates: "Mar 2026 – Aug 2026",
    bullets: [
      "Joined the <b>Care First Line</b> team and autonomously handled tickets on the <b>Amplitude</b> core-banking solution end to end: ErrLog analysis & debugging, server testing via MobaXterm, end-of-day (TFJ) processing, SQL workaround scripts and fix follow-up to resolution.",
      "Designed <b>Smart Process</b>, an AI agent built on <b>Microsoft Copilot Studio</b> and powered by <b>Claude Sonnet 4.6</b>, using SharePoint & Excel knowledge bases to automate and harden L1/L2 ticket analysis.",
      "Automated business checks: priority, type, format, metadata and <b>GDPR compliance</b>.",
      "Generated structured answers (context, anomalies, alerts, draft customer reply) delivered in <b>Microsoft Teams</b>.",
      "<b>Human-in-the-Loop</b>: colleagues validate, adjust or reject each recommendation before it reaches the customer.",
      "Used human feedback to continuously improve prompts, relevance, reliability and agent performance.",
    ],
    stack: ["4GL", "SQL", "Oracle", "Informix", "Copilot Studio", "Claude Sonnet 4.6", "Power Automate", "EasyVista", "SharePoint", "Teams", "Excel", "MobaXterm", "GitLab"],
  },
  {
    role: "Backend & AI Developer",
    company: "OmniSoft",
    place: "Paris, Île-de-France",
    type: "Work-study internship",
    dates: "Mar 2025 – Jul 2025",
    bullets: [
      "Built a <b>RAG</b> (Retrieval-Augmented Generation) solution for document search.",
      "Implemented backend <b>REST APIs</b> for data ingestion, indexing and processing.",
      "Added NLP processing and <b>vector search</b> to improve result relevance.",
      "Developed backend tools connecting AI services to application components.",
      "Wrote unit & integration tests to make the APIs more reliable.",
      "Integrated LLM APIs to generate contextualised answers from documents.",
      "Containerised with <b>Docker</b> and took part in test-environment deployments.",
    ],
    stack: ["Python", "REST API", "RAG", "Vector search", "NLP", "LLM APIs", "Docker"],
  },
  {
    role: "Web & AI Developer",
    company: "Mtech Technologies",
    place: "Casablanca",
    type: "Final-year internship",
    dates: "Apr 2024 – Jul 2024",
    bullets: [
      "Designed a <b>RAG pipeline</b> with the OpenAI API to answer questions over uploaded documents.",
      "Improved search accuracy with vector search and semantic processing.",
      "Built a <b>Streamlit</b> interface to upload and query documents.",
      "Integrated <b>LangChain</b> and the OpenAI API for contextualised answers.",
      "Audio transcription with <b>OpenAI Whisper</b>.",
      "Image analysis & understanding with the <b>BLIP</b> model via Hugging Face.",
    ],
    stack: ["Python", "OpenAI API", "LangChain", "Streamlit", "Whisper", "BLIP", "Hugging Face"],
  },
];

const EDU = [
  { degree: "State Engineering Degree in Computer Science", school: "Mundiapolis University, Casablanca", dates: "Sep 2024 – Jul 2026" },
  { degree: "Bachelor's Degree in Computer Science", school: "Mundiapolis University, Casablanca", dates: "Sep 2022 – Jul 2024" },
];

const SKILLS = {
  "AI & Data Science": ["LangGraph", "AutoGen", "LlamaIndex", "CrewAI", "LangChain", "OpenAI API", "Anthropic API", "Gemini API", "Hugging Face", "Ollama", "ChromaDB", "Pinecone", "RAG", "LLM", "Agentic AI", "Prompt Engineering", "Fine-tuning", "MLOps", "MCP Server", "NLP", "TensorFlow", "PyTorch", "Keras", "CNN", "RNN", "LSTM", "Transformers", "OpenCV", "Computer Vision", "MongoDB Atlas Vector Search", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "SHAP", "spaCy", "NLTK"],
  "Automation": ["Microsoft Copilot Studio", "Power Automate", "n8n", "Zapier"],
  "Languages": ["Python", "JavaScript", "Java", "C", "PHP", "SQL"],
  "Frontend": ["React.js", "Next.js", "Angular", "Vue.js", "Tailwind CSS"],
  "Backend": ["Node.js", "Express.js", "Django", "Spring Boot", "Flask", "FastAPI"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
  "DevOps & Cloud": ["Docker", "AWS", "Azure", "Kubernetes", "Kafka", "Load Balancer", "API Gateway"],
  "Mobile": ["Android Studio", "Flutter"],
  "Architecture": ["REST API", "Microservices", "Design Patterns"],
  "QA & Methods": ["Selenium", "Scrum", "UML", "Merise"],
  "Other": ["Hadoop", "Blockchain"],
};

const PROJECTS = [
  { name: "Document RAG Assistant", tech: "Java J2EE", desc: "RAG assistant combining a REST API, semantic search and an LLM to deliver contextualised answers over documents." },
  { name: "Hotel Booking System", tech: "Microservices", desc: "Hotel reservation system built on a microservices architecture." },
  { name: "Smart Process", tech: "Copilot Studio · Claude", desc: "AI agent that analyses banking support tickets (L1/L2), runs compliance checks and drafts replies in Teams with human validation." },
];

const LANGS = [["Arabic", 5, "native"], ["French", 4, "fluent"], ["English", 3, "intermediate"]];

/* ------------------------------------------------------------------ */

const $ = (s) => document.querySelector(s);
const term = $("#term");
const input = $("#cmdInput");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const c = (name, label) => `<span class="cmd" data-cmd="${esc(name)}">${esc(label || name)}</span>`;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function out(html, cls = "") {
  const d = document.createElement("div");
  d.className = "line " + cls;
  d.innerHTML = html;
  term.appendChild(d);
  term.scrollTop = term.scrollHeight;
  return d;
}
const block = (html) => out(html, "block");

/* ---------- live GitHub data ---------- */
let contribPromise = null;
function loadContrib() {
  if (contribPromise) return contribPromise;
  contribPromise = (async () => {
    try {
      const ctl = new AbortController();
      const t = setTimeout(() => ctl.abort(), 6000);
      const r = await fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`, { signal: ctl.signal });
      clearTimeout(t);
      if (!r.ok) throw new Error(r.status);
      const j = await r.json();
      return { live: true, total: j.total.lastYear, days: j.contributions };
    } catch (e) {
      const s = window.SNAPSHOT;
      return { live: false, total: s.total, days: s.days, generated: s.generated };
    }
  })();
  return contribPromise;
}

function streaks(days) {
  let longest = 0, run = 0, best = { count: 0, date: null }, active = 0;
  for (const d of days) {
    if (d.count > 0) { run++; active++; longest = Math.max(longest, run); } else run = 0;
    if (d.count > best.count) best = d;
  }
  let current = 0, i = days.length - 1;
  if (i >= 0 && days[i].count === 0) i--; // today may not have contributions yet
  for (; i >= 0 && days[i].count > 0; i--) current++;
  return { current, longest, best, active };
}

const fmtDate = (iso, opts = { weekday: "short", month: "short", day: "numeric", year: "numeric" }) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", opts);

/* ---------- commands ---------- */
const COMMANDS = {
  help: {
    desc: "list available commands",
    run() {
      const rows = Object.entries(COMMANDS).filter(([, v]) => !v.hidden)
        .map(([k, v]) => `<span>${c(k)}</span><span class="muted">${esc(v.desc)}</span>`).join("");
      block(`<div class="sec-title">available commands</div><div class="help-grid">${rows}</div>
<div class="muted" style="margin-top:8px">Tab completes · ↑/↓ history · Ctrl+L clears · click any yellow command</div>`);
    },
  },
  whoami: {
    desc: "short intro",
    async run() {
      block(`<div class="sec-title">whoami</div>
<div><b style="font-size:16px">${esc(WHOAMI.name)}</b> <span class="muted">— ${esc(WHOAMI.location)}</span></div>
<div class="hl">${esc(WHOAMI.title)}</div>
<p style="margin:8px 0">${esc(WHOAMI.summary)}</p>
<div class="stats" id="whoStats">
  <div class="stat"><b>3</b><span>internships · AI &amp; backend</span></div>
  <div class="stat"><b>${Object.values(SKILLS).flat().length}+</b><span>technologies</span></div>
  <div class="stat"><b data-k="total">…</b><span>contributions · last year</span></div>
  <div class="stat"><b data-k="longest">…</b><span>longest streak (days)</span></div>
</div>
<div class="muted">next: ${c("experience")} · ${c("skills")} · ${c("projects")} · ${c("contributions")} · ${c("contact")}</div>`);
      const box = term.querySelector(".line:last-child #whoStats") || document.getElementById("whoStats");
      const data = await loadContrib();
      const s = streaks(data.days);
      box.querySelector('[data-k="total"]').textContent = data.total;
      box.querySelector('[data-k="longest"]').textContent = s.longest;
      box.removeAttribute("id");
    },
  },
  experience: {
    desc: "work history",
    run() {
      const html = JOBS.map((j) => `<div class="job">
  <div class="role">${esc(j.role)} <span class="muted">@</span> <span class="ok">${esc(j.company)}</span></div>
  <div class="meta">${esc(j.dates)} · ${esc(j.type)} · ${esc(j.place)}</div>
  <ul>${j.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
  <div class="chips">${j.stack.map((s) => `<span class="chip k">${esc(s)}</span>`).join("")}</div>
</div>`).join("");
      block(`<div class="sec-title">experience</div>${html}`);
    },
  },
  education: {
    desc: "degrees",
    run() {
      block(`<div class="sec-title">education</div>${EDU.map((e) => `<div class="job">
  <div class="role">${esc(e.degree)}</div><div class="meta">${esc(e.school)} · ${esc(e.dates)}</div></div>`).join("")}`);
    },
  },
  skills: {
    desc: "tech stack",
    run(args) {
      const want = args.join(" ").toLowerCase();
      const cats = Object.entries(SKILLS).filter(([k]) => !want || k.toLowerCase().includes(want));
      if (!cats.length) return out(`<span class="err">no category matching "${esc(want)}"</span> — try ${c("skills")}`);
      block(`<div class="sec-title">skills${want ? " / " + esc(want) : ""}</div>` + cats.map(([k, v]) =>
        `<div class="yl">${esc(k)} <span class="muted">(${v.length})</span></div><div class="chips">${v.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>`).join(""));
    },
  },
  projects: {
    desc: "things I've built",
    run() {
      block(`<div class="sec-title">projects</div>${PROJECTS.map((p) => `<div class="job">
  <div class="role">${esc(p.name)} <span class="muted">—</span> <span class="pu">${esc(p.tech)}</span></div>
  <div>${esc(p.desc)}</div></div>`).join("")}
<div class="muted">more on ${c("open github", "github")}</div>`);
    },
  },
  contributions: {
    desc: "GitHub contribution heatmap",
    async run() {
      const wait = out(`<span class="muted">fetching contributions for ${USER}…</span>`);
      const data = await loadContrib();
      wait.remove();
      block(`<div class="sec-title">contributions</div>${heatmap(data.days)}
<div style="margin-top:6px"><b class="ok">${data.total}</b> contributions in the last year
${data.live ? "" : `<span class="muted"> · offline snapshot from ${esc(data.generated)}</span>`}</div>
<div class="muted">see also ${c("streak")}</div>`);
    },
  },
  streak: {
    desc: "current / longest streak, best day",
    async run() {
      const data = await loadContrib();
      const s = streaks(data.days);
      block(`<div class="sec-title">streak</div><div class="stats">
  <div class="stat"><b>${s.current}</b><span>current streak (days)</span></div>
  <div class="stat"><b>${s.longest}</b><span>longest streak (days)</span></div>
  <div class="stat"><b>${s.best.count}</b><span>best day${s.best.date ? " · " + esc(fmtDate(s.best.date, { month: "short", day: "numeric", year: "numeric" })) : ""}</span></div>
  <div class="stat"><b>${s.active}</b><span>active days · last year</span></div></div>`);
    },
  },
  languages: {
    desc: "spoken languages",
    run() {
      block(`<div class="sec-title">languages</div><dl class="kv">${LANGS.map(([l, n, w]) =>
        `<dt>${l}</dt><dd><span class="bar">${"■".repeat(n)}</span><span class="muted">${"□".repeat(5 - n)} ${w}</span></dd>`).join("")}</dl>`);
    },
  },
  contact: {
    desc: "how to reach me",
    run() {
      block(`<div class="sec-title">contact</div><dl class="kv">${Object.entries(LINKS).map(([k, v]) =>
        `<dt>${k}</dt><dd><a href="${v.url}" target="_blank" rel="noopener">${esc(v.label)}</a></dd>`).join("")}</dl>
<div class="muted" style="margin-top:8px">or type ${c("open linkedin")} · ${c("open email")}</div>`);
    },
  },
  neofetch: {
    desc: "system info, terminal style",
    run() { block(neofetchHTML()); },
  },
  open: {
    desc: "open <linkedin|github|email>",
    run([t]) {
      const l = LINKS[(t || "").toLowerCase()];
      if (!l) return out(`usage: open &lt;${Object.keys(LINKS).join("|")}&gt;`, "muted");
      out(`<span class="ok">opening</span> ${esc(l.label)}…`);
      window.open(l.url, "_blank", "noopener");
    },
  },
  banner: { desc: "print the banner", run() { out(`<span class="ok">${$(".banner-wide").innerHTML}</span>`); } },
  matrix: { desc: "toggle the rain", run() { out(Matrix.toggle() ? "matrix: <span class='ok'>on</span>" : "matrix: <span class='muted'>off</span>"); } },
  echo: { desc: "print text", run(args) { out(esc(args.join(" "))); } },
  history: { desc: "command history", run() { out(hist.map((h, i) => `${String(i + 1).padStart(4)}  ${esc(h)}`).join("\n") || "(empty)", "muted"); } },
  date: { desc: "current date", run() { out(new Date().toString()); } },
  clear: { desc: "clear the terminal", run() { term.innerHTML = ""; } },
  hire: { hidden: true, run() { out(`<span class="ok">excellent decision.</span> ✨`); COMMANDS.contact.run(); } },
  sudo: { hidden: true, run() { out(`<span class="err">${USER} is not in the sudoers file.</span> This incident will be reported. 🙂 Try ${c("hire")} instead.`); } },
  ls: { hidden: true, run() { out(["about.txt", "experience/", "skills.json", "projects/", "cv.pdf"].map((f) => f.endsWith("/") ? `<span class="hl">${f}</span>` : f).join("   ")); } },
  cat: { hidden: true, run() { out(`nice try — use ${c("whoami")}, ${c("experience")} or ${c("skills")}`, "muted"); } },
  exit: { hidden: true, run() { out("there is no escape. type " + c("help"), "muted"); } },
};
COMMANDS.about = { hidden: true, run: COMMANDS.whoami.run };

function heatmap(days) {
  if (!days.length) return `<span class="muted">no data</span>`;
  const first = new Date(days[0].date + "T00:00:00").getDay();
  const cells = [];
  for (let i = 0; i < first; i++) cells.push(`<div class="cell pad"></div>`);
  const months = [];
  let lastMonth = -1;
  days.forEach((d, i) => {
    const col = Math.floor((i + first) / 7);
    const m = +d.date.slice(5, 7);
    if ((i + first) % 7 === 0 && m !== lastMonth) { months.push([col, m]); lastMonth = m; }
    const tip = `${d.count || "No"} contribution${d.count === 1 ? "" : "s"} on ${fmtDate(d.date)}`;
    cells.push(`<div class="cell" data-l="${d.level}" data-tip="${esc(tip)}"></div>`);
  });
  const cols = Math.ceil(cells.length / 7);
  if (months.length > 1 && months[1][0] - months[0][0] < 3) months.shift(); // avoid overlapping labels
  const mHTML = months
    .map(([col, m]) => `<span style="grid-column:${col + 1}/span 3">${new Date(2000, m - 1, 1).toLocaleString("en-US", { month: "short" })}</span>`).join("");
  return `<div class="heat-wrap"><div class="heat">
  <span></span><div class="months" style="grid-template-columns:repeat(${cols},11px)">${mHTML}</div>
  <div class="days"><span></span><span>Mon</span><span></span><span>Wed</span><span></span><span>Fri</span><span></span></div>
  <div class="grid">${cells.join("")}</div></div></div>
<div class="legend">Less ${[0, 1, 2, 3, 4].map((l) => `<span class="cell" data-l="${l}"></span>`).join("")} More</div>`;
}

function neofetchHTML() {
  const logo = [
    "██   ██ ██     ",
    "██   ██ ██     ",
    "███████ ██     ",
    "██   ██ ██     ",
    "██   ██ ███████",
  ].join("\n");
  const info = [
    [null, `<span class="ok"><b>${USER}</b></span>@<span class="ok"><b>github</b></span>`],
    [null, `<span class="muted">${"-".repeat(17)}</span>`],
    ["Name", WHOAMI.name],
    ["Role", "R&D AI Software Engineer"],
    ["Location", WHOAMI.location],
    ["Focus", "AI agents · RAG · vector search"],
    ["Stack", "Python · Java · React · Docker"],
    ["Education", "State Engineer, Mundiapolis"],
    ["Latest", "SBS · Smart Process agent"],
    ["Shell", "bash 5 · plain JS, no build"],
  ].map(([k, v]) => `<div>${k ? `<span class="k">${k}</span>: ` : ""}${k ? esc(v) : v}</div>`).join("");
  const sw = ["#ff5f56", "#ffbd2e", "#27c93f", "#39d353", "#6cb6ff", "#d2a8ff", "#f0883e", "#e6edf3"].map((x) => `<i style="background:${x}"></i>`).join("");
  return `<div class="fetch"><pre>${logo}</pre><div class="info">${info}<div class="swatch">${sw}</div></div></div>`;
}

/* ---------- input handling ---------- */
const hist = [];
let hIdx = 0;

async function run(raw) {
  const line = raw.trim();
  out(`${PROMPT} ${esc(line)}`, "cmdline");
  if (!line) return;
  hist.push(line);
  hIdx = hist.length;
  const [name, ...args] = line.split(/\s+/);
  const cmd = COMMANDS[name.toLowerCase()];
  if (!cmd) return out(`<span class="err">command not found: ${esc(name)}</span>. Type ${c("help")} to see what's available.`);
  try { await cmd.run(args); } catch (e) { out(`<span class="err">error: ${esc(e.message)}</span>`); }
}

$("#line").addEventListener("submit", (e) => {
  e.preventDefault();
  const v = input.value;
  input.value = "";
  run(v);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (hIdx > 0) input.value = hist[--hIdx];
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    hIdx = Math.min(hist.length, hIdx + 1);
    input.value = hist[hIdx] || "";
  } else if (e.key === "Tab") {
    e.preventDefault();
    const v = input.value.trim().toLowerCase();
    if (!v) return;
    const [first, ...rest] = v.split(/\s+/);
    if (first === "open" && rest.length <= 1) {
      const m = Object.keys(LINKS).filter((k) => k.startsWith(rest[0] || ""));
      if (m.length === 1) input.value = `open ${m[0]}`;
      else out(m.join("   "), "muted");
      return;
    }
    const m = Object.keys(COMMANDS).filter((k) => k.startsWith(v) && !COMMANDS[k].hidden);
    if (m.length === 1) input.value = m[0] + " ";
    else if (m.length > 1) { out(`${PROMPT} ${esc(v)}`, "cmdline"); out(m.join("   "), "muted"); }
  } else if (e.key === "l" && e.ctrlKey) {
    e.preventDefault();
    term.innerHTML = "";
  }
});

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-cmd]");
  if (el) { run(el.dataset.cmd); input.focus({ preventScroll: true }); return; }
  if (e.target.closest(".window") && !getSelection().toString() && e.target.closest("main")) input.focus({ preventScroll: true });
});

/* tooltip for heatmap cells (hover on desktop, tap on touch) */
const tip = $("#tooltip");
function showTip(el) {
  tip.textContent = el.dataset.tip;
  const r = el.getBoundingClientRect();
  tip.classList.add("on");
  const w = tip.offsetWidth;
  tip.style.left = Math.max(6, Math.min(innerWidth - w - 6, r.left + r.width / 2 - w / 2)) + "px";
  tip.style.top = r.top - tip.offsetHeight - 6 + "px";
}
document.addEventListener("mouseover", (e) => { const el = e.target.closest(".cell[data-tip]"); if (el) showTip(el); else tip.classList.remove("on"); });
document.addEventListener("touchstart", (e) => { const el = e.target.closest(".cell[data-tip]"); if (el) showTip(el); else tip.classList.remove("on"); }, { passive: true });
term.addEventListener("scroll", () => tip.classList.remove("on"));

/* ---------- matrix rain ---------- */
const Matrix = (() => {
  const cv = $("#matrixCanvas"), ctx = cv.getContext("2d");
  const glyphs = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789HLAMRINI<>/{}$#";
  let on = false, cols = [], raf = 0, last = 0;
  const size = 16;
  function resize() {
    cv.width = innerWidth; cv.height = innerHeight;
    cols = Array.from({ length: Math.ceil(cv.width / size) }, () => Math.random() * -50);
  }
  function frame(t) {
    raf = requestAnimationFrame(frame);
    if (t - last < 55) return;
    last = t;
    ctx.fillStyle = "rgba(13,17,23,.12)";
    ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = "#39d353";
    ctx.font = `${size}px monospace`;
    cols.forEach((y, i) => {
      ctx.fillText(glyphs[(Math.random() * glyphs.length) | 0], i * size, y * size);
      cols[i] = y * size > cv.height && Math.random() > 0.975 ? 0 : y + 1;
    });
  }
  function start() { resize(); on = true; cv.style.display = "block"; raf = requestAnimationFrame(frame); }
  function stop() { on = false; cancelAnimationFrame(raf); ctx.clearRect(0, 0, cv.width, cv.height); cv.style.display = "none"; }
  addEventListener("resize", () => on && resize());
  return { start, stop, toggle() { on ? stop() : start(); return on; } };
})();

/* ---------- rotating 3D ASCII wordmark ---------- */
const Wordmark = (() => {
  const pre = $("#wordmarkPre");
  const MW = 44, MH = 16, SC = 6, DEPTH = 3;
  const COLS = 60, ROWS = 22;
  const shades = ".,-~:;=!*#$@";
  // rasterise the text into a coarse mask
  const cv = document.createElement("canvas");
  cv.width = MW * SC; cv.height = MH * SC;
  const g = cv.getContext("2d");
  g.fillStyle = "#fff";
  g.font = `900 ${MH * SC * 0.92}px Arial, Helvetica, sans-serif`;
  g.textAlign = "center"; g.textBaseline = "middle";
  g.fillText(WORDMARK, cv.width / 2, cv.height / 2 + SC);
  const px = g.getImageData(0, 0, cv.width, cv.height).data;
  const mask = (x, y) => x >= 0 && y >= 0 && x < MW && y < MH && px[((y * SC + SC / 2) * cv.width + x * SC + SC / 2) * 4 + 3] > 127;
  // build surface points with normals: front, back, and side walls
  const pts = [];
  for (let y = 0; y < MH; y++) for (let x = 0; x < MW; x++) {
    if (!mask(x, y)) continue;
    const X = x - MW / 2, Y = y - MH / 2;
    for (let s = 0; s < 2; s++) for (let t = 0; t < 2; t++) {
      const sx = X + s * 0.5, sy = Y + t * 0.5;
      pts.push([sx, sy, -DEPTH, 0, 0, -1], [sx, sy, DEPTH, 0, 0, 1]);
    }
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      if (mask(x + dx, y + dy)) continue;
      for (let z = -DEPTH; z <= DEPTH; z += 0.5)
        for (let k = 0; k < 2; k++)
          pts.push([X + (dx > 0 ? 0.9 : dx < 0 ? -0.1 : k * 0.5), Y + (dy > 0 ? 0.9 : dy < 0 ? -0.1 : k * 0.5), z, dx, dy, 0]);
    }
  }
  const L = (() => { const v = [-0.45, -0.55, -0.7], n = Math.hypot(...v); return v.map((a) => a / n); })();
  const DIST = 60, KX = 118, KY = 56;
  function render(t) {
    const A = Math.sin(t * 0.0009) * 0.95, B = Math.sin(t * 0.0006) * 0.28;
    const ca = Math.cos(A), sa = Math.sin(A), cb = Math.cos(B), sb = Math.sin(B);
    const buf = new Array(COLS * ROWS).fill(" "), zb = new Float32Array(COLS * ROWS);
    for (const [x, y, z, nx, ny, nz] of pts) {
      const x1 = x * ca + z * sa, z1 = -x * sa + z * ca;
      const y2 = y * cb - z1 * sb, z2 = y * sb + z1 * cb;
      const ooz = 1 / (z2 + DIST);
      const xp = (COLS / 2 + KX * ooz * x1) | 0, yp = (ROWS / 2 + KY * ooz * y2) | 0;
      if (xp < 0 || yp < 0 || xp >= COLS || yp >= ROWS) continue;
      const i = yp * COLS + xp;
      if (ooz <= zb[i]) continue;
      const nx1 = nx * ca + nz * sa, nz1 = -nx * sa + nz * ca;
      const ny2 = ny * cb - nz1 * sb, nz2 = ny * sb + nz1 * cb;
      const lum = nx1 * L[0] + ny2 * L[1] + nz2 * L[2];
      zb[i] = ooz;
      buf[i] = shades[Math.max(0, Math.min(11, (lum * 11.9) | 0))];
    }
    let s = "";
    for (let r = 0; r < ROWS; r++) s += buf.slice(r * COLS, (r + 1) * COLS).join("") + "\n";
    pre.textContent = s;
  }
  let visible = false, raf = 0;
  function loop(t) { render(t); if (visible) raf = requestAnimationFrame(loop); }
  if (reduceMotion) render(1200);
  else new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    cancelAnimationFrame(raf);
    if (visible) raf = requestAnimationFrame(loop);
  }).observe(pre);
  return { render };
})();

/* ---------- boot ---------- */
$("#neofetch").innerHTML = neofetchHTML();
if (!reduceMotion) Matrix.start(); else $("#matrixCanvas").style.display = "none";
loadContrib();

out(`<span class="muted">Last login: ${new Date().toDateString()} on ttys001</span>`);
out(`Welcome! Type ${c("help")} or click a command. Try ${c("experience")}, ${c("skills")}, ${c("contributions")}.`);

(async function typeIntro() {
  const cmd = "whoami";
  if (reduceMotion) return run(cmd);
  await new Promise((r) => setTimeout(r, 500));
  for (const ch of cmd) { input.value += ch; await new Promise((r) => setTimeout(r, 90)); }
  await new Promise((r) => setTimeout(r, 250));
  input.value = "";
  await run(cmd);
  term.scrollTop = 0;
})();
