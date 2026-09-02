import { useEffect, useRef, useState } from "react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4";
const MESSAGE =
  "I build cross-platform mobile apps and full-stack web products with real-time data, offline sync, and clean architecture.";
const NAV_ITEMS = ["Work", "About", "Skills", "Education"];

interface Project {
  name: string;
  year: string;
  stack: string;
  copy: string;
  github: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "HopMate",
    year: "2025 - 26",
    stack: "React Native / Expo Maps / Appwrite",
    copy: "A peer-to-peer ride-pooling app using Expo Maps and geolocation APIs for proximity matching, with Appwrite handling realtime auth and user data.",
    github: "https://github.com/VigneshHegde78",
    image: "/images/projects/hopmate.jpg",
  },
  {
    name: "Parsr",
    year: "2026",
    stack: "React Native / TypeScript / ML Kit",
    copy: "An offline-first receipt scanner using Google ML Kit OCR and regex parsing to extract merchant data, dates, and expense categories directly into a local ledger.",
    github: "https://github.com/VigneshHegde78",
    image: "/images/projects/parsr.jpg",
  },
  {
    name: "Matrika Angan",
    year: "2026",
    stack: "Next.js / Tailwind / Supabase",
    copy: "A full-stack ecommerce storefront for an Indian saree brand featuring dynamic product catalogs and Supabase PostgreSQL backend.",
    github: "https://github.com/VigneshHegde78",
    image: "/images/projects/matrika-angan.jpg",
  },
  {
    name: "Taskly",
    year: "2026",
    stack: "Flutter / Firebase / Firestore",
    copy: "A lightweight task management app built in Flutter with Cloud Firestore for instant cross-device synchronization and Firebase Auth.",
    github: "https://github.com/VigneshHegde78",
    image: "/images/projects/taskly.jpg",
  },
];

const techGroups = [
  {
    title: "Languages",
    items: [
      ["JavaScript", "javascript"],
      ["TypeScript", "typescript"],
      ["Python", "python"],
      ["SQL", "postgresql"],
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      ["React Native", "react"],
      ["Flutter", "flutter"],
      ["Expo", "expo"],
      ["React", "react"],
      ["Next.js", "nextdotjs"],
      ["Tailwind CSS", "tailwindcss"],
    ],
  },
  {
    title: "Backend & databases",
    items: [
      ["Firebase", "firebase"],
      ["Supabase", "supabase"],
      ["Appwrite", "appwrite"],
      ["MongoDB", "mongodb"],
      ["MySQL", "mysql"],
      ["Cloud Firestore", "firebase"],
    ],
  },
  {
    title: "DevOps & tools",
    items: [
      ["Git", "git"],
      ["GitHub", "github"],
      ["Vercel", "vercel"],
      ["Figma", "figma"],
      ["REST APIs", "postman"],
    ],
  },
];

const certifications = [
  {
    year: "2026",
    title: "REST API Fundamentals",
    subtitle: "API Integration & Backend Communication",
    issuer: "Professional Certification",
  },
  {
    year: "2026",
    title: "Cloud Computing Basics",
    subtitle: "Cloud Infrastructure & Deployment Fundamentals",
    issuer: "Foundational Certification",
  },
  {
    year: "2025",
    title: "Python 3 Programming",
    subtitle: "Core Python & Object-Oriented Development",
    issuer: "Simplilearn",
  },
];

function useTypewriter(text: string, speed = 30, startDelay = 500) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    let interval: number | undefined;
    const timer = window.setTimeout(() => {
      interval = window.setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    return () => {
      window.clearTimeout(timer);
      if (interval) window.clearInterval(interval);
    };
  }, [text, speed, startDelay]);
  return { displayed, done };
}

function TechBadge({ name, icon }: { name: string; icon: string }) {
  return (
    <li className="tech-badge">
      <img
        src={`https://cdn.simpleicons.org/${icon}/ffffff`}
        alt=""
        width="18"
        height="18"
        loading="lazy"
      />
      <span>{name}</span>
    </li>
  );
}

