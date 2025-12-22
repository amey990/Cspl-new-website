'use client';

import { motion, cubicBezier } from 'framer-motion';
import {
  Video,
  Mic2,
  Tv,
  Presentation,
  Users,
  RadioTower,
  SlidersHorizontal,
  Cast,
  Building2,
} from 'lucide-react';
import Image from 'next/image';

// TODO: replace with your real high-res AV visual
// e.g. '../../../assets/solutions/audio-video-hero.png'
import AudioVideoHero from '../../../assets/CNMS_dummy.jpg';

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

type Tone = 'emerald' | 'sky' | 'fuchsia' | 'amber';

const toneStyles: Record<
  Tone,
  {
    dot: string;
    pill: string;
  }
> = {
  emerald: {
    dot: 'bg-emerald-400',
    pill: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-100',
  },
  sky: {
    dot: 'bg-sky-400',
    pill: 'border-sky-400/40 bg-sky-400/10 text-sky-100',
  },
  fuchsia: {
    dot: 'bg-fuchsia-400',
    pill: 'border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-100',
  },
  amber: {
    dot: 'bg-amber-400',
    pill: 'border-amber-400/40 bg-amber-400/10 text-amber-100',
  },
};

function Pill({
  tone,
  label,
  icon,
}: {
  tone: Tone;
  label: string;
  icon?: React.ReactNode;
}) {
  const styles = toneStyles[tone];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.2em] ${styles.pill}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
      {icon && <span className="text-[13px]">{icon}</span>}
      <span>{label}</span>
    </span>
  );
}

function MetricCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,1)]">
      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-[11px] text-slate-500">{hint}</p>
    </div>
  );
}

