

// "use client";

// import Image, { type StaticImageData } from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useEffect, useMemo, useState } from "react";
// import { X } from "lucide-react";
// import type { CaseStudy, Vertical } from "./caseStudies.data";
// import { SOLUTIONS, VERTICALS } from "./caseStudies.data";

// type Mode = "verticals" | "solutions";

// function cn(...classes: Array<string | false | null | undefined>) {
//   return classes.filter(Boolean).join(" ");
// }

// function MetricPill({ label, value }: { label: string; value: string }) {
//   return (
//     <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200">
//       <span className="text-zinc-400">{label}</span>
//       <span className="text-zinc-100">{value}</span>
//     </span>
//   );
// }

// function SectionHeader({ title }: { title: string }) {
//   return (
//     <div className="mx-auto max-w-[1200px]">
//       <div className="flex items-center gap-4">
//         <h3 className="text-2xl md:text-3xl font-semibold text-white">{title}</h3>
//         <div className="h-px flex-1 bg-white/10" />
//       </div>
//     </div>
//   );
// }

// function CoverBlock({
//   cover,
//   alt,
//   pos,
// }: {
//   cover?: string | StaticImageData | null;
//   alt: string;
//   pos?: string;
// }) {
//   if (!cover) {
//     return (
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.04),transparent_60%)]" />
//         <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.55),rgba(0,0,0,0.85))]" />
//       </div>
//     );
//   }

//   return (
//     <>
//       <Image
//         src={cover}
//         alt={alt}
//         fill
//         className="object-cover opacity-95"
//         style={{ objectPosition: pos ?? "50% 50%" }} // ✅ key fix
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         priority={false}
//       />
//       <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.15)_55%,rgba(0,0,0,0.05)_100%)]" />
//     </>
//   );
// }

// export default function CaseStudiesGrid({ items }: { items: CaseStudy[] }) {
//   const [mode, setMode] = useState<Mode>("verticals");
//   const [activeId, setActiveId] = useState<string | null>(null);
//   const [activeGroupKey, setActiveGroupKey] = useState<string | null>(null); // ✅ remember which vertical section opened the modal

//   const active = useMemo(
//     () => items.find((i) => i.id === activeId) || null,
//     [items, activeId]
//   );

//   const groups = useMemo(() => {
//     if (mode === "verticals") {
//       return VERTICALS.map((v) => ({
//         key: v,
//         title: v,
//         items: items.filter(
//           (x) => (x.showInVerticals ?? true) && (x.verticals ?? []).includes(v)
//         ),
//       })).filter((g) => g.items.length > 0);
//     }

//     return SOLUTIONS.map((s) => ({
//       key: s,
//       title: s,
//       items: items.filter(
//         (x) => (x.showInSolutions ?? true) && (x.solutions ?? []).includes(s)
//       ),
//     })).filter((g) => g.items.length > 0);
//   }, [items, mode]);

//   const closeModal = () => {
//     setActiveId(null);
//     setActiveGroupKey(null);
//   };

//   // ESC close
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeModal();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   // lock body scroll when modal open
//   useEffect(() => {
//     if (!active) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [active]);

//   // ✅ pick cover/pos (supports per-vertical override when in vertical mode)
//   const pickCover = (cs: CaseStudy, groupKey?: string | null) => {
//     if (mode === "verticals" && groupKey) {
//       const v = groupKey as Vertical;
//       return cs.coverByVertical?.[v] ?? cs.cover;
//     }
//     return cs.cover;
//   };

//   const pickPos = (cs: CaseStudy, groupKey?: string | null) => {
//     if (mode === "verticals" && groupKey) {
//       const v = groupKey as Vertical;
//       return cs.coverPosByVertical?.[v] ?? cs.coverPos;
//     }
//     return cs.coverPos;
//   };

