import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageStyles, variations } from "../../../_data/funnel";
import CopyButton from "./CopyButton";

const REPO_URL = "https://github.com/benjamin1160/ben";

const APP_DIR = path.join(process.cwd(), "app");
const APP_PREFIX = "app/";

export async function generateStaticParams() {
  return variations.flatMap((v) =>
    v.liveStyles.map((style) => ({ scenario: v.slug, style })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/grab/[scenario]/[style]">) {
  const { scenario, style } = await params;
  return {
    title: `Grab template · /${scenario}/${style}`,
    description: `Every file you need to drop this page into your own Next.js project.`,
  };
}

type SourceFile = { path: string; content: string };

function appPath(rel: string): string | null {
  if (!rel.startsWith(APP_PREFIX)) return null;
  const inside = rel.slice(APP_PREFIX.length);
  if (inside.includes("..")) return null;
  return path.join(APP_DIR, inside);
}

async function readRepoFile(rel: string): Promise<string | null> {
  const absolute = appPath(rel);
  if (!absolute) return null;
  try {
    return await fs.readFile(absolute, "utf8");
  } catch {
    return null;
  }
}

async function resolveImport(
  fromRel: string,
  spec: string,
): Promise<string | null> {
  const fromDir = path.posix.dirname(fromRel);
  const base = path.posix.normalize(path.posix.join(fromDir, spec));
  const candidates = [
    base,
    `${base}.tsx`,
    `${base}.ts`,
    `${base}/index.tsx`,
    `${base}/index.ts`,
  ];
  for (const candidate of candidates) {
    const absolute = appPath(candidate);
    if (!absolute) continue;
    try {
      const stat = await fs.stat(absolute);
      if (stat.isFile()) return candidate;
    } catch {
      // try next candidate
    }
  }
  return null;
}

const IMPORT_RE = /from\s+["']([^"']+)["']/g;

async function gatherSources(
  startRel: string,
  visited: Set<string> = new Set(),
): Promise<SourceFile[]> {
  if (visited.has(startRel)) return [];
  visited.add(startRel);

  const content = await readRepoFile(startRel);
  if (content === null) return [];

  const collected: SourceFile[] = [{ path: startRel, content }];

  for (const match of content.matchAll(IMPORT_RE)) {
    const spec = match[1];
    if (!spec.startsWith(".")) continue;
    const resolved = await resolveImport(startRel, spec);
    if (!resolved) continue;
    if (!resolved.startsWith(APP_PREFIX)) continue;
    const sub = await gatherSources(resolved, visited);
    collected.push(...sub);
  }

  return collected;
}

function languageFor(filePath: string): string {
  if (filePath.endsWith(".tsx")) return "tsx";
  if (filePath.endsWith(".ts")) return "ts";
  if (filePath.endsWith(".css")) return "css";
  return "text";
}

export default async function GrabPage({
  params,
}: PageProps<"/grab/[scenario]/[style]">) {
  const { scenario, style } = await params;

  const variation = variations.find((v) => v.slug === scenario);
  const pageStyle = pageStyles.find((s) => s.slug === style);
  if (!variation || !pageStyle || !variation.liveStyles.includes(style)) {
    notFound();
  }

  const wrapperRel = `${APP_PREFIX}${scenario}/${style}/page.tsx`;
  const sources = await gatherSources(wrapperRel);
  if (sources.length === 0) notFound();

  const seen = new Set<string>();
  const files = sources.filter((f) => {
    if (seen.has(f.path)) return false;
    seen.add(f.path);
    return true;
  });

  const totalLines = files.reduce(
    (acc, f) => acc + f.content.split("\n").length,
    0,
  );

  return (
    <div className="flex flex-1 flex-col bg-white text-slate-900">
      <main className="mx-auto w-full max-w-4xl px-5 py-12 md:py-16">
        <Link
          href={`/${scenario}/${style}`}
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-slate-900"
        >
          <span aria-hidden>←</span> Back to /{scenario}/{style}
        </Link>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
          Template source
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Grab{" "}
          <span className="font-mono text-2xl text-brand-strong">
            /{scenario}/{style}
          </span>
        </h1>
        <p className="mt-3 text-base text-muted">
          {variation.name} · {pageStyle.name}. A standalone, deployable Next.js
          project lives at{" "}
          <code className="font-mono text-slate-700">
            templates/{scenario}-{style}
          </code>{" "}
          in this repo.
        </p>

        <DeployBox scenario={scenario} style={style} />

        <h2 className="mt-12 text-lg font-semibold tracking-tight text-slate-900">
          Or copy the files yourself
        </h2>
        <p className="mt-2 text-sm text-muted">
          Every relative-imported file the page touches, in dependency order.
        </p>
        <p className="mt-2 font-mono text-xs text-muted">
          {files.length} files · {totalLines.toLocaleString()} lines
        </p>

        <ol className="mt-4 grid gap-1 text-xs text-muted sm:grid-cols-2">
          {files.map((f) => (
            <li key={f.path}>
              <a
                href={`#${f.path}`}
                className="font-mono hover:text-slate-900 hover:underline"
              >
                {f.path}
              </a>
            </li>
          ))}
        </ol>

        <div className="mt-8 space-y-6">
          {files.map((f) => (
            <FileBlock key={f.path} file={f} />
          ))}
        </div>
      </main>
    </div>
  );
}

function FileBlock({ file }: { file: SourceFile }) {
  return (
    <section
      id={file.path}
      className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
    >
      <header className="flex items-center justify-between gap-3 border-b border-border bg-surface px-4 py-2">
        <code className="truncate font-mono text-xs font-semibold text-slate-700">
          {file.path}
        </code>
        <div className="flex flex-none items-center gap-2">
          <span className="hidden font-mono text-[10px] uppercase tracking-wider text-muted sm:inline">
            {languageFor(file.path)}
          </span>
          <CopyButton text={file.content} />
        </div>
      </header>
      <pre className="overflow-x-auto bg-slate-950 p-4 text-xs leading-relaxed text-slate-100">
        <code>{file.content}</code>
      </pre>
    </section>
  );
}

function DeployBox({ scenario, style }: { scenario: string; style: string }) {
  const subfolder = `templates/${scenario}-${style}`;
  const githubUrl = `${REPO_URL}/tree/main/${subfolder}`;
  const deployUrl = `https://vercel.com/new/clone?repository-url=${encodeURIComponent(
    REPO_URL,
  )}&root-directory=${encodeURIComponent(subfolder)}&project-name=${encodeURIComponent(
    `${scenario}-${style}`,
  )}`;
  return (
    <div className="mt-8 rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-strong">
        Deploy as its own site
      </p>
      <p className="mt-1 text-sm text-slate-700">
        Click the button to clone this template into your own GitHub account
        and deploy it on Vercel, siloed from the rest.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a
          href={deployUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          <VercelMark />
          Deploy on Vercel
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 underline-offset-2 hover:text-slate-900 hover:underline"
        >
          View on GitHub
          <span aria-hidden>↗</span>
        </a>
      </div>
      <p className="mt-3 text-xs text-muted">
        Prefer pasting? Use{" "}
        <code className="font-mono text-slate-700">{REPO_URL}</code> as the
        repo URL and set Root Directory to{" "}
        <code className="font-mono text-slate-700">{subfolder}</code>.
      </p>
    </div>
  );
}

function VercelMark() {
  return (
    <svg
      viewBox="0 0 76 65"
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="currentColor"
    >
      <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
    </svg>
  );
}
