import { createFileRoute } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Street Forge™ RouteResilience — Intelligence for Resilient Mobility" },
      { name: "description", content: "AI-powered geospatial intelligence for urban mobility resilience, disaster route simulation, and emergency response planning." },
      { property: "og:title", content: "Street Forge™ RouteResilience" },
      { property: "og:description", content: "Understand. Predict. Adapt. A government-grade digital twin for road network resilience." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CityDataProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <NavBar />
        <Hero />
        <Modules />
        <UploadStudio />
        <DigitalTwin />
        <Dashboard />
        <Simulator />
        <AIInsights />
        <CTA />
        <Footer />
      </div>
    </CityDataProvider>
  );
}

/* ============================================================== */
/*  NAV                                                            */
/* ============================================================== */
function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4">
      <nav className="glass-strong rounded-full px-3 py-2 flex items-center gap-1 w-full max-w-4xl">
        <a href="#top" className="flex items-center gap-2 pl-2 pr-3">
          <LogoMark className="h-7 w-7" />
          <span className="font-display font-semibold text-sm tracking-tight">
            Street Forge<span className="text-muted-foreground text-[10px] align-top">™</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-1 ml-2 text-sm">
          {["Modules", "Upload", "Twin", "Dashboard", "Simulator"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/60 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground px-2.5 py-1 rounded-full bg-white/50 border border-white/70">
            <span className="size-1.5 rounded-full bg-primary animate-pulse-dot" />
            LIVE · 24.7s
          </span>
          <button className="text-sm font-medium px-4 py-1.5 rounded-full text-white shadow-glow"
            style={{ background: "var(--gradient-teal-sky)" }}>
            Open Console
          </button>
        </div>
      </nav>
    </header>
  );
}

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14B8A6" />
          <stop offset="1" stopColor="#0EA5E9" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#lg)" />
      <path d="M8 22 Q14 8 24 14" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="8" cy="22" r="2" fill="white" />
      <circle cx="24" cy="14" r="2" fill="white" />
    </svg>
  );
}

/* ============================================================== */
/*  HERO                                                           */
/* ============================================================== */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] pt-28 pb-16 px-4 overflow-hidden">
      {/* aurora bg */}
      <div className="absolute inset-0 bg-aurora animate-aurora -z-10" />
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1.2fr] gap-10 items-center">
        {/* Left: copy */}
        <div className="relative z-10 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Geospatial Intelligence · v4.2
          </span>
          <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
            Understand.<br />
            Predict. <span className="text-gradient-teal">Adapt.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Street Forge<span className="text-xs align-top">™</span> RouteResilience is a government-grade digital twin
            that turns satellite imagery into living road networks — so cities can
            anticipate disasters, route emergencies, and protect populations in real time.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button className="px-5 py-3 rounded-2xl text-white font-medium shadow-glow"
              style={{ background: "var(--gradient-teal-sky)" }}>
              Launch Digital Twin →
            </button>
            <button className="px-5 py-3 rounded-2xl font-medium glass">
              Watch a 90s Demo
            </button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              ["1.4M", "km of roads mapped"],
              ["98.7%", "extraction accuracy"],
              ["12 min", "avg response gain"],
            ].map(([v, l]) => (
              <div key={l} className="glass rounded-2xl p-3">
                <dt className="font-mono text-xl font-semibold">{v}</dt>
                <dd className="text-[11px] text-muted-foreground mt-0.5">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: cinematic map */}
        <div className="relative animate-fade-up [animation-delay:200ms]">
          <CinematicMap />
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] font-mono text-muted-foreground flex flex-col items-center gap-1.5">
        <span>SCROLL TO EXPLORE</span>
        <span className="size-px h-6 bg-muted-foreground/40" />
      </div>
    </section>
  );
}

