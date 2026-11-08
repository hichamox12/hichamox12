"""Render the skills list below to assets/skills-v1.svg (one local image, no per-badge requests) and point README at it."""
import re
import urllib.request

# (label, hex colour, icon slug or None)
SKILLS = {
    "AI & Data Science": [
        ("LangGraph", "1C3C3C", "langchain"), ("LangChain", "1C3C3C", "langchain"), ("AutoGen", "6e5494", None),
        ("LlamaIndex", "6e5494", None), ("CrewAI", "6e5494", None), ("OpenAI API", "412991", "openai"),
        ("Anthropic API", "D97757", "anthropic"), ("Gemini API", "8E75B2", "googlegemini"),
        ("Hugging Face", "FFD21E", "huggingface"), ("Ollama", "000000", "ollama"), ("ChromaDB", "FF6446", None),
        ("Pinecone", "000000", None), ("MongoDB Atlas Vector Search", "47A248", "mongodb"),
        ("RAG", "6e5494", None), ("LLMs", "6e5494", None), ("Agentic AI Systems", "6e5494", None),
        ("Prompt Engineering", "6e5494", None), ("Fine-tuning", "6e5494", None), ("MLOps", "6e5494", None),
        ("MCP Server", "6e5494", None), ("NLP", "6e5494", None), ("TensorFlow", "FF6F00", "tensorflow"),
        ("PyTorch", "EE4C2C", "pytorch"), ("Keras", "D00000", "keras"), ("CNN", "6e5494", None),
        ("RNN", "6e5494", None), ("LSTM", "6e5494", None), ("Transformers", "FFD21E", "huggingface"),
        ("OpenCV", "5C3EE8", "opencv"), ("Computer Vision", "6e5494", None), ("Streamlit", "FF4B4B", "streamlit"),
        ("Scikit-learn", "F7931E", "scikitlearn"), ("Pandas", "150458", "pandas"), ("NumPy", "013243", "numpy"),
        ("SHAP", "6e5494", None), ("spaCy", "09A3D5", "spacy"), ("NLTK", "6e5494", None),
    ],
    "Automation & Microsoft": [
        ("Copilot Studio", "0078D4", "microsoft"), ("Power Automate", "0066FF", "powerautomate"),
        ("SharePoint", "0078D4", "microsoftsharepoint"), ("Teams", "6264A7", "microsoftteams"),
        ("n8n", "EA4B71", "n8n"), ("Zapier", "FF4F00", "zapier"),
    ],
    "Programming Languages": [
        ("Python", "3776AB", "python"), ("JavaScript", "F7DF1E", "javascript"), ("Java", "007396", "openjdk"),
        ("C", "A8B9CC", "c"), ("PHP", "777BB4", "php"), ("SQL", "336791", "postgresql"), ("4GL", "555555", None),
    ],
    "Frontend": [
        ("React.js", "61DAFB", "react"), ("Next.js", "000000", "nextdotjs"), ("Angular", "DD0031", "angular"),
        ("Vue.js", "4FC08D", "vuedotjs"), ("Tailwind CSS", "06B6D4", "tailwindcss"),
    ],
    "Backend & Architecture": [
        ("Node.js", "339933", "nodedotjs"), ("Express.js", "000000", "express"), ("Django", "092E20", "django"),
        ("Spring Boot", "6DB33F", "springboot"), ("Flask", "000000", "flask"), ("FastAPI", "009688", "fastapi"),
        ("REST API", "555555", None), ("Microservices", "555555", None), ("Design Patterns", "555555", None),
    ],
    "Databases": [
        ("MySQL", "4479A1", "mysql"), ("PostgreSQL", "4169E1", "postgresql"), ("MongoDB", "47A248", "mongodb"),
        ("Oracle", "F80000", None), ("Informix", "054ADA", None),
    ],
    "DevOps & Cloud": [
        ("Docker", "2496ED", "docker"), ("Kubernetes", "326CE5", "kubernetes"), ("AWS", "232F3E", None),
        ("Azure", "0078D4", None), ("Kafka", "231F20", "apachekafka"), ("Load Balancer", "555555", None),
        ("API Gateway", "555555", None), ("Git", "F05032", "git"), ("GitLab", "FC6D26", "gitlab"),
        ("Hadoop", "66CCFF", "apachehadoop"),
    ],
    "Mobile, QA & Methods": [
        ("Android Studio", "3DDC84", "androidstudio"), ("Flutter", "02569B", "flutter"),
        ("Selenium", "43B02A", "selenium"), ("Scrum", "6e5494", None), ("UML", "555555", None),
        ("Merise", "555555", None), ("Blockchain", "121D33", None),
    ],
    "Languages": [
        (s, "30363d", None) for s in ("Arabic — Native", "French — Fluent", "English — Intermediate")
    ],
}

