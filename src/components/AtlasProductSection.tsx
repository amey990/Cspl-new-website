'use client';

import { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion';

import AtlasImage from '../../assets/Atlas.png';

export default function AtlasGrid() {
  // --- 3D hover for BIG hero image only -------------------------
  const heroRef = useRef<HTMLDivElement | null>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);

  // Smooth the motion values
  const springX = useSpring(mvX, { stiffness: 150, damping: 18, mass: 0.4 });
  const springY = useSpring(mvY, { stiffness: 150, damping: 18, mass: 0.4 });

  // Map to rotations
  const rotateX = useTransform(springY, [-1, 1], [10, -10]);
  const rotateY = useTransform(springX, [-1, 1], [-10, 10]);

  const handleHeroMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1

    // normalize to -1..1
    mvX.set(x * 2 - 1);
    mvY.set(y * 2 - 1);
  };

  const handleHeroLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return (
    <section className="relative -mt-20 w-full overflow-hidden bg-[#010101]">
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

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-6 pt-28 pb-32">
        {/* TOP: HERO IMAGE + TITLE */}
        <div className="flex flex-col items-center justify-center pb-16">
          <motion.div
            ref={heroRef}
            className="relative w-full max-w-5xl cursor-pointer rounded-[18px] border border-white/10 bg-gradient-to-b from-white/8 via-white/3 to-black/60 shadow-[0_36px_120px_rgba(0,0,0,0.9)]"
            onMouseMove={handleHeroMove}
            onMouseLeave={handleHeroLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="overflow-hidden rounded-[16px]">
              <Image
                src={AtlasImage}
                alt="Atlas project management dashboard"
                className="w-full"
                priority
              />
            </div>

            {/* subtle inner highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-gradient-to-tr from-white/10 via-transparent to-white/5 mix-blend-screen" />
          </motion.div>

          {/* Title stays ABOVE everything and never goes “under” the image */}
          <div className="relative z-20 -mt-15 text-center">
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
          </div>
        </div>

        {/* BOTTOM: STATIC CARD + FEATURES + WATCH DEMO */}
        <div className="mt-10 grid items-start gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {/* LEFT: smaller card (no 3D hover, just tiny lift) */}
          <motion.div
            className="relative w-full max-w-xl rounded-[18px] border border-white/10 bg-black/60 shadow-[0_30px_80px_rgba(0,0,0,0.85)]"
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          >
            <div className="overflow-hidden rounded-[16px]">
              <Image
                src={AtlasImage}
                alt="Atlas project grid view"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* RIGHT: KEY FEATURES + WATCH DEMO BUTTON */}
          <div className="space-y-6 text-left md:pl-4">
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

            <ul className="grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Grid-level visibility across all productions and venues.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>
                  Real-time status for every role, from studio ops to field teams.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Templates for recurring shows, events and channel grids.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>
                  Built for high-volume media operations that can’t miss a go-live.
                </span>
              </li>
            </ul>

            {/* Watch demo on the RIGHT */}
            <div className="mt-8 flex justify-end">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#d7ff1f] px-8 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(215,255,31,0.35)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]">
                Watch demo
                <span className="text-lg">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
