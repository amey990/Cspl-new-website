// // src/app/partners/page.tsx
// 'use client';

// import PartnersHeroField from '../../components/PartnersHeroField';

// export default function PartnersPage() {
//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
//       {/* global grid background like other pages */}
//       <div
//         className="pointer-events-none absolute inset-0 z-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: '80px 80px',
//           backgroundPosition: 'center',
//         }}
//       />

//       {/* HERO */}
//       <section className="relative z-10">
//         <PartnersHeroField />
//       </section>

//       {/* TODO: below this, we’ll add partner logos / tiers / content */}
//       <div className="relative z-10 pb-24">
//         {/* your existing partners content can go here later */}
//       </div>
//     </main>
//   );
// }


//pp//
// src/app/partners/page.tsx
'use client';

import Image from 'next/image';
import { motion, cubicBezier } from 'framer-motion';
import PartnersCubesField from '../../components/PartnersHeroField';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

// ---------------------------------------------------------------------------
// Partner logo config
// NOTE: update the `src` paths with your actual filenames.
// Suggested folder structure (under /public):
// /public/assets/partners/cloud-infra/...
// /public/assets/partners/broadcast-media/...
// /public/assets/partners/network-oems/...
// /public/assets/partners/system-integrators/...
// /public/assets/partners/analytics-ai/...
// ---------------------------------------------------------------------------

const partnerGroups = [
  {
    id: 'cloud-infra',
    label: 'Cloud & Infra',
    dotClass: 'bg-sky-400',
    badgeClass: 'border-sky-400/40 bg-sky-400/10 text-sky-100',
    logos: Array.from({ length: 12 }, (_, i) => ({
      name: `Cloud & Infra Partner ${i + 1}`,
      // ⬇️ change these to your real logo filenames
      src: `/assets/partners/cloud-infra/cloud-${i + 1}.png`,
    })),
  },
  {
    id: 'broadcast-media',
    label: 'Broadcast & Media',
    dotClass: 'bg-fuchsia-400',
    badgeClass: 'border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-100',
    logos: Array.from({ length: 12 }, (_, i) => ({
      name: `Broadcast & Media Partner ${i + 1}`,
      src: `/assets/partners/broadcast-media/broadcast-${i + 1}.png`,
    })),
  },
  {
    id: 'network-oems',
    label: 'Network OEMs',
    dotClass: 'bg-emerald-400',
    badgeClass: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-100',
    logos: Array.from({ length: 12 }, (_, i) => ({
      name: `Network OEM ${i + 1}`,
      src: `/assets/partners/network-oems/oem-${i + 1}.png`,
    })),
  },
  {
    id: 'system-integrators',
    label: 'System Integrators',
    dotClass: 'bg-amber-300',
    badgeClass: 'border-amber-300/40 bg-amber-300/10 text-amber-50',
    logos: Array.from({ length: 12 }, (_, i) => ({
      name: `System Integrator ${i + 1}`,
      src: `/assets/partners/system-integrators/si-${i + 1}.png`,
    })),
  },
  {
    id: 'analytics-ai',
    label: 'Analytics & AI',
    dotClass: 'bg-cyan-300',
    badgeClass: 'border-cyan-300/40 bg-cyan-300/10 text-cyan-50',
    logos: Array.from({ length: 12 }, (_, i) => ({
      name: `Analytics & AI Partner ${i + 1}`,
      src: `/assets/partners/analytics-ai/ai-${i + 1}.png`,
    })),
  },
];

export default function PartnersPage() {
  return (
    <main className="relative min-h-screen bg-[#010101] text-white">
      {/* Hero (cubes + handshake + chips) */}
      <section>
        <PartnersCubesField />
      </section>

      {/* Subtle grid background for the rest of the page */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center',
        }}
      />

      {/* Partner logo sections */}
      <div className="relative z-10 pb-28 pt-10 md:pt-16">
        <section className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 space-y-16 md:space-y-20">
          {partnerGroups.map((group) => (
            <motion.div
              key={group.id}
              {...fadeUp}
              className="space-y-6 md:space-y-8"
            >
              {/* Section header */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${group.badgeClass}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${group.dotClass}`} />
                    {group.label}
                  </span>
                </div>
                <p className="max-w-xl text-xs text-slate-400 md:text-sm">
                  {/* You can tweak this helper copy per group if you want */}
                  Selected technology and go-to-market partners we collaborate with
                  in {group.label.toLowerCase()}.
                </p>
              </div>

              {/* Logo grid: 12 items → 3 rows × 4 cols on md+ */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {group.logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="group flex items-center justify-center rounded-2xl border border-white/8 bg-black/30 px-4 py-4 backdrop-blur-sm transition-transform duration-150 hover:-translate-y-1 hover:border-white/25"
                  >
                    <div className="relative flex w-full items-center justify-center">
                      {/* keep a consistent aspect so logos look neat */}
                      <div className="relative h-10 w-full max-w-[160px]">
                        <Image
                          src={logo.src}
                          alt={logo.name}
                          fill
                          sizes="160px"
                          className="object-contain opacity-80 transition-opacity group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}
