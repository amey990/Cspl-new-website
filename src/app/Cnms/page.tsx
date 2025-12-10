'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, cubicBezier } from 'framer-motion';

import CNMSImage from '../../../assets/CNMS_dummy.jpg';


import dynamic from 'next/dynamic';
import NetworkAnimation from '../../../assets/lottie/Network_no_bg.json'; // 👈 adjust path/extension if needed

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });


const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);
const ACCENT = '#9502A8';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

export default function CNMSPage() {
  return (
    <main className="relative w-full overflow-hidden bg-[#010101]">
      {/* GLOBAL GRID BACKGROUND */}
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
        {/* 0. TITLE BLOCK                                                     */}
        {/* ------------------------------------------------------------------ */}
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            Product · Network management
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            CNMS Network Management
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Keep every network link, device and site healthy and visible in real time.
          </p>
        </motion.div>

        {/* ------------------------------------------------------------------ */}
        {/* 1. HERO SECTION                                                    */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-16 mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:px-10 lg:px-16">
          {/* LEFT: Text */}
          <motion.div
            {...fadeUp}
            className="flex-1 space-y-6 md:max-w-md"
          >
            {/* breadcrumb chip */}
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <span
                className="h-2.5 w-4 rounded-full shadow-[0_0_12px_rgba(149,2,168,0.9)]"
                style={{ backgroundColor: ACCENT }}
              />
              <span className="text-[15px] text-slate-100">Network management</span>
              <span className="text-lg leading-none text-slate-500">›</span>
            </div>

            {/* label chip */}
            <div
              className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
              style={{
                borderColor: `${ACCENT}66`,
                backgroundColor: `${ACCENT}0D`,
                color: '#F5E9FF',
              }}
            >
              CNMS · Network Management
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Keep every network healthy and visible in real time.
            </h2>

            <p className="max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
              CNMS gives operations teams a unified view of links, devices and traffic so they can
              detect incidents faster, act before users feel impact, and keep critical services online.
            </p>

            {/* vertical accent bars */}
            <div className="space-y-4 text-sm text-slate-100/90">
              <div className="flex items-center gap-4">
                <span
                  className="h-10 w-[2px]"
                  style={{ backgroundColor: ACCENT }}
                />
                <span>Topology-wide visibility for backbone and access networks.</span>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className="h-10 w-[2px]"
                  style={{ backgroundColor: ACCENT }}
                />
                <span>Real-time health scores for every site and device.</span>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className="h-10 w-[2px]"
                  style={{ backgroundColor: ACCENT }}
                />
                <span>Intelligent alerts that cut through noisy event streams.</span>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className="h-10 w-[2px]"
                  style={{ backgroundColor: ACCENT }}
                />
                <span>Historical trends to plan capacity and prevent outages.</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-black shadow-[0_0_45px_rgba(149,2,168,0.75)] transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: ACCENT }}
              >
                Watch demo
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Hero image with slight 3D tilt */}
         <motion.div
  {...fadeIn}
  className="relative flex-1 md:flex-[0.6]"
  style={{ perspective: '1200px' }}
>
  <div
    className="relative mx-auto w-full max-w-[560px] rounded-2xl border border-white/10 bg-[#121316]"
    style={{
      transform: 'rotateX(14deg) rotateZ(-2deg)',
      boxShadow:
        '0 20px 40px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.06), 0 0 0 1px rgba(255,255,255,.04)',
      WebkitMaskImage:
        'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
      maskImage:
        'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
    }}
  >
    <div className="relative overflow-hidden rounded-2xl">
      <Image
        src={CNMSImage}
        alt="CNMS network management dashboard"
        className="h-auto w-full"
        quality={100}
        priority
      />
    </div>
  </div>
