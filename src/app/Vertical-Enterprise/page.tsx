'use client';

import { motion, cubicBezier } from 'framer-motion';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

export default function EnterpriseSection() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-6 md:mt-24 md:px-10 lg:px-16">
      <motion.div
        {...fadeUp}
        className="grid gap-10 md:grid-cols-[1.35fr,1fr]"
      >
        {/* LEFT: MAIN COPY */}
        <div>
          <p className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-amber-200">
            Enterprise · Vertical
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
            Enterprise networks designed for always-on business.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
            With the convergence of technologies, Commedia understands the evolving
            needs of growing enterprise companies. Diverse businesses now recognise the
            efficiency that modern IT and networking bring across functions – from
            collaboration and security to customer experience.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
            Commedia has been delivering round-the-clock projects where customers&apos; IT
            and enterprise infrastructure are mission-critical. We work with leading
            technology stacks to provide seamless, high-end platforms – partnering with
            vendors such as Dell, Cisco, AWS, HPE, Juniper, Avaya, Ruckus and SonicWall.
            Our engineers are trained and hands-on with the latest enterprise
            technologies as they emerge.
          </p>

          {/* bullets */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Some of the activities include
            </p>

            <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                  <span>
                    SITC of wireless and wired networking enterprise solutions.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                  <span>SITC of IT hardware and peripherals.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                  <span>SITC of surveillance and CCTV solutions.</span>
                </li>
              </ul>

              <ul className="mt-3 space-y-2 md:mt-0">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                  <span>
                    SITC of auditoriums, meeting rooms and conference halls.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                  <span>Support services for the enterprise segment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT: IMAGE PLACEHOLDER / VISUAL CARD */}
        <motion.div
          {...fadeIn}
          className="flex items-center justify-center md:justify-end"
        >
          <div className="relative w-full max-w-md">
            {/* subtle glows */}
            <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-amber-500/20 blur-2xl" />
            <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/18 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
              {/* main placeholder image area */}
              <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/85">
                <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 px-4 text-center text-[11px] text-zinc-500">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-300">
                    Enterprise workspace / network visual
                  </span>
                  <p className="max-w-[16rem] leading-relaxed">
                    Replace this box with a photo from your office, datacentre or
                    collaboration spaces to localise this vertical.
                  </p>
                </div>
              </div>

              {/* chips */}
              <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
                <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Seamless connectivity</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Cloud &amp; hybrid ready</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-1 text-amber-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Secure campus &amp; branch</span>
                </div>
              </div>

              {/* mini info strip */}
              <div className="mt-4 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[11px] text-zinc-300">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    Typical footprint
                  </p>
                  <p className="text-xs text-zinc-100">
                    Multi-site offices · datacentres · branches
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    Outcomes
                  </p>
                  <p className="text-xs text-zinc-100">
                    Higher uptime, secure collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
