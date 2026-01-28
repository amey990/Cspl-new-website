'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, cubicBezier } from 'framer-motion';

import IndustryAnimation from '../../../assets/lottie/Industry.json'; // adjust path if needed


import HelmetHero from '../../../assets/Smart_H.png';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

import dynamic from 'next/dynamic';
import LaborAnimation from '../../../assets/lottie/Labor.json';
import HelmetImage from '../../../assets/Helmet.png';


const Lottie = dynamic(() => import('lottie-react'), { ssr: false });


const fadeUp = {
  initial: { opacity: 0, y: 24, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

const fadeIn = {
  initial: { opacity: 0, y: 16, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

function openDemo() {
  window.dispatchEvent(
    new CustomEvent('commedia:open-demo', {
      detail: {
        url: 'https://www.youtube.com/watch?v=M7lc1UVf-VE', // placeholder
        title: 'Smart Helmet — Demo',
      },
    })
  );
}



export default function SmartHelmetPage() {
  return (
    <main className="relative w-full overflow-hidden bg-[#010101]">
      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 pt-20 pb-24">
        {/* ------------------------------------------------------------------ */}
        {/* 0. TITLE BLOCK                                                      */}
        {/* ------------------------------------------------------------------ */}
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            Product · IoT
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Smart Helmet
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Advanced safety monitoring and communication for field teams.
          </p>
        </motion.div>

        {/* ------------------------------------------------------------------ */}
        {/* 1. HERO SECTION                                                     */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-16 mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:px-10 lg:px-16">
          {/* LEFT: Text */}
          <motion.div
            {...fadeUp}
            className="flex-1 space-y-6 md:max-w-md"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-yellow-300">
              <span className="h-2.5 w-4 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
              <span>Smart Helmet</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Streamline field safety with real-time sensing and alerts.
            </h2>

            <p className="max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
              Smart Helmet brings gas, motion and proximity sensing into a single device,
              streams readings to the cloud, and turns them into clear actions for your
              control room.
            </p>

            {/* vertical yellow bars like Products page */}
            <div className="space-y-4 text-sm text-slate-100/90">
              <div className="flex items-center gap-4">
                <span className="h-10 w-[2px] bg-yellow-400" />
                <span>Worker safety.</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-10 w-[2px] bg-yellow-400" />
                <span>Real-time monitoring.</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-10 w-[2px] bg-yellow-400" />
                <span>Instant alerts.</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-10 w-[2px] bg-yellow-400" />
                <span>Fast issue tracking.</span>
              </div>
            </div>

            <div className="pt-4">
             <button
  type="button"
  onClick={openDemo}
  className="group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm font-medium text-black shadow-[0_0_45px_rgba(250,204,21,0.75)] transition-transform duration-200 hover:-translate-y-0.5"
>
  Watch demo
  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs transition-transform group-hover:translate-x-0.5">
    ↗
  </span>
</button>

            </div>
          </motion.div>

          {/* RIGHT: Helmet hero image + floor grid (no card background) */}
          <motion.div
            {...fadeIn}
            className="relative flex-1 md:flex-[0.6]"
          >
            {/* 3D floor grid under the helmet */}
            <div
              className="pointer-events-none absolute inset-x-[-25%] -bottom-36 flex justify-center"
              style={{ perspective: '1400px' }}
            >
              <div
                style={{
                  width: '170%',
                  height: '320px',
                  backgroundImage:
                    'repeating-linear-gradient(0deg, rgba(148,163,184,0.22) 0px, rgba(148,163,184,0.55) 2px, transparent 2px, transparent 26px), ' +
                    'repeating-linear-gradient(90deg, rgba(148,163,184,0.22) 0px, rgba(148,163,184,0.55) 2px, transparent 2px, transparent 26px)',
                  transform: 'rotateX(68deg)',
                  transformOrigin: 'center top',
                  WebkitMaskImage:
                    'linear-gradient(to top, transparent 0%, black 18%, black 80%, transparent 100%)',
                  maskImage:
                    'linear-gradient(to top, transparent 0%, black 18%, black 80%, transparent 100%)',
                }}
              />
            </div>

            <Image
              src={HelmetHero}
              alt="Smart Helmet 3D visualization"
              className="relative z-10 w-full h-auto scale-110"
              priority
              quality={100}
            />
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 2. HOW IT WORKS                                                     */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-28 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT: Text */}
            <motion.div {...fadeUp}>
              <p className="inline-flex items-center rounded-full border border-yellow-400/40 bg-yellow-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-yellow-300">
                How it works
              </p>

              <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl">
                From on-helmet sensors to a live command center.
              </h2>

              <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
                Each helmet continuously reads environment and worker vitals, streams
                events to AWS, and feeds a live command center so your teams can act
                before incidents escalate.
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-100/90">
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  <div>
                    <div className="font-medium text-white">On-helmet sensors</div>
                    <div className="text-slate-300/80">
                      Gas, heart rate, proximity, motion and impact readings sampled in real time.
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  <div>
                    <div className="font-medium text-white">Secure edge gateway</div>
                    <div className="text-slate-300/80">
                      Encrypted data uplink over wireless networks from field sites.
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  <div>
                    <div className="font-medium text-white">AWS cloud pipeline</div>
                    <div className="text-slate-300/80">
                      Stream processing, enrichment and time-series storage for safety analytics.
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  <div>
                    <div className="font-medium text-white">Safety portal</div>
                    <div className="text-slate-300/80">
                      Dashboards, alerts and investigations in a single browser-based workspace.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Flow diagram mock */}
            <motion.div
              {...fadeIn}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-b from-[#141516] via-[#050506] to-black p-6 shadow-[0_36px_120px_rgba(0,0,0,0.95)]">
                {/* Helmet box */}
                <div className="rounded-xl border border-yellow-400/40 bg-black/70 px-4 py-3 shadow-[0_0_25px_rgba(250,204,21,0.35)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-yellow-300">
                    Device
                  </div>
                  <div className="mt-1 text-sm font-medium text-white">Smart Helmet</div>
                  <div className="mt-1 text-[11px] text-slate-300">
                    Sensors: gas · heart rate · proximity · motion
                  </div>
                </div>

                {/* Arrows */}
                <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-300">
                  <div className="h-px flex-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent" />
                  <span className="text-yellow-200/80">Encrypted telemetry</span>
                </div>

                {/* Cloud box */}
                <div className="mt-3 rounded-xl border border-sky-400/30 bg-sky-400/5 px-4 py-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                    AWS Cloud
                  </div>
                  <div className="mt-1 text-sm font-medium text-white">Ingest &amp; processing</div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-[11px] text-slate-300">
                    <div className="rounded-md bg-black/50 px-2 py-1">
                      IoT ingest
                    </div>
                    <div className="rounded-md bg-black/50 px-2 py-1">
                      Stream processing
                    </div>
                    <div className="rounded-md bg-black/50 px-2 py-1">
                      Time-series store
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-300">
                  <div className="h-px flex-1 bg-gradient-to-r from-sky-400 via-sky-300 to-transparent" />
                  <span className="text-sky-200/80">APIs &amp; events</span>
                </div>

                {/* Portal box */}
                <div className="mt-3 rounded-xl border border-white/15 bg-black/70 px-4 py-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Safety portal
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-[11px] text-slate-200">
                    <div className="rounded-md bg-white/5 px-2 py-1 text-center">
                      Live board
                    </div>
                    <div className="rounded-md bg-white/5 px-2 py-1 text-center">
                      Alert feed
                    </div>
                    <div className="rounded-md bg-white/5 px-2 py-1 text-center">
                      Incident view
                    </div>
                  </div>
                </div>

                {/* subtle bottom caption */}
                <div className="mt-4 text-[11px] text-slate-400">
                  Fully managed, scalable pipeline from device to dashboard.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 3. LIVE SAFETY FEED DASHBOARD                                      */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT: Dashboard mock */}
            <motion.div
              {...fadeIn}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-b from-[#171717] via-[#050505] to-black p-4 md:p-5 shadow-[0_40px_130px_rgba(0,0,0,1)]">
                {/* header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="h-5 w-28 rounded-full bg-zinc-800/80" />
                </div>

                <div className="grid grid-cols-12 gap-3">
                  {/* left map block */}
                  <div className="col-span-5 rounded-xl bg-zinc-900/80 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="h-3 w-14 rounded-md bg-zinc-700" />
                      <div className="h-3 w-10 rounded-md bg-zinc-800" />
                    </div>
                    <div className="h-32 rounded-lg bg-[radial-gradient(circle_at_20%_20%,rgba(74,222,128,0.45),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(250,204,21,0.5),transparent_55%)]" />
                    <div className="mt-3 flex justify-between text-[10px] text-zinc-400">
                      <span>Sites</span>
                      <span>Workers</span>
                      <span>Alerts</span>
                    </div>
                  </div>

                  {/* center alerts list */}
                  <div className="col-span-4 rounded-xl bg-zinc-900/70 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="h-3 w-16 rounded-md bg-zinc-700" />
                      <div className="h-3 w-8 rounded-md bg-zinc-800" />
                    </div>
                    <div className="space-y-1.5">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          // eslint-disable-next-line react/no-array-index-key
                          key={i}
                          className="flex items-center justify-between rounded-md bg-zinc-950/80 px-2 py-1.5"
                        >
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-red-400" />
                            <span className="h-3 w-20 rounded bg-zinc-800" />
                          </div>
                          <span className="h-3 w-10 rounded bg-zinc-900" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* right mini chart */}
                  <div className="col-span-3 rounded-xl bg-zinc-900/80 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="h-3 w-14 rounded-md bg-zinc-700" />
                      <div className="h-3 w-5 rounded-md bg-zinc-800" />
                    </div>
                    <div className="h-24 rounded-lg bg-[linear-gradient(to_top,rgba(39,39,42,0.9),transparent),repeating-linear-gradient(to_right,rgba(63,63,70,0.6)_0,rgba(63,63,70,0.6)_1px,transparent_1px,transparent_14px)] relative overflow-hidden">
                      <div className="absolute inset-x-2 bottom-2 flex items-end gap-1">
                        {[20, 40, 60, 45, 80, 50].map((h, i) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <div
                            key={i}
                            className="flex-1 rounded-t-full bg-gradient-to-t from-yellow-400 via-yellow-300 to-emerald-400"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[10px] text-zinc-400">
                  <span>Live safety feed</span>
                  <span>Updated few seconds ago</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Text */}
            <motion.div {...fadeUp}>
              <p className="inline-flex items-center rounded-full border border-yellow-400/40 bg-yellow-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-yellow-300">
                Live safety feed
              </p>

              <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl">
                See every worker&apos;s status in one live view.
              </h2>

              <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
                The Smart Helmet portal turns thousands of sensor readings into a simple live
                board. See which sites are green, which workers triggered alerts, and which
                events still need follow-up.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  <span>Live map of workers and sites with status colours.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  <span>Alert feed with severity, type and time since trigger.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  <span>Acknowledgement and escalation flows for supervisors.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  <span>Incident timelines to support audits and investigations.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 4. SENSOR SUITE GRID                                               */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="text-center"
          >
            <p className="inline-flex items-center rounded-full border border-yellow-400/40 bg-yellow-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-yellow-300">
              Sensor suite
            </p>
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white">
              A full safety lab inside every helmet.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-slate-300/85">
              Choose the sensors you need today and expand later as your safety program
              grows.
            </p>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: 'Gas & air quality',
                body: 'Detect flammable, toxic or oxygen-deficient environments before it is too late.',
              },
              {
                title: 'Heart rate & vitals',
                body: 'Spot fatigue, stress and medical events early with continuous vitals sensing.',
              },
              {
                title: 'Proximity & collision',
                body: 'Warn workers when they approach moving vehicles or restricted zones.',
              },
              {
                title: 'Fall & impact detection',
                body: 'Automatic alerts if a worker falls or experiences a heavy impact.',
              },
              {
                title: 'Noise monitoring',
                body: 'Track exposure to hazardous sound levels across shifts and sites.',
              },
              {
                title: 'Location beacons',
                body: 'Optional indoor positioning for tunnels, plants and multi-level facilities.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/3 via-black/40 to-black/80 p-5 shadow-[0_26px_90px_rgba(0,0,0,0.9)]"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-yellow-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-yellow-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  <span>SENSOR</span>
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300/85">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 5. WORKER VS CONTROL ROOM                                          */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <p className="inline-flex items-center rounded-full border border-yellow-400/40 bg-yellow-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-yellow-300">
              Experiences
            </p>
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white leading-tight max-w-3xl">
              Built for both the worker and the control room.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {/* Worker side */}
            <motion.div {...fadeIn}>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] via-[#020617] to-black p-5 shadow-[0_28px_90px_rgba(0,0,0,0.95)]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  On-helmet experience
                </h3>
                <p className="mt-3 text-sm text-slate-300/85">
                  The helmet keeps workers focused on the job, not on managing devices.
                </p>
                <div className="mt-5 space-y-3 text-sm text-slate-100/90">
                  <div className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    <span>Vibration and audio alerts for gas, fall or zone breaches.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    <span>One-touch panic button from the helmet itself.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    <span>Simple light indicators for connectivity and status.</span>
                  </div>
                </div>

                {/* simple figure mock */}
                             {/* helmet illustration */}
<div className="mt-6 flex items-end justify-center">
  <div className="relative">
    {/* soft yellow glow behind the helmet */}
    <div className="pointer-events-none absolute inset-0 translate-y-4 rounded-full bg-[radial-gradient(circle_at_50%_10%,rgba(250,204,21,0.6),transparent_65%)] blur-2xl opacity-70" />

    <Image
      src={HelmetImage}
      alt="Smart industrial safety helmet"
      className="relative z-10 h-28 w-auto md:h-32 drop-shadow-[0_0_32px_rgba(250,204,21,0.55)]"
      quality={100}
    />
  </div>
</div>

              </div>
            </motion.div>

            {/* Control room side */}
            <motion.div {...fadeIn}>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0b0b0c] via-[#020617] to-black p-5 shadow-[0_28px_90px_rgba(0,0,0,0.95)]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Control room experience
                </h3>
                <p className="mt-3 text-sm text-slate-300/85">
                  Supervisors get a clear picture of what&apos;s happening across sites.
                </p>

                <div className="mt-5 space-y-3 text-sm text-slate-100/90">
                  <div className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    <span>Live roster of helmets and workers online, by site and shift.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    <span>One-click drill-down into any worker&apos;s recent events.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    <span>Preconfigured views for HSE, operations and management.</span>
                  </div>
                </div>

                {/* stacked mini UI cards */}
                <div className="mt-6 grid grid-cols-2 gap-3 text-[11px] text-zinc-300">
                  <div className="rounded-lg bg-zinc-900/80 p-3">
                    <div className="mb-2 h-3 w-16 rounded-md bg-zinc-700" />
                    <div className="space-y-1.5">
                      <div className="h-3 w-full rounded bg-zinc-800" />
                      <div className="h-3 w-3/4 rounded bg-zinc-800/90" />
                      <div className="h-3 w-2/3 rounded bg-zinc-800/80" />
                    </div>
                  </div>
                  <div className="rounded-lg bg-zinc-900/80 p-3">
                    <div className="mb-2 h-3 w-16 rounded-md bg-zinc-700" />
                    <div className="h-20 rounded bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.45),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(250,204,21,0.55),transparent_55%)]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 6. AWS RELIABILITY / ARCHITECTURE                                  */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT: Architecture card – Helmet ➜ IoT Core ➜ DynamoDB ➜ Dashboard */}
            <motion.div
              {...fadeIn}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xl rounded-2xl border border-sky-400/30 bg-gradient-to-b from-[#020617] via-[#020617] to-black p-5 shadow-[0_32px_110px_rgba(0,0,0,1)]">
                {/* top bar */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-4 w-28 rounded-md bg-sky-400/40" />
                  <div className="h-4 w-12 rounded-md bg-zinc-800" />
                </div>

                {/* boxes row */}
                <div className="grid grid-cols-4 gap-3 text-[11px] text-slate-200">
                  {/* Helmets */}
                  <div className="col-span-1 rounded-lg border border-yellow-400/60 bg-black/80 p-3">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-yellow-300">
                      HELMETS
                    </div>
                    <div className="h-3 w-20 rounded bg-zinc-700" />
                    <div className="mt-2 h-3 w-14 rounded bg-zinc-800" />
                  </div>

                  {/* IoT Core */}
                  <div className="col-span-1 rounded-lg border border-sky-400/70 bg-sky-500/10 p-3">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-sky-300">
                      AWS IOT CORE
                    </div>
                    <div className="h-3 w-20 rounded bg-zinc-700" />
                    <div className="mt-2 h-3 w-16 rounded bg-zinc-800" />
                  </div>

                  {/* DynamoDB */}
                  <div className="col-span-1 rounded-lg border border-emerald-400/70 bg-emerald-500/10 p-3">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-300">
                      DYNAMODB
                    </div>
                    <div className="h-3 w-20 rounded bg-zinc-700" />
                    <div className="mt-2 h-3 w-16 rounded bg-zinc-800" />
                  </div>

                  {/* Dashboards */}
                  <div className="col-span-1 rounded-lg border border-white/30 bg-white/5 p-3">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-200">
                      SAFETY DASHBOARDS
                    </div>
                    <div className="h-3 w-20 rounded bg-zinc-700" />
                    <div className="mt-2 h-3 w-12 rounded bg-zinc-800" />
                  </div>
                </div>

                {/* flow line caption */}
                <div className="mt-5 space-y-1 text-[10px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-px flex-1 bg-gradient-to-r from-yellow-400 via-sky-400 to-emerald-400" />
                    <span>Helmet ➜ IoT Core ➜ DynamoDB ➜ Dashboards</span>
                  </div>
                  <div>Multi-tenant, role-based access and SSO-ready on a secure AWS backbone.</div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Text */}
            <motion.div {...fadeUp}>
              <p className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
                Cloud architecture
              </p>

              <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl">
                Powered by AWS for scale and reliability.
              </h2>

              <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
                Smart Helmet runs on a cloud-native architecture on AWS. Helmet telemetry is
                ingested through AWS IoT Core, stored in Amazon DynamoDB, and served into your
                safety dashboards in real time.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-100/90">
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Secure device ingest and bidirectional messaging via AWS IoT Core.</span>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>
                    Durable, low-latency storage of sensor readings and worker state in
                    Amazon DynamoDB.
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Real-time dashboards powered by APIs and DynamoDB streams.</span>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Role-based access control, SSO integration and audit-friendly logging.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 7. USE CASES                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="text-center"
          >
            <p className="inline-flex items-center rounded-full border border-yellow-400/40 bg-yellow-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-yellow-300">
              Industries
            </p>
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white">
              Designed for high-risk, distributed operations.
            </h2>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                title: 'Construction & infrastructure',
                body: 'High-rise projects, road works and large urban sites with many contractors.',
              },
              {
                title: 'Oil, gas & petrochem',
                body: 'Refineries, tank farms and offshore assets with strict HSE regimes.',
              },
              {
                title: 'Mining & tunnelling',
                body: 'Underground environments where gas and visibility are constant concerns.',
              },
              {
                title: 'Utilities & field services',
                body: 'Substations, wind farms and distributed maintenance teams.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/8 bg-gradient-to-b from-white/3 via-black/40 to-black/80 p-5 text-left shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
              >
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300/85">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

       {/* ------------------------------------------------------------------ */}
{/* 9. FINAL CTA                                                        */}
{/* ------------------------------------------------------------------ */}
<section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
  <motion.div
    {...fadeIn}
    className="grid items-center md:items-center gap-10 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0b0b0c] via-[#020617] to-black px-6 py-10 md:grid-cols-2 md:px-10"
  >
    {/* Text */}
    <div>
      <p className="inline-flex items-center rounded-full border border-yellow-400/40 bg-yellow-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-yellow-300">
        Next steps
      </p>
      <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl">
        Ready to see Smart Helmet on your sites?
      </h2>
      <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
        Bring a few helmets to a real site, connect them to your AWS environment and
        safety tools, and see how quickly your teams adopt real-time safety.
      </p>

      <ul className="mt-5 space-y-2 text-sm text-slate-100/90">
        <li className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400" />
          <span>Tailored demos using your own use cases and environments.</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400" />
          <span>Clear rollout plan with hardware, software and integrations.</span>
        </li>
      </ul>

      {/* CTA buttons */}
      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(250,204,21,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Connect now
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs">
            ↗
          </span>
        </Link>

        <button
  type="button"
  onClick={openDemo}
  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/60"
>
  Watch demo
</button>

      </div>
    </div>

    {/* Right: generic configurable dashboard mock + Lottie */}
    <div className="relative flex justify-center md:justify-end">
      {/* Card */}
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] via-[#020617] to-black p-4 shadow-[0_32px_110px_rgba(0,0,0,1)]">
        {/* top bar */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
          </div>
          <div className="h-4 w-24 rounded-full bg-zinc-800/80" />
        </div>

        <div className="grid grid-cols-5 gap-3">
          {/* left config list */}
          <div className="col-span-2 space-y-2">
            <div className="h-4 w-20 rounded-md bg-zinc-800/90" />
            <div className="space-y-1.5">
              <div className="h-3 w-full rounded bg-zinc-900" />
              <div className="h-3 w-4/5 rounded bg-zinc-800" />
              <div className="h-3 w-3/5 rounded bg-zinc-800/80" />
              <div className="h-3 w-2/3 rounded bg-zinc-800/60" />
            </div>
          </div>

          {/* center preview */}
          <div className="col-span-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="h-4 w-24 rounded-md bg-zinc-800/90" />
              <div className="h-4 w-10 rounded-md bg-zinc-900" />
            </div>
            <div className="h-24 rounded-xl bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.25),transparent_55%)]" />
            <div className="flex gap-2">
              <div className="h-6 flex-1 rounded-md bg-zinc-900/80" />
              <div className="h-6 flex-1 rounded-md bg-zinc-900/60" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="h-3 w-16 rounded-md bg-zinc-800/80" />
          <div className="flex gap-2">
            <div className="h-7 w-16 rounded-full bg-yellow-400/80" />
            <div className="h-7 w-16 rounded-full bg-zinc-800/80" />
          </div>
        </div>

        <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-1 md:flex">
          <span className="h-1 w-4 rounded-full bg-zinc-700" />
          <span className="h-1 w-4 rounded-full bg-zinc-700" />
          <span className="h-1 w-4 rounded-full bg-zinc-700" />
        </div>
      </div>

      {/* Lottie badge in bottom-right */}
      <motion.div
        className="pointer-events-none absolute -bottom-10 right-0 md:-bottom-22 md:-right-6 w-24 md:w-32 lg:w-76"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        <Lottie animationData={IndustryAnimation} loop />
      </motion.div>
    </div>
  </motion.div>
</section>

      </div>
    </main>
  );
}
