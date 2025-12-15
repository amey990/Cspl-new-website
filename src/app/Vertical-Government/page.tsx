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

export default function GovernmentSection() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-6 md:mt-24 md:px-10 lg:px-16">
      <motion.div
        {...fadeUp}
        className="grid gap-10 md:grid-cols-[1.35fr,1fr]"
      >
        {/* LEFT: MAIN COPY */}
        <div>
          <p className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
            Government · Vertical
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
            Building reliable media and network infrastructure for the public sector.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
            The Government of India has many departments under the Ministry of
            Information &amp; Broadcasting, Ministry of Telecom, and Education,
            where rapid technology advancement creates opportunities for a wide
            range of projects across domains.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
            Commedia has been working closely on a host of Government projects –
            including organisations such as Prasar Bharti, All India Radio and ISRO –
            since its inception. We are keen to associate with more government bodies
            and continuously work towards providing stronger technical solutions and
            services.
          </p>

          {/* bullets */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Some of the activities include
            </p>

            <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>SITC of broadcast-related projects.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>SITC of all kinds of antenna installation projects.</span>
                </li>
              </ul>

              <ul className="mt-3 space-y-2 md:mt-0">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>SITC of monitoring solutions.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>Managed services for government projects.</span>
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
            {/* tricolour-ish glows */}
            <div className="pointer-events-none absolute -left-10 top-0 h-24 w-24 rounded-full bg-emerald-500/18 blur-2xl" />
            <div className="pointer-events-none absolute -right-8 top-10 h-20 w-20 rounded-full bg-amber-400/18 blur-2xl" />
            <div className="pointer-events-none absolute -right-12 bottom-4 h-24 w-24 rounded-full bg-orange-500/18 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
              {/* main placeholder image area */}
              <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/85">
                <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 px-4 text-center text-[11px] text-zinc-500">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-300">
                    Govt. building / project visual
                  </span>
                  <p className="max-w-[16rem] leading-relaxed">
                    Replace this area with a high-impact image from one of your
                    government deployments – broadcast tower, control room or
                    flagship site.
                  </p>
                </div>
              </div>

              {/* chips */}
              <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
                <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Nation-wide coverage</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Mission-critical uptime</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-1 text-amber-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Compliance &amp; monitoring</span>
                </div>
              </div>

              {/* mini info strip */}
              <div className="mt-4 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[11px] text-zinc-300">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    Typical engagements
                  </p>
                  <p className="text-xs text-zinc-100">
                    Multi-year projects with central &amp; state bodies
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    Focus
                  </p>
                  <p className="text-xs text-zinc-100">
                    Reach, reliability &amp; governance
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
