'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, cubicBezier } from 'framer-motion';

import OpsAdvisorImage from '../../../assets/Ops_advisor.jpg';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);
const ACCENT = '#FF5906';

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

const openDemo = () => {
  window.dispatchEvent(
    new CustomEvent('commedia:open-demo', {
      detail: {
        url: 'https://www.youtube.com/watch?v=M7lc1UVf-VE', // replace with your real demo link
        title: 'Operations Advisor — Demo',
      },
    })
  );
};

const openPlaybooks = () => {
  window.dispatchEvent(
    new CustomEvent('commedia:open-demo', {
      detail: {
        url: 'https://www.youtube.com/watch?v=M7lc1UVf-VE', // or a PDF / notion / page link
        title: 'Operations Advisor — Sample Playbooks',
      },
    })
  );
};


export default function OperationsAdvisorPage() {
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
        {/* 0. TITLE BLOCK                                                     */}
        {/* ------------------------------------------------------------------ */}
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            Product · Agentic solution
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Operations Advisor
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Give every operator an AI partner for real-time decisions.
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
            <div className="mb-1 flex items-center gap-3 text-sm text-slate-200">
              <span
                className="h-2.5 w-5 rounded-full shadow-[0_0_12px_rgba(255,89,6,0.9)]"
                style={{ backgroundColor: ACCENT }}
              />
              <span className="text-[15px] text-slate-100">Operations Advisor</span>
              <span className="text-lg leading-none text-slate-500">›</span>
            </div>

            {/* label chip */}
            <p
              className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
              style={{
                borderColor: `${ACCENT}66`,
                backgroundColor: `${ACCENT}14`,
                color: '#FED7AA',
              }}
            >
              OPERATIONS ADVISOR · AGENTIC SOLUTION
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Ops Advisor watches your live operations and recommends next best actions.
            </h2>

            <p className="max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
              It connects to your monitoring, tickets and logs, surfaces the signals that
              matter, and guides operators through the steps most likely to resolve the issue
              — before customers feel the impact.
            </p>

            {/* bullets */}
            <div className="space-y-3 text-sm text-slate-100/90">
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                <span>
                  Agentic workflows that triage, route and recommend actions automatically.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                <span>
                  Live health scores across sites, assets and customer-facing services.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                <span>Root-cause hints from tickets, logs and historical incidents.</span>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                <span>Playbooks that adapt as conditions change — not static runbooks.</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                 onClick={openDemo}
                  aria-label="Watch Operations Advisor demo"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(255,89,6,0.7)] transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: ACCENT }}
              >
                Watch demo
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </button>

            
            </div>
          </motion.div>

          {/* RIGHT: Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 12, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="relative flex flex-1 items-center justify-center"
          >
            {/* glow behind card */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div
                className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,89,6,0.35) 0%, transparent 60%)',
                }}
              />
            </div>

            <div
              className="relative w-full max-w-[540px] rounded-[20px] border border-white/10 bg-[#101012] shadow-[0_40px_120px_rgba(0,0,0,0.95)]"
              style={{
                transform: 'rotateX(10deg) rotateZ(-1.5deg)',
                boxShadow:
                  '0 24px 60px rgba(0,0,0,.7), inset 0 1px 0 rgba(255,255,255,.06)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                maskImage:
                  'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
              }}
            >
              <div className="overflow-hidden rounded-[18px]">
                <Image
                  src={OpsAdvisorImage}
                  alt="Operations Advisor dashboard"
                  className="h-auto w-full"
                  quality={100}
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 2. HOW IT WORKS                                                    */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-28 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT: Text */}
            <motion.div {...fadeUp}>
              <p
                className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  borderColor: `${ACCENT}66`,
                  backgroundColor: `${ACCENT}14`,
                  color: '#FED7AA',
                }}
              >
                How it works
              </p>

              <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
                From noisy signals to clear next-best actions.
              </h2>

              <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
                Ops Advisor ingests alerts, tickets and telemetry, clusters them into
                situations, then runs agentic playbooks that recommend what to do next —
                keeping humans in control while automation does the heavy lifting.
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-100/90">
                <div className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <div>
                    <div className="font-medium text-white">Signal intake</div>
                    <div className="text-slate-300/80">
                      Connect monitoring tools, ticketing systems and logs to build a single
                      stream of operational events.
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <div>
                    <div className="font-medium text-white">Situation engine</div>
                    <div className="text-slate-300/80">
                      Cluster related alerts and tickets into one &ldquo;story&rdquo; so
                      teams work the incident, not individual pings.
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <div>
                    <div className="font-medium text-white">Agentic playbooks</div>
                    <div className="text-slate-300/80">
                      AI-guided workflows propose actions, ask for confirmations and adapt in
                      real time as signals change.
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <div>
                    <div className="font-medium text-white">Learning loop</div>
                    <div className="text-slate-300/80">
                      Outcomes and operator feedback tune future recommendations and
                      playbooks automatically.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Flow diagram */}
            <motion.div
              {...fadeIn}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-b from-[#1b130c] via-[#050506] to-black p-6 shadow-[0_36px_120px_rgba(0,0,0,0.95)]">
                {/* Row 1: sources */}
                <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-200">
                  {['Monitoring', 'Tickets', 'Logs'].map((src) => (
                    <div
                      key={src}
                      className="rounded-xl border border-white/10 bg-black/75 p-3"
                    >
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                        {src}
                      </div>
                      <div className="mt-2 h-3 w-20 rounded bg-zinc-700" />
                      <div className="mt-2 flex gap-1">
                        <div className="h-2 w-6 rounded bg-zinc-800" />
                        <div className="h-2 w-6 rounded bg-zinc-800/80" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* arrow */}
                <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-300">
                  <div className="h-px flex-1 bg-gradient-to-r from-white via-[rgba(255,89,6,0.9)] to-transparent" />
                  <span className="text-[10px] tracking-wide text-slate-300/90">
                    Events &amp; metrics stream
                  </span>
                </div>

                {/* Ops advisor core */}
                <div className="mt-3 rounded-2xl border border-[rgba(255,89,6,0.8)] bg-[radial-gradient(circle_at_5%_0%,rgba(255,137,92,0.33),transparent_55%),rgba(15,8,3,0.95)] px-4 py-4 shadow-[0_0_32px_rgba(255,89,6,0.6)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-100">
                        OPS ADVISOR CORE
                      </div>
                      <div className="mt-1 h-3 w-32 rounded bg-zinc-700/80" />
                    </div>
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-300" />
                      <span className="h-2 w-2 rounded-full bg-sky-400" />
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-slate-100">
                    {['Correlate', 'Score', 'Recommend'].map((cap) => (
                      <div
                        key={cap}
                        className="rounded-lg bg-black/75 p-2"
                      >
                        <div className="mb-1 h-3 w-16 rounded bg-zinc-700" />
                        <div className="h-2 w-12 rounded bg-zinc-800" />
                        <div className="mt-1 text-[9px] text-slate-400">{cap}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* arrow */}
                <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-300">
                  <div className="h-px flex-1 bg-gradient-to-r from-[rgba(255,89,6,0.9)] via-[rgba(148,163,184,0.9)] to-transparent" />
                  <span className="text-[10px] tracking-wide text-slate-300/90">
                    Next-best actions &amp; playbooks
                  </span>
                </div>

                {/* outputs */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-200">
                  {['Ops console', 'Chat & war rooms', 'Ticket updates'].map((out) => (
                    <div
                      key={out}
                      className="rounded-lg border border-white/15 bg-black/75 p-3"
                    >
                      <div className="mb-1 h-3 w-24 rounded bg-zinc-700" />
                      <div className="h-10 rounded bg-zinc-900/90" />
                      <div className="mt-1 text-[10px] text-slate-400">{out}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-[11px] text-slate-400">
                  A full loop from raw signals to guided actions that operators can accept,
                  adjust or automate.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 3. LIVE BOARD / HEALTH SCORES                                      */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT: board mock */}
            <motion.div
              {...fadeIn}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-b from-[#171717] via-[#050505] to-black p-4 md:p-5 shadow-[0_40px_130px_rgba(0,0,0,1)]">
                {/* header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="h-5 w-28 rounded-full bg-zinc-800/80" />
                </div>

                <div className="grid grid-cols-12 gap-3">
                  {/* left: health map */}
                  <div className="col-span-5 rounded-xl bg-zinc-900/85 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="h-3 w-20 rounded bg-zinc-700" />
                      <div className="h-3 w-10 rounded bg-zinc-800" />
                    </div>
                    <div className="h-32 rounded-lg bg-[radial-gradient(circle_at_20%_15%,rgba(34,197,94,0.6),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(250,204,21,0.6),transparent_55%),radial-gradient(circle_at_40%_95%,rgba(248,113,113,0.7),transparent_55%)]" />
                    <div className="mt-3 flex justify-between text-[10px] text-zinc-400">
                      <span>Sites</span>
                      <span>Assets</span>
                      <span>Services</span>
                    </div>
                  </div>

                  {/* center: situations list */}
                  <div className="col-span-4 rounded-xl bg-zinc-900/85 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="h-3 w-16 rounded bg-zinc-700" />
                      <div className="h-3 w-8 rounded bg-zinc-800" />
                    </div>
                    <div className="space-y-1.5">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          // eslint-disable-next-line react/no-array-index-key
                          key={i}
                          className="flex items-center justify-between rounded-md bg-zinc-950/90 px-2 py-1.5"
                        >
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-amber-400" />
                            <span className="h-3 w-24 rounded bg-zinc-800" />
                          </div>
                          <span className="h-3 w-10 rounded bg-zinc-900" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* right: actions meter */}
                  <div className="col-span-3 rounded-xl bg-zinc-900/85 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="h-3 w-18 rounded bg-zinc-700" />
                      <div className="h-3 w-6 rounded bg-zinc-800" />
                    </div>
                    <div className="h-24 rounded-lg bg-[linear-gradient(to_top,rgba(24,24,27,0.95),transparent),repeating-linear-gradient(to_right,rgba(63,63,70,0.7)_0,rgba(63,63,70,0.7)_1px,transparent_1px,transparent_12px)] relative overflow-hidden">
                      <div className="absolute inset-x-2 bottom-2 flex items-end gap-1">
                        {[20, 40, 65, 45, 80].map((h, idx) => (
                          <div
                            // eslint-disable-next-line react/no-array-index-key
                            key={idx}
                            className="flex-1 rounded-t-full bg-gradient-to-t from-amber-500 via-orange-400 to-emerald-400"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[10px] text-zinc-400">
                  <span>Live operations board</span>
                  <span>Updated a few seconds ago</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: text */}
            <motion.div {...fadeUp}>
              <p
                className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  borderColor: `${ACCENT}66`,
                  backgroundColor: `${ACCENT}14`,
                  color: '#FED7AA',
                }}
              >
                Live health &amp; actions
              </p>

              <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
                See every site&apos;s health and the actions Ops Advisor is taking.
              </h2>

              <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
                The operations board gives you a single view of which sites, services and
                assets are healthy, which situations are active, and which playbooks are in
                flight — so shifts stay ahead of incidents instead of chasing them.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Health scores for every site, line of business and key service.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>
                    Situation list that shows impact, trend and who is currently working it.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Recommended first steps that level 1 teams can execute safely.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Historical view to spot repeating issues and long-running risks.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 4. TEAMS & USE CASES                                               */}
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
                backgroundColor: `${ACCENT}14`,
                color: '#FED7AA',
              }}
            >
              Teams Ops Advisor supports
            </p>
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white">
              Built for NOC, operations and service teams.
            </h2>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="mt-8 grid gap-6 md:grid-cols-3"
          >
            {[
              {
                title: 'Network & infrastructure ops',
                body: 'Reduce MTTR with correlated incidents, guided actions and playbooks tuned to your topology.',
              },
              {
                title: 'IT & application operations',
                body: 'Catch user-impacting issues early and route them to the right team with context already attached.',
              },
              {
                title: 'Customer operations',
                body: 'See operational health alongside customer metrics so you can prioritize what matters most.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 via-black/40 to-black/80 p-5 text-left shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
              >
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300/85">{item.body}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 5. FINAL CTA                                                       */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeIn}
            className="grid items-center gap-10 rounded-3xl border border-white/10 bg-gradient-to-r from-[#1b130c] via-[#020617] to-black px-6 py-10 md:grid-cols-2 md:px-10"
          >
            {/* Text */}
            <div>
              <p
                className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  borderColor: `${ACCENT}66`,
                  backgroundColor: `${ACCENT}14`,
                  color: '#FED7AA',
                }}
              >
                Next steps
              </p>
              <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
                Ready to see Ops Advisor on your operations floor?
              </h2>
              <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
                Start with a focused pilot — one region, one product line or one NOC — and
                see how agentic workflows change the way operators respond to incidents.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-100/90">
                <li className="flex gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Tailored demos using your own alert streams and tickets.</span>
                </li>
                <li className="flex gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Rollout plan with integrations, playbook design and training.</span>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(255,89,6,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: ACCENT }}
                >
                  Connect now
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs">
                    ↗
                  </span>
                </Link>

                <button
                  type="button"
                    onClick={openDemo}
  aria-label="Watch Operations Advisor demo"

                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/60"
                >
                  Watch demo
                </button>
              </div>
            </div>

            {/* Right: small config / playbook mock */}
            <div className="relative flex justify-center md:justify-end">
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
                    <div className="h-4 w-24 rounded-md bg-zinc-800/90" />
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
                    <div className="h-24 rounded-xl bg-[radial-gradient(circle_at_20%_20%,rgba(255,137,92,0.3),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.3),transparent_55%)]" />
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
                      style={{ backgroundColor: `${ACCENT}D9` }}
                    />
                    <div className="h-7 w-16 rounded-full bg-zinc-800/80" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
