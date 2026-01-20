

// pp
'use client';

import Link from 'next/link';
import { motion, cubicBezier } from 'framer-motion';

import ImageCarousel from '@/components/ImageCarousel';

// change these paths/names to match your actual files
import life1 from '../../../assets/life1.jpg';
import life2 from '../../../assets/life2.jpg';
import life3 from '../../../assets/life3.jpg';
import life4 from '../../../assets/life4.jpg';
import life5 from '../../../assets/life5.jpg';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
  initial: { opacity: 0, y: 26 },
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

const roles = [
  {
    team: 'Engineering',
    title: 'Senior Full-Stack Engineer',
    location: 'Bangalore · Hybrid',
    type: 'Full-time',
    blurb:
      'Own features end-to-end across our AI products, from API design to polished UI.',
  },
  {
    team: 'AI & Data',
    title: 'Applied ML Engineer – Agents',
    location: 'Remote · India',
    type: 'Full-time',
    blurb:
      'Prototype and productionise agentic workflows that power Ops Advisor and CPAL.',
  },
  {
    team: 'Design',
    title: 'Product Designer',
    location: 'Bangalore · Hybrid',
    type: 'Full-time',
    blurb:
      'Shape interfaces that feel as good as they look – from dashboards to workflows.',
  },
];

export default function CareersPage() {
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

      {/* NEUTRAL VIGNETTE (replaces blue colour wash) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,1) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.95) 100%)
          `,
          opacity: 1,
        }}
      />

      <div className="relative z-10 pt-24 pb-28">
        {/* ------------------------------------------------------------------ */}
        {/* HERO                                                              */}
        {/* ------------------------------------------------------------------ */}
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center md:px-10 lg:px-16">
          {/* LEFT: TEXT */}
          <motion.div
            {...fadeUp}
            className="flex-1 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
              <span className="h-2.5 w-4 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              <span>Careers at Commedia</span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Help build the next generation of AI-powered operations.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-300/85 md:text-base">
              We’re a small, focused team building products that keep real-world
              operations running – from safety helmets in the field to AI copilots in
              the control room. If you like shipping, learning and owning outcomes,
              you’ll fit right in.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#open-roles"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(52,211,153,0.7)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                View open roles
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs">
                  ↗
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/10 px-6 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/60"
              >
                Talk to the team
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Remote-friendly across India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Early team, big product surface area</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                <span>Real customers, real impact</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: GLOSSY TILE CLUSTER */}
          <motion.div
            {...fadeIn}
            className="flex flex-1 justify-center md:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -left-6 -top-6 h-20 w-20 rounded-3xl bg-emerald-400/10 blur-xl" />
              <div className="absolute -right-8 bottom-0 h-24 w-24 rounded-3xl bg-fuchsia-500/20 blur-[26px]" />

              <div className="grid grid-cols-3 gap-3 rounded-3xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm shadow-[0_32px_120px_rgba(0,0,0,1)]">
                {[
                  'AI agents',
                  'Observability',
                  'Safety',
                  'Control rooms',
                  'Automations',
                  'Realtime',
                ].map((tag) => (
                  <div
                    key={tag}
                    className="flex h-20 flex-col justify-between rounded-2xl bg-gradient-to-br from-white/5 via-white/0 to-black/70 p-3"
                  >
                    <span className="h-1 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
                    <span className="text-[11px] font-medium text-slate-100">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/5 px-4 py-3 text-xs text-emerald-100/90">
                <span className="font-semibold uppercase tracking-[0.16em]">
                  Why now?
                </span>
                <p className="mt-1 text-[11px] text-slate-200/90">
                  We&apos;re scaling from early pilots to production deployments across
                  multiple industries. You&apos;ll help define how the product – and the
                  company – grows.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* VALUES / WHAT WE'RE LIKE                                          */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-28 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
              How we work
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
              A team built for builders.
            </h2>
            <p className="mt-3 text-sm text-slate-300/85 md:text-base">
              We balance product velocity with thoughtful engineering, and leave plenty of
              room for curiosity. Titles are light; ownership is heavy.
            </p>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {[
              {
                title: 'Ship to learn',
                body: 'We bias towards small, end-to-end releases that reach real customers fast.',
              },
              {
                title: 'Own the problem',
                body: 'You’ll sit close to users, data and the roadmap – not just tickets.',
              },
              {
                title: 'Stay kind, stay sharp',
                body: 'Direct feedback, low ego, and space to grow your craft.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 via-black/40 to-black/90 p-5 shadow-[0_26px_90px_rgba(0,0,0,0.9)]"
              >
                <div className="mb-3 h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400/70 to-sky-400/80 p-[1px]">
                  <div className="h-full w-full rounded-[10px] bg-black/90" />
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300/85">{item.body}</p>
              </div>
            ))}
          </motion.div>
        </section>

       {/* ------------------------------------------------------------------ */}
{/* LIFE AT COMMEDIA                                                  */}
{/* ------------------------------------------------------------------ */}
<section className="mt-28 mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
  <motion.div
    {...fadeUp}
    className="flex flex-col gap-10"
  >
    {/* TEXT BLOCK */}
    <div className="max-w-3xl">
      <p className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-200">
        Life at Commedia
      </p>
      <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
        The work is intense. The environment doesn’t have to be.
      </h2>
      <p className="mt-3 text-sm text-slate-300/85 md:text-base">
        We’re building serious products, but we try not to take ourselves too
        seriously. Expect focused work blocks, plenty of whiteboarding, and
        healthy respect for life outside Slack.
      </p>

      <ul className="mt-6 space-y-3 text-sm text-slate-100/90">
        <li className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>
            Hybrid-first: a few anchor days in office for deep collaboration,
            remote-friendly for focused work.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>
            Makers’ schedule: long, protected blocks for building instead of
            back-to-back meetings.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>
            Real ownership over product areas, with visibility to customers and
            leadership.
          </span>
        </li>
      </ul>
    </div>

    {/* ROW: CAROUSEL LEFT, WEEK CARD RIGHT */}
    <div className="grid items-stretch gap-8 md:grid-cols-2">
      {/* LEFT: PHOTO CAROUSEL */}
      <div className="flex items-center justify-center md:justify-start">
        <ImageCarousel
          className="w-full"
          background="transparent"
          cardWidth={380}
          cardHeight={250}
          cardRadius={28}
          autoPlay={4500}
          pauseOnHover
          dotColor="#38bdf8"
          slides={[
            { id: '1', image: life1.src, alt: 'Life at Commedia 1' },
            { id: '2', image: life2.src, alt: 'Life at Commedia 2' },
            { id: '3', image: life3.src, alt: 'Life at Commedia 3' },
            { id: '4', image: life4.src, alt: 'Life at Commedia 4' },
            { id: '5', image: life5.src, alt: 'Life at Commedia 5' },
          ]}
        />
      </div>

      {/* RIGHT: A WEEK IN THE TEAM CARD */}
      <motion.div
        {...fadeIn}
        className="flex justify-center md:justify-end"
      >
        <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] via-[#020617] to-black p-4 shadow-[0_28px_100px_rgba(0,0,0,1)]">
          <div className="mb-3 flex items-center justify-between text-xs text-slate-300">
            <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em]">
              A week in the team
            </span>
            <span className="text-slate-500">Sample</span>
          </div>

          <div className="space-y-3 text-[11px] text-slate-200">
            <div className="flex items-start gap-3 rounded-lg bg-black/60 p-3">
              <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <div>
                <div className="font-semibold text-white">Monday</div>
                <div className="text-slate-300">
                  Product review &amp; planning. Align on goals, unblock work.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-black/40 p-3">
              <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <div>
                <div className="font-semibold text-white">Tue–Thu</div>
                <div className="text-slate-300">
                  Deep build time. Pairing, async updates, customer calls when
                  needed.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-black/40 p-3">
              <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
              <div>
                <div className="font-semibold text-white">Friday</div>
                <div className="text-slate-300">
                  Demo hour, tech talks and retros. Close the loop and celebrate
                  wins.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500">
            <span>Minimal bureaucracy. Maximum context.</span>
            <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px]">
              v1.0
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
</section>


        {/* ------------------------------------------------------------------ */}
        {/* OPEN ROLES                                                         */}
        {/* ------------------------------------------------------------------ */}
        <section
          id="open-roles"
          className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16"
        >
          <motion.div {...fadeUp}>
            <p className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
              Open roles
            </p>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Join the early team.
              </h2>
              <p className="max-w-md text-xs text-slate-400 md:text-sm">
                Don&apos;t see a perfect fit? We&apos;re always happy to meet exceptional
                builders. Reach out with a short note and a link to your work.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="mt-8 space-y-4"
          >
            {roles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/3 via-black/40 to-black/90 p-5 shadow-[0_22px_80px_rgba(0,0,0,0.9)] md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    {role.team}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300/85">{role.blurb}</p>

                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300">
                    <span className="rounded-full bg-white/5 px-3 py-1">
                      {role.location}
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1">
                      {role.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-shrink-0 items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2 text-xs font-medium text-black shadow-[0_0_30px_rgba(52,211,153,0.6)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Apply / Refer
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-black/10 text-[10px]">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            ))}

            {/* Generic / future roles */}
            <div className="mt-6 rounded-2xl border border-dashed border-white/18 bg-black/40 px-5 py-4 text-sm text-slate-300/85">
              <span className="font-semibold text-slate-100">
                No perfect role yet?
              </span>{' '}
              Send us a short introduction and what you&apos;d like to work on to{' '}
              <span className="text-emerald-300">careers@commmedia.ai</span>.
            </div>
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* BENEFITS SNAPSHOT                                                  */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="text-center"
          >
            <p className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-200">
              What you get
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
              Benefits designed for focused builders.
            </h2>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="mt-8 grid gap-6 md:grid-cols-3"
          >
            {[
              {
                title: 'Healthy base + ESOPs',
                body: 'Competitive compensation with meaningful ownership as we grow.',
              },
              {
                title: 'Tools & learning',
                body: 'Top-tier hardware, conference budget and access to learning resources.',
              },
              {
                title: 'Time to recharge',
                body: 'Flexible leave and a culture that actually encourages using it.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/3 via-black/40 to-black/90 p-5"
              >
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300/85">{item.body}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* FINAL CTA                                                          */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeIn}
            className="grid items-center gap-10 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0b0b0c] via-[#020617] to-black px-6 py-10 md:grid-cols-[1.4fr,1fr] md:px-10"
          >
            <div>
              <p className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
                Next steps
              </p>
              <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-white md:text-4xl">
                Tell us what you&apos;d love to build here.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/85 md:text-base">
                A short note, some links to your work, and what you&apos;re excited
                about is enough for a first conversation. No formal cover letters needed.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(52,211,153,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Share your profile
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs">
                    ↗
                  </span>
                </Link>

                <span className="text-xs text-slate-400 md:text-sm">
                  Or email us directly at{' '}
                  <span className="text-emerald-300">careers@commmedia.ai</span>
                </span>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] via-[#020617] to-black p-5 shadow-[0_32px_110px_rgba(0,0,0,1)]">
                {/* window chrome */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  </div>
                  <div className="h-4 w-20 rounded-full bg-zinc-800/80" />
                </div>

                {/* form – visual only */}
                <form className="space-y-4 text-xs text-slate-200">
                  <div>
                    <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-2 text-[13px] text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-0"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-2 text-[13px] text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-0"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Email ID
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-2 text-[13px] text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-0"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Preferred Role
                    </label>
                    <select
                      className="w-full rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-2 text-[13px] text-slate-100 focus:border-emerald-400 focus:outline-none focus:ring-0"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select role
                      </option>
                      {roles.map((role) => (
                        <option key={role.title} value={role.title}>
                          {role.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Upload your resume
                    </label>
                    <input
                      type="file"
                      className="w-full cursor-pointer rounded-lg border border-dashed border-white/25 bg-zinc-900/60 px-3 py-2 text-[13px] text-slate-100 file:mr-3 file:rounded-md file:border-0 file:bg-emerald-500/10 file:px-3 file:py-1 file:text-[11px] file:font-medium file:text-emerald-200"
                    />
                  </div>

                  <p className="pt-1 text-[10px] text-slate-500">
                    Use the{' '}
                    <span className="font-medium text-emerald-300">
                      Share your profile
                    </span>{' '}
                    button to send this information to us.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
