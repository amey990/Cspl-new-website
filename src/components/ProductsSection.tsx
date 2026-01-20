'use client';

import { motion, cubicBezier } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PmgtImage from '../../assets/pmgt_new.png';
import OperationAdvisorImage from '../../assets/ops.png';
import AIChatbotImage from '../../assets/cpal_nn.png';
import SmartHelmetImage from '../../assets/Smarthelmet.png';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

export default function Products() {
  return (
    
    <section className="relative overflow-hidden bg-[#0A0B0C] px-6 py-17 pb-0 md:px-8 lg:px-16 lg:pb-0">
      
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

        {/* Tilted hero mock (slanted + bottom vignette) with real image */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98, rotateX: -8, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="relative mx-auto mt-12 w-full max-w-[1080px]"
          style={{ perspective: '1200px' }}
        >
          <div
            className="relative mx-auto w-full rounded-2xl border border-white/10 bg-[#121316] shadow-[0_50px_140px_-50px_rgba(0,0,0,.6)]"
            style={{
              transform: 'rotateX(14deg) rotateZ(-2deg)',
              boxShadow:
                '0 20px 40px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.06), 0 0 0 1px rgba(255,255,255,.04)',
              WebkitMaskImage:
                'linear-gradient(to bottom, rgba(0,0,0,1) 72%, rgba(0,0,0,.0) 100%)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 72%, rgba(0,0,0,.0) 100%)',
            }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={PmgtImage}
                alt="Atlas project management interface"
                className="h-auto w-full"
                priority
                quality={100}
              />

              
            </div>
          </div>
        </motion.div>

        {/* --- Two column grid with centered content + connector lines --- */}
        <div className="relative mt-22">
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

              <div className="relative">
                <Image
                  src={OperationAdvisorImage}
                  alt="Operation Advisor interface showing triage intelligence"
                  className="h-auto w-full max-w-[400px] mx-auto"
                  quality={100}
                />
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
                CPAL Chatbot
              </h3>
              <p className="mb-8 max-w-[480px] text-[17px] leading-[26px] text-[#9ca3af]">
                Connect an assistant to your tools to answer questions, triage issues, and generate
                updates. Works with Slack, email, and your data sources.
              </p>

              <div className="relative">
                <Image
                  src={AIChatbotImage}
                  alt="AI Chatbot interface with assistant capabilities"
                  className="h-auto w-full max-w-[400px] mx-auto"
                  quality={100}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- Smart Helmet Section --- */}
        <div className="relative mt-12">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: easeOutExpo }}
              className="flex flex-col"
            >
              {/* Smart IOT Chip */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[13px] text-white/70">
                  <span className="h-2 w-2 rounded-full bg-[#C789E8] shadow-[0_0_14px_rgba(199,137,232,.6)]" />
                  Smart IOT
                </span>
              </div>

              {/* Heading */}
              <h3
                className="mb-5 text-[52px] leading-[58px] font-medium tracking-[-0.02em] text-white"
                style={{
                  fontFamily:
                    '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
                }}
              >
                Smart Helmet
              </h3>

              {/* Description */}
              <p
                className="mb-6 max-w-[520px] text-[17px] leading-[26px] text-[#9ca3af]"
                style={{
                  fontFamily:
                    '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
                }}
              >
                Streamline product operations with AI-assisted labeling, root-cause hints, and
                suggested actions across your backlog.
              </p>

              {/* Highlight Points */}
              <div className="mb-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-1 rounded-full bg-[#C789E8]" />
                  <span className="text-[15px] text-white/80">Worker Safety</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-1 rounded-full bg-[#C789E8]" />
                  <span className="text-[15px] text-white/80">Real-time Monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-1 rounded-full bg-[#C789E8]" />
                  <span className="text-[15px] text-white/80">Instant Alerts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-1 rounded-full bg-[#C789E8]" />
                  <span className="text-[15px] text-white/80">Fast Issue Tracking</span>
                </div>
              </div>

              {/* Learn More Button */}
              <div>
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

            {/* Right side - Helmet Image with 3D Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: easeOutExpo }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-[600px]">
                {/* 3D Grid Background */}
                <div
                  className="absolute inset-0 -bottom-20"
                  style={{
                    perspective: '1000px',
                    transform: 'translateY(40%)',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '300px',
                      background:
                        'repeating-linear-gradient(0deg, rgba(199,137,232,0.15) 0px, rgba(199,137,232,0.15) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(90deg, rgba(199,137,232,0.15) 0px, rgba(199,137,232,0.15) 1px, transparent 1px, transparent 30px)',
                      transform: 'rotateX(60deg)',
                      transformOrigin: 'center center',
                      WebkitMaskImage:
                        'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)',
                      maskImage:
                        'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)',
                    }}
                  />
                </div>

                {/* Helmet Image */}
                <div className="relative z-10">
                  <Image
                    src={SmartHelmetImage}
                    alt="Smart Helmet with IOT capabilities"
                    className="h-auto w-full max-w-[500px] mx-auto"
                    quality={100}
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