function CinematicMap() {
  return (
    <div className="relative aspect-[5/4] w-full rounded-[28px] overflow-hidden glass-strong p-2 animate-float">
      <div className="absolute inset-2 rounded-[22px] overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, #1e293b 0%, #0f172a 60%, #020617 100%)",
        }}>
        {/* satellite map */}
        <SatelliteMap />
        {/* overlays */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/70">
          <span className="px-2 py-1 rounded-md bg-white/10 backdrop-blur">SECTOR 07 · ISTANBUL</span>
          <span className="px-2 py-1 rounded-md bg-white/10 backdrop-blur">41.0082°N · 28.9784°E</span>
        </div>

        {/* floating metric card */}
        <div className="absolute bottom-3 left-3 glass-strong rounded-2xl px-3.5 py-3 w-[58%]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-muted-foreground tracking-wider">RESILIENCE SCORE</span>
            <span className="text-[10px] font-mono text-primary">+2.4</span>
          </div>
          <div className="mt-1.5 flex items-end gap-2">
            <span className="font-mono text-3xl font-semibold tracking-tight">87.6</span>
            <span className="text-[10px] text-muted-foreground mb-1">/ 100</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "87%", background: "var(--gradient-teal-sky)" }} />
          </div>
        </div>

        {/* floating alert */}
        <div className="absolute top-12 right-3 glass-strong rounded-2xl px-3 py-2.5 w-[48%]">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-rose animate-pulse-dot" style={{ background: "var(--rose)" }} />
            <span className="text-[11px] font-medium">Bridge B-14 at risk</span>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1 leading-snug">
            Flood model predicts closure in 4h 12m. 3 alt routes computed.
          </p>
        </div>
      </div>
    </div>
  );
}

function SatelliteMap() {
  // Build deterministic pseudo-random "roads" once
  const paths = useMemo(() => generateRoads(28), []);
  return (
    <svg viewBox="0 0 500 400" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="road" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#14B8A6" />
          <stop offset="1" stopColor="#0EA5E9" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#14B8A6" stopOpacity="0.35" />
          <stop offset="1" stopColor="#14B8A6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* terrain blobs */}
      <g opacity="0.5">
        <circle cx="120" cy="90" r="120" fill="#1e3a4a" />
        <circle cx="380" cy="320" r="160" fill="#0f2030" />
        <circle cx="420" cy="80" r="80" fill="#1a2e3d" />
      </g>
      {/* water */}
      <path d="M0,260 Q150,230 260,290 T500,280 L500,400 L0,400 Z" fill="#082030" opacity="0.7" />

      {/* roads (illuminate sequentially) */}
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="url(#road)"
          strokeWidth={i % 5 === 0 ? 1.6 : 0.8}
          fill="none"
          strokeLinecap="round"
          opacity={0.0}
          style={{
            strokeDasharray: 600,
            strokeDashoffset: 600,
            animation: `sf-draw 1.6s ease-out forwards ${i * 70}ms, sf-fade-up 0.4s ease-out forwards ${i * 70}ms`,
          }}
        />
      ))}

      {/* critical animated route */}
      <path
        d="M40,340 C120,280 180,320 240,240 S380,160 470,120"
        stroke="#F59E0B"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="10 6"
        className="animate-dash"
      />
      <circle cx="40" cy="340" r="4" fill="#F59E0B" />
      <circle cx="470" cy="120" r="4" fill="#FB7185" />

      {/* pulse markers */}
      <g>
        {[[150,180],[300,210],[380,140],[100,290]].map(([x,y],i)=>(
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill="url(#glow)" />
            <circle cx={x} cy={y} r="2.5" fill="#14B8A6" />
          </g>
        ))}
      </g>
    </svg>
  );
}

function generateRoads(n: number) {
  // simple deterministic LCG
  let s = 7;
  const rand = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const paths: string[] = [];
  for (let i = 0; i < n; i++) {
    const x1 = rand() * 500, y1 = rand() * 400;
    const x2 = rand() * 500, y2 = rand() * 400;
    const cx = (x1 + x2) / 2 + (rand() - 0.5) * 120;
    const cy = (y1 + y2) / 2 + (rand() - 0.5) * 120;
    paths.push(`M${x1.toFixed(1)},${y1.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`);
  }
  return paths;
}

