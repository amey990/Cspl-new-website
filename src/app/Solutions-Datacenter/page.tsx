// src/app/solutions/data-center-networking/page.tsx
'use client';

import Image from 'next/image';
import type { ReactNode } from 'react';
import { motion, cubicBezier } from 'framer-motion';
import {
  Activity,
  Cloud,
  Cog,
  Cpu,
  Network,
  Server,
  ShieldCheck,
  Clock4,
  Map,
  Building2,
  SignalHigh,
} from 'lucide-react';

// 🔹 Replace these with your real high-res images
import DcHallImage from '../../../assets/CNMS_dummy.jpg';
import NocWallImage from '../../../assets/CNMS_dummy.jpg';
import RackCloseupImage from '../../../assets/CNMS_dummy.jpg';

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

export default function DataCenterNetworkingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
      {/* GRID BG */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 pb-24 pt-24">
        {/* -------------------------------------------------------------- */}
        {/* HERO                                                           */}
        {/* -------------------------------------------------------------- */}
        <section className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="grid gap-10 md:grid-cols-[1.45fr,1.1fr]"
          >
            {/* LEFT: TEXT */}
            <div>
              <p className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
                Solutions · Data Center &amp; Networking
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                Data centers and networks that don&apos;t flinch under load.
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                We design, build and operate the fabric your business runs on –
                data centers, campus networks and cloud connectivity – with
                uptime, security and expansion already baked in.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-200">
                <BadgePill
                  icon={<Server className="h-3.5 w-3.5" />}
                  label="Data Center Design & Deployment"
                  tone="emerald"
                />
                <BadgePill
                  icon={<Network className="h-3.5 w-3.5" />}
                  label="Network Planning & Optimisation"
                  tone="sky"
                />
                <BadgePill
                  icon={<Clock4 className="h-3.5 w-3.5" />}
                  label="24x7 Managed Network Services"
                  tone="fuchsia"
                />
              </div>
            </div>

            {/* RIGHT: METRIC / VISUAL CARD */}
            <motion.div
              {...fadeIn}
              className="flex items-center md:justify-end"
            >
              <div className="relative w-full max-w-md">
                <div className="pointer-events-none absolute -left-10 top-0 h-24 w-24 rounded-full bg-cyan-500/18 blur-2xl" />
                <div className="pointer-events-none absolute -right-12 bottom-2 h-28 w-28 rounded-full bg-emerald-400/22 blur-3xl" />

                <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-slate-900/90 via-black to-black p-5 shadow-[0_26px_100px_rgba(0,0,0,1)]">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
                      Fabric health snapshot
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <Activity className="h-3.5 w-3.5" />
                      Live view
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="mt-4 grid gap-3 md:grid-cols-[1.1fr,0.9fr]">
                    <div className="space-y-3 text-[11px] text-slate-200">
                      <MetricCard
                        label="Core racks under management"
                        value="200+"
                        tone="sky"   // ✅ FIXED: was "cyan"
                        icon={<Cpu className="h-4 w-4" />}
                      />
                      <MetricCard
                        label="Typical network availability"
                        value="99.99%"
                        tone="emerald"
                        icon={<ShieldCheck className="h-4 w-4" />}
                      />
                      <MetricCard
                        label="Average app latency (in-DC)"
                        value="< 25 ms"
                        tone="fuchsia"
                        icon={<Activity className="h-4 w-4" />}
                      />
                    </div>

                    {/* Rack visual */}
                    <div className="relative flex items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-slate-900 via-slate-950 to-black px-3 py-4">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.25),transparent_60%)] opacity-70" />
                      <div className="relative grid h-24 w-24 grid-cols-3 gap-1">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div
                            key={i}
                            className="rounded-[6px] border border-white/15 bg-black/70"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-xl bg-black/60 px-3 py-2 text-[11px] text-slate-200">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                        Visibility
                      </p>
                      <p className="text-xs text-slate-100">
                        DC, campus, branch &amp; cloud in one topology.
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1">
                      <Map className="h-3.5 w-3.5 text-cyan-300" />
                      <span>Unified fabric map</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* VISUAL STORY / IMAGES                                         */}
        {/* -------------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-[1.1fr,1fr]">
            {/* Image collage */}
            <div className="relative space-y-4 md:flex md:space-y-0 md:space-x-4">
              <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-[0_26px_80px_rgba(0,0,0,1)]">
                <Image
                  src={DcHallImage}
                  alt="High-density data center hall with aisle containment"
                  className="h-full w-full object-cover opacity-80"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-200">
                  Primary DC · High-density racks
                </div>
              </div>

              <div className="mt-4 flex-1 space-y-4 md:mt-0">
                <div className="relative h-32 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                  <Image
                    src={NocWallImage}
                    alt="Network operations center monitoring wall"
                    className="h-full w-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/70" />
                  <div className="absolute bottom-3 left-3 text-[11px] text-slate-100">
                    24x7 NOC · Live telemetry
                  </div>
                </div>

                <div className="relative h-32 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                  <Image
                    src={RackCloseupImage}
                    alt="Structured cabling and labelled network racks"
                    className="h-full w-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
                  <div className="absolute bottom-3 left-3 text-[11px] text-slate-100">
                    Structured cabling · Clean change windows
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="space-y-4 text-sm text-slate-200">
              <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
                From cold aisles to cloud edges – one team owns the stack.
              </h2>
              <p className="leading-relaxed text-slate-300">
                We work as infrastructure partners, not just project vendors. Our
                teams design your layouts, implement the fabric, harden it, and
                then sit in the same cockpit as your operations team to keep it
                running.
              </p>

              <div className="grid gap-3 text-xs text-slate-200 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-emerald-300">
                    Data Center Design &amp; Deployment
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    <li>• Room, rack, power &amp; cooling strategy.</li>
                    <li>• Compute, storage &amp; virtualisation platforms.</li>
                    <li>• Migration from legacy DCs with minimal downtime.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-sky-400/30 bg-sky-400/5 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-sky-300">
                    Network Infra Planning &amp; Optimisation
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    <li>• L2/L3, VXLAN, SD-WAN &amp; VPN architectures.</li>
                    <li>• Segmentation, QoS and traffic engineering.</li>
                    <li>• Cloud on-ramps for AWS, Azure, GCP and SaaS.</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-fuchsia-400/30 bg-fuchsia-400/5 p-3 text-xs">
                <p className="text-[11px] uppercase tracking-[0.16em] text-fuchsia-300">
                  Managed Network Services
                </p>
                <ul className="mt-2 space-y-1.5">
                  <li>• 24x7 monitoring, incident response and RFOs.</li>
                  <li>• Proactive capacity planning and upgrade cycles.</li>
                  <li>• Regular health reports for CIO / CISO dashboards.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* THREE PILLARS                                                  */}
        {/* -------------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h2 className="text-lg font-semibold text-slate-100 md:text-xl">
              Three pillars of our Data Center &amp; Networking practice
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Every engagement is structured around design, build and operate.
              You can start with one pillar or run all three in a single programme.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <PillarCard
                tone="emerald"
                title="Design & Deployment"
                icon={<Server className="h-4 w-4" />}
                bullets={[
                  'Greenfield and brownfield DC builds.',
                  'Rack, power & cooling design with growth headroom.',
                  'Standardised builds across primary & DR locations.',
                ]}
              />
              <PillarCard
                tone="sky"
                title="Planning & Optimisation"
                icon={<Network className="h-4 w-4" />}
                bullets={[
                  'Traffic-aware network design for apps, not just links.',
                  'WAN, SD-WAN and internet edge optimisation.',
                  'Segmentation, QoS and security alignment with infosec.',
                ]}
              />
              <PillarCard
                tone="fuchsia"
                title="Managed Services"
                icon={<Cog className="h-4 w-4" />}
                bullets={[
                  'Remote & on-site NOC teams.',
                  'Playbooks for incidents, change and releases.',
                  'Continuous improvement cycles with quarterly reviews.',
                ]}
              />
            </div>
          </motion.div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* FABRIC MAP BAND                                                */}
        {/* -------------------------------------------------------------- */}
        <section className="mx-auto mt-24 max-w-6xl px-0 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="mx-6 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-black to-slate-900 px-6 py-7 md:px-10"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              HOW THE PIECES CONNECT
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              We treat data center, campus, cloud and edge as one fabric –
              policy-driven, observable and ready for automation.
            </p>

           <div className="relative flex items-center justify-center py-10">
  {/* Core DC node */}
  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/60 bg-black/80 shadow-[0_18px_70px_rgba(0,0,0,1)]">
    <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.55),transparent_55%)] opacity-70" />
    <div className="relative flex flex-col items-center text-xs text-slate-100">
      <Server className="mb-1 h-5 w-5" />
      <span>Core DC</span>
    </div>
  </div>

  {/* Connection lines – only from node outwards */}
  {/* to the right chip */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-28 translate-x-10 -translate-y-1/2 bg-gradient-to-r from-cyan-400/70 to-transparent" />
  {/* to the left chip */}
  <div className="pointer-events-none absolute right-1/2 top-1/2 h-px w-28 -translate-x-10 -translate-y-1/2 bg-gradient-to-l from-cyan-400/70 to-transparent" />
  {/* to the bottom chip */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-px translate-y-8 bg-gradient-to-b from-cyan-400/70 to-transparent" />

  {/* Left chip – Observability */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2">
    <BadgePill
      icon={<Activity className="h-3.5 w-3.5" />}
      label="Observability stack"
      tone="amber"
    />
  </div>

  {/* Right chip – Campus & branches */}
  <div className="absolute right-0 top-1/2 -translate-y-1/2">
    <BadgePill
      icon={<Network className="h-3.5 w-3.5" />}
      label="Campus & branches"
      tone="emerald"
    />
  </div>

  {/* Bottom chip – Security & edge */}
  <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-2">
    <BadgePill
      icon={<ShieldCheck className="h-3.5 w-3.5" />}
      label="Security & edge"
      tone="fuchsia"
    />
  </div>
</div>

          </motion.div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* DELIVERY PLAYBOOK                                              */}
        {/* -------------------------------------------------------------- */}
        <section className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h3 className="text-lg font-semibold text-slate-100">
              A delivery playbook that doesn&apos;t surprise your operations team
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Most programmes move through four stages. We keep each one
              transparent so IT, infosec and business teams stay aligned.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                {
                  step: '01 · Discover',
                  desc: 'Workload inventory, traffic baselines, risk & dependency mapping across DC, campus and cloud.',
                },
                {
                  step: '02 · Design',
                  desc: 'Target architectures, migration paths and rollout plans with clear failure domains.',
                },
                {
                  step: '03 · Deploy',
                  desc: 'Implementation, testing, cutover windows and hyper-care with rollback options.',
                },
                {
                  step: '04 · Operate',
                  desc: '24x7 managed services, optimisation cycles and regular capacity reviews.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.06,
                    ease: easeOutExpo,
                  }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-4 text-sm text-slate-200"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)] opacity-60" />
                  <div className="relative">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                      {item.step}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-200">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* USE CASES                                                      */}
        {/* -------------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="grid gap-4 md:grid-cols-3">
            <UseCaseCard
              title="Tier-2 / Tier-3 DC upgrades"
              icon={<Building2 className="h-4 w-4" />}
              text="Refresh ageing data centers with new racks, power and network fabric while keeping legacy workloads online."
            />
            <UseCaseCard
              title="Multi-site enterprises"
              icon={<SignalHigh className="h-4 w-4" />}
              text="Connect headquarters, branches and plants with SD-WAN, Wi-Fi and secure remote access that just works."
            />
            <UseCaseCard
              title="Hybrid & multi-cloud"
              icon={<Cloud className="h-4 w-4" />}
              text="Extend your DC into AWS, Azure or GCP with consistent policies, observability and security controls."
            />
          </motion.div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* CTA                                                            */}
        {/* -------------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="flex flex-col items-center rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/90 via-black to-slate-900/90 px-6 py-8 text-center md:px-10"
          >
            <h3 className="text-xl font-semibold text-slate-50 md:text-2xl">
              Planning a new data center or rethinking your network?
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              Share your current architecture and constraints with us – we&apos;ll
              map options, timelines and where automation or observability will
              have the biggest impact.
            </p>
            <button
              type="button"
              className="mt-5 rounded-full bg-white px-6 py-2 text-sm font-medium text-black shadow-[0_14px_40px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Talk to our solutions team
            </button>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

/* ================================================================== */
/* SMALL COMPONENTS                                                   */
/* ================================================================== */

type Tone = 'sky' | 'emerald' | 'fuchsia' | 'amber';

function BadgePill({
  icon,
  label,
  tone,
}: {
  icon: ReactNode;
  label: string;
  tone: Tone;
}) {
  const tones: Record<Tone, string> = {
    emerald: 'border-emerald-400/50 bg-emerald-400/10 text-emerald-100',
    sky: 'border-sky-400/50 bg-sky-400/10 text-sky-100',
    fuchsia: 'border-fuchsia-400/50 bg-fuchsia-400/10 text-fuchsia-100',
    amber: 'border-amber-300/50 bg-amber-300/10 text-amber-100',
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.16em] ${tones[tone]}`}
    >
      {icon}
      {label}
    </span>
  );
}

function MetricCard({
  label,
  value,
  tone,
  icon,
}: {
  label: string;
  value: string;
  tone: Tone;
  icon: ReactNode;
}) {
  const toneText: Record<Tone, string> = {
    sky: 'text-sky-300',
    emerald: 'text-emerald-300',
    fuchsia: 'text-fuchsia-300',
    amber: 'text-amber-300',
  };
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-900/80 px-3 py-2">
      <div>
        <p
          className={`text-[10px] uppercase tracking-[0.16em] ${toneText[tone]}`}
        >
          {value}
        </p>
        <p className="text-xs text-slate-100">{label}</p>
      </div>
      <span className={toneText[tone]}>{icon}</span>
    </div>
  );
}

// type NodeTone = Tone;
// type NodePos = 'top' | 'right' | 'bottom' | 'left';

// function NodeChip({
//   icon,
//   label,
//   tone,
//   position,
// }: {
//   icon: ReactNode;
//   label: string;
//   tone: NodeTone;
//   position: NodePos;
// }) {
//   const base =
//     'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] bg-black/70 backdrop-blur-sm';
//   const toneClasses: Record<NodeTone, string> = {
//     sky: 'border-sky-400/60 text-sky-100',
//     emerald: 'border-emerald-400/60 text-emerald-100',
//     fuchsia: 'border-fuchsia-400/60 text-fuchsia-100',
//     amber: 'border-amber-300/60 text-amber-100',
//   };
//   const posClasses: Record<NodePos, string> = {
//     top: 'absolute left-1/2 top-0 -translate-x-1/2 -translate-y-4',
//     right: 'absolute right-0 top-1/2 translate-x-4 -translate-y-1/2',
//     bottom: 'absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-4',
//     left: 'absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2',
//   };

//   return (
//     <div className={posClasses[position]}>
//       <div className={`${base} ${toneClasses[tone]}`}>
//         <span className="h-1.5 w-1.5 rounded-full bg-current" />
//         {icon}
//         <span>{label}</span>
//       </div>
//     </div>
//   );
// }

function PillarCard({
  tone,
  title,
  icon,
  bullets,
}: {
  tone: Tone;
  title: string;
  icon: ReactNode;
  bullets: string[];
}) {
  const border: Record<Tone, string> = {
    emerald: 'border-emerald-400/25 from-emerald-500/10',
    sky: 'border-sky-400/25 from-sky-500/10',
    fuchsia: 'border-fuchsia-400/25 from-fuchsia-500/10',
    amber: 'border-amber-300/25 from-amber-300/10',
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-b ${border[tone]} via-black to-black p-5 text-sm shadow-[0_18px_70px_rgba(0,0,0,0.9)]`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.25),transparent_55%)] opacity-60" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-100">
          {icon}
          {title}
        </div>
        <ul className="mt-3 space-y-1.5 text-xs text-slate-200">
          {bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function UseCaseCard({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/70 p-5 text-sm text-slate-200 shadow-[0_18px_60px_rgba(0,0,0,0.9)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_55%)] opacity-70" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-200">
          {icon}
          {title}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-slate-300">{text}</p>
      </div>
    </div>
  );
}