//   return (
//     <div className="relative">
//       {/* Toggle */}
//       <div className="mx-auto mb-10 max-w-[1200px]">
//         <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1">
//           <button
//             onClick={() => setMode("verticals")}
//             className={cn(
//               "rounded-full px-4 py-2 text-sm font-medium transition",
//               mode === "verticals"
//                 ? "bg-white text-black"
//                 : "text-zinc-200 hover:bg-white/10"
//             )}
//           >
//             Verticals
//           </button>
//           <button
//             onClick={() => setMode("solutions")}
//             className={cn(
//               "rounded-full px-4 py-2 text-sm font-medium transition",
//               mode === "solutions"
//                 ? "bg-white text-black"
//                 : "text-zinc-200 hover:bg-white/10"
//             )}
//           >
//             Solutions
//           </button>
//         </div>
//       </div>

//       {/* Grouped sections */}
//       <div className="space-y-14">
//         {groups.map((g) => (
//           <section key={g.key} className="space-y-6">
//             <SectionHeader title={g.title} />

//             <div className="mx-auto max-w-[1200px]">
//               <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
//                 {g.items.map((cs, idx) => {
//                   const cardCover = pickCover(cs, g.key);
//                   const cardPos = pickPos(cs, g.key);

//                   return (
//                     <motion.button
//                       key={cs.id}
//                       onClick={() => {
//                         setActiveId(cs.id);
//                         setActiveGroupKey(g.key as string);
//                       }}
//                       className={cn(
//                         "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] text-left",
//                         "shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:bg-white/[0.06] transition"
//                       )}
//                       initial={{ opacity: 0, y: 18 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true, margin: "-80px" }}
//                       transition={{
//                         duration: 0.55,
//                         delay: idx * 0.04,
//                         ease: [0.22, 1, 0.36, 1],
//                       }}
//                     >
//                       {/* Cover */}
//                       <div className="relative h-[210px] w-full">
//                         <CoverBlock cover={cardCover} alt={cs.title} pos={cardPos} />
//                       </div>

//                       {/* Body */}
//                       <div className="p-5">
//                         <div className="text-zinc-100 font-semibold text-lg leading-snug">
//                           {cs.title}
//                         </div>
//                         <div className="mt-2 text-sm text-zinc-300 leading-relaxed">
//                           {cs.subtitle}
//                         </div>

//                         <div className="mt-4 flex flex-wrap gap-2">
//                           {cs.metrics.slice(0, 3).map((m) => (
//                             <MetricPill key={m.label} label={m.label} value={m.value} />
//                           ))}
//                         </div>

