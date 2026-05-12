// Generates standalone Next.js projects under templates/<scenario>-<style>/
// for every live (scenario, style) combo. Each subfolder is a complete,
// deployable Next.js project: paste the GitHub URL + root directory into
// Vercel and it builds. The /grab page links to a "Deploy on Vercel" URL
// that pre-fills both for you.
//
// Re-run any time the canonical files in /app change.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), "..");
const APP_DIR = path.join(ROOT, "app");
const TEMPLATES_DIR = path.join(ROOT, "templates");

const VARIATIONS = [
  { slug: "sick-of-renting", name: "Sick of Renting" },
  { slug: "priced-out", name: "Priced Out of Traditional" },
  { slug: "i-own-land", name: "I Own Land — Now What?" },
  { slug: "land-and-home", name: "Land + Home Package" },
  { slug: "family-home", name: "Working-Class Family" },
  { slug: "retiree-downsize", name: "Retiree / Downsizer" },
  { slug: "need-it-now", name: "Urgent / Time-Pressured" },
  { slug: "investor", name: "Investor" },
  { slug: "skeptical-buyer", name: "Skeptical Buyer" },
  { slug: "first-generation", name: "Immigrant / First-Gen" },
];

const STYLES = [
  { slug: "quiz", name: "Quiz" },
  { slug: "squeeze", name: "Squeeze" },
  { slug: "vsl", name: "VSL" },
  { slug: "hybrid", name: "Hybrid" },
  { slug: "bridge", name: "Bridge" },
  { slug: "application", name: "Application" },
  { slug: "thank-you", name: "Thank You" },
  { slug: "booking", name: "Booking" },
];

