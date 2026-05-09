"use client";

import { useEffect, useState } from "react";

const THEMES = [
  { id: "coastal", label: "Coastal", swatch: "#0f766e" },
  { id: "sunset", label: "Sunset", swatch: "#ea580c" },
  { id: "midnight", label: "Midnight", swatch: "#38bdf8" },
  { id: "forest", label: "Forest", swatch: "#16a34a" },
  { id: "royal", label: "Royal", swatch: "#7c3aed" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];
const STORAGE_KEY = "squeeze-rent-theme";

export default function StyleSwitcher({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeId>("coastal");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    if (saved && THEMES.some((t) => t.id === saved)) {
      setTheme(saved);
    }
  }, []);

  function pick(id: ThemeId) {
    setTheme(id);
    window.localStorage.setItem(STORAGE_KEY, id);
  }

  return (
    <div
      data-theme={theme === "coastal" ? undefined : theme}
      className="flex flex-1 flex-col"
    >
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1 rounded-full border border-border bg-card/95 p-1 shadow-lg backdrop-blur">
        {THEMES.map((t) => {
          const active = t.id === theme;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => pick(t.id)}
              aria-label={`Switch to ${t.label} theme`}
              aria-pressed={active}
              className={`relative h-8 w-8 rounded-full transition ${
                active
                  ? "ring-2 ring-offset-2 ring-offset-card"
                  : "opacity-70 hover:opacity-100"
              }`}
              style={{
                backgroundColor: t.swatch,
                // ring-color via inline style so it matches the swatch
                boxShadow: active ? `0 0 0 2px ${t.swatch}` : undefined,
              }}
              title={t.label}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}