function Hamburger({ open }: { open: boolean }) {
  return (
    <span className="flex flex-col gap-[5px]" aria-hidden="true">
      <span
        className={`h-[2px] w-6 bg-white transition duration-300 ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`h-[2px] w-6 bg-white transition duration-300 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`h-[2px] w-6 bg-white transition duration-300 ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1800;

    const interval = window.setInterval(() => {
      const elapsed = performance.now() - startTime;
      const progressFraction = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progressFraction, 3);
      const currentProgress = Math.min(100, Math.round(eased * 100));

      setProgress(currentProgress);

      if (progressFraction >= 1) {
        window.clearInterval(interval);
        setProgress(100);
        window.setTimeout(() => {
          setIsFadingOut(true);
          window.setTimeout(() => {
            onLoaded();
          }, 450);
        }, 120);
      }
    }, 20);

    return () => window.clearInterval(interval);
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-black p-6 sm:p-12 transition-opacity duration-500 select-none ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={isFadingOut}
      role="status"
      aria-label="Loading portfolio">
      {/* Top minimal header */}
      <div className="flex items-center justify-between text-xs tracking-[0.25em] uppercase text-white/40 font-mono">
        <span>Vignesh Hegde</span>
        <span>Portfolio // 2026</span>
      </div>

      {/* Bottom Area: Small note on left, Giant Number on right */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="max-w-xs pb-2 sm:pb-4">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.16em] uppercase text-white/50 leading-relaxed">
            * Note: Best experienced on desktop for full interactive canvas &
            motion.
          </p>
        </div>
        <div
          className="text-[clamp(80px,20vw,220px)] font-bold tracking-[-0.08em] leading-none text-white tabular-nums select-none"
          style={{ fontFamily: "var(--font-heading)" }}>
          {String(progress).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null),
    pending = useRef<number | null>(null),
    seeking = useRef(false),
    previousX = useRef<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false),
    [actionsVisible, setActionsVisible] = useState(false),
    [isLoading, setIsLoading] = useState(true);
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(
    null
  );
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { displayed, done } = useTypewriter(
    MESSAGE,
    30,
    isLoading ? 2000 : 400
  );

  useEffect(() => {
    if (!isLoading) {
      const timer = window.setTimeout(() => setActionsVisible(true), 300);
      return () => window.clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    const seekNext = () => {
      const video = videoRef.current;
      if (!video || pending.current === null) return;
      const time = pending.current;
      pending.current = null;
      seeking.current = true;
      video.currentTime = time;
    };
    const move = ({ clientX, clientY }: MouseEvent) => {
      setMousePos({ x: clientX, y: clientY });
      const video = videoRef.current;
      if (!video || !Number.isFinite(video.duration) || video.duration <= 0)
        return;
      if (previousX.current === null) {
        previousX.current = clientX;
        return;
      }
      const delta = clientX - previousX.current;
      previousX.current = clientX;
      const base = pending.current ?? video.currentTime;
      pending.current = Math.min(
        video.duration,
        Math.max(0, base + (delta / window.innerWidth) * 0.8 * video.duration)
      );
      if (!seeking.current) seekNext();
    };
    const seeked = () => {
        seeking.current = false;
        seekNext();
      },
      reset = () => {
        previousX.current = null;
      },
      video = videoRef.current;
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", reset);
    video?.addEventListener("seeked", seeked);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", reset);
      video?.removeEventListener("seeked", seeked);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, isLoading]);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}

      <header className="fixed top-0 z-20 flex w-full items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <a
          className="relative z-20 flex items-center gap-3 text-[21px] tracking-tight sm:text-[26px]"
          style={{ fontFamily: "var(--font-heading)" }}
          href="#top">
          Vignesh Hegde{" "}
          <span className="select-none text-[25px] tracking-[-.02em] sm:text-[30px]">
            ✳︎
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-[18px] md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              className="transition-opacity hover:opacity-60"
              href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <a
          className="hidden text-[18px] underline underline-offset-2 transition-opacity hover:opacity-60 md:block"
          href="#contact">
          Let’s talk
        </a>
        <button
          className="relative z-20 flex min-h-10 min-w-10 items-center justify-end md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation">
          <Hamburger open={menuOpen} />
        </button>
      </header>

      <nav
        className={`fixed inset-0 z-10 flex flex-col justify-center gap-8 bg-black/95 px-8 text-[32px] font-medium backdrop-blur-md transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            onClick={() => setMenuOpen(false)}
            href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
        <a
          onClick={() => setMenuOpen(false)}
          href="#contact"
          className="underline">
          Let’s talk
        </a>
      </nav>

      {/* Hero Section - Character Animation Video strictly contained inside */}
      <section
        id="top"
        className="relative z-[1] flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-8 pt-28 sm:min-h-screen sm:justify-end sm:px-8 sm:pb-12 md:justify-center md:px-10 md:pb-0">
        {/* Character animation video only active inside the Hero */}
        <video
          ref={videoRef}
          className="absolute inset-0 z-0 hidden h-full w-full object-cover object-[70%_center] opacity-45 lg:block pointer-events-none"
          src={VIDEO_URL}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div
          className="mobile-hero-background absolute inset-0 z-0 lg:hidden pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="portfolio-glow absolute inset-0 z-0 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl">
          <p className="mb-5 text-[clamp(15px,2vw,19px)] uppercase tracking-[.12em] text-white/60 sm:mb-7">
            Full-stack & mobile developer / Mumbai
          </p>
          <h1
            className="text-[clamp(44px,8vw,106px)] leading-[.91] tracking-[-.065em]"
            style={{ fontFamily: "var(--font-heading)" }}>
            Digital experiences that feel{" "}
            <em className="font-normal text-white/60">human.</em>
          </h1>
          <p className="mt-7 min-h-[54px] max-w-xl text-[clamp(18px,3vw,26px)] leading-[1.35] sm:mt-9">
            {displayed}
            {!done && (
              <span className="cursor-blink ml-[2px] inline-block h-[1.1em] w-[2px] align-middle bg-white" />
            )}
          </p>
          <div
            className={`hero-actions mt-7 transition-[opacity,transform] duration-[400ms] ${
              actionsVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}>
            <a href="#work" className="portfolio-pill portfolio-pill-light">
              Explore selected work
            </a>
            <a
              href="/Vignesh-Hegde-Resume.pdf"
              download
              className="portfolio-pill portfolio-pill-light">
              Download résumé ↓
            </a>
            <a
              href="https://github.com/VigneshHegde78"
              target="_blank"
              rel="noreferrer"
              className="portfolio-pill portfolio-pill-light">
              GitHub ↗
            </a>
            <a
              href="mailto:hegdevignesh54@gmail.com"
              className="portfolio-pill hero-email gap-2 border-white bg-transparent text-white hover:bg-white hover:text-black">
              <svg
                aria-hidden="true"
                className="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span className="underline underline-offset-2">
                hegdevignesh54@gmail.com
              </span>
            </a>
          </div>
        </div>
        <a
          href="#work"
          className="absolute bottom-7 right-5 hidden text-[13px] uppercase tracking-[.12em] text-white/60 sm:block sm:right-8">
          Scroll to explore ↓
        </a>
      </section>

      {/* Selected Work Section with Atmospheric Glow & Interactive Hover Image Preview */}
      <section
        id="work"
        className="relative z-[1] border-t border-white/20 section-glow-work px-5 py-20 sm:px-8 md:px-10 md:py-28">
        <div className="mb-12 flex justify-between text-sm text-white/55">
          <p className="uppercase tracking-[.14em]">01 / Selected work</p>
          <p>2025 - 2026</p>
        </div>

        {/* Floating Cursor Preview Image on Desktop */}
        {hoveredProjectIndex !== null && (
          <div
            className="pointer-events-none fixed z-30 hidden w-72 md:block -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/25 bg-black/90 p-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-150 ease-out"
            style={{
              left: `${mousePos.x + 20}px`,
              top: `${mousePos.y}px`,
            }}>
            <img
              src={projects[hoveredProjectIndex].image}
              alt={projects[hoveredProjectIndex].name}
              className="h-44 w-full rounded-lg object-cover"
            />
            <div className="flex items-center justify-between px-2 py-1.5 text-xs text-white/80">
              <span className="font-medium">
                {projects[hoveredProjectIndex].name}
              </span>
              <span className="text-white/50 text-[10px] uppercase font-mono">
                View on GitHub ↗
              </span>
            </div>
          </div>
        )}

        <div className="space-y-0">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoveredProjectIndex(index)}
              onMouseLeave={() => setHoveredProjectIndex(null)}
              className="group block border-t border-white/20 py-8 md:py-10 transition-colors duration-200 hover:border-white/60">
              <div className="grid md:grid-cols-[.4fr_1.1fr_.3fr] md:gap-8 items-start">
                <p className="text-sm text-white/50 font-mono">0{index + 1}</p>
                <div className="mt-4 md:mt-0">
                  <h2
                    className="text-[clamp(34px,5vw,64px)] leading-none tracking-[-0.055em] text-white transition-transform group-hover:translate-x-2"
                    style={{ fontFamily: "var(--font-heading)" }}>
                    {project.name}
                    <span className="text-white/35 transition-transform group-hover:translate-x-1 inline-block">
                      {" "}
                      ↗
                    </span>
                  </h2>
                  <p className="mt-3 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
                    {project.copy}
                  </p>

                  {/* Inline visual snapshot for mobile/tablet screens */}
                  <div className="mt-4 md:hidden overflow-hidden rounded-lg border border-white/15 bg-white/[0.02]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-5 text-sm leading-relaxed text-white/55 md:mt-0">
                  <p>{project.year}</p>
                  <p className="mt-2 text-white/40">{project.stack}</p>
                  <p className="mt-3 text-xs uppercase tracking-wider text-white/70 underline underline-offset-4 group-hover:text-white">
                    GitHub Repo ↗
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* About Section with Warm Atmospheric Glow */}
      <section
        id="about"
        className="relative z-[1] border-t border-white/20 section-glow-about px-5 py-20 sm:px-8 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[.14em] text-white/55">
              02 / About
            </p>
            <h2
              className="mt-8 max-w-md text-[clamp(37px,5vw,66px)] leading-[.96] tracking-[-.06em]"
              style={{ fontFamily: "var(--font-heading)" }}>
              Building practical software with clean architecture.
            </h2>
          </div>
          <div className="self-end">
            <p className="max-w-xl text-[clamp(20px,2.3vw,30px)] leading-[1.3] text-white/80">
              I’m Vignesh, a final-year B.Sc IT student at M.L. Dahanukar College in Mumbai. I focus on developing cross-platform mobile apps with React Native and Flutter, along with full-stack web applications using Next.js and Supabase.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55">
              I enjoy solving practical engineering problems — like building offline-first OCR receipt parsers, live location ride-pooling systems, and scalable backend workflows. When I’m not writing code, I publish technical notes on dev.to and experiment with new developer tools.
            </p>
          </div>
        </div>
        <div className="mt-16 grid border-t border-white/20 pt-6 sm:grid-cols-2">
          <div className="border-b border-white/20 py-5 sm:border-b-0 sm:border-r sm:pr-8 sm:pt-0">
            <p
              className="text-[52px] leading-none tracking-[-.07em]"
              style={{ fontFamily: "var(--font-heading)" }}>
              7+
            </p>
            <p className="mt-2 text-sm text-white/55">Apps shipped</p>
          </div>
          <div className="py-5 sm:pl-8 sm:pt-0">
            <p
              className="text-[52px] leading-none tracking-[-.07em]"
              style={{ fontFamily: "var(--font-heading)" }}>
              3+
            </p>
            <p className="mt-2 text-sm text-white/55">Years coding</p>
          </div>
        </div>
      </section>

      {/* Capabilities Section with Cool Indigo Glow */}
      <section
        id="skills"
        className="relative z-[1] border-t border-white/20 section-glow-skills px-5 py-20 sm:px-8 md:px-10 md:py-28">
        <p className="text-sm uppercase tracking-[.14em] text-white/55">
          03 / Capabilities
        </p>
        <p className="mt-4 max-w-xl text-lg text-white/65">
          Core languages, frameworks, and database technologies I work with daily.
        </p>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {techGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-5 text-sm uppercase tracking-[.1em] text-white/50">
                {group.title}
              </p>
              <ul className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {group.items.map(([name, icon]) => (
                  <TechBadge key={name} name={name} icon={icon} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section with Enhanced Certification Details */}
      <section
        id="education"
        className="relative z-[1] border-t border-white/20 section-glow-education px-5 py-20 sm:px-8 md:px-10 md:py-28">
        <p className="text-sm uppercase tracking-[.14em] text-white/55">
          04 / Education
        </p>
        <h2
          className="mt-8 max-w-2xl text-[clamp(37px,5vw,66px)] leading-[.96] tracking-[-.06em]"
          style={{ fontFamily: "var(--font-heading)" }}>
          Academic foundation & technical certifications.
        </h2>
        <div className="mt-14">
          <article className="grid gap-3 border-y border-white/20 py-7 md:grid-cols-[.35fr_.9fr_1.25fr]">
            <p className="text-sm text-white/50 font-mono">2023 - 2026</p>
            <div>
              <h3 className="text-2xl tracking-[-.04em]">
                B.Sc in Information Technology
              </h3>
              <p className="mt-1 text-sm text-white/55">
                M.L. Dahanukar College Of Commerce, Mumbai
              </p>
            </div>
            <p className="text-base leading-relaxed text-white/65">
              Studying core computer science fundamentals — data structures, database design, software engineering, and web technologies — while building and deploying production-ready mobile and web applications.
            </p>
          </article>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="rounded-xl border border-white/15 bg-white/[0.02] p-5 sm:p-6 transition-all duration-200 hover:border-white/35 hover:bg-white/[0.04]">
              <div className="flex items-center justify-between text-xs text-white/45 uppercase tracking-[0.14em]">
                <span className="font-mono">{cert.year}</span>
                <span className="text-white/60 font-medium">{cert.issuer}</span>
              </div>
              <p className="mt-3 text-lg font-medium text-white">
                {cert.title}
              </p>
              <p className="mt-1 text-sm text-white/55 leading-relaxed">
                {cert.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Connect Section with Ambient Violet/Slate Glow */}
      <footer
        id="contact"
        className="relative z-[1] border-t border-white/20 section-glow-contact px-5 pb-8 pt-20 sm:px-8 md:px-10 md:pt-28">
        <p className="text-sm uppercase tracking-[.14em] text-white/55">
          05 / Connect
        </p>
        <div className="mt-8 grid gap-10 md:grid-cols-[1.25fr_.75fr]">
          <div>
            <a
              href="mailto:hegdevignesh54@gmail.com"
              className="block break-words text-[clamp(34px,7vw,94px)] leading-[.95] tracking-[-.065em] underline decoration-white/35 underline-offset-[.12em] hover:text-white/60"
              style={{ fontFamily: "var(--font-heading)" }}>
              Let’s build something
              <br />
              together.
            </a>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-white/65">
              Open to full-stack, mobile engineering roles, freelance opportunities, and technical collaborations. I usually reply within 24 hours.
            </p>
          </div>
          <div className="border-t border-white/20 pt-5 text-sm md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="text-white/45">Based in</p>
            <p className="mt-1 text-base">Virar, Maharashtra, India</p>
            <p className="mt-7 text-white/45">Best way to reach me</p>
            <a
              href="mailto:hegdevignesh54@gmail.com"
              className="mt-1 block text-base underline underline-offset-4 hover:text-white/60">
              hegdevignesh54@gmail.com
            </a>
            <a
              href="tel:+917498111406"
              className="mt-3 block text-base hover:text-white/60">
              +91 7498111406
            </a>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
              <a
                href="https://www.linkedin.com/in/vignesh-hegde-v78"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-white/60">
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/VigneshHegde78"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-white/60">
                GitHub ↗
              </a>
              <a
                href="https://dev.to/vigneshhegde78"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-white/60">
                dev.to ↗
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-wrap justify-between gap-4 border-t border-white/20 pt-5 text-sm text-white/55">
          <span>© 2026 Vignesh Hegde</span>
          <a
            href="/Vignesh-Hegde-Resume.pdf"
            download
            className="hover:text-white">
            Download résumé ↓
          </a>
        </div>
      </footer>
    </main>
  );
}