/* ============================================================== */
/*  MODULES                                                        */
/* ============================================================== */
function Modules() {
  const items = [
    {
      tag: "01",
      title: "Satellite Road Extraction",
      desc: "Vision transformers segment road networks from sub-meter imagery with 98.7% precision across rural and dense urban scenes.",
      icon: IconSatellite,
    },
    {
      tag: "02",
      title: "Occlusion Recovery Engine",
      desc: "Reconstructs roads hidden by cloud, canopy, or shadow using generative graph completion priors.",
      icon: IconRecover,
    },
    {
      tag: "03",
      title: "Disaster Simulation",
      desc: "Hydrodynamic flood, seismic, and landslide models project network failure modes hours before impact.",
      icon: IconWave,
    },
    {
      tag: "04",
      title: "Critical Route Analysis",
      desc: "Identifies the 3% of roads carrying 60% of life-critical mobility — and the alternates if they fall.",
      icon: IconRoute,
    },
    {
      tag: "05",
      title: "Emergency Response Intelligence",
      desc: "Live dispatch overlays: ambulances, fire, rescue. Optimized for response time, not distance.",
      icon: IconShield,
    },
    {
      tag: "06",
      title: "AI Insights & Briefings",
      desc: "Natural-language explanations decision-makers can act on, sourced and time-stamped.",
      icon: IconSpark,
    },
  ];
  return (
    <section id="modules" className="relative py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          eyebrow="Core Modules"
          title={<>Six engines.<br/><span className="text-gradient-teal">One resilient city.</span></>}
          sub="Each module is a standalone API and a tile in the unified console. Compose them however your agency works."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((m, i) => (
            <div
              key={m.tag}
              className="group relative rounded-3xl p-6 glass hover:shadow-float hover:-translate-y-1 transition-all duration-500"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="size-11 rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--gradient-teal-sky)" }}>
                  <m.icon className="size-5 text-white" />
                </div>
                <span className="font-mono text-[11px] text-muted-foreground">{m.tag}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Explore module
                <span aria-hidden>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub: string }) {
  return (
    <div className="max-w-2xl">
      <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">{eyebrow}</span>
      <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight leading-tight">{title}</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">{sub}</p>
    </div>
  );
}