//                         <div className="mt-5 text-sm text-zinc-200">
//                           <span className="inline-flex items-center gap-2">
//                             View case study{" "}
//                             <span className="transition group-hover:translate-x-0.5">→</span>
//                           </span>
//                         </div>
//                       </div>
//                     </motion.button>
//                   );
//                 })}
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {active ? (
//           <motion.div
//             className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6 md:py-10"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             {/* Backdrop */}
//             <motion.button
//               aria-label="Close"
//               className="absolute inset-0 bg-black/70"
//               onClick={closeModal}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />

//             <motion.div
//               className={cn(
//                 "relative z-[81] w-full max-w-4xl rounded-3xl border border-white/10",
//                 "bg-[#0b0b0d] shadow-[0_0_60px_rgba(0,0,0,0.85)]",
//                 "max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-4rem)]",
//                 "flex flex-col overflow-hidden"
//               )}
//               initial={{ opacity: 0, scale: 0.96, y: 12 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.97, y: 10 }}
//               transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
//             >
//               {/* Close */}
//               <button
//                 onClick={closeModal}
//                 className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
//                 aria-label="Close"
//               >
//                 <X className="h-5 w-5" />
//               </button>

//               {/* Scroll container */}
//               <div className="cs-scroll flex-1 min-h-0 overflow-y-scroll pr-2">
//                 {/* Hero image */}
//                 <div className="relative h-[240px] w-full md:h-[280px]">
//                   {(() => {
//                     const heroCover = pickCover(active, activeGroupKey);
//                     const heroPos = pickPos(active, activeGroupKey);

//                     return heroCover ? (
//                       <Image
//                         src={heroCover}
//                         alt={active.title}
//                         fill
//                         className="object-cover"
//                         style={{ objectPosition: heroPos ?? "50% 50%" }} // ✅ key fix for cut-off
//                         sizes="(max-width: 1024px) 100vw, 900px"
//                       />
//                     ) : (
//                       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.04),transparent_60%)]" />
//                     );
//                   })()}

//                   <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.15)_100%)]" />

//                   <div className="absolute bottom-0 left-0 right-0 p-6">
//                     <h3 className="text-2xl md:text-3xl font-semibold text-white">
//                       {active.title}
//                     </h3>
//                     <p className="mt-2 text-sm md:text-base text-zinc-300 max-w-3xl">
//                       {active.subtitle}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 md:p-7">
//                   <div className="flex flex-wrap gap-2">
//                     {active.metrics.map((m) => (
//                       <MetricPill key={m.label} label={m.label} value={m.value} />
//                     ))}
//                   </div>

//                   <p className="mt-5 text-sm md:text-base text-zinc-300 leading-relaxed">
//                     {active.overview}
//                   </p>

//                   <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5">
//                     <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//                       <div className="text-xs tracking-widest text-zinc-400 mb-3">
//                         CHALLENGE
//                       </div>
//                       <ul className="space-y-2 text-sm text-zinc-200">
//                         {active.challenge.map((x, i) => (
//                           <li key={i} className="leading-relaxed">
//                             • {x}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//                       <div className="text-xs tracking-widest text-zinc-400 mb-3">
//                         APPROACH
//                       </div>
//                       <ul className="space-y-2 text-sm text-zinc-200">
//                         {active.approach.map((x, i) => (
//                           <li key={i} className="leading-relaxed">
//                             • {x}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//                       <div className="text-xs tracking-widest text-zinc-400 mb-3">
//                         RESULTS
//                       </div>
//                       <ul className="space-y-2 text-sm text-zinc-200">
//                         {active.results.map((x, i) => (
//                           <li key={i} className="leading-relaxed">
//                             • {x}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>

//                   {active.stack?.length ? (
//                     <div className="mt-6">
//                       <div className="text-xs tracking-widest text-zinc-400 mb-2">
//                         STACK
//                       </div>
//                       <div className="flex flex-wrap gap-2">
//                         {active.stack.map((s) => (
//                           <span
//                             key={s}
//                             className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
//                           >
//                             {s}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   ) : null}

//                   {/* CTA */}
//                   <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between rounded-2xl border border-white/10 bg-white/5 p-5">
//                     <div>
//                       <div className="text-sm font-medium text-white">
//                         Want similar results?
//                       </div>
//                       <div className="text-xs text-zinc-300 mt-1">
//                         We’ll map the scope, timeline and rollout plan for your environment.
//                       </div>
//                     </div>

//                     <a
//                       href="/contact"
//                       className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-zinc-100 transition"
//                     >
//                       Contact Sales
//                     </a>
//                   </div>

//                   <div className="h-2" />
//                 </div>
//               </div>

//               {/* Custom scrollbar */}
//               <style jsx>{`
//                 .cs-scroll {
//                   scrollbar-width: thin;
//                   scrollbar-color: rgba(255, 255, 255, 0.28) rgba(255, 255, 255, 0.08);
//                 }
//                 .cs-scroll::-webkit-scrollbar {
//                   width: 10px;
//                 }
//                 .cs-scroll::-webkit-scrollbar-track {
//                   background: rgba(255, 255, 255, 0.08);
//                   border-left: 1px solid rgba(255, 255, 255, 0.10);
//                 }
//                 .cs-scroll::-webkit-scrollbar-thumb {
//                   background: rgba(255, 255, 255, 0.28);
//                   border-radius: 999px;
//                   border: 2px solid rgba(11, 11, 13, 0.9);
//                 }
//                 .cs-scroll::-webkit-scrollbar-thumb:hover {
//                   background: rgba(255, 255, 255, 0.38);
//                 }
//               `}</style>
//             </motion.div>
//           </motion.div>
//         ) : null}
//       </AnimatePresence>
//     </div>
//   );
// }


"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import type { CaseStudy } from "./caseStudies.data";
import { SOLUTIONS, VERTICALS } from "./caseStudies.data";

type Mode = "verticals" | "solutions";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200">
      <span className="text-zinc-400">{label}</span>
      <span className="text-zinc-100">{value}</span>
    </span>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="flex items-center gap-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-white">{title}</h3>
        <div className="h-px flex-1 bg-white/10" />
      </div>
    </div>
  );
}