</motion.div>

        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 2. HOW CNMS SEES YOUR NETWORK                                      */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-28 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT: Text */}
            <motion.div {...fadeUp}>
              <p
                className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  borderColor: `${ACCENT}66`,
                  backgroundColor: `${ACCENT}0D`,
                  color: '#F5E9FF',
                }}
              >
                How CNMS works
              </p>

              <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
                From devices and links to a single live control room.
              </h2>

              <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-slate-300/85">
                CNMS listens to your devices, flows and events, normalises everything into a single
                model, then surfaces the health of every site, circuit and customer in one place.
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-100/90">
                <div className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <div>
                    <div className="font-medium text-white">Multi-source collection</div>
                    <div className="text-slate-300/80">
                      SNMP, syslog, streaming telemetry, flow data and APIs from routers, switches,
                      firewalls and WAN edges.
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <div>
                    <div className="font-medium text-white">Topology-aware model</div>
                    <div className="text-slate-300/80">
                      Links, dependencies and service paths mapped automatically so impact is always
                      clear.
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <div>
                    <div className="font-medium text-white">Health scoring engine</div>
                    <div className="text-slate-300/80">
                      Latency, loss, utilisation and events rolled into single scores for sites and
                      devices.
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <div>
                    <div className="font-medium text-white">Operator workflows</div>
                    <div className="text-slate-300/80">
                      Playbooks, notes and tickets tied directly to the links and devices they
                      relate to.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Flow diagram card */}
            <motion.div
              {...fadeIn}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xl rounded-2xl border border-white/12 bg-gradient-to-b from-[#151320] via-[#05030a] to-black p-6 shadow-[0_36px_120px_rgba(0,0,0,0.95)]">
                {/* Device row */}
                <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-200">
                  <div className="rounded-xl border border-white/10 bg-black/70 p-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-300">
                      EDGE
                    </div>
                    <div className="mt-1 h-3 w-20 rounded bg-zinc-700" />
                    <div className="mt-2 flex gap-1">
                      <div className="h-2 w-6 rounded bg-zinc-800" />
                      <div className="h-2 w-6 rounded bg-zinc-800/80" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/70 p-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-300">
                      CORE
                    </div>
                    <div className="mt-1 h-3 w-20 rounded bg-zinc-700" />
                    <div className="mt-2 flex gap-1">
                      <div className="h-2 w-6 rounded bg-zinc-800" />
                      <div className="h-2 w-6 rounded bg-zinc-800/80" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/70 p-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-300">
                      BRANCH
                    </div>
                    <div className="mt-1 h-3 w-20 rounded bg-zinc-700" />
                    <div className="mt-2 flex gap-1">
                      <div className="h-2 w-6 rounded bg-zinc-800" />
                      <div className="h-2 w-6 rounded bg-zinc-800/80" />
                    </div>
                  </div>
                </div>

                {/* pipeline arrow */}
                <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-300">
                  <div
                    className="h-px flex-1 bg-gradient-to-r from-white via-[rgba(149,2,168,0.8)] to-transparent"
                  />
                  <span className="text-[10px] tracking-wide text-slate-300/90">
                    SNMP · Syslog · Telemetry · Flow
                  </span>
                </div>

                {/* CNMS engine card */}
                <div className="mt-3 rounded-2xl border border-[rgba(149,2,168,0.7)] bg-[radial-gradient(circle_at_10%_0%,rgba(149,2,168,0.32),transparent_60%),rgba(15,23,42,0.95)] px-4 py-4 shadow-[0_0_32px_rgba(149,2,168,0.5)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F5E9FF]">
                        CNMS ENGINE
                      </div>
                      <div className="mt-1 h-3 w-24 rounded bg-zinc-700/80" />
                    </div>
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />
                      <span className="h-2 w-2 rounded-full bg-rose-400" />
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-slate-100">
                    <div className="rounded-lg bg-black/70 p-2">
                      <div className="h-3 w-16 rounded bg-zinc-700" />
                      <div className="mt-1 h-2 w-12 rounded bg-zinc-800" />
                    </div>
                    <div className="rounded-lg bg-black/70 p-2">
                      <div className="h-3 w-16 rounded bg-zinc-700" />
                      <div className="mt-1 h-2 w-12 rounded bg-zinc-800" />
                    </div>
                    <div className="rounded-lg bg-black/70 p-2">
                      <div className="h-3 w-16 rounded bg-zinc-700" />
                      <div className="mt-1 h-2 w-12 rounded bg-zinc-800" />
                    </div>
                  </div>
                </div>

                {/* outputs */}
                <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-300">
                  <div
                    className="h-px flex-1 bg-gradient-to-r from-[rgba(149,2,168,0.9)] via-[rgba(209,213,219,0.9)] to-transparent"
                  />
                  <span className="text-[10px] tracking-wide text-slate-300/90">
                    Dashboards · Alerts · APIs · Tickets
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-200">
                  <div className="rounded-lg border border-white/15 bg-black/70 p-3">
                    <div className="mb-1 h-3 w-16 rounded bg-zinc-700" />
                    <div className="h-10 rounded bg-[radial-gradient(circle_at_20%_10%,rgba(149,2,168,0.55),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.55),transparent_60%)]" />
                  </div>
                  <div className="rounded-lg border border-white/15 bg-black/70 p-3">
                    <div className="mb-1 h-3 w-16 rounded bg-zinc-700" />
                    <div className="space-y-1">
                      <div className="h-2 w-full rounded bg-zinc-800" />
                      <div className="h-2 w-4/5 rounded bg-zinc-800" />
                      <div className="h-2 w-3/5 rounded bg-zinc-800" />
                    </div>
                  </div>
                  <div className="rounded-lg border border-white/15 bg-black/70 p-3">
                    <div className="mb-1 h-3 w-16 rounded bg-zinc-700" />
                    <div className="h-10 rounded bg-zinc-900/90" />
                  </div>
                </div>

                <div className="mt-4 text-[11px] text-slate-400">
                  End-to-end picture from device telemetry to operator actions.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 3. LIVE TOPOLOGY & HEALTH                                          */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left: mock topology board */}
            <motion.div
              {...fadeIn}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xl rounded-2xl border border-white/12 bg-gradient-to-b from-[#151320] via-[#020108] to-black p-4 md:p-5 shadow-[0_40px_130px_rgba(0,0,0,1)]">
                {/* header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="h-5 w-28 rounded-full bg-zinc-800/80" />
                </div>

                <div className="grid grid-cols-12 gap-3">
                  {/* left: topology */}
                  <div className="col-span-7 rounded-xl bg-zinc-950/80 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="h-3 w-20 rounded bg-zinc-700" />
                      <div className="h-3 w-16 rounded bg-zinc-800" />
                    </div>
                    <div className="relative h-40 rounded-xl bg-[radial-gradient(circle_at_10%_10%,rgba(149,2,168,0.4),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.45),transparent_55%),radial-gradient(circle_at_40%_80%,rgba(16,185,129,0.45),transparent_60%)]">
                      {/* little nodes */}
                      {[['20%', '25%'], ['60%', '30%'], ['40%', '70%'], ['75%', '65%']].map(
                        ([left, top], i) => (
                          <div
                            // eslint-disable-next-line react/no-array-index-key
                            key={i}
                            className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-black/70 shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                            style={{ left, top }}
                          />
                        ),
                      )}
                    </div>
                    <div className="mt-3 flex justify-between text-[10px] text-zinc-400">
                      <span>Sites</span>
                      <span>Links</span>
                      <span>Critical paths</span>
                    </div>
                  </div>

                  {/* right: health bars */}
                  <div className="col-span-5 rounded-xl bg-zinc-950/80 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="h-3 w-20 rounded bg-zinc-700" />
                      <div className="h-3 w-10 rounded bg-zinc-800" />
                    </div>
                    <div className="space-y-1.5">
                      {[75, 92, 54, 68].map((score, i) => (
                        <div
                          // eslint-disable-next-line react/no-array-index-key
                          key={i}
                          className="flex items-center gap-2"
                        >
                          <div className="h-2 w-12 rounded bg-zinc-800" />
                          <div className="flex-1 h-2 rounded-full bg-zinc-900">
                            <div
                              className="h-2 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400"
                              style={{ width: `${score}%` }}
                            />
                          </div>
                          <span className="w-7 text-right text-[10px] text-zinc-300">
                            {score}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[10px] text-zinc-400">
                  <span>Topology &amp; health overview</span>
                  <span>Updated a few seconds ago</span>
                </div>
              </div>
            </motion.div>

            {/* Right: text */}
            <motion.div {...fadeUp}>
              <p
                className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  borderColor: `${ACCENT}66`,
                  backgroundColor: `${ACCENT}0D`,
                  color: '#F5E9FF',
                }}
              >
                Topology &amp; health
              </p>

              <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
                See every site, link and service in one live map.
              </h2>

              <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-slate-300/85">
                CNMS builds a topology-aware view of your network so operators can understand
                where an issue started, what it touches, and who is affected — without hopping
                across tools.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>End-to-end visibility from core to branch and remote users.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Colour-coded health scores for every site and service.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Dependency-aware impact view for critical applications.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Historical playback to see how an outage unfolded.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 4. ALERT TRIAGE & RUNBOOKS                                         */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left: text */}
            <motion.div {...fadeUp}>
              <p
                className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  borderColor: `${ACCENT}66`,
                  backgroundColor: `${ACCENT}0D`,
                  color: '#F5E9FF',
                }}
              >
                Alert triage
              </p>

              <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
                Cut through noise and move straight to first steps.
              </h2>

              <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-slate-300/85">
                CNMS groups related events, scores their severity, and attaches the runbooks your
                teams already use — so level 1 engineers can resolve more incidents without
                escalation.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-100/90">
                <div className="flex gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Correlated incidents instead of hundreds of single-device alarms.</span>
                </div>
                <div className="flex gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Built-in runbooks with steps, checks and escalation paths.</span>
                </div>
                <div className="flex gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>One-click tickets and chat notifications from the same screen.</span>
                </div>
              </div>
            </motion.div>

            {/* Right: alert panel mock */}
            <motion.div
              {...fadeIn}
              className="flex justify-center"
            >
              <div className="w-full max-w-xl rounded-2xl border border-white/12 bg-gradient-to-b from-[#130f1c] via-[#050310] to-black p-5 shadow-[0_32px_110px_rgba(0,0,0,1)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-4 w-24 rounded bg-zinc-800" />
                  <div className="flex gap-2">
                    <div className="h-4 w-10 rounded bg-zinc-900" />
                    <div className="h-4 w-10 rounded bg-zinc-900" />
                  </div>
                </div>

                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      className="flex items-center justify-between rounded-xl bg-zinc-950/90 px-3 py-2"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{
                            background:
                              i === 1
                                ? '#fb7185'
                                : i === 2
                                ? '#facc15'
                                : '#22c55e',
                          }}
                        />
                        <div className="space-y-1">
                          <div className="h-3 w-32 rounded bg-zinc-800" />
                          <div className="h-2 w-20 rounded bg-zinc-900" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-zinc-400">
                        <div className="h-3 w-10 rounded bg-zinc-800" />
                        <div className="h-3 w-8 rounded bg-zinc-800/80" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-[1.2fr,1.4fr] gap-3 text-[11px] text-zinc-200">
                  <div className="rounded-xl bg-zinc-950/90 p-3">
                    <div className="mb-2 h-3 w-24 rounded bg-zinc-700" />
                    <div className="space-y-1.5">
                      <div className="h-2 w-full rounded bg-zinc-800" />
                      <div className="h-2 w-4/5 rounded bg-zinc-800" />
                      <div className="h-2 w-2/3 rounded bg-zinc-800" />
                    </div>
                  </div>
                  <div className="rounded-xl bg-zinc-950/90 p-3">
                    <div className="mb-2 h-3 w-24 rounded bg-zinc-700" />
                    <div className="h-16 rounded bg-[linear-gradient(to_right,rgba(24,24,27,1),rgba(24,24,27,1)),repeating-linear-gradient(to_right,rgba(63,63,70,0.6)_0,rgba(63,63,70,0.6)_1px,transparent_1px,transparent_10px)] relative overflow-hidden">
                      <div className="absolute inset-y-1 left-1 right-1 flex items-center gap-1">
                        {[40, 60, 30, 70, 50].map((w, i) => (
                          <div
                            // eslint-disable-next-line react/no-array-index-key
                            key={i}
                            className="h-2 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400"
                            style={{ width: `${w}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 5. INTEGRATIONS / ARCHITECTURE                                     */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left: architecture card */}
            <motion.div
              {...fadeIn}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xl rounded-2xl border border-[rgba(129,140,248,0.6)] bg-gradient-to-b from-[#050315] via-[#02000a] to-black p-5 shadow-[0_32px_110px_rgba(0,0,0,1)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-4 w-28 rounded bg-[rgba(129,140,248,0.6)]" />
                  <div className="h-4 w-12 rounded bg-zinc-800" />
                </div>

                <div className="grid grid-cols-4 gap-3 text-[11px] text-slate-200">
                  <div className="col-span-1 rounded-lg border border-white/20 bg-black/70 p-3">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-200">
                      Devices
                    </div>
                    <div className="h-3 w-16 rounded bg-zinc-700" />
                    <div className="mt-2 h-3 w-10 rounded bg-zinc-800" />
                  </div>
                  <div className="col-span-1 rounded-lg border border-[rgba(129,140,248,0.7)] bg-[rgba(129,140,248,0.12)] p-3">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-200">
                      Collectors
                    </div>
                    <div className="h-3 w-16 rounded bg-zinc-700" />
                    <div className="mt-2 h-3 w-10 rounded bg-zinc-800" />
                  </div>
                  <div className="col-span-1 rounded-lg border border-[rgba(149,2,168,0.7)] bg-[rgba(149,2,168,0.12)] p-3">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#F5E9FF]">
                      CNMS Core
                    </div>
                    <div className="h-3 w-16 rounded bg-zinc-700" />
                    <div className="mt-2 h-3 w-12 rounded bg-zinc-800" />
                  </div>
                  <div className="col-span-1 rounded-lg border border-emerald-400/60 bg-emerald-500/10 p-3">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-200">
                      Integrations
                    </div>
                    <div className="h-3 w-16 rounded bg-zinc-700" />
                    <div className="mt-2 h-3 w-10 rounded bg-zinc-800" />
                  </div>
                </div>

                <div className="mt-5 space-y-1 text-[10px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-px flex-1 bg-gradient-to-r from-white via-[rgba(149,2,168,0.9)] to-emerald-400" />
                    <span>SNMP · Syslog · Flow · APIs · Webhooks</span>
                  </div>
                  <div>Multi-tenant, role-based access, SSO and audit-ready logging.</div>
                </div>
              </div>
            </motion.div>

            {/* Right: text */}
            <motion.div {...fadeUp}>
              <p className="inline-flex items-center rounded-full border border-[rgba(129,140,248,0.6)] bg-[rgba(129,140,248,0.08)] px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-indigo-200">
                Integrations &amp; architecture
              </p>

              <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
                Fits into your existing NOC stack, not next to it.
              </h2>

              <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-slate-300/85">
                CNMS connects to the tools you already use for tickets, chat and analytics, while
                keeping network data in a cloud-native architecture that can scale with your
                footprint.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-100/90">
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgba(129,140,248,0.9)]" />
                  <span>Secure collectors close to devices to reduce round-trips and noise.</span>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgba(129,140,248,0.9)]" />
                  <span>APIs and webhooks for ITSM, chat and incident management tools.</span>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgba(129,140,248,0.9)]" />
                  <span>Role-based access control and SSO for operations and partners.</span>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgba(129,140,248,0.9)]" />
                  <span>Built for high-availability deployments across regions and clouds.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 6. USE CASES                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="text-center"
          >
            <p
              className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
              style={{
                borderColor: `${ACCENT}66`,
                backgroundColor: `${ACCENT}0D`,
                color: '#F5E9FF',
              }}
            >
              Industries &amp; environments
            </p>
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white">
              Designed for complex, distributed networks.
            </h2>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                title: 'Service providers',
                body: 'Multi-tenant visibility across POPs, aggregation and last-mile links.',
              },
              {
                title: 'Enterprises & campuses',
                body: 'Core, distribution and access networks across sites and regions.',
              },
              {
                title: 'Retail & branch networks',
                body: 'Thousands of small sites, SD-WAN edges and LTE backups.',
              },
              {
                title: 'Cloud & hybrid',
                body: 'Overlay visibility across DCs, cloud VPCs and SaaS edges.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/8 bg-gradient-to-b from-white/3 via-black/40 to-black/80 p-5 text-left shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
              >
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300/85">{item.body}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 7. FINAL CTA                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeIn}
            className="grid items-center gap-10 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0b0b0c] via-[#050012] to-black px-6 py-10 md:grid-cols-2 md:px-10"
          >
            {/* Text */}
            <div>
              <p
                className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  borderColor: `${ACCENT}66`,
                  backgroundColor: `${ACCENT}0D`,
                  color: '#F5E9FF',
                }}
              >
                Next steps
              </p>
              <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
                Ready to see CNMS on your network?
              </h2>
              <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-slate-300/85">
                Bring CNMS into a pilot segment, connect a slice of your devices and tickets, and
                see how quickly your teams move from guessing to knowing.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-100/90">
                <li className="flex gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Tailored demos using your own topology and incident patterns.</span>
                </li>
                <li className="flex gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Clear rollout plan for collectors, integrations and training.</span>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(149,2,168,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: ACCENT }}
                >
                  Connect now
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs">
                    ↗
                  </span>
                </Link>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/60"
                >
                  Watch demo
                </button>
              </div>
            </div>

            {/* Right: configurable dashboard mock */}
                        {/* Right: configurable dashboard mock */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] via-[#020617] to-black p-4 shadow-[0_32px_110px_rgba(0,0,0,1)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                  </div>
                  <div className="h-4 w-24 rounded-full bg-zinc-800/80" />
                </div>

                <div className="grid grid-cols-5 gap-3">
                  <div className="col-span-2 space-y-2">
                    <div className="h-4 w-20 rounded-md bg-zinc-800/90" />
                    <div className="space-y-1.5">
                      <div className="h-3 w-full rounded bg-zinc-900" />
                      <div className="h-3 w-4/5 rounded bg-zinc-800" />
                      <div className="h-3 w-3/5 rounded bg-zinc-800/80" />
                      <div className="h-3 w-2/3 rounded bg-zinc-800/60" />
                    </div>
                  </div>

                  <div className="col-span-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-24 rounded-md bg-zinc-800/90" />
                      <div className="h-4 w-10 rounded-md bg-zinc-900" />
                    </div>
                    <div className="h-24 rounded-xl bg-[radial-gradient(circle_at_20%_20%,rgba(149,2,168,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.25),transparent_55%)]" />
                    <div className="flex gap-2">
                      <div className="h-6 flex-1 rounded-md bg-zinc-900/80" />
                      <div className="h-6 flex-1 rounded-md bg-zinc-900/60" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="h-3 w-16 rounded-md bg-zinc-800/80" />
                  <div className="flex gap-2">
                    <div
                      className="h-7 w-16 rounded-full"
                      style={{ backgroundColor: `${ACCENT}CC` }}
                    />
                    <div className="h-7 w-16 rounded-full bg-zinc-800/80" />
                  </div>
                </div>

                <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-1 md:flex">
                  <span className="h-1 w-4 rounded-full bg-zinc-700" />
                  <span className="h-1 w-4 rounded-full bg-zinc-700" />
                  <span className="h-1 w-4 rounded-full bg-zinc-700" />
                </div>
              </div>

              {/* Network animation – bottom-right corner */}
              <div className="pointer-events-none absolute -bottom-25 -right-14 w-[170px] md:w-[220px]">
                <Lottie
                  animationData={NetworkAnimation}
                  loop
                  autoplay
                  className="h-full w-full"
                />
              </div>
            </div>

          </motion.div>
        </section>
      </div>
    </main>
  );
}