/* ============================================================== */
/*  DIGITAL TWIN                                                   */
/* ============================================================== */
function DigitalTwin() {
  const { boundary, roads, sourceName } = useCityData();
  const hasUserData = !!(boundary || roads);
  const layers = [
    { id: "roads", label: "Road network", on: true, color: "var(--primary)" },
    { id: "flood", label: "Flood simulation", on: true, color: "var(--sky)" },
    { id: "heat", label: "Traffic heatmap", on: true, color: "var(--accent)" },
    { id: "crit", label: "Critical corridors", on: false, color: "var(--rose)" },
  ];
  const [active, setActive] = useState(layers.map(l => l.on));
  return (
    <section id="twin" className="relative py-28 px-4 bg-[color:var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          eyebrow="Digital Twin Map"
          title={<>A breathing 3D <span className="text-gradient-teal">model of your city.</span></>}
          sub="Parallax map layers, flood propagation, animated routes, and critical-road indicators — composed in real time from your sensor feeds."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_320px] gap-5">
          <div className="relative rounded-[32px] overflow-hidden glass-strong p-2">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, #0b1220 0%, #0f1d2e 60%, #122a3a 100%)",
              }}>
              <CityTwin active={active} />

              {/* corner HUD */}
              <div className="absolute top-4 left-4 font-mono text-[10px] text-white/70 space-y-1">
                <div>{hasUserData ? `SOURCE · ${sourceName ?? "user data"}` : "LAT 41.0082 · LON 28.9784"}</div>
                <div>{hasUserData ? `EDGES ${roads?.count ?? 0} · ${(roads?.lengthKm ?? 0).toFixed(1)} km` : "TILE 32 / 47 · z 14"}</div>
                <div className="text-primary">● TWIN {hasUserData ? "LIVE FROM UPLOAD" : "SYNCED"}</div>
              </div>
              <div className="absolute bottom-4 right-4 glass-strong rounded-xl px-3 py-2 text-[11px]">
                <div className="flex items-center gap-3 font-mono">
                  <span>FLOOD +1.2m</span>
                  <span className="text-muted-foreground">|</span>
                  <span>ETA 04:12</span>
                </div>
              </div>

              {/* parallax floating chips */}
              <FloatingChip className="top-12 left-[18%]" label="Hospital A" value="2.1km" />
              <FloatingChip className="top-[40%] left-[55%]" label="Bridge B-14" value="AT RISK" tone="rose" />
              <FloatingChip className="bottom-16 left-[30%]" label="Reroute γ" value="−8 min" tone="amber" />
            </div>
          </div>

          {/* layers panel */}
          <aside className="glass-strong rounded-3xl p-5 self-start">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Layers</h4>
              <span className="font-mono text-[10px] text-muted-foreground">
                {hasUserData ? "USER DATA" : "DEMO TILE"}
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              {layers.map((l, i) => (
                <li key={l.id}>
                  <button
                    onClick={() => setActive(a => a.map((v,idx)=> idx===i ? !v : v))}
                    className="w-full flex items-center justify-between rounded-xl px-3 py-2.5 hover:bg-white/60 transition"
                  >
                    <span className="flex items-center gap-2.5 text-sm">
                      <span className="size-2.5 rounded-full" style={{ background: l.color }} />
                      {l.label}
                    </span>
                    <span className={`h-5 w-9 rounded-full transition relative ${active[i] ? "" : "bg-foreground/10"}`}
                      style={active[i] ? { background: "var(--gradient-teal-sky)" } : undefined}>
                      <span className={`absolute top-0.5 size-4 bg-white rounded-full shadow transition-all ${active[i] ? "left-4" : "left-0.5"}`} />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-foreground/5">
              <div className="text-xs text-muted-foreground">Camera</div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                {["Top", "45°", "Street"].map(v => (
                  <button key={v} className="rounded-lg py-1.5 bg-white/60 hover:bg-white transition">{v}</button>
                ))}
              </div>
            </div>
            <div className="mt-5 rounded-2xl p-3 text-xs text-white"
              style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}>
              <div className="font-mono text-[10px] text-white/60">SCENARIO</div>
              <div className="mt-1 font-medium">100-yr Flood · District 07</div>
              <div className="mt-2 font-mono text-[10px] text-white/60">Confidence 0.92</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({ className = "", label, value, tone }: {
  className?: string; label: string; value: string; tone?: "rose" | "amber";
}) {
  const color = tone === "rose" ? "var(--rose)" : tone === "amber" ? "var(--accent)" : "var(--primary)";
  return (
    <div className={`absolute glass-strong rounded-xl px-2.5 py-1.5 text-[11px] flex items-center gap-2 animate-float ${className}`}>
      <span className="size-1.5 rounded-full" style={{ background: color }} />
      <span className="font-medium">{label}</span>
      <span className="font-mono text-muted-foreground">{value}</span>
    </div>
  );
}

function CityTwin({ active }: { active: boolean[] }) {
  const [roads, flood, heat, crit] = active;
  return (
    <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="heat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F59E0B" stopOpacity="0.5" />
          <stop offset="1" stopColor="#FB7185" stopOpacity="0.0" />
        </linearGradient>
        <linearGradient id="flood-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0EA5E9" stopOpacity="0.45" />
          <stop offset="1" stopColor="#0EA5E9" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* iso city blocks */}
      <g opacity="0.7">
        {Array.from({ length: 9 }).map((_, r) =>
          Array.from({ length: 14 }).map((_, c) => {
            const x = 60 + c * 50 + (r % 2) * 6;
            const y = 60 + r * 44;
            const h = 8 + ((r * c) % 5) * 4;
            return (
              <g key={`${r}-${c}`}>
                <rect x={x} y={y - h} width="38" height={28 + h} rx="3"
                  fill="#1f2e3f" stroke="#2a3d52" />
                <rect x={x} y={y - h} width="38" height="8" rx="3" fill="#2c4258" />
              </g>
            );
          })
        )}
      </g>

      {/* heatmap */}
      {heat && (
        <g style={{ mixBlendMode: "screen" }}>
          <ellipse cx="280" cy="220" rx="180" ry="120" fill="url(#heat)" />
          <ellipse cx="560" cy="320" rx="160" ry="100" fill="url(#heat)" opacity="0.7" />
        </g>
      )}

      {/* roads */}
      {roads && (
        <g stroke="#14B8A6" strokeWidth="2" fill="none" opacity="0.85" strokeLinecap="round">
          <path d="M0,250 Q200,200 400,260 T800,240" />
          <path d="M120,0 Q200,250 180,500" opacity="0.6" />
          <path d="M500,0 Q480,260 560,500" opacity="0.6" />
          <path d="M0,120 L800,160" opacity="0.4" />
          <path d="M0,400 L800,380" opacity="0.4" />
        </g>
      )}

      {/* critical animated route */}
      {crit && (
        <path d="M40,460 C200,400 320,380 420,300 S660,180 780,80"
          stroke="#FB7185" strokeWidth="2.5" fill="none"
          strokeDasharray="12 8" className="animate-dash" />
      )}
      <path d="M40,460 C200,400 320,380 420,300 S660,180 780,80"
        stroke="#F59E0B" strokeWidth="2" fill="none"
        strokeDasharray="10 6" className="animate-dash" opacity={0.9} />

      {/* flood */}
      {flood && (
        <g>
          <path d="M0,360 Q200,330 400,370 T800,355 L800,500 L0,500 Z" fill="url(#flood-g)" />
          <path d="M0,360 Q200,330 400,370 T800,355" stroke="#7dd3fc" strokeWidth="1" fill="none" opacity="0.7" />
        </g>
      )}

      {/* markers */}
      <g>
        <circle cx="240" cy="200" r="6" fill="#14B8A6" />
        <circle cx="240" cy="200" r="14" fill="#14B8A6" opacity="0.2" className="animate-pulse-dot" />
        <circle cx="560" cy="320" r="6" fill="#F59E0B" />
      </g>
    </svg>
  );
}

/* ============================================================== */
/*  DASHBOARD                                                      */
/* ============================================================== */
function Dashboard() {
  const metrics = [
    { label: "Road Availability", value: "92.4%", delta: "+0.6", series: [70,72,74,73,80,82,85,88,90,92] , tone: "primary" },
    { label: "Resilience Score", value: "87.6", delta: "+2.4", series: [60,65,68,70,72,75,78,82,85,88], tone: "sky" },
    { label: "Affected Population", value: "184,210", delta: "−12.3k", series: [220,210,205,200,196,194,190,188,186,184], tone: "rose" },
    { label: "Emergency Response", value: "07:42", delta: "−1:18", series: [12,11,10,10,9,9,8,8,7,7], tone: "amber" },
  ];
  return (
    <section id="dashboard" className="relative py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          eyebrow="Road Intelligence Dashboard"
          title={<>The metrics that <span className="text-gradient-teal">save lives.</span></>}
          sub="Live KPIs across every district. Color-coded, source-attributed, exportable as briefings in one click."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map(m => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>

        {/* big panel */}
        <div className="mt-5 grid lg:grid-cols-[1.4fr_1fr] gap-5">
          <div className="glass-strong rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">Network resilience · last 30 days</div>
                <div className="text-xs text-muted-foreground mt-0.5">District 07 · Istanbul</div>
              </div>
              <div className="flex gap-1 text-[11px] font-mono">
                {["1D","7D","30D","1Y"].map((t,i)=>(
                  <span key={t} className={`px-2 py-1 rounded-md ${i===2 ? "bg-foreground text-background" : "bg-white/60 text-muted-foreground"}`}>{t}</span>
                ))}
              </div>
            </div>
            <ResilienceChart />
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] font-mono text-muted-foreground">
              <LegendDot color="var(--primary)" label="Availability" />
              <LegendDot color="var(--sky)" label="Resilience" />
              <LegendDot color="var(--accent)" label="Forecast band" />
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-6">
            <div className="text-sm font-semibold">Critical corridors</div>
            <div className="text-xs text-muted-foreground mt-0.5">Sorted by criticality score</div>
            <ul className="mt-4 divide-y divide-foreground/5">
              {[
                { name: "E-5 Corridor", score: 98, tag: "Highway" },
                { name: "Bosphorus Bridge", score: 96, tag: "Bridge" },
                { name: "Tarlabaşı Blvd", score: 91, tag: "Arterial" },
                { name: "Atatürk Airport Rd", score: 87, tag: "Access" },
                { name: "Beşiktaş Coastal", score: 83, tag: "Coastal" },
              ].map(r => (
                <li key={r.name} className="py-3 flex items-center gap-3">
                  <span className="font-mono text-xs w-8 text-muted-foreground">{r.score}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{r.name}</div>
                    <div className="text-[11px] text-muted-foreground">{r.tag}</div>
                  </div>
                  <div className="h-1.5 w-20 rounded-full bg-foreground/10 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${r.score}%`, background: "var(--gradient-teal-sky)" }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ label, value, delta, series, tone }: {
  label: string; value: string; delta: string; series: number[]; tone: string;
}) {
  const color =
    tone === "primary" ? "var(--primary)" :
    tone === "sky" ? "var(--sky)" :
    tone === "rose" ? "var(--rose)" : "var(--accent)";
  const up = !delta.startsWith("−");
  return (
    <div className="glass-strong rounded-3xl p-5">
      <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-mono text-3xl font-semibold tracking-tight">{value}</span>
        <span className="text-[11px] font-mono px-1.5 py-0.5 rounded-md"
          style={{ color, background: `color-mix(in oklab, ${color} 14%, transparent)` }}>
          {up ? "▲" : "▼"} {delta}
        </span>
      </div>
      <Sparkline data={series} color={color} />
    </div>
  );
}

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data), min = Math.min(...data);
  const w = 200, h = 48;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * h;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 w-full h-12">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={`0,${h} ${pts} ${w},${h}`} fill={color} opacity="0.12" />
    </svg>
  );
}

function ResilienceChart() {
  const data = useMemo(() => {
    let s = 99;
    const rand = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    return Array.from({ length: 30 }, (_, i) => ({
      a: 70 + Math.sin(i / 3) * 8 + rand() * 4,
      r: 60 + Math.cos(i / 4) * 10 + rand() * 5,
    }));
  }, []);
  const w = 600, h = 220;
  const toPts = (key: "a" | "r") =>
    data.map((d, i) => `${(i / (data.length - 1)) * w},${h - (d[key] / 100) * h}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-5 w-full h-56">
      <defs>
        <linearGradient id="a-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#14B8A6" stopOpacity="0.35" />
          <stop offset="1" stopColor="#14B8A6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="band" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F59E0B" stopOpacity="0.22" />
          <stop offset="1" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* grid */}
      {[0.25, 0.5, 0.75].map(p => (
        <line key={p} x1="0" x2={w} y1={h * p} y2={h * p} stroke="currentColor" opacity="0.06" />
      ))}
      {/* forecast band */}
      <path d={`M${w * 0.7},20 L${w},10 L${w},${h} L${w * 0.7},${h} Z`} fill="url(#band)" />
      <line x1={w * 0.7} y1="0" x2={w * 0.7} y2={h} stroke="#F59E0B" strokeDasharray="4 4" opacity="0.4" />
      {/* availability */}
      <polyline points={`0,${h} ${toPts("a")} ${w},${h}`} fill="url(#a-fill)" />
      <polyline points={toPts("a")} fill="none" stroke="#14B8A6" strokeWidth="2" />
      {/* resilience */}
      <polyline points={toPts("r")} fill="none" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="4 3" />
    </svg>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="size-2 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}

/* ============================================================== */
/*  SIMULATOR                                                      */
/* ============================================================== */
const SCENARIOS = [
  { id: "flood", label: "Flood", desc: "100-yr return period", icon: "🌊" },
  { id: "quake", label: "Earthquake", desc: "Mw 7.2 · Marmara", icon: "🜔" },
  { id: "slide", label: "Landslide", desc: "Coastal slope", icon: "⛰" },
  { id: "bridge", label: "Bridge Collapse", desc: "Span B-14", icon: "▣" },
] as const;

const SCENARIO_DATA: Record<string, { affected: string; alt: string; crit: number; pop: string }> = {
  flood: { affected: "428 km", alt: "112 routes", crit: 91, pop: "184k" },
  quake: { affected: "1,204 km", alt: "318 routes", crit: 97, pop: "612k" },
  slide: { affected: "62 km", alt: "24 routes", crit: 74, pop: "21k" },
  bridge: { affected: "8 km", alt: "6 routes", crit: 88, pop: "94k" },
};

function Simulator() {
  const [sel, setSel] = useState<string>("flood");
  const [intensity, setIntensity] = useState(62);
  const d = SCENARIO_DATA[sel];

  return (
    <section id="simulator" className="relative py-28 px-4 bg-[color:var(--surface-2)]">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          eyebrow="Disaster Simulator"
          title={<>Pre-rehearse the <span className="text-gradient-teal">worst day.</span></>}
          sub="Spin up any scenario in under a second. See affected roads, computed alternates, and criticality scoring before reality runs the test."
        />

        <div className="mt-14 grid lg:grid-cols-[360px_1fr] gap-5">
          {/* Controls */}
          <div className="glass-strong rounded-3xl p-5 self-start">
            <div className="text-sm font-semibold">Scenario</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {SCENARIOS.map(s => (
                <button
                  key={s.id}
                  onClick={() => setSel(s.id)}
                  className={`text-left rounded-2xl p-3 border transition-all ${
                    sel === s.id
                      ? "border-transparent text-white shadow-glow"
                      : "border-foreground/10 bg-white/60 hover:bg-white"
                  }`}
                  style={sel === s.id ? { background: "var(--gradient-teal-sky)" } : undefined}
                >
                  <div className="text-lg">{s.icon}</div>
                  <div className="mt-2 text-sm font-medium">{s.label}</div>
                  <div className={`text-[11px] ${sel === s.id ? "text-white/80" : "text-muted-foreground"}`}>{s.desc}</div>
                </button>
              ))}
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium">Intensity</span>
                <span className="font-mono text-muted-foreground">{intensity}%</span>
              </div>
              <input
                type="range" min={0} max={100} value={intensity}
                onChange={e => setIntensity(+e.target.value)}
                className="mt-2 w-full accent-[color:var(--primary)]"
              />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <button className="rounded-xl py-2 text-sm font-medium text-white shadow-soft"
                style={{ background: "var(--gradient-teal-sky)" }}>Run</button>
              <button className="rounded-xl py-2 text-sm font-medium bg-white border border-foreground/10">Reset</button>
            </div>

            <div className="mt-5 pt-5 border-t border-foreground/5 space-y-2 font-mono text-[11px] text-muted-foreground">
              <div className="flex justify-between"><span>SEED</span><span>0x7F3A · 2026</span></div>
              <div className="flex justify-between"><span>MODEL</span><span>SFM-Hydro v3</span></div>
              <div className="flex justify-between"><span>RUNTIME</span><span>842 ms</span></div>
            </div>
          </div>

          {/* Result */}
          <div className="rounded-[32px] overflow-hidden glass-strong p-2">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10]"
              style={{ background: "linear-gradient(160deg, #0b1220 0%, #0f1d2e 100%)" }}>
              <CityTwin active={[true, sel==="flood", true, true]} />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <Pill>SCENARIO · {SCENARIOS.find(s=>s.id===sel)?.label}</Pill>
                <Pill tone="amber">CRITICALITY · {d.crit}</Pill>
              </div>

              {/* result cards */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
                <ResultCard label="Affected roads" value={d.affected} />
                <ResultCard label="Alternative routes" value={d.alt} />
                <ResultCard label="Population impacted" value={d.pop} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ children, tone }: { children: React.ReactNode; tone?: "amber" }) {
  return (
    <span className="glass-strong text-[10px] font-mono px-2.5 py-1 rounded-full"
      style={tone === "amber" ? { color: "var(--accent)" } : undefined}>
      {children}
    </span>
  );
}
function ResultCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-strong rounded-2xl px-3 py-2.5">
      <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-0.5 font-mono text-lg font-semibold">{value}</div>
    </div>
  );
}

/* ============================================================== */
/*  AI INSIGHTS                                                    */
/* ============================================================== */
function AIInsights() {
  const insights = [
    {
      tag: "ROUTING",
      title: "Blocking Tarlabaşı Blvd increases ambulance response time by 12 minutes across District 07.",
      sub: "Three alternates rated. Recommend pre-staging Unit 14 at Pera depot.",
    },
    {
      tag: "FLOOD",
      title: "At +1.4m river crest, Bridge B-14 fails before Bridge B-09 with 87% confidence.",
      sub: "Reroute commercial freight via E-80 northbound from 02:30 onward.",
    },
    {
      tag: "POPULATION",
      title: "184,210 residents lose hospital access within 15 min. 62% are over 65.",
      sub: "Suggest deploying mobile triage at Beyoğlu Square (lat 41.036, lon 28.977).",
    },
  ];
  return (
    <section className="relative py-28 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
        <div>
          <SectionHead
            eyebrow="AI Insights Panel"
            title={<>Plain language. <br/><span className="text-gradient-teal">Operational truth.</span></>}
            sub="Our models don't just predict. They explain — citing the road, the model, the confidence, and the cost in human terms."
          />
          <div className="mt-8 flex items-center gap-3 glass rounded-2xl p-3 max-w-md">
            <div className="size-9 rounded-xl flex items-center justify-center text-white"
              style={{ background: "var(--gradient-teal-sky)" }}>
              <IconSpark className="size-4" />
            </div>
            <div className="text-sm">
              <div className="font-medium">Forge Copilot</div>
              <div className="text-xs text-muted-foreground">Briefings · alerts · what-if queries</div>
            </div>
            <button className="ml-auto text-xs font-medium px-3 py-1.5 rounded-full bg-foreground text-background">Ask</button>
          </div>
        </div>

        <div className="space-y-3">
          {insights.map((it, i) => (
            <article key={i} className="glass-strong rounded-3xl p-5 flex gap-4 group hover:shadow-float transition">
              <div className="shrink-0 mt-0.5">
                <span className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-md"
                  style={{
                    color: "var(--primary)",
                    background: "color-mix(in oklab, var(--primary) 12%, transparent)",
                  }}>
                  {it.tag}
                </span>
              </div>
              <div>
                <p className="text-[15px] leading-snug font-medium">{it.title}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.sub}</p>
                <div className="mt-3 flex items-center gap-3 text-[11px] font-mono text-muted-foreground">
                  <span>● Confidence 0.92</span>
                  <span>SFM-Geo v4.2</span>
                  <span>· 12s ago</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/*  CTA                                                            */
/* ============================================================== */
function CTA() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto rounded-[40px] overflow-hidden relative p-10 md:p-16"
        style={{
          background: "linear-gradient(135deg, #0b1220 0%, #0f2030 60%, #0a2733 100%)",
        }}>
        <div className="absolute inset-0 bg-aurora opacity-40" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-2xl text-white">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/60">Deploy Street Forge</span>
          <h3 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Bring a <span className="text-gradient-teal">digital twin</span> to your city.
          </h3>
          <p className="mt-4 text-white/70">
            Pilot programs available for ministries, emergency agencies, and metropolitan planners.
            From first satellite tile to first briefing in 30 days.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-2xl text-foreground font-medium bg-white shadow-float">Request a pilot</button>
            <button className="px-5 py-3 rounded-2xl font-medium glass-dark">Read the whitepaper</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/*  FOOTER                                                         */
/* ============================================================== */
function Footer() {
  return (
    <footer className="px-4 pt-16 pb-10 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2">
              <LogoMark className="h-8 w-8" />
              <span className="font-display font-semibold tracking-tight">
                Street Forge<span className="text-[10px] align-top text-muted-foreground">™</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Intelligence Systems — Intelligence for Resilient Mobility.
              Built with civil agencies, validated by emergency responders.
            </p>
            <div className="mt-5 flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Systems nominal · 99.992% uptime
            </div>
          </div>
          {[
            { h: "Platform", l: ["Digital Twin", "Simulator", "Dashboard", "AI Insights"] },
            { h: "Agencies", l: ["Civil Protection", "Transit", "Emergency", "Defense"] },
            { h: "Company", l: ["Research", "Security", "Careers", "Contact"] },
          ].map(col => (
            <div key={col.h}>
              <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">{col.h}</div>
              <ul className="mt-3 space-y-2 text-sm">
                {col.l.map(i => (
                  <li key={i}><a href="#" className="hover:text-foreground text-muted-foreground transition">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-foreground/5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Street Forge™ Intelligence Systems</span>
          <span className="font-mono">"Intelligence for Resilient Mobility."</span>
          <span className="font-mono">SOC 2 · ISO 27001 · FedRAMP Moderate</span>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================== */
/*  ICONS                                                          */
/* ============================================================== */
function IconSatellite({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12 12 5l7 7-7 7z" /><path d="M9 16 8 17" /><path d="M16 8l1-1" /><circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}
function IconRecover({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 5v5h5" />
    </svg>
  );
}
function IconWave({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8q3-3 5 0t5 0 5 0 5 0" /><path d="M2 14q3-3 5 0t5 0 5 0 5 0" /><path d="M2 20q3-3 5 0t5 0 5 0 5 0" />
    </svg>
  );
}
function IconRoute({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="6" r="2.5" /><path d="M8 17c4 0 6-2 6-6s2-5 4-5" />
    </svg>
  );
}
function IconShield({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function IconSpark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
    </svg>
  );
}
