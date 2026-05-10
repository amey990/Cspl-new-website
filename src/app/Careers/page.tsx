'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, cubicBezier, AnimatePresence } from 'framer-motion';
import { Rocket, Target, HeartHandshake, Loader2 } from 'lucide-react';
import { fetchApi } from '@/lib/api';

import ImageCarousel from '@/components/ImageCarousel';

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

interface Job {
  id: number;
  department: string;
  title: string;
  location: string;
  employment_type: string;
  experience: string;
  short_description: string;
}

export default function CareersPage() {
  const [openJobs, setOpenJobs] = useState<Job[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [jobFetchError, setJobFetchError] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<{
    name: string;
    phone: string;
    email: string;
    job_id: string;
    resume: File | null;
  }>({
    name: '',
    phone: '',
    email: '',
    job_id: '',
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    fetchApi('/api/jobs')
      .then((data) => {
        if (data && data.jobs) {
          setOpenJobs(data.jobs.filter((j: any) => j.status === 'open'));
        }
      })
      .catch((err) => {
        console.error('Failed to fetch jobs:', err);
        setJobFetchError(true);
      })
      .finally(() => {
        setIsLoadingJobs(false);
      });
  }, []);

  useEffect(() => {
    if (submitError || submitSuccess) {
      const t = setTimeout(() => {
        setSubmitError(null);
        setSubmitSuccess(null);
      }, 5000);
      return () => clearTimeout(t);
    }
  }, [submitError, submitSuccess]);

  const handleApplyClick = (jobId: number) => {
    setFormData((prev) => ({ ...prev, job_id: jobId.toString() }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setSubmitError('File size should not exceed 5MB');
        return;
      }
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    if (!formData.name || !formData.email || !formData.phone || !formData.job_id || !formData.resume) {
      setSubmitError('Please fill all required fields and upload a resume');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const selectedJob = openJobs.find(j => j.id.toString() === formData.job_id);
      
      const payload = new FormData();
      payload.append('job_id', formData.job_id);
      payload.append('candidate_name', formData.name);
      payload.append('phone', formData.phone);
      payload.append('email', formData.email);
      payload.append('preferred_role', selectedJob ? selectedJob.title : '');
      payload.append('resume', formData.resume);

      const res = await fetchApi('/api/applications', {
        method: 'POST',
        body: payload,
      });

      if (res.ok || res.message) {
        setSubmitSuccess('Application submitted successfully. Our HR team will review it.');
        setFormData({ name: '', phone: '', email: '', job_id: '', resume: null });
      } else {
        setSubmitError(res.message || 'Failed to submit application');
      }
    } catch (err: any) {
      setSubmitError(err.message || 'Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* VIGNETTE */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,1) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.95) 100%)
          `,
        }}
      />

      <div className="relative z-10 pb-20 pt-16 sm:pb-24 sm:pt-20 md:pt-24">

        {/* ------------------------------------------------------------------ */}
        {/* HERO                                                               */}
        {/* ------------------------------------------------------------------ */}
        <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-center md:gap-12 md:px-10 lg:px-16">

          {/* LEFT: TEXT */}
          <motion.div {...fadeUp} className="flex-1 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-200 sm:px-4 sm:text-xs">
              <span className="h-2 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] sm:h-2.5 sm:w-4" />
              <span>Careers at Commedia</span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Build your career with Commedia.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-300/85 md:text-base">
              Join a team that delivers impactful technology solutions for enterprises,
              service providers, media, and government organizations. At Commedia, you'll
              work on meaningful projects, collaborate with experienced teams, and grow
              through real responsibilities.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 sm:gap-4 sm:pt-2">
              <Link
                href="#open-roles"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-black shadow-[0_0_40px_rgba(52,211,153,0.7)] transition-transform duration-200 hover:-translate-y-0.5 sm:px-7 sm:py-3"
              >
                View open roles
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-black/10 text-[10px] sm:h-5 sm:w-5 sm:text-xs">
                  ↗
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/10 px-5 py-2.5 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/60 sm:px-6 sm:py-3"
              >
                Talk to the team
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-slate-400 sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <span>Opportunities across technical and business functions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                <span>Work on real projects with real impact</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                <span>Learn, contribute, and grow with the team</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: GLOSSY TILE CLUSTER  hidden on small mobile, shown from sm */}
          <motion.div
            {...fadeIn}
            className="hidden sm:flex flex-1 justify-center md:justify-end"
          >
            <div className="relative w-full max-w-sm md:max-w-md">
              <div className="absolute -left-6 -top-6 h-20 w-20 rounded-3xl bg-emerald-400/10 blur-xl" />
              <div className="absolute -right-8 bottom-0 h-24 w-24 rounded-3xl bg-fuchsia-500/20 blur-[26px]" />

              <div className="grid grid-cols-3 gap-2.5 rounded-3xl border border-white/10 bg-black/40 p-3.5 backdrop-blur-sm shadow-[0_32px_120px_rgba(0,0,0,1)] sm:gap-3 sm:p-4">
                {[
                  'Enterprise Solutions',
                  'Digital Transformation',
                  'Network & Security',
                  'Cloud & Infrastructure',
                  'Media Technologies',
                  'Customer Success',
                ].map((tag) => (
                  <div
                    key={tag}
                    className="flex h-16 flex-col justify-between rounded-2xl bg-gradient-to-br from-white/5 via-white/0 to-black/70 p-2.5 sm:h-20 sm:p-3"
                  >
                    <span className="h-1 w-5 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 sm:w-6" />
                    <span className="text-[10px] font-medium text-slate-100 sm:text-[11px]">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/5 px-3 py-2.5 text-xs text-emerald-100/90 sm:mt-4 sm:px-4 sm:py-3">
                <span className="font-semibold uppercase tracking-[0.16em]">Why Commedia</span>
                <p className="mt-1 text-[10px] text-slate-200/90 sm:text-[11px]">
                  As Commedia continues to grow, this is a great time to join a team that
                  values ownership, collaboration, and long-term professional development.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* VALUES                                                             */}
        {/* ------------------------------------------------------------------ */}
        <section className="mx-auto mt-20 max-w-6xl px-4 sm:mt-24 sm:px-6 md:mt-28 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-200 sm:px-4 sm:text-xs">
              How we work
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white sm:mt-5 sm:text-3xl md:text-4xl">
              A team built on collaboration.
            </h2>
            <p className="mt-2 text-sm text-slate-300/85 sm:mt-3 md:text-base">
              We value ownership, teamwork, and thoughtful execution. At Commedia, people
              are encouraged to learn continuously, contribute confidently, and work closely
              across teams to deliver strong outcomes.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-3">
            {[
              {
                title: 'Take ownership',
                body: 'Own your work from planning to delivery, with the support and trust to make meaningful contributions.',
                Icon: Rocket,
              },
              {
                title: 'Solve together',
                body: 'Work alongside teammates across functions to solve customer and business challenges effectively.',
                Icon: Target,
              },
              {
                title: 'Keep growing',
                body: 'Build your skills through practical experience, shared learning, and exposure to diverse projects.',
                Icon: HeartHandshake,
              },
            ].map(({ title, body, Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 via-black/40 to-black/90 p-4 shadow-[0_26px_90px_rgba(0,0,0,0.9)] sm:p-5"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/12 via-white/6 to-black/55 shadow-[0_18px_55px_rgba(0,0,0,0.8)] sm:mb-4 sm:h-12 sm:w-12">
                  <Icon className="h-4 w-4 text-emerald-200/90 drop-shadow-[0_0_12px_rgba(52,211,153,0.16)] sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-sm font-semibold text-white sm:text-base">{title}</h3>
                <p className="mt-1.5 text-xs text-slate-300/85 sm:mt-2 sm:text-sm">{body}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* LIFE AT COMMEDIA                                                   */}
        {/* ------------------------------------------------------------------ */}
        <section className="mx-auto mt-20 max-w-6xl px-4 sm:mt-24 sm:px-6 md:mt-28 md:px-10 lg:px-12">
          <motion.div {...fadeUp} className="flex flex-col gap-8 sm:gap-10">

            {/* TEXT BLOCK */}
            <div className="max-w-3xl">
              <p className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-sky-200 sm:px-4 sm:text-xs">
                Life at Commedia
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white sm:mt-5 sm:text-3xl md:text-4xl">
                Meaningful work. Supportive environment.
              </h2>
              <p className="mt-2 text-sm text-slate-300/85 sm:mt-3 md:text-base">
                We take our work seriously and believe people do their best in a culture
                built on respect, communication, and shared goals. Expect collaboration,
                responsibility, and room to grow.
              </p>

              <ul className="mt-4 space-y-2.5 text-sm text-slate-100/90 sm:mt-6 sm:space-y-3">
                {[
                  'Hybrid collaboration with flexibility for focused work.',
                  'Real ownership with support from experienced teams.',
                  'Exposure to live projects, customers, and practical problem-solving.',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CAROUSEL + WEEK CARD */}
            <div className="flex w-full flex-col gap-8 md:flex-row md:items-center md:gap-8">

              {/* CAROUSEL */}
              <div className="w-full overflow-hidden md:flex-1">
                <ImageCarousel
                  className="w-full max-w-full"
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

              {/* WEEK CARD */}
              <motion.div {...fadeIn} className="w-full md:flex-1 md:flex md:justify-end">
                <div className="w-full rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] via-[#020617] to-black p-4 shadow-[0_28px_100px_rgba(0,0,0,1)] md:max-w-sm">
                  <div className="mb-3 flex items-center justify-between text-xs text-slate-300">
                    <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.16em] sm:text-[11px]">
                      A week in the team
                    </span>
                  </div>

                  <div className="space-y-2.5 text-[11px] text-slate-200 sm:space-y-3">
                    {[
                      {
                        dot: 'bg-emerald-400',
                        day: 'Monday',
                        desc: 'Plan priorities, align on goals, and set up the week with your team.',
                      },
                      {
                        dot: 'bg-sky-400',
                        day: 'Midweek',
                        desc: 'Focus on delivery, collaboration, execution, and progress across your work.',
                      },
                      {
                        dot: 'bg-fuchsia-400',
                        day: 'Friday',
                        desc: 'Review outcomes, share updates, close loops, and prepare for the next week.',
                      },
                    ].map(({ dot, day, desc }) => (
                      <div key={day} className="flex items-start gap-3 rounded-lg bg-black/50 p-2.5 sm:p-3">
                        <span className={`mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${dot}`} />
                        <div>
                          <div className="font-semibold text-white">{day}</div>
                          <div className="text-slate-300">{desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 text-[10px] text-slate-500 sm:mt-4 sm:text-[11px]">
                    Collaboration, communication, and continuous improvement.
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
          className="mx-auto mt-20 max-w-6xl px-4 sm:mt-24 sm:px-6 md:mt-28 md:px-10 lg:px-16"
        >
          <motion.div {...fadeUp}>
            <p className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-200 sm:px-4 sm:text-xs">
              Open roles
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:mt-5 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-4">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Join the team.
              </h2>
              <p className="max-w-md text-xs text-slate-400 md:text-sm">
                Explore current opportunities and find a role where you can contribute,
                learn, and grow with Commedia.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            {isLoadingJobs ? (
              <div className="flex justify-center py-20 text-emerald-500">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : jobFetchError ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 py-16 text-center text-sm text-rose-400">
                Failed to load open roles. Please try again later.
              </div>
            ) : openJobs.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 py-16 text-center text-sm text-slate-300">
                No suitable role at the moment? Share your profile and we&apos;ll keep it in mind for future opportunities.
              </div>
            ) : (
              openJobs.map((role) => (
                <div
                  key={role.id}
                  className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/3 via-black/40 to-black/90 p-4 shadow-[0_22px_80px_rgba(0,0,0,0.9)] sm:p-5 md:flex-row md:items-center md:justify-between"
                >
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200 sm:text-[11px]">
                      {role.department}
                    </div>
                    <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">
                      {role.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-300/85 sm:mt-2 sm:text-sm">
                      {role.short_description}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2 text-[10px] text-slate-300 sm:mt-3 sm:text-[11px]">
                      <span className="rounded-full bg-white/5 px-2.5 py-1">{role.location}</span>
                      <span className="rounded-full bg-white/5 px-2.5 py-1">{role.employment_type}</span>
                      {role.experience && (
                         <span className="rounded-full bg-white/5 px-2.5 py-1">{role.experience}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-shrink-0 items-center">
                    <button
                      onClick={() => handleApplyClick(role.id)}
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-2.5 text-xs font-medium text-black shadow-[0_0_30px_rgba(52,211,153,0.6)] transition-transform duration-200 hover:-translate-y-0.5 sm:px-7"
                    >
                      Apply
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-black/10 text-[10px]">
                        ↓
                      </span>
                    </button>
                  </div>
                </div>
              ))
            )}

            <div className="mt-4 rounded-2xl border border-dashed border-white/18 bg-black/40 px-4 py-3.5 text-xs text-slate-300/85 sm:mt-6 sm:px-5 sm:py-4 sm:text-sm">
              <span className="font-semibold text-slate-100">Don&apos;t see a suitable role?</span>{' '}
              Send us your profile at{' '}
              <span className="text-emerald-300">commedia.hr@commediaindia.com</span>{' '}
              and we&apos;ll keep it in mind for future opportunities.
            </div>
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* BENEFITS                                                           */}
        {/* ------------------------------------------------------------------ */}
        <section className="mx-auto mt-20 max-w-6xl px-4 sm:mt-24 sm:px-6 md:mt-28 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="text-center">
            <p className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-sky-200 sm:px-4 sm:text-xs">
              What you get
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white sm:mt-5 sm:text-3xl md:text-4xl">
              Benefits designed for focused builders.
            </h2>
          </motion.div>

          <motion.div {...fadeIn} className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-3">
            {[
              {
                title: 'Healthy base',
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
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/3 via-black/40 to-black/90 p-4 sm:p-5"
              >
                <h3 className="text-sm font-semibold text-white sm:text-base">{item.title}</h3>
                <p className="mt-1.5 text-xs text-slate-300/85 sm:mt-2 sm:text-sm">{item.body}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* FINAL CTA                                                          */}
        {/* ------------------------------------------------------------------ */}
        <section className="mx-auto mt-20 max-w-6xl px-4 sm:mt-24 sm:px-6 md:mt-28 md:px-10 lg:px-16">
          <motion.div
            {...fadeIn}
            className="grid items-start gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0b0b0c] via-[#020617] to-black px-4 py-8 sm:gap-10 sm:px-6 sm:py-10 md:grid-cols-[1.4fr,1fr] md:items-center md:px-10"
          >
            {/* LEFT */}
            <div>
              <p className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-200 sm:px-4 sm:text-xs">
                Next steps
              </p>
              <h2 className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-white sm:mt-5 sm:text-3xl md:text-4xl">
                Tell us about yourself.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300/85 sm:mt-4 md:text-base">
                Share a few details about your background, your interests, and the kind of
                opportunity you&apos;re looking for. Our team will review your profile and
                reach out if there&apos;s a suitable match.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-7 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-black shadow-[0_0_40px_rgba(52,211,153,0.8)] transition-transform duration-200 hover:-translate-y-0.5 sm:px-7 sm:py-3"
                >
                  Share your profile
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-black/10 text-[10px] sm:h-5 sm:w-5 sm:text-xs">
                    ↗
                  </span>
                </Link>
                <span className="text-xs text-slate-400 md:text-sm">
                  Or email{' '}
                  <span className="text-emerald-300">commedia.hr@commediaindia.com</span>
                </span>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="w-full" ref={formRef}>
              <form onSubmit={handleSubmit} className="relative w-full rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] via-[#020617] to-black p-4 shadow-[0_32px_110px_rgba(0,0,0,1)] sm:p-5">
                
                {/* Toasts */}
                <AnimatePresence>
                  {submitSuccess && (
                     <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="absolute -top-14 left-0 right-0 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-center text-xs text-emerald-400">
                        {submitSuccess}
                     </motion.div>
                  )}
                  {submitError && (
                     <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="absolute -top-14 left-0 right-0 rounded-lg border border-rose-500/30 bg-rose-500/10 p-3 text-center text-xs text-rose-400">
                        {submitError}
                     </motion.div>
                  )}
                </AnimatePresence>

                {/* window chrome */}
                <div className="mb-4 flex items-center justify-between sm:mb-5">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500/80 sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/80 sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 rounded-full bg-rose-500/80 sm:h-2.5 sm:w-2.5" />
                  </div>
                  <div className="h-3.5 w-16 rounded-full bg-zinc-800/80 sm:h-4 sm:w-20" />
                </div>

                <div className="space-y-3 text-xs text-slate-200 sm:space-y-4">
                  <div>
                    <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={e => setFormData(p => ({...p, name: e.target.value}))}
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none sm:text-[13px]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      disabled={isSubmitting}
                      value={formData.phone}
                      onChange={e => setFormData(p => ({...p, phone: e.target.value}))}
                      placeholder="Enter your phone number"
                      className="w-full rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none sm:text-[13px]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
                      Email ID
                    </label>
                    <input
                      required
                      type="email"
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={e => setFormData(p => ({...p, email: e.target.value}))}
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none sm:text-[13px]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
                      Preferred Role
                    </label>
                    <select
                      required
                      disabled={isSubmitting}
                      value={formData.job_id}
                      onChange={e => setFormData(p => ({...p, job_id: e.target.value}))}
                      className="w-full rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-2 text-xs text-slate-100 focus:border-emerald-400 focus:outline-none sm:text-[13px] [&>option]:bg-zinc-900"
                    >
                      <option value="" disabled className="text-slate-500 py-1">Select role</option>
                      {openJobs.map((role) => (
                        <option key={role.id} value={role.id} className="text-slate-100 py-1">
                          {role.title} ({role.location})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
                      Upload your resume
                    </label>
                    <input
                      required
                      type="file"
                      disabled={isSubmitting}
                      accept=".pdf,.doc,.docx"
                      key={submitSuccess ? 'reset-key' : 'default-key'}
                      onChange={handleFileChange}
                      className="w-full cursor-pointer rounded-lg border border-dashed border-white/25 bg-zinc-900/60 px-3 py-2 text-xs text-slate-100 file:mr-2 file:rounded-md file:border-0 file:bg-emerald-500/10 file:px-2 file:py-1 file:text-[10px] file:font-medium file:text-emerald-200 sm:file:mr-3 sm:file:px-3 sm:file:text-[11px] sm:text-[13px]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || openJobs.length === 0}
                    className="mt-2 w-full rounded-lg bg-emerald-400 py-2.5 text-xs font-semibold text-black transition hover:bg-emerald-300 disabled:opacity-50 sm:text-sm"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                      </span>
                    ) : (
                      'Submit Application'
                    )}
                  </button>

                  <p className="pt-0.5 text-center text-[9px] text-slate-500 sm:pt-1 sm:text-[10px]">
                    Use the{' '}
                    <span className="font-medium text-emerald-300">Share your profile</span>{' '}
                    button at the top if you aren't applying for a specific role.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}