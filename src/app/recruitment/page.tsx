'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, cubicBezier, AnimatePresence } from 'framer-motion';
import { MapPin, Briefcase, Clock, ArrowRight, Plus, X } from 'lucide-react';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easeOutExpo },
};

const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// Initial data
const initialRoles = [
    {
        id: 'senior-full-stack',
        department: 'Engineering',
        title: 'Senior Full-Stack Engineer',
        location: 'Bangalore · Hybrid',
        type: 'Full-time',
        blurb: 'Own features end-to-end across our AI products, from scalable API design to polished, highly performant UIs for enterprise clients.',
    },
    {
        id: 'applied-ml-agents',
        department: 'AI & Data',
        title: 'Applied ML Engineer - Agents',
        location: 'Remote · India',
        type: 'Full-time',
        blurb: 'Prototype and productionise complex agentic workflows that power our core products like Ops Advisor and CPAL.',
    },
    {
        id: 'product-designer',
        department: 'Design',
        title: 'Product Designer',
        location: 'Bangalore · Hybrid',
        type: 'Full-time',
        blurb: 'Shape interfaces that feel as good as they look. Transform complex data and AI workflows into intuitive, elegant dashboards.',
    },
];

export default function RecruitmentPage() {
    // State to hold our dynamic list of roles
    const [roles, setRoles] = useState(initialRoles);

    // State for the modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State for the new job form
    const [newJob, setNewJob] = useState({
        title: '',
        department: 'Engineering',
        location: 'Remote · India',
        type: 'Full-time',
        blurb: '',
    });

    // Handle form submission
    const handleAddJob = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newJob.title || !newJob.blurb) return;

        // Add the new job to the top of the list
        setRoles([
            {
                id: newJob.title.toLowerCase().replace(/\s+/g, '-'),
                ...newJob,
            },
            ...roles,
        ]);

        // Reset form and close modal
        setNewJob({
            title: '',
            department: 'Engineering',
            location: 'Remote · India',
            type: 'Full-time',
            blurb: '',
        });
        setIsModalOpen(false);
    };

    return (
        <main className="relative min-h-screen w-full bg-[#010101] selection:bg-emerald-500/30">
            {/* Background glow effects */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-emerald-500/5 blur-[120px]" />
                <div className="absolute -right-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-sky-500/5 blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:px-12 lg:py-32">
                {/* Header Section */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeUp}
                    className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-24 md:flex-row md:items-end"
                >
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                            Join Commedia
                        </div>
                        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                            Open Positions
                        </h1>
                        <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
                            We are always looking for exceptional talent to help us build the future of enterprise AI operations. Find your next career milestone below.
                        </p>
                    </div>

                    {/* ADD JOB BUTTON (Admin Only Concept) */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-300 transition-all hover:bg-emerald-500 hover:text-black"
                    >
                        <Plus className="h-4 w-4" />
                        Add Opening
                    </button>
                </motion.div>

                {/* Job Listings */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col gap-4"
                >
                    {roles.map((role) => (
                        <motion.div
                            key={role.id}
                            variants={fadeUp}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.04]"
                        >
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 opacity-0 transition-opacity duration-500 group-hover:from-emerald-500/5 group-hover:via-transparent group-hover:opacity-100" />

                            <div className="relative flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
                                <div className="flex-1">
                                    <div className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-emerald-300">
                                        {role.department}
                                    </div>
                                    <h3 className="mb-3 text-xl font-medium text-white sm:text-2xl">
                                        {role.title}
                                    </h3>
                                    <p className="mb-5 max-w-2xl text-sm leading-relaxed text-slate-400">
                                        {role.blurb}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
                                        <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                                            <MapPin className="h-3.5 w-3.5 text-slate-400" />
                                            {role.location}
                                        </div>
                                        <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                                            <Briefcase className="h-3.5 w-3.5 text-slate-400" />
                                            {role.department}
                                        </div>
                                        <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                                            <Clock className="h-3.5 w-3.5 text-slate-400" />
                                            {role.type}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 md:mt-0 md:pl-6">
                                    <Link
                                        href={`/contact?role=${encodeURIComponent(role.title)}`}
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-zinc-200 md:w-auto"
                                    >
                                        Apply Now
                                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer CTA */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="mt-16 rounded-3xl border border-dashed border-white/20 bg-black/40 p-8 text-center md:mt-24 md:p-12"
                >
                    <h3 className="mb-3 text-xl font-medium text-white">Don't see a perfect fit?</h3>
                    <p className="mx-auto mb-6 max-w-md text-sm text-slate-400">
                        We are always eager to meet exceptional builders. Send us your profile and let's talk about how you can make an impact here.
                    </p>
                    <Link
                        href="/contact?role=General+Application"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-white"
                    >
                        Submit open application
                    </Link>
                </motion.div>
            </div>

            {/* --- ADD NEW JOB MODAL (Window Styled) --- */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Content - Styled like the contact form */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] via-[#020617] to-black p-5 sm:p-8 shadow-[0_32px_110px_rgba(0,0,0,1)]"
                        >
                            {/* Window Chrome */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="rounded-full p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <h2 className="mb-6 text-xl font-semibold text-white sm:text-2xl">Publish New Opening</h2>

                            <form onSubmit={handleAddJob} className="flex flex-col gap-5">
                                <div>
                                    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
                                        Job Title
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        value={newJob.title}
                                        onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                                        className="w-full rounded-lg border border-white/10 bg-zinc-900/70 px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none sm:text-[13px]"
                                        placeholder="e.g. Senior DevOps Engineer"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
                                            Department
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            value={newJob.department}
                                            onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
                                            className="w-full rounded-lg border border-white/10 bg-zinc-900/70 px-4 py-2.5 text-xs text-slate-100 focus:border-emerald-400 focus:outline-none sm:text-[13px]"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
                                            Location
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            value={newJob.location}
                                            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                                            className="w-full rounded-lg border border-white/10 bg-zinc-900/70 px-4 py-2.5 text-xs text-slate-100 focus:border-emerald-400 focus:outline-none sm:text-[13px]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
                                        Short Description (Blurb)
                                    </label>
                                    <textarea
                                        required
                                        rows={3}
                                        value={newJob.blurb}
                                        onChange={(e) => setNewJob({ ...newJob, blurb: e.target.value })}
                                        className="w-full resize-none rounded-lg border border-white/10 bg-zinc-900/70 px-4 py-3 text-xs text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none sm:text-[13px]"
                                        placeholder="Write a brief 1-2 sentence description of the role..."
                                    />
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(52,211,153,0.4)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
                                    >
                                        Publish Role
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}