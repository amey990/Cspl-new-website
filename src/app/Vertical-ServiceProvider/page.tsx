'use client';

import { motion, cubicBezier } from 'framer-motion';
import Image from 'next/image';
import TelecomImage from '../../../assets/Telco.png';
const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

export default function ServiceProviderSection() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-6 md:mt-24 md:px-10 lg:px-16">
      {/* TOP GRID: NARRATIVE + VISUAL */}
      <motion.div
        {...fadeUp}
        className="grid gap-10 md:grid-cols-[1.35fr,1fr]"
      >
        {/* LEFT: MAIN COPY */}
        <div>
          <p className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-200">
            Service Provider · Vertical
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
            Stay ahead of rapid change in telecom.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
            Telecom companies in India and globally are seeing transition in terms of
            technology, shifts in customer preferences, ARPUs and services offered.
            Competition today demands rapid project execution, multi-location
            deployments and consistently high customer satisfaction at every engagement.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
            Commedia works with some of the best global telecom service providers to
            help them implement networks and programs at scale. We stay close to their
            requirements on the ground, engaging through long-running projects and
            delivering solutions that actually match how their operations run.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Where we help
            </p>
            <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>Setting up connectivity networks and NOCs.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    Installation, testing and commissioning of servers and systems.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>Network and system upgrades, transformation projects.</span>
                </li>
              </ul>

              <ul className="mt-3 space-y-2 md:mt-0">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    Managed services for telecom infrastructure and migration work.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    Software for network management, billing, analytics &amp; OSS tools.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT: IMAGE PLACEHOLDER CARD */}
        <motion.div
          {...fadeIn}
          className="flex items-center justify-center md:justify-end"
        >
          <div className="relative w-full max-w-md">
            {/* Glow accents */}
            <div className="pointer-events-none absolute -left-6 top-0 h-24 w-24 rounded-full bg-sky-500/15 blur-2xl" />
            <div className="pointer-events-none absolute -right-10 bottom-4 h-28 w-28 rounded-full bg-emerald-400/20 blur-3xl" />

            {/* Main placeholder card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
              {/* Placeholder image window */}
              <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/80">
                <div className="flex aspect-[16/10] items-center justify-center">
                  <Image
    src={TelecomImage}
    alt="Government Operations"
    className="h-full w-full object-contain"
    priority
  />
                </div>
              </div>

              {/* Overlay chips */}
              <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
                <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>NOC visibility</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/5 px-3 py-1 text-sky-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Roll-out at scale</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/5 px-3 py-1 text-fuchsia-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                  <span>AI-assisted operations</span>
                </div>
              </div>

              {/* Mini stat strip */}
              <div className="mt-4 flex items-center justify-between rounded-xl bg-black/50 px-3 py-2 text-[11px] text-zinc-300">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    Typical engagement
                  </p>
                  <p className="text-xs text-zinc-100">
                    Multi-circle deployments · 6–18 months
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    Focus
                  </p>
                  <p className="text-xs text-zinc-100">Uptime &amp; customer experience</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
