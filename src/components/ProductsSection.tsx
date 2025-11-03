'use client';

import { motion, cubicBezier } from 'framer-motion';
import Link from 'next/link';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

export default function Products() {
  return (
    <section className="relative overflow-hidden bg-[#0A0B0C] px-6 py-24 md:px-8 lg:px-16">
      {/* --- Hero Lighting (neutral slate tone like Linear) --- */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* subtle neutral wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(55% 45% at 50% 0%, rgba(71,85,105,0.08) 0%, rgba(71,85,105,0) 70%)',
            filter: 'blur(50px)',
          }}
        />
        {/* very subtle top glow */}
        <div
          className="absolute inset-0 opacity-[.25]"
          style={{
            background:
              'radial-gradient(60% 40% at 50% 0%, rgba(100,116,139,.06), rgba(100,116,139,0) 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="mx-auto max-w-[1200px]">
        {/* Chip */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[13px] text-white/70">
            <span className="h-2 w-2 rounded-full bg-cyan-400/80 shadow-[0_0_14px_rgba(56,189,248,.6)]" />
            Project management
          </span>
        </motion.div>

        {/* Headline + copy */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="max-w-[900px]"
        >
          <h2
            className="mb-5 text-[52px] leading-[58px] font-medium tracking-[-0.02em] text-white"
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
            }}
          >
            Atlas project management
          </h2>

          <p
            className="max-w-[720px] text-[17px] leading-[26px] text-[#9ca3af]"
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
            }}
          >
            Plan, assign, and track all work in one fast system. Use Atlas to orchestrate projects,
            teams, and timelines with precision—while keeping stakeholders aligned.
          </p>

          <div className="mt-6">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80 hover:border-white/20 hover:bg-white/[0.05]"
            >
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Tilted hero mock (slanted + bottom vignette) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98, rotateX: -8, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="relative mx-auto mt-12 w-full max-w-[1080px]"
          style={{ perspective: '1200px' }}
        >
          <div
            className="relative mx-auto w-full rounded-2xl border border-white/10 bg-gradient-to-b from-[#1a1b1d] to-[#121316] shadow-[0_50px_140px_-50px_rgba(0,0,0,.6)]"
            style={{
              transform: 'rotateX(14deg) rotateZ(-2deg)',
              boxShadow:
                '0 20px 40px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.06), 0 0 0 1px rgba(255,255,255,.04)',
              WebkitMaskImage:
                'linear-gradient(to bottom, rgba(0,0,0,1) 72%, rgba(0,0,0,.0) 100%)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 72%, rgba(0,0,0,.0) 100%)',
            }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between rounded-t-2xl border-b border-white/5 bg-white/[0.02] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>
              <div className="h-2 w-24 rounded bg-white/10" />
            </div>

            {/* Table body mock */}
            <div className="px-5 py-4">
              <div className="mb-3 flex gap-3">
                <div className="h-9 w-56 rounded-md border border-white/10 bg-white/[0.03]" />
                <div className="h-9 w-32 rounded-md border border-white/10 bg-white/[0.03]" />
                <div className="h-9 w-28 rounded-md border border-white/10 bg-white/[0.03]" />
                <div className="ml-auto h-9 w-24 rounded-md border border-white/10 bg-white/[0.03]" />
              </div>

              <div className="space-y-2 rounded-xl border border-white/10 bg-black/10 p-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] items-center gap-3 rounded-lg bg-white/[0.02] px-3 py-3"
                  >
                    <div className="h-2.5 w-12 rounded bg-white/15" />
                    <div className="h-2.5 w-56 rounded bg-white/12" />
                    <div className="h-2.5 w-40 rounded bg-white/10" />
                    <div className="h-2.5 w-32 rounded bg-white/10" />
                    <div className="ml-auto h-6 w-24 rounded-full bg-emerald-500/15" />
                  </div>
                ))}
              </div>
            </div>

            {/* glow sweep */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-16 h-24"
              style={{
                background:
                  'linear-gradient(90deg, rgba(120,187,255,.0) 0%, rgba(120,187,255,.35) 50%, rgba(120,187,255,.0) 100%)',
                filter: 'blur(10px)',
              }}
            />
          </div>
        </motion.div>

        {/* --- Two column grid with centered content + connector lines --- */}
        <div className="relative mt-32">
          {/* connectors */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-16 hidden md:block">
            {/* top horizontal */}
            <div
              className="mx-auto h-px w-full max-w-[1100px]"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(148,163,184,.2) 15%, rgba(148,163,184,.2) 85%, rgba(255,255,255,0) 100%)',
              }}
            />
          </div>

          {/* middle vertical connector */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-16 md:block hidden">
            <div className="relative mx-auto h-[650px] w-full max-w-[1100px]">
              <div
                className="absolute left-1/2 top-0 -translate-x-1/2"
                style={{
                  height: '100%',
                  width: '1px',
                  background:
                    'linear-gradient(180deg, rgba(148,163,184,0) 0%, rgba(148,163,184,.25) 10%, rgba(148,163,184,.25) 90%, rgba(148,163,184,0) 100%)',
                }}
              />
            </div>
          </div>

          {/* bottom horizontal */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-16 hidden md:block">
            <div
              className="mx-auto h-px w-full max-w-[1100px]"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(148,163,184,.2) 15%, rgba(148,163,184,.2) 85%, rgba(255,255,255,0) 100%)',
              }}
            />
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Operation Advisor */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: easeOutExpo }}
              className="flex flex-col items-center text-center"
            >
              <h3
                className="mb-3 text-[32px] font-medium leading-[38px] text-white"
                style={{
                  fontFamily:
                    '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
                }}
              >
                Operation Advisor
              </h3>
              <p className="mb-8 max-w-[480px] text-[17px] leading-[26px] text-[#9ca3af]">
                Streamline product operations with AI-assisted labeling, root-cause hints, and
                suggested actions across your backlog.
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 shadow-[0_40px_120px_-40px_rgba(0,0,0,.6)]">
                <div className="rounded-xl border border-white/10 bg-[#151618] p-4">
                  {/* title row */}
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-cyan-500/15">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      </span>
                      <span className="text-[14px] text-white/80">Triage Intelligence</span>
                    </div>
                    <div className="h-2 w-12 rounded bg-white/10" />
                  </div>

                  {/* body list */}
                  <div className="space-y-2 rounded-lg border border-white/10 bg-white/[0.02] p-3">
                    <div className="h-2.5 w-64 rounded bg-white/12" />
                    <div className="h-2.5 w-80 rounded bg-white/10" />
                    <div className="h-2.5 w-72 rounded bg-white/10" />
                  </div>

                  {/* accept btn */}
                  <div className="mt-4">
                    <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80 hover:border-white/20 hover:bg-white/[0.06]">
                      <span className="h-3 w-3 rounded-full bg-emerald-400/80 shadow-[0_0_10px_rgba(16,185,129,.6)]" />
                      Accept suggestion
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Chatbot */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.05 }}
              className="flex flex-col items-center text-center"
            >
              <h3
                className="mb-3 text-[32px] font-medium leading-[38px] text-white"
                style={{
                  fontFamily:
                    '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
                }}
              >
                AI Chatbot
              </h3>
              <p className="mb-8 max-w-[480px] text-[17px] leading-[26px] text-[#9ca3af]">
                Connect an assistant to your tools to answer questions, triage issues, and generate
                updates. Works with Slack, email, and your data sources.
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 shadow-[0_40px_120px_-40px_rgba(0,0,0,.6)]">
                <div className="relative rounded-xl border border-white/10 bg-[#151618] p-4">
                  <div className="mb-3 h-2 w-24 rounded bg-white/10" />
                  <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                    <div className="mb-3 h-10 rounded-lg border border-white/10 bg-white/[0.04]" />
                    <div className="flex gap-2">
                      <span className="h-7 w-20 rounded-full bg-white/[0.06]" />
                      <span className="h-7 w-20 rounded-full bg-white/[0.06]" />
                      <span className="h-7 w-20 rounded-full bg-white/[0.06]" />
                    </div>
                  </div>

                  {/* cone light */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-10 h-24"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.25) 50%, rgba(255,255,255,0) 100%)',
                      filter: 'blur(12px)',
                    }}
                  />

                  {/* bottom fade */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      WebkitMaskImage:
                        'linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)',
                      maskImage:
                        'linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