OUT = "assets/skills-v1.svg"
WIDTH = 860
BADGE_H, GAP, ROW_GAP, PAD_X = 20, 4, 5, 8
ICON = 12
FONT = "Verdana,'DejaVu Sans',Geneva,sans-serif"

_paths = {}


def icon_path(slug):
    """SVG path data of a simple-icons logo (24x24 viewBox), or None when no release has it."""
    if slug not in _paths:
        _paths[slug] = None
        for v in ("11.0.0", "9.21.0", "latest"):
            try:
                svg = urllib.request.urlopen(f"https://cdn.jsdelivr.net/npm/simple-icons@{v}/icons/{slug}.svg", timeout=30).read().decode()
            except Exception:
                continue
            m = re.search(r'<path d="([^"]+)"', svg)
            if m:
                _paths[slug] = m.group(1)
                break
        if _paths[slug] is None:
            print(f"  no icon for {slug}")
    return _paths[slug]


def text_width(text):
    try:
        from PIL import ImageFont
        return ImageFont.truetype("C:/Windows/Fonts/verdana.ttf", 11).getlength(text)
    except Exception:
        return len(text) * 6.4


def is_light(hex_color):
    r, g, b = (int(hex_color[i:i + 2], 16) for i in (0, 2, 4))
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def layout(items):
    """Greedy-wrap badges into rows no wider than WIDTH; each badge is (label, color, path, width, text_width)."""
    badges = []
    for label, color, slug in items:
        path = icon_path(slug) if slug else None
        tw = text_width(label)
        w = PAD_X * 2 + tw + (ICON + 5 if path else 0)
        badges.append((label, color, path, w, tw))
    rows, cur, cur_w = [], [], 0
    for b in badges:
        add = b[3] + (GAP if cur else 0)
        if cur and cur_w + add > WIDTH - 20:
            rows.append((cur, cur_w))
            cur, cur_w, add = [], 0, b[3]
        cur.append(b)
        cur_w += add
    if cur:
        rows.append((cur, cur_w))
    return rows


def build_svg():
    y = 8
    parts = []
    for cat, items in SKILLS.items():
        parts.append(f'<text class="t" x="{WIDTH / 2}" y="{y + 13}" text-anchor="middle" font-size="13" font-weight="700">{esc(cat)}</text>')
        y += 24
        for row, row_w in layout(items):
            x = (WIDTH - row_w) / 2
            for label, color, path, w, tw in row:
                fg = "#1f2328" if is_light(color) else "#ffffff"
                parts.append(f'<rect x="{x:.1f}" y="{y}" width="{w:.1f}" height="{BADGE_H}" rx="3" fill="#{color}"/>')
                tx = x + PAD_X
                if path:
                    s = ICON / 24
                    parts.append(f'<path transform="translate({x + PAD_X:.1f} {y + (BADGE_H - ICON) / 2}) scale({s:.4f})" d="{path}" fill="{fg}"/>')
                    tx += ICON + 5
                parts.append(f'<text x="{tx:.1f}" y="{y + 14}" font-size="11" fill="{fg}" textLength="{tw:.1f}" lengthAdjust="spacingAndGlyphs">{esc(label)}</text>')
                x += w + GAP
            y += BADGE_H + ROW_GAP
        y += 12
    css = (f"text{{font-family:{FONT}}}.t{{fill:#e6edf3}}"
           "@media (prefers-color-scheme:light){.t{fill:#1f2328}}")
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{WIDTH}" height="{y}" viewBox="0 0 {WIDTH} {y}" role="img" '
            f'aria-label="Skills">'
            f'<style>{css}</style>{"".join(parts)}</svg>')


if __name__ == "__main__":
    svg = build_svg()
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(svg)
    alt = "Skills: " + "; ".join(f"{c}: " + ", ".join(i[0] for i in items) for c, items in SKILLS.items())
    s = open("README.md", encoding="utf-8").read()
    new = f'<!-- SKILLS:START -->\n<img src="{OUT}" alt="{alt}" width="100%"/>\n<!-- SKILLS:END -->'
    s = re.sub(r"<!-- SKILLS:START -->.*<!-- SKILLS:END -->", lambda m: new, s, flags=re.S)
    open("README.md", "w", encoding="utf-8").write(s)
    print(f"wrote {OUT} ({len(svg) // 1024} KB)")
