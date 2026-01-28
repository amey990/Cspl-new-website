'use client';

import { motion, cubicBezier } from 'framer-motion';
import VerticalsCubesField from '../../components/VerticalsHeroViz'; // adjust path if needed
import Image from 'next/image';

import TelecomImage from '../../../assets/Telco.png';
import Digitalmedia from '../../../assets/DigitalM.png';
import Enterprise from '../../../assets/Enterprise.png';
import Government from '../../../assets/Government.png';

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

const verticalSummary = [
  {
    id: 'service-provider',
    label: 'Service Provider',
    blurb: 'End-to-end networks and NOC-centric operations for telecom operators.',
    accent: 'text-sky-300',
    badgeBg: 'bg-sky-400/10 border-sky-400/40',
  },
  {
    id: 'digital-media',
    label: 'Digital Media',
    blurb: 'Broadcast, OTT and teleport workflows re-architected for IP and AI.',
    accent: 'text-fuchsia-300',
    badgeBg: 'bg-fuchsia-400/10 border-fuchsia-400/40',
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    blurb: 'Secure campus and branch networks for always-on businesses.',
    accent: 'text-amber-300',
    badgeBg: 'bg-amber-400/10 border-amber-400/40',
  },
  {
    id: 'government',
    label: 'Government',
    blurb: 'Nation-scale media and network infrastructure for public-sector projects.',
    accent: 'text-emerald-300',
    badgeBg: 'bg-emerald-400/10 border-emerald-400/40',
  },
];

