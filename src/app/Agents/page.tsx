'use client';

import Link from 'next/link';
import { motion, cubicBezier } from 'framer-motion';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);
const ACCENT = '#0EA5E9'; // cyan / blue accent for Agentic Solutions

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

export default function AgenticSolutionsPage() {
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
            Services · AI agents
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Agentic Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Custom AI agents that plug into your systems, analyse your data and take the
            first steps on every workload.
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
            {/* breadcrumb chip */}
            <div className="mb-1 flex items-center gap-3 text-sm text-slate-200">
              <span
                className="h-2.5 w-5 rounded-full shadow-[0_0_12px_rgba(14,165,233,0.9)]"
                style={{ backgroundColor: ACCENT }}
              />
              <span className="text-[15px] text-slate-100">Agentic solutions</span>
              <span className="text-lg leading-none text-slate-500">›</span>
            </div>

            {/* label chip */}
            <p
              className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
              style={{
                borderColor: `${ACCENT}66`,
                backgroundColor: `${ACCENT}1A`,
                color: '#BAE6FD',
              }}
            >
              CUSTOM · AI AGENTIC SOLUTIONS
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              We design and build AI agents that work inside your operation.
            </h2>

            <p className="max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
              From triaging support tickets to preparing reports and nudging teams on
              next-best actions, our agents sit on top of your existing stack, connect to
              your data sources and tools, and quietly remove busywork from every shift.
            </p>

            <div className="space-y-3 text-sm text-slate-100/90">
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                <span>Deep integrations into your CRMs, monitoring, ticketing and data lakes.</span>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                <span>
                  Agents that observe signals, reason over your data and safely call tools.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                <span>
                  Guardrails, approvals and audit trails so humans stay fully in control.
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(14,165,233,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: ACCENT }}
              >
                Discuss an agent idea
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs">
                  ↗
                </span>
              </Link>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/60"
              >
                Watch overview
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Agent network illustration */}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 12, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="relative flex flex-1 items-center justify-center"
          >
            {/* glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div
                className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(14,165,233,0.35) 0%, transparent 60%)',
                }}
              />
            </div>

            <div className="relative w-full max-w-[520px] rounded-[22px] border border-white/10 bg-[#050913] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.95)]">
              {/* central agent */}
              <div className="relative mx-auto flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-b from-[#0ea5e9]/20 via-[#0ea5e9]/10 to-transparent">
                <div className="h-32 w-32 rounded-2xl bg-gradient-to-b from-[#0ea5e9] via-[#0284c7] to-[#020617] shadow-[0_0_40px_rgba(14,165,233,0.7)] flex flex-col items-center justify-center gap-1">
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-sky-100 uppercase">
                    AI agent
                  </span>
                  <span className="h-4 w-20 rounded-md bg-sky-200/80" />
                  <span className="h-2 w-16 rounded-md bg-sky-300/70" />
                </div>

                {/* spokes */}
                {[
                  { label: 'Tickets', position: 'top-0 left-1/2 -translate-x-1/2' },
                  { label: 'Monitoring', position: 'right-0 top-1/2 -translate-y-1/2' },
                  { label: 'Data lake', position: 'bottom-0 left-1/2 -translate-x-1/2' },
                  { label: 'CRM / ERP', position: 'left-0 top-1/2 -translate-y-1/2' },
                ].map((node) => (
                  <div
                    key={node.label}
                    className={`absolute ${node.position}`}
                  >
                    {/* line */}
                    <div className="h-px w-16 bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-transparent opacity-70" />
                    {/* node */}
                    <div className="mt-2 inline-flex flex-col items-start rounded-xl border border-white/15 bg-black/70 px-3 py-2 text-[10px] text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                      <div className="mb-1 h-3 w-16 rounded bg-zinc-700" />
                      <div className="flex gap-1">
                        <span className="h-2 w-8 rounded bg-zinc-800" />
                        <span className="h-2 w-5 rounded bg-zinc-900" />
                      </div>
                      <span className="mt-1 text-[9px] text-sky-200/80">
                        {node.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* footer caption */}
              <div className="mt-6 text-[11px] text-slate-400">
                One agent brain, many tools: we wire your existing systems into a safe
                action loop that can observe, reason and execute.
              </div>
            </div>
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 2. WHAT WE BUILD                                                   */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-28 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="text-center"
          >
            <p
              className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
              style={{
                borderColor: `${ACCENT}66`,
                backgroundColor: `${ACCENT}1A`,
                color: '#BAE6FD',
              }}
            >
              What we build
            </p>
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white">
              Agent patterns we deliver most often.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-slate-300/85">
              Each engagement is bespoke, but we see the same patterns repeat across
              industries. We use these patterns as starting points and tune them to your
              tools and processes.
            </p>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="mt-8 grid gap-6 md:grid-cols-3"
          >
            {[
              {
                title: 'Triage & routing agents',
                body: 'Ingest alerts, emails or tickets, cluster duplicates and route them to the right teams with suggested priority and context.',
              },
              {
                title: 'Ops co-pilot agents',
                body: 'Sit in chat, answer questions over your docs and data, and propose next steps — from running checks to drafting updates.',
              },
              {
                title: 'Reporting & insight agents',
                body: 'Pull metrics from multiple systems, generate weekly health packs and call out anomalies humans should look at.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 via-black/40 to-black/80 p-5 shadow-[0_26px_90px_rgba(0,0,0,0.9)]"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-sky-300">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Agent</span>
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300/85">{item.body}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 3. HOW IT WORKS (PROCESS)                                          */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <p
              className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
              style={{
                borderColor: `${ACCENT}66`,
                backgroundColor: `${ACCENT}1A`,
                color: '#BAE6FD',
              }}
            >
              Delivery approach
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl md:text-4xl font-semibold leading-tight text-white">
              From idea to production agent in a few focused iterations.
            </h2>
          </motion.div>

          <motion.ol
            {...fadeIn}
            className="mt-8 space-y-6 text-sm text-slate-100/90"
          >
            {[
              {
                title: '1 · Discovery & use-case shaping',
                body: 'We map where agents can remove the most friction: which workflows, tools and datasets they should sit on top of, and what “good” looks like.',
              },
              {
                title: '2 · Design & architecture',
                body: 'We design the agent loop — observations, reasoning steps, tool calls and human approvals — and align it with your security and data boundaries.',
              },
              {
                title: '3 · Build & integrate',
                body: 'We implement the agent, connect APIs and data stores, and wire it into your preferred channels such as chat, portals or line-of-business apps.',
              },
              {
                title: '4 · Pilot, learn & scale',
                body: 'We run a controlled pilot, capture feedback and metrics, tune prompts and policies, then scale into additional teams and use cases.',
              },
            ].map((step) => (
              <li
                key={step.title}
                className="flex gap-4"
              >
                <span
                  className="mt-1 flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-black"
                  style={{ backgroundColor: ACCENT }}
                >
                  {step.title.split('·')[0].trim()}
                </span>
                <div>
                  <div className="text-sm font-medium text-white">
                    {step.title.substring(step.title.indexOf('·') + 1).trim()}
                  </div>
                  <div className="text-slate-300/85">{step.body}</div>
                </div>
              </li>
            ))}
          </motion.ol>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 4. ARCHITECTURE                                                    */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT: mini architecture card */}
            <motion.div
              {...fadeIn}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xl rounded-2xl border border-sky-400/30 bg-gradient-to-b from-[#020617] via-[#020617] to-black p-5 shadow-[0_32px_110px_rgba(0,0,0,1)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-4 w-28 rounded-md bg-sky-400/40" />
                  <div className="h-4 w-12 rounded-md bg-zinc-800" />
                </div>

                <div className="grid grid-cols-4 gap-3 text-[11px] text-slate-200">
                  <div className="col-span-1 rounded-lg border border-sky-400/60 bg-black/70 p-3">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-sky-300">
                      Data
                    </div>
                    <div className="h-3 w-16 rounded bg-zinc-700" />
                    <div className="mt-2 h-3 w-12 rounded bg-zinc-800" />
                  </div>
                  <div className="col-span-1 rounded-lg border border-emerald-400/60 bg-emerald-500/5 p-3">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-300">
                      Tools
                    </div>
                    <div className="h-3 w-16 rounded bg-zinc-700" />
                    <div className="mt-2 h-3 w-10 rounded bg-zinc-800" />
                  </div>
                  <div className="col-span-1 rounded-lg border border-indigo-400/60 bg-indigo-500/5 p-3">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-300">
                      Policies
                    </div>
                    <div className="h-3 w-16 rounded bg-zinc-700" />
                    <div className="mt-2 h-3 w-12 rounded bg-zinc-800" />
                  </div>
                  <div className="col-span-1 rounded-lg border border-white/25 bg-white/5 p-3">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-200">
                      Channels
                    </div>
                    <div className="h-3 w-16 rounded bg-zinc-700" />
                    <div className="mt-2 h-3 w-10 rounded bg-zinc-800" />
                  </div>
                </div>

                <div className="mt-5 space-y-1 text-[10px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-px flex-1 bg-gradient-to-r from-sky-400 via-emerald-400 to-indigo-400" />
                    <span>Observation · Reasoning · Action loop</span>
                  </div>
                  <div>Composable architecture that can reuse components across agents.</div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: text */}
            <motion.div {...fadeUp}>
              <p
                className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  borderColor: `${ACCENT}66`,
                  backgroundColor: `${ACCENT}1A`,
                  color: '#BAE6FD',
                }}
              >
                Technical architecture
              </p>

              <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
                Safe, composable agent architecture built on your cloud.
              </h2>

              <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
                We typically deploy on your preferred cloud and re-use as much of your
                existing identity, observability and data stack as possible. Each agent is
                a small, well-defined loop that can be monitored and audited.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-100/90">
                <div className="flex gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>RAG and tools tailored to your data sources and APIs.</span>
                </div>
                <div className="flex gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Role-based permissions, approvals and rate limits per agent.</span>
                </div>
                <div className="flex gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Telemetry on prompts, responses and actions for continuous tuning.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 5. FINAL CTA                                                       */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeIn}
            className="grid items-center gap-10 rounded-3xl border border-white/10 bg-gradient-to-r from-[#020617] via-[#020617] to-black px-6 py-10 md:grid-cols-2 md:px-10"
          >
            {/* Text */}
            <div>
              <p
                className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  borderColor: `${ACCENT}66`,
                  backgroundColor: `${ACCENT}1A`,
                  color: '#BAE6FD',
                }}
              >
                Next steps
              </p>
              <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
                Have a workload that feels ripe for an agent?
              </h2>
              <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
                Bring us the messy process, the scattered tools and the manual spreadsheets.
                We&apos;ll help you shape a focused agentic solution, prototype it quickly
                and prove the value with your own data and teams.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-100/90">
                <li className="flex gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Discovery workshop to shortlist high-impact agent ideas.</span>
                </li>
                <li className="flex gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>Clear implementation plan with timelines and responsibilities.</span>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(14,165,233,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: ACCENT }}
                >
                  Talk to our team
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs">
                    ↗
                  </span>
                </Link>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/60"
                >
                  View sample use cases
                </button>
              </div>
            </div>

            {/* Right: simple agent brief mock */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-[#0b1120] via-[#020617] to-black p-4 shadow-[0_32px_110px_rgba(0,0,0,1)]">
                {/* top bar */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                  </div>
                  <div className="h-4 w-24 rounded-full bg-zinc-800/80" />
                </div>

                <div className="space-y-3 text-[11px] text-slate-200">
                  <div>
                    <div className="mb-1 h-3 w-32 rounded bg-zinc-800/90" />
                    <div className="h-2 w-40 rounded bg-zinc-900/80" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="mb-1 h-3 w-24 rounded bg-zinc-800" />
                      <div className="space-y-1">
                        <div className="h-2 w-full rounded bg-zinc-900" />
                        <div className="h-2 w-4/5 rounded bg-zinc-900/80" />
                        <div className="h-2 w-3/5 rounded bg-zinc-900/60" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 h-3 w-24 rounded bg-zinc-800" />
                      <div className="space-y-1">
                        <div className="h-2 w-full rounded bg-zinc-900" />
                        <div className="h-2 w-4/5 rounded bg-zinc-900/80" />
                        <div className="h-2 w-2/3 rounded bg-zinc-900/60" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 h-3 w-28 rounded bg-zinc-800" />
                    <div className="flex gap-2">
                      <div className="h-8 flex-1 rounded-md bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.3),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.25),transparent_55%)]" />
                      <div className="h-8 flex-1 rounded-md bg-zinc-900/80" />
                    </div>
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