export default function AudioVideoServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at top, rgba(236,72,153,0.25), transparent 55%),
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '900px 900px, 80px 80px, 80px 80px',
          backgroundPosition: 'top center, center, center',
        }}
      />

      <div className="relative z-10 pb-28 pt-24">
        {/* ---------------------------------------------------------- */}
        {/* HERO                                                       */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="grid gap-10 md:grid-cols-[1.25fr,1fr] md:items-center"
          >
            {/* Left: copy */}
            <div>
              <Pill
                tone="fuchsia"
                label="Audio & Video Services · Solution"
                icon={<Video className="h-3.5 w-3.5" />}
              />

              <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
                Spaces that sound clear
                <span className="block text-fuchsia-300">
                  and look broadcast-ready.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                We deliver end-to-end AV solutions—from concept and acoustics to
                control systems and streaming—so every meeting, town hall or
                live event feels professional, in-room and online.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
                <MetricCard
                  label="Typical environments"
                  value="Boardrooms · Studios · Auditoriums"
                  hint="Corporate, broadcast and education spaces with hybrid audiences."
                />
                <MetricCard
                  label="Delivery formats"
                  value="In-room · Hybrid · Live streaming"
                  hint="Designed around your platforms: Teams, Zoom, Webex, custom OTT."
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-[11px]">
                <Pill
                  tone="sky"
                  label="High-quality conferencing"
                  icon={<Users className="h-3.5 w-3.5" />}
                />
                <Pill
                  tone="emerald"
                  label="Boardrooms & auditoriums"
                  icon={<Presentation className="h-3.5 w-3.5" />}
                />
                <Pill
                  tone="amber"
                  label="Live streaming & events"
                  icon={<RadioTower className="h-3.5 w-3.5" />}
                />
              </div>
            </div>

            {/* Right: visual */}
            <motion.div
              {...fadeIn}
              className="relative flex items-center justify-center"
            >
              <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-fuchsia-500/30 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-sky-400/30 blur-3xl" />

              <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 via-black to-black p-5 shadow-[0_26px_100px_rgba(0,0,0,1)]">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80">
                  {/* Desktop image – replace with real asset */}
                  <div className="hidden aspect-[16/10] items-center justify-center md:flex">
                    <Image
                      src={AudioVideoHero}
                      alt="Modern boardroom and auditorium AV setup"
                      className="h-full w-full object-cover opacity-95"
                    />
                  </div>

                  {/* Mobile schematic */}
                  <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 px-4 text-center text-xs text-slate-300 md:hidden">
                    <div className="flex gap-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-fuchsia-400/70 bg-slate-950">
                        <Mic2 className="h-6 w-6 text-fuchsia-100" />
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/70 bg-slate-950">
                        <Video className="h-6 w-6 text-sky-100" />
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/70 bg-slate-950">
                        <Tv className="h-6 w-6 text-emerald-100" />
                      </div>
                    </div>
                    <p className="max-w-[16rem] text-[12px] leading-relaxed text-slate-400">
                      Microphones, cameras and displays tuned as one system—so
                      participants focus on the content, not the setup.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1">
                    <SlidersHorizontal className="h-3.5 w-3.5 text-fuchsia-300" />
                    DSP-based audio processing &amp; echo cancellation
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1">
                    <Cast className="h-3.5 w-3.5 text-sky-300" />
                    Multi-screen, multi-camera presentation workflows
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* CORE CAPABILITIES                                         */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xl font-semibold md:text-2xl">
              AV that matches how your teams actually communicate.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              Whether it&apos;s a quick stand-up, a board review or a
              pan-India town hall, we design AV to be reliable, intuitive and
              repeatable—no &quot;can you hear me now?&quot; moments.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* End-to-end AV solutions */}
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-fuchsia-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-fuchsia-200">
                <Tv className="h-3.5 w-3.5" />
                End-to-end AV
              </div>
              <p className="text-sm font-medium text-white">
                Complete AV stacks for corporate, broadcast and education.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                From displays, cameras and microphones to control processors,
                cabling and racks, we design systems as a single, integrated
                experience.
              </p>
            </div>

            {/* Conferencing setups */}
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-200">
                <Users className="h-3.5 w-3.5" />
                Conferencing
              </div>
              <p className="text-sm font-medium text-white">
                High-quality audio &amp; video conferencing.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Room kits, ceiling microphones, tracking cameras and acoustic
                treatment for remote collaboration that feels natural and
                fatigue-free.
              </p>
            </div>

            {/* Boardrooms & auditoriums */}
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                <Presentation className="h-3.5 w-3.5" />
                Spaces
              </div>
              <p className="text-sm font-medium text-white">
                Boardrooms, auditoriums &amp; classrooms.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Custom-designed AV for CXO rooms, lecture halls and training
                spaces with flexible layouts, assisted listening and simple
                touch-panel control.
              </p>
            </div>

            {/* Live streaming */}
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
                <RadioTower className="h-3.5 w-3.5" />
                Live streaming
              </div>
              <p className="text-sm font-medium text-white">
                Production &amp; streaming workflows.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Multi-camera switching, graphics, recording and streaming chains
                for internal town halls, events and public broadcasts.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* AV SIGNAL FLOW DIAGRAM                                    */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="rounded-[32px] border border-fuchsia-500/25 bg-gradient-to-b from-slate-950/90 via-slate-950 to-black px-6 py-8 shadow-[0_28px_120px_rgba(0,0,0,1)] md:px-10 md:py-10"
          >
            <div className="grid gap-10 md:grid-cols-[1.35fr,1fr] md:items-center">
              {/* Diagram */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 px-6 py-8">
                {/* Centre: AV brain */}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-fuchsia-400/70 bg-slate-950 shadow-[0_18px_80px_rgba(0,0,0,1)]">
                  <SlidersHorizontal className="h-7 w-7 text-fuchsia-50" />
                </div>

                {/* Rings */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-500/35" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-500/15" />

                {/* Sources */}
                <div className="absolute left-4 top-6 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/85 px-3 py-2">
                    <Mic2 className="h-3.5 w-3.5 text-emerald-300" />
                    <span>Ceiling &amp; table microphones</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    <Video className="h-3.5 w-3.5 text-sky-300" />
                    <span>PTZ &amp; fixed cameras</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    <Cast className="h-3.5 w-3.5 text-amber-300" />
                    <span>Laptops &amp; content inputs</span>
                  </div>
                </div>

                {/* Outputs */}
                <div className="absolute right-4 top-8 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/85 px-3 py-2">
                    <Tv className="h-3.5 w-3.5 text-fuchsia-300" />
                    <span>LED walls &amp; projectors</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    <Users className="h-3.5 w-3.5 text-sky-300" />
                    <span>Remote participants</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    <RadioTower className="h-3.5 w-3.5 text-emerald-300" />
                    <span>Recording &amp; live streams</span>
                  </div>
                </div>

                {/* Bottom notes */}
                <div className="absolute left-1/2 bottom-4 flex -translate-x-1/2 flex-wrap justify-center gap-3 text-xs text-slate-200">
                  <div className="rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    Unified control for audio levels, camera presets, lighting
                    and inputs.
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    Echo cancellation, noise reduction and room tuning for
                    consistent clarity.
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="space-y-4 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  One AV signal path, many experiences.
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                  We design the full signal chain—from the first microphone to
                  the final recording—so every hop is predictable, monitored and
                  easy to support.
                </p>
                <ul className="space-y-2 text-xs leading-relaxed text-slate-300 md:text-sm">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                    <span>
                      Clear mapping of sources, processing and outputs to avoid
                      &quot;mystery cables&quot; and undocumented patchwork.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>
                      DSP-based processing for echo cancellation, automatic mic
                      mixing and room equalisation.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                    <span>
                      Integration with your UC platforms (Teams, Zoom, Webex)
                      and broadcast / streaming tools.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                    <span>
                      Simple control surfaces—touch panels or keypads—so
                      presenters don&apos;t wrestle with remotes.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* ENGAGEMENT MODEL                                          */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xl font-semibold md:text-2xl">
              How we deliver AV projects that age well.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              From a single boardroom to a campus-wide AV refresh, we focus on
              standardisation, documentation and ease of use.
            </p>
          </motion.div>

          <motion.ol
            {...fadeUp}
            className="mt-8 grid gap-4 text-sm text-slate-200 md:grid-cols-4"
          >
            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-500/20 text-xs font-semibold text-fuchsia-200">
                01
              </span>
              <p className="text-sm font-medium text-white">
                Discovery &amp; room audits.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Understand how rooms are used today—audience sizes, content
                types, existing gear, acoustics and pain points.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-500/20 text-xs font-semibold text-fuchsia-200">
                02
              </span>
              <p className="text-sm font-medium text-white">
                Design &amp; simulation.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                AV schematics, equipment schedules, cable layouts and control
                flows, tuned to budgets and standards.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-500/20 text-xs font-semibold text-fuchsia-200">
                03
              </span>
              <p className="text-sm font-medium text-white">
                Implementation &amp; commissioning.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Rack build, wiring, programming and end-to-end testing, with
                acceptance criteria agreed upfront.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-500/20 text-xs font-semibold text-fuchsia-200">
                04
              </span>
              <p className="text-sm font-medium text-white">
                Training &amp; ongoing support.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Playbooks, quick-reference guides and remote/onsite support so
                facilities and IT teams can keep rooms running smoothly.
              </p>
            </li>
          </motion.ol>
        </section>
      </div>
    </main>
  );
}