function CoverBlock({
  cover,
  alt,
  pos,
}: {
  cover?: string | StaticImageData | null;
  alt: string;
  pos?: string;
}) {
  if (!cover) {
    return (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.55),rgba(0,0,0,0.85))]" />
      </div>
    );
  }

  return (
    <>
      <Image
        src={cover}
        alt={alt}
        fill
        className="object-cover opacity-95"
        style={{ objectPosition: pos || "center" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.15)_55%,rgba(0,0,0,0.05)_100%)]" />
    </>
  );
}

export default function CaseStudiesGrid({ items }: { items: CaseStudy[] }) {
  const [mode, setMode] = useState<Mode>("verticals");
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = useMemo(
    () => items.find((i) => i.id === activeId) || null,
    [items, activeId]
  );

  const groups = useMemo(() => {
    if (mode === "verticals") {
      return VERTICALS.map((v) => ({
        key: v,
        title: v,
        items: items.filter(
          (x) => (x.showInVerticals ?? true) && (x.verticals ?? []).includes(v)
        ),
      })).filter((g) => g.items.length > 0);
    }

    return SOLUTIONS.map((s) => ({
      key: s,
      title: s,
      items: items.filter(
        (x) => (x.showInSolutions ?? true) && (x.solutions ?? []).includes(s)
      ),
    })).filter((g) => g.items.length > 0);
  }, [items, mode]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <div className="relative">
      {/* Toggle */}
      <div className="mx-auto mb-10 max-w-[1200px]">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1">
          <button
            onClick={() => setMode("verticals")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              mode === "verticals"
                ? "bg-white text-black"
                : "text-zinc-200 hover:bg-white/10"
            )}
          >
            Verticals
          </button>
          <button
            onClick={() => setMode("solutions")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              mode === "solutions"
                ? "bg-white text-black"
                : "text-zinc-200 hover:bg-white/10"
            )}
          >
            Solutions
          </button>
        </div>
      </div>

      {/* Grouped sections */}
      <div className="space-y-14">
        {groups.map((g) => (
          <section key={g.key} className="space-y-6">
            <SectionHeader title={g.title} />

            <div className="mx-auto max-w-[1200px]">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {g.items.map((cs, idx) => (
                  <motion.button
                    key={cs.id}
                    onClick={() => setActiveId(cs.id)}
                    className={cn(
                      "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] text-left",
                      "shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:bg-white/[0.06] transition"
                    )}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.55,
                      delay: idx * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* Cover */}
                    <div className="relative h-[210px] w-full">
                      <CoverBlock cover={cs.cover} alt={cs.title} pos={cs.coverPos} />
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <div className="text-zinc-100 font-semibold text-lg leading-snug">
                        {cs.title}
                      </div>
                      <div className="mt-2 text-sm text-zinc-300 leading-relaxed">
                        {cs.subtitle}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {cs.metrics.slice(0, 3).map((m) => (
                          <MetricPill key={m.label} label={m.label} value={m.value} />
                        ))}
                      </div>

                      <div className="mt-5 text-sm text-zinc-200">
                        <span className="inline-flex items-center gap-2">
                          View case study{" "}
                          <span className="transition group-hover:translate-x-0.5">→</span>
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6 md:py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.button
              aria-label="Close"
              className="absolute inset-0 bg-black/70"
              onClick={() => setActiveId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className={cn(
                "relative z-[81] w-full max-w-4xl rounded-3xl border border-white/10",
                "bg-[#0b0b0d] shadow-[0_0_60px_rgba(0,0,0,0.85)]",
                "max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-4rem)]",
                "flex flex-col overflow-hidden"
              )}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Close */}
              <button
                onClick={() => setActiveId(null)}
                className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Scroll container */}
              <div className="cs-scroll flex-1 min-h-0 overflow-y-scroll pr-2">
                {/* Hero image */}
                <div className="relative h-[240px] w-full md:h-[280px]">
                  {active.cover ? (
                    <Image
                      src={active.cover}
                      alt={active.title}
                      fill
                      className="object-cover"
                      style={{ objectPosition: active.coverPos || "center" }}
                      sizes="(max-width: 1024px) 100vw, 900px"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.04),transparent_60%)]" />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.15)_100%)]" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                      {active.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-zinc-300 max-w-3xl">
                      {active.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  <div className="flex flex-wrap gap-2">
                    {active.metrics.map((m) => (
                      <MetricPill key={m.label} label={m.label} value={m.value} />
                    ))}
                  </div>

                  <p className="mt-5 text-sm md:text-base text-zinc-300 leading-relaxed">
                    {active.overview}
                  </p>

                  <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="text-xs tracking-widest text-zinc-400 mb-3">
                        CHALLENGE
                      </div>
                      <ul className="space-y-2 text-sm text-zinc-200">
                        {active.challenge.map((x, i) => (
                          <li key={i} className="leading-relaxed">
                            • {x}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="text-xs tracking-widest text-zinc-400 mb-3">
                        APPROACH
                      </div>
                      <ul className="space-y-2 text-sm text-zinc-200">
                        {active.approach.map((x, i) => (
                          <li key={i} className="leading-relaxed">
                            • {x}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="text-xs tracking-widest text-zinc-400 mb-3">
                        RESULTS
                      </div>
                      <ul className="space-y-2 text-sm text-zinc-200">
                        {active.results.map((x, i) => (
                          <li key={i} className="leading-relaxed">
                            • {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {active.stack?.length ? (
                    <div className="mt-6">
                      <div className="text-xs tracking-widest text-zinc-400 mb-2">
                        STACK
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {active.stack.map((s) => (
                          <span
                            key={s}
                            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {/* CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div>
                      <div className="text-sm font-medium text-white">
                        Want similar results?
                      </div>
                      <div className="text-xs text-zinc-300 mt-1">
                        We’ll map the scope, timeline and rollout plan for your environment.
                      </div>
                    </div>

                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-zinc-100 transition"
                    >
                      Contact Sales
                    </a>
                  </div>

                  <div className="h-2" />
                </div>
              </div>

              {/* Scrollbar */}
              <style jsx>{`
                .cs-scroll {
                  scrollbar-width: thin;
                  scrollbar-color: rgba(255, 255, 255, 0.28) rgba(255, 255, 255, 0.08);
                }
                .cs-scroll::-webkit-scrollbar {
                  width: 10px;
                }
                .cs-scroll::-webkit-scrollbar-track {
                  background: rgba(255, 255, 255, 0.08);
                  border-left: 1px solid rgba(255, 255, 255, 0.10);
                }
                .cs-scroll::-webkit-scrollbar-thumb {
                  background: rgba(255, 255, 255, 0.28);
                  border-radius: 999px;
                  border: 2px solid rgba(11, 11, 13, 0.9);
                }
                .cs-scroll::-webkit-scrollbar-thumb:hover {
                  background: rgba(255, 255, 255, 0.38);
                }
              `}</style>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
