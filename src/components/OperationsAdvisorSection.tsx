'use client';

import Image from 'next/image';
import { motion, cubicBezier } from 'framer-motion';

import OpsAdvisorImage from '../../assets/Ops_advisor.jpg';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

export default function OperationsAdvisor() {
  return (
    <section className="relative w-full overflow-hidden bg-[#010101] px-6 pt-10 pb-24 md:px-8 lg:px-16">
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

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 md:grid md:grid-cols-2 md:items-center">
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="w-full space-y-6"
        >
          {/* breadcrumb chip */}
          <div className="mb-2 flex items-center gap-3 text-sm text-slate-200">
            <span className="h-2.5 w-5 rounded-full bg-[#FF5906] shadow-[0_0_12px_rgba(255,89,6,0.9)]" />
            <span className="text-[15px] text-slate-100">Operations Advisor</span>
            <span className="text-lg leading-none text-slate-500">›</span>
          </div>

          {/* label chip */}
          <p className="inline-flex items-center rounded-full border border-[#FF5906]/40 bg-[#FF5906]/8 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#FD935E]">
            OPERATIONS ADVISOR · AGENTIC SOLUTION
          </p>

          {/* heading */}
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Give every operator an AI partner for real-time decisions.
          </h2>

          {/* subheading */}
          <p className="max-w-xl text-sm text-slate-300/85 md:text-base">
            Ops Advisor watches your live operations, surfaces the right signals, and recommends
            next best actions — so teams can respond faster and with more confidence.
          </p>

          {/* bullets */}
          <div className="mt-2 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF5906]" />
              <span>Agentic workflows that triage, route and recommend actions automatically.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF5906]" />
              <span>Live health scores across sites, assets and customer-facing services.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF5906]" />
              <span>Root-cause hints pulled from tickets, logs and historical incidents.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF5906]" />
              <span>Playbooks that adapt as conditions change — not static runbooks.</span>
            </div>
          </div>

          {/* button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={() => {
  window.dispatchEvent(
    new CustomEvent('commedia:open-demo', {
      detail: {
        url: 'https://www.youtube.com/watch?v=M7lc1UVf-VE', // placeholder now
        title: 'Ops-advisor — AI Agent',                 // optional
      },
    })
  );
}}
              className="group inline-flex items-center gap-2 rounded-full bg-[#FF5906] px-7 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(255,89,6,0.6)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Watch demo
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </button>
          </div>
        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: 10, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="relative flex w-full items-center justify-center"
        >
          <div className="relative w-full max-w-[520px] rounded-[18px] border border-white/10 bg-gradient-to-b from-white/5 via-white/3 to-black/70 shadow-[0_40px_120px_rgba(0,0,0,0.9)]">
            <div className="overflow-hidden rounded-[16px]">
              <Image
                src={OpsAdvisorImage}
                alt="Operations Advisor dashboard"
                className="h-auto w-full"
                quality={100}
                priority={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