export default function VerticalsPage() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
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

      {/* HERO */}
      <section className="relative z-10">
        <VerticalsCubesField />
      </section>

      <div className="relative z-10 pb-28 pt-10">
        {/* SUMMARY STRIP */}
        <section className="mx-auto mt-16 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="grid gap-4 md:grid-cols-4">
            {verticalSummary.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => handleScroll(v.id)}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-left shadow-[0_20px_60px_rgba(0,0,0,0.9)] transition-transform duration-200 hover:-translate-y-1 hover:border-white/25"
              >
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${v.badgeBg} ${v.accent}`}
                >
                  {v.label}
                </span>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">{v.blurb}</p>
                <span className="mt-4 text-[11px] text-slate-500 group-hover:text-slate-300">
                  Scroll to details ↘
                </span>
              </button>
            ))}
          </motion.div>
        </section>

        {/* ============================ SERVICE PROVIDER ============================ */}
        <section id="service-provider" className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="space-y-10">
            {/* TEXT BLOCK (full width) */}
            <div>
              <p className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-200">
                Service Provider · Vertical
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
                Stay ahead of rapid change in telecom.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                Telecom companies in India and globally are seeing transition in terms of technology, shifts in customer
                preferences, ARPUs and services offered. Competition today demands rapid project execution, multi-location
                deployments and consistently high customer satisfaction at every engagement.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
                Commedia works with leading global service providers to help them implement networks and programs at scale.
                We stay close to requirements on the ground, engaging through long-running projects and delivering solutions
                that match how their operations run.
              </p>
            </div>

            {/* ROW: help card (left) + image card (right) */}
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* HELP CARD */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    Where we help
                  </p>
                  <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>Setting up connectivity networks and NOCs.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>Installation, testing and commissioning of servers and systems.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>Network and system upgrades, transformation projects.</span>
                      </li>
                    </ul>

                    <ul className="mt-3 space-y-2 md:mt-0">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>Managed services for telecom infrastructure and migration work.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>Software for network management, billing, analytics &amp; OSS tools.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* IMAGE CARD */}
              <div className="lg:col-span-7">
                <motion.div {...fadeIn} className="relative">
                  <div className="pointer-events-none absolute -left-6 top-0 h-24 w-24 rounded-full bg-sky-500/15 blur-2xl" />
                  <div className="pointer-events-none absolute -right-10 bottom-4 h-28 w-28 rounded-full bg-emerald-400/20 blur-3xl" />

                  <div className="relative overflow-hidden rounded-3xl border border-white/14 bg-zinc-950/60 p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
                    <div className="relative overflow-hidden rounded-2xl border border-white/18 bg-black/40">
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={TelecomImage}
                          alt="Telecom NOC and field operations"
                          className="h-full w-full object-contain"
                          priority
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>NOC visibility</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/5 px-3 py-1 text-sky-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>Roll-out at scale</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/5 px-3 py-1 text-fuchsia-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                        <span>AI-assisted operations</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-xl bg-black/60 px-3 py-2 text-[11px] text-zinc-300">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Typical engagement</p>
                        <p className="text-xs text-zinc-100">Multi-circle deployments · 6–18 months</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Focus</p>
                        <p className="text-xs text-zinc-100">Uptime &amp; experience</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================ DIGITAL MEDIA ============================ */}
        <section id="digital-media" className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="space-y-10">
            {/* TEXT BLOCK (full width) */}
            <div>
              <p className="inline-flex items-center rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-fuchsia-200">
                Digital Media · Vertical
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
                Broadcast and OTT workflows, re-architected for IP and AI.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                Broadcast industry in India is undergoing a shift in terms of technology on multiple fronts. Baseband and
                non-automated workflows are giving way to IP-based and automated flows. Newer HEVC compression standards
                reduce operational cost while maintaining quality.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
                Technologies like AI, AR and VR are spreading across the broadcast domain, while online platforms and
                OTT/IPTV services explode. Telcos, broadcasters, content producers and aggregators are all looking to modernise
                their chains end-to-end.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
                Commedia works closely with major broadcasters in India and abroad, from setting up satellite / cable channels to
                modernising teleport and playout operations.
              </p>
            </div>

            {/* ROW: image card (left) + help card (right) */}
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* IMAGE CARD (left on lg) */}
              <div className="lg:col-span-7 lg:order-1">
                <motion.div {...fadeIn} className="relative">
                  <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-fuchsia-500/18 blur-2xl" />
                  <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />

                  <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
                    <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/85">
                      <div className="aspect-[16/10] w-full">
                        <Image
                          src={Digitalmedia}
                          alt="Digital Media operations"
                          className="h-full w-full object-contain"
                          priority
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
                      <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>IP-based workflows</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>HEVC &amp; compression savings</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-400/5 px-3 py-1 text-fuchsia-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                        <span>OTT / IPTV &amp; 5G</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[11px] text-zinc-300">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Typical footprint</p>
                        <p className="text-xs text-zinc-100">Multi-site broadcast + teleport</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Outcomes</p>
                        <p className="text-xs text-zinc-100">Faster launches, measurable QoS / QoE</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* HELP CARD (right on lg) */}
              <div className="lg:col-span-5 lg:order-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
                    Within broadcast &amp; teleport, we help with
                  </p>

                  <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                        <span>SITC of turnkey projects, headend and teleport infrastructure.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                        <span>PCR / MCR / studio setups.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                        <span>MAM / DAM, storage and archival solutions.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                        <span>ENG cameras, newsroom control, online/offline graphics.</span>
                      </li>
                    </ul>

                    <ul className="mt-3 space-y-2 md:mt-0">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                        <span>OTT, IPTV and streaming solutions.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                        <span>DSNG and OB van setup with fabrication.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                        <span>Compliance and SLAs across the transmission chain (QoS / QoE).</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                        <span>Managed services for audits, playout, metadata tagging &amp; QC.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================ ENTERPRISE ============================ */}
        <section id="enterprise" className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="space-y-10">
            {/* TEXT BLOCK (full width) */}
            <div>
              <p className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-amber-200">
                Enterprise · Vertical
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
                Enterprise networks designed for always-on business.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                With the convergence of technologies, Commedia understands the evolving needs of growing enterprise companies.
                Diverse businesses now recognise the efficiency that modern IT and networking bring across functions – from
                collaboration and security to customer experience.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
                Commedia has been delivering round-the-clock projects where customers&apos; IT and enterprise infrastructure are
                mission-critical. We work with stacks from Dell, Cisco, AWS, HPE, Juniper, Avaya, Ruckus, SonicWall and more to
                provide seamless, high-end platforms.
              </p>
            </div>

            {/* ROW: help card (left) + image card (right) */}
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* HELP CARD */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                    Some of the activities include
                  </p>

                  <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                        <span>SITC of wireless &amp; wired networking enterprise solutions.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                        <span>SITC of IT hardware and peripherals.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                        <span>SITC of surveillance / CCTV solutions.</span>
                      </li>
                    </ul>

                    <ul className="mt-3 space-y-2 md:mt-0">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                        <span>SITC of auditoriums, meeting rooms and conference halls.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                        <span>Support services for the enterprise segment.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* IMAGE CARD */}
              <div className="lg:col-span-7">
                <motion.div {...fadeIn} className="relative">
                  <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-amber-500/20 blur-2xl" />
                  <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/18 blur-3xl" />

                  <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
                    <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/85">
                      <div className="aspect-[16/10] w-full">
                        <Image
                          src={Enterprise}
                          alt="Enterprise Operations"
                          className="h-full w-full object-contain"
                          priority
                        />
                      </div>
                    </div>

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

                    <div className="mt-4 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[11px] text-zinc-300">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Typical footprint</p>
                        <p className="text-xs text-zinc-100">Multi-site offices · datacentres · branches</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Outcomes</p>
                        <p className="text-xs text-zinc-100">Higher uptime, secure collaboration</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================ GOVERNMENT ============================ */}
        <section id="government" className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="space-y-10">
            {/* TEXT BLOCK (full width) */}
            <div>
              <p className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
                Government · Vertical
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
                Reliable media and network infrastructure for the public sector.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                The Government of India has many departments under the Ministry of Information &amp; Broadcasting, Ministry of Telecom and
                Education, where rapid technology advancements create opportunities for diverse projects across domains.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
                Commedia has been working with government projects such as Prasar Bharti, All India Radio and ISRO since its inception.
                We focus on delivering robust, compliant infrastructure and long-term managed services.
              </p>
            </div>

            {/* ROW: image card (left) + help card (right) */}
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* IMAGE CARD (left on lg) */}
              <div className="lg:col-span-7 lg:order-1">
                <motion.div {...fadeIn} className="relative">
                  <div className="pointer-events-none absolute -left-10 top-0 h-24 w-24 rounded-full bg-emerald-500/18 blur-2xl" />
                  <div className="pointer-events-none absolute -right-12 bottom-4 h-24 w-24 rounded-full bg-orange-500/18 blur-3xl" />

                  <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
                    <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/85">
                      <div className="aspect-[16/10] w-full">
                        <Image
                          src={Government}
                          alt="Government Operations"
                          className="h-full w-full object-contain"
                          priority
                        />
                      </div>
                    </div>

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

                    <div className="mt-4 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[11px] text-zinc-300">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Typical engagements</p>
                        <p className="text-xs text-zinc-100">Multi-year projects with central &amp; state bodies</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Focus</p>
                        <p className="text-xs text-zinc-100">Reach, reliability &amp; governance</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* HELP CARD (right on lg) */}
              <div className="lg:col-span-5 lg:order-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
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
                        <span>SITC of all types of antenna installations.</span>
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
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
