'use client';
import Image from 'next/image';
import { motion, cubicBezier } from 'framer-motion';

import AtlasImage from '../../assets/Atlas.png';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

export default function AtlasGrid() {
  return (
    <section className="relative -mt-28 min-h-[190vh] w-full overflow-hidden bg-[#010101]">
      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-6 pt-20 pb-12">
        {/* ---------- TOP: HERO CHIP + BIG IMAGE + ATLAS TEXT (Effect 1) ---------- */}

        {/* Chip – same pattern as homepage chip */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mb-5 flex items-center gap-2 self-start pl-12 text-sm text-slate-200"
        >
          <span className="h-2.5 w-4 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(190,242,100,0.9)]" />
          <span className="text-[15px] text-slate-100">Project management</span>
          <span className="text-lg leading-none text-slate-500">›</span>
        </motion.div>

        {/* Big hero image – Effect 1 (fade / slide / scale / blur) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="relative mx-auto w-full max-w-5xl"
        >
          <Image
            src={AtlasImage}
            alt="Atlas project management dashboard"
            className="w-full rounded-[12px] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.9)]"
            priority
          />
        </motion.div>

        {/* Giant “Atlas” text – simple fade up, slightly delayed */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.05 }}
          // className="-mt-19 text-center"
          className="-mt-19 text-center relative z-10 pointer-events-none"

        >
          <h2
            className="text-[152px] leading-none font-semibold tracking-tight text-transparent md:text-[150px]"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, #f9fafb 0%, #d1d5db 35%, #9ca3af 55%, #020617 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            Atlas
          </h2>
        </motion.div>

        {/* ---------- BOTTOM: IMAGE + TEXT SECTION (Effect 2 like Smart Helmet) ---------- */}
        <div className="mt-25 grid items-center gap-12 md:grid-cols-2">
          {/* LEFT: Image – slide in from left (like helmet image) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-xl">
              <div className="relative mx-auto w-full rounded-[10px] border border-white/12 bg-gradient-to-b from-white/8 via-white/3 to-black/60 shadow-[0_40px_120px_rgba(0,0,0,0.9)]">
                <div className="overflow-hidden rounded-[16px]">
                  <Image
                    src={AtlasImage}
                    alt="Atlas project grid view"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Text + Watch demo – slide in from right (like helmet text) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="space-y-6 text-left md:pl-4"
          >
            <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime-300">
              Atlas · Project Management
            </p>

            <h3 className="text-3xl font-semibold text-white md:text-4xl">
              Keep every media project on the same timeline.
            </h3>

            <p className="max-w-xl text-sm text-slate-300/80 md:text-base">
              Atlas gives broadcast and streaming teams a single live grid to
              plan, assign and track every activity across shows, channels and
              locations.
            </p>

            <div className="mt-4 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Grid-level visibility across all productions and venues.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>
                  Real-time status for every role, from studio ops to field teams.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Templates for recurring shows, events and channel grids.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>
                  Built for high-volume media operations that can’t miss a go-live.
                </span>
              </div>
            </div>

            <div className="mt-8 flex justify-start md:justify-end">
              <button
                type="button"
                onClick={() => {
  window.dispatchEvent(
    new CustomEvent('commedia:open-demo', {
      detail: {
        url: 'https://www.youtube.com/watch?v=M7lc1UVf-VE', // placeholder now
        title: 'Atlas — Project Management',                 // optional
      },
    })
  );
}}
                className="group inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3 text-sm font-medium text-black shadow-[0_0_45px_rgba(190,242,100,0.65)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Watch demo
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
