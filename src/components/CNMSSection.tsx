'use client';

import { motion, cubicBezier } from 'framer-motion';
import Image from 'next/image';
import CNMSImage from '../../assets/CNMS_dummy.jpg';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

export default function CNMSNetwork() {
  return (
    <section className="relative w-full overflow-hidden bg-[#010101] px-6 -pt-2 pb-24 md:px-8 lg:px-17">

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

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-14 md:flex-row md:items-center">
        {/* LEFT: TEXT / CONTENT */}
        <div className="w-full md:w-1/2">
          {/* breadcrumb-style chip */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            // Original: className="mb-4 flex items-center gap-2 text-sm text-slate-200"
            className="mb-4 flex items-center gap-2 text-[14px] text-slate-200"
          >
            <span className="h-2.5 w-4 rounded-full bg-[#9502A8] shadow-[0_0_10px_rgba(149,2,168,0.9)]" />
            <span className="text-[17px] text-slate-100">Network management</span>
            <span className="text-[18px] leading-none text-slate-500">›</span>
          </motion.div>

          {/* section label */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.05 }}
            className="mb-5 inline-flex items-center rounded-full border border-[#9502A8]/40 bg-[#9502A8]/5 px-5 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-[#E9D5FF]"
          >
            CNMS · Network Management
          </motion.p>

          {/* heading + body */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="space-y-5"
          >
            {/* Original: <h3 className="text-7xl font-semibold text-white md:text-4xl"> */}
            <h3 className="text-[32px] font-semibold text-white md:text-[48px] leading-tight">
              Keep every network healthy and visible in real time.
            </h3>

            {/* Original: <p className="max-w-xl text-lg text-slate-300/80 md:text-lg"> */}
            <p className="max-w-xl text-[18px] text-slate-300/80 md:text-[20px]">
              CNMS gives operations teams a unified view of links, devices and traffic so they can
              detect incidents faster, act before users feel impact, and keep critical services online.
            </p>

            {/* Original: <div className="mt-4 grid gap-3 text-lg text-slate-100/90 md:grid-cols-2 md:gap-4"> */}
            <div className="mt-4 grid gap-3 text-[16px] text-slate-100/90 md:grid-cols-2 md:gap-4 md:text-[18px]">
              <div className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#9502A8]" />
                <span>Topology-wide visibility for backbone and access networks.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#9502A8]" />
                <span>Real-time health scores for every site and device.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#9502A8]" />
                <span>Intelligent alerts that cut through noisy event streams.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#9502A8]" />
                <span>Historical trends to plan capacity and prevent outages.</span>
              </div>
            </div>

            {/* Watch demo button */}
            {/* Watch demo button */}
           {/* <div className="mt-8">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-[#9502A8] px-7 py-3 text-[14px] font-medium text-black shadow-[0_0_45px_rgba(149,2,168,0.75)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Watch demo
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[12px] transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </button>
            </div> */}
          </motion.div>
        </div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 24, y: 12, scale: 0.98, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="w-full md:w-1/2"
          style={{ perspective: '1200px' }}
        >
          <div
            className="relative mx-auto w-full max-w-[560px] rounded-2xl border border-white/10 bg-[#121316] shadow-[0_50px_140px_-50px_rgba(0,0,0,.7)]"
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
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}