const IMPORT_RE =
  /(?:from\s+|import\s+(?=["']))["']([^"']+)["']/g;

async function fileExists(p) {
  try {
    const stat = await fs.stat(p);
    return stat.isFile();
  } catch {
    return false;
  }
}

async function resolveRelativeImport(fromAppRel, spec) {
  const fromDir = path.posix.dirname(fromAppRel);
  const base = path.posix.normalize(path.posix.join(fromDir, spec));
  const candidates = [
    base,
    `${base}.tsx`,
    `${base}.ts`,
    `${base}.css`,
    `${base}/index.tsx`,
    `${base}/index.ts`,
  ];
  for (const c of candidates) {
    if (await fileExists(path.join(APP_DIR, c))) return c;
  }
  return null;
}

async function gatherFiles(startAppRel, visited = new Set()) {
  if (visited.has(startAppRel)) return [];
  visited.add(startAppRel);
  const abs = path.join(APP_DIR, startAppRel);
  const content = await fs.readFile(abs, "utf8");
  const out = [{ appRel: startAppRel, content }];
  for (const match of content.matchAll(IMPORT_RE)) {
    const spec = match[1];
    if (!spec.startsWith(".")) continue;
    const resolved = await resolveRelativeImport(startAppRel, spec);
    if (!resolved) continue;
    const sub = await gatherFiles(resolved, visited);
    out.push(...sub);
  }
  return out;
}

function rewriteWrapperImports(content, wrapperAppRel) {
  const wrapperDir = path.posix.dirname(wrapperAppRel);
  return content.replace(IMPORT_RE, (full, spec) => {
    if (!spec.startsWith(".")) return full;
    const absolute = path.posix.normalize(path.posix.join(wrapperDir, spec));
    return full.replace(spec, `./${absolute}`);
  });
}

const ROOT_PKG = JSON.parse(
  await fs.readFile(path.join(ROOT, "package.json"), "utf8"),
);

const TSCONFIG = await fs.readFile(path.join(ROOT, "tsconfig.json"), "utf8");
const NEXT_CONFIG = await fs.readFile(
  path.join(ROOT, "next.config.ts"),
  "utf8",
);
const POSTCSS_CONFIG = await fs.readFile(
  path.join(ROOT, "postcss.config.mjs"),
  "utf8",
);
const ESLINT_CONFIG = await fs.readFile(
  path.join(ROOT, "eslint.config.mjs"),
  "utf8",
);
const GLOBALS_CSS = await fs.readFile(
  path.join(APP_DIR, "globals.css"),
  "utf8",
);
const LAYOUT_TSX = await fs.readFile(path.join(APP_DIR, "layout.tsx"), "utf8");
const FAVICON = await fs.readFile(path.join(APP_DIR, "favicon.ico"));

const GITIGNORE = `node_modules
.next
out
.env*
!.env.example
.DS_Store
*.tsbuildinfo
next-env.d.ts
`;

function pkgJson(name) {
  return (
    JSON.stringify(
      {
        name,
        version: "0.1.0",
        private: true,
        scripts: {
          dev: "next dev",
          build: "next build",
          start: "next start",
          lint: "eslint",
        },
        dependencies: ROOT_PKG.dependencies,
        devDependencies: ROOT_PKG.devDependencies,
      },
      null,
      2,
    ) + "\n"
  );
}

function readme(scenario, style, scenarioName, styleName) {
  return `# ${scenarioName} · ${styleName}

Standalone Next.js project containing only the \`/${scenario}/${style}\`
template, ready to deploy.

## Deploy

\`\`\`bash
npm install
npm run dev
\`\`\`

Or deploy directly to Vercel:

https://vercel.com/new/clone?repository-url=https://github.com/benjamin1160/ben&root-directory=templates/${scenario}-${style}&project-name=${scenario}-${style}
`;
}

async function writeFile(absPath, content) {
  await fs.mkdir(path.dirname(absPath), { recursive: true });
  await fs.writeFile(absPath, content);
}

async function buildTemplate(scenario, style, scenarioName, styleName) {
  const folder = `${scenario}-${style}`;
  const dir = path.join(TEMPLATES_DIR, folder);

  await fs.rm(dir, { recursive: true, force: true });

  const wrapperRel = `${scenario}/${style}/page.tsx`;
  const allFiles = await gatherFiles(wrapperRel);
  const seen = new Set();
  const unique = allFiles.filter((f) => {
    if (seen.has(f.appRel)) return false;
    seen.add(f.appRel);
    return true;
  });

  await writeFile(path.join(dir, "package.json"), pkgJson(folder));
  await writeFile(path.join(dir, "tsconfig.json"), TSCONFIG);
  await writeFile(path.join(dir, "next.config.ts"), NEXT_CONFIG);
  await writeFile(path.join(dir, "postcss.config.mjs"), POSTCSS_CONFIG);
  await writeFile(path.join(dir, "eslint.config.mjs"), ESLINT_CONFIG);
  await writeFile(path.join(dir, ".gitignore"), GITIGNORE);
  await writeFile(
    path.join(dir, "README.md"),
    readme(scenario, style, scenarioName, styleName),
  );
  await writeFile(path.join(dir, "app/layout.tsx"), LAYOUT_TSX);
  await writeFile(path.join(dir, "app/globals.css"), GLOBALS_CSS);
  await writeFile(path.join(dir, "app/favicon.ico"), FAVICON);

  for (const file of unique) {
    if (file.appRel === wrapperRel) {
      const rewritten = rewriteWrapperImports(file.content, wrapperRel);
      await writeFile(path.join(dir, "app/page.tsx"), rewritten);
    } else {
      await writeFile(path.join(dir, "app", file.appRel), file.content);
    }
  }
}

console.log("Building standalone templates under templates/...");
await fs.mkdir(TEMPLATES_DIR, { recursive: true });
let count = 0;
for (const v of VARIATIONS) {
  for (const s of STYLES) {
    await buildTemplate(v.slug, s.slug, v.name, s.name);
    count++;
  }
}
console.log(`Done. ${count} templates built.`);
