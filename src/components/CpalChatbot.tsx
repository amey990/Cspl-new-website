'use client';

import { motion, cubicBezier } from 'framer-motion';
import dynamic from 'next/dynamic';
import AiCoreAnimation from '../../assets/lottie/Ai_core.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

export default function CpalChatbot() {
  return (
    <section className="relative w-full overflow-hidden bg-[#010101] px-6 pt-5 pb-24 md:px-8 lg:px-16">
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
        {/* LEFT: LOTTIE ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 10, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="relative flex w-full items-center justify-center"
        >
          {/* control animation size with max-w + optional scale */}
          <Lottie
            animationData={AiCoreAnimation}
            loop
            autoplay
            className="h-auto w-full max-w-[620px]" // <-- change this to resize
          />
        </motion.div>

        {/* RIGHT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="w-full space-y-6"
        >
          {/* breadcrumb chip */}
          <div className="mb-2 flex items-center gap-3 text-sm text-slate-200">
            <span className="h-2.5 w-5 rounded-full bg-[#19E28F] shadow-[0_0_12px_rgba(25,226,143,0.85)]" />
            <span className="text-[15px] text-slate-100">C-pal Chatbot</span>
            <span className="text-lg leading-none text-slate-500">›</span>
          </div>

          {/* section label */}
          <p className="inline-flex items-center rounded-full border border-[#19E28F]/40 bg-[#19E28F]/8 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#BBF7D0]">
            CPAL · AI ASSISTANT
          </p>

          {/* heading */}
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Put an always-on AI assistant at the heart of your operations.
          </h2>

          {/* subheading */}
          <p className="max-w-xl text-sm text-slate-300/85 md:text-base">
            C-pal connects to your tools and channels to answer questions, triage issues
            and keep every stakeholder in sync — without adding more tabs to your day.
          </p>

          {/* bullets */}
          <div className="mt-2 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#19E28F]" />
              <span>Natural language queries over tickets, tasks and documentation.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#19E28F]" />
              <span>Smart summaries for stand-ups, incident reviews and hand-offs.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#19E28F]" />
              <span>Works where your teams already are — Slack, email and more.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#19E28F]" />
              <span>Guardrails and permissions aligned with your existing systems.</span>
            </div>
          </div>

          {/* button */}
          <div className="mt-6">
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-full bg-[#19E28F] px-7 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(25,226,143,0.6)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Watch demo
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
