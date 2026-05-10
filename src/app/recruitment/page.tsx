'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, cubicBezier, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Briefcase, Clock, Plus, X, CheckCircle, ChevronDown, 
  LogOut, FileText, Phone, Mail, Calendar, User, AlignLeft, Loader2,
  Eye, EyeOff, UserPlus, Trash2, AlertTriangle
} from 'lucide-react';
import { fetchApi } from '@/lib/api';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOutExpo },
};

const stagger = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

type RoleStatus = 'open' | 'closed' | 'fulfilled';
type AppStatus = 'new' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';

interface Role {
  id: string | number;
  department: string;
  title: string;
  location: string;
  employment_type: string;
  experience: string;
  short_description: string;
  description: string;
  responsibilities: string;
  requirements: string;
  status: RoleStatus;
}

interface Application {
  id: string | number;
  job_id: string | number;
  candidate_name: string;
  email: string;
  phone: string;
  preferred_role: string;
  job_title?: string;
  status: AppStatus;
  // Backend may send applied_at or applied_date or created_at
  applied_date?: string;
  applied_at?: string;
  created_at?: string;
}

const statusConfig: Record<RoleStatus, { label: string; color: string; dot: string }> = {
  open: {
    label: 'Open',
    color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/8',
    dot: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]',
  },
  closed: {
    label: 'Closed',
    color: 'text-rose-400 border-rose-400/30 bg-rose-400/8',
    dot: 'bg-rose-400',
  },
  fulfilled: {
    label: 'Fulfilled',
    color: 'text-amber-400 border-amber-400/30 bg-amber-400/8',
    dot: 'bg-amber-400',
  },
};

const appStatusConfig: Record<AppStatus, { label: string; color: string; dot: string }> = {
  new: { label: 'New', color: 'text-sky-400 border-sky-400/30 bg-sky-400/8', dot: 'bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]' },
  reviewed: { label: 'Reviewed', color: 'text-purple-400 border-purple-400/30 bg-purple-400/8', dot: 'bg-purple-400' },
  shortlisted: { label: 'Shortlisted', color: 'text-amber-400 border-amber-400/30 bg-amber-400/8', dot: 'bg-amber-400' },
  rejected: { label: 'Rejected', color: 'text-rose-400 border-rose-400/30 bg-rose-400/8', dot: 'bg-rose-400' },
  hired: { label: 'Hired', color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/8', dot: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' },
};

const emptyForm = {
  title: '',
  department: 'Engineering',
  location: 'Bangalore · Hybrid',
  employment_type: 'Full-time',
  experience: '3-5 years',
  short_description: '',
  description: '',
  responsibilities: '',
  requirements: '',
  status: 'open' as RoleStatus,
};

/** Safely format a date string; returns "N/A" if invalid or missing */
function formatDate(raw: string | undefined | null): string {
  if (!raw) return 'N/A';
  const d = new Date(raw);
  if (isNaN(d.getTime())) return 'N/A';
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

/** Get the best available date field from an application object */
function getAppDate(app: Application): string {
  return formatDate(app.applied_at || app.applied_date || app.created_at);
}

export default function RecruitmentPage() {
  const router = useRouter();
  
  // App State
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'jobs' | 'applications'>('jobs');
  
  // Data State
  const [roles, setRoles] = useState<Role[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  
  // UI and User Management State
  const [currentUser, setCurrentUser] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('commedia_hr_user');
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [newUserForm, setNewUserForm] = useState({ name: '', email: '', role: 'HR', password: '' });
  const [userFormLoading, setUserFormLoading] = useState(false);
  const [showUserPassword, setShowUserPassword] = useState(false);
  const [statusSuccess, setStatusSuccess] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<RoleStatus | 'all'>('all');
  const [filterAppStatus, setFilterAppStatus] = useState<AppStatus | 'all'>('all');
  const [newJob, setNewJob] = useState(emptyForm);
  const [openDropdown, setOpenDropdown] = useState<string | number | null>(null);
  const [openAppDropdown, setOpenAppDropdown] = useState<string | number | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [updatingJobId, setUpdatingJobId] = useState<string | number | null>(null);
  const [updatingAppId, setUpdatingAppId] = useState<string | number | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);
  
  // Job Delete State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState<Role | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Application Delete State
  const [isDeleteAppModalOpen, setIsDeleteAppModalOpen] = useState(false);
  const [appToDelete, setAppToDelete] = useState<Application | null>(null);
  const [deleteAppLoading, setDeleteAppLoading] = useState(false);

  // Refs for click-outside handling
  const jobDropdownRef = useRef<HTMLDivElement>(null);
  const appDropdownRef = useRef<HTMLDivElement>(null);

  // Auto-dismiss status error after 4 seconds
  useEffect(() => {
    if (!statusError) return;
    const t = setTimeout(() => setStatusError(null), 4000);
    return () => clearTimeout(t);
  }, [statusError]);

  useEffect(() => {
    if (!statusSuccess) return;
    const t = setTimeout(() => setStatusSuccess(null), 4000);
    return () => clearTimeout(t);
  }, [statusSuccess]);

  // Close dropdowns on outside click via document listener
  // This avoids the z-index overlay problem entirely
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      // If clicking outside job dropdown area, close it
      if (openDropdown !== null && jobDropdownRef.current && !jobDropdownRef.current.contains(target)) {
        setOpenDropdown(null);
      }
      if (openAppDropdown !== null && appDropdownRef.current && !appDropdownRef.current.contains(target)) {
        setOpenAppDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown, openAppDropdown]);

  useEffect(() => {
    const token = localStorage.getItem('commedia_hr_token');
    if (!token) {
      router.push('/recruitment-login');
      return;
    }

    const initData = async () => {
      try {
        const authData = await fetchApi('/api/auth/me'); // validate
        setCurrentUser(authData.user || authData);
        
        // Fetch jobs and apps
        const [jobsRes, appsRes] = await Promise.all([
          fetchApi('/api/jobs/admin/all').catch(() => ({ ok: false, jobs: [] })),
          fetchApi('/api/applications/admin/all').catch(() => ({ ok: false, applications: [] })),
        ]);

        if (jobsRes.ok) setRoles(jobsRes.jobs || []);
        if (appsRes.ok) setApplications(appsRes.applications || []);
        
        setLoading(false);
      } catch (err) {
        localStorage.removeItem('commedia_hr_token');
        localStorage.removeItem('commedia_hr_user');
        router.push('/recruitment-login');
      }
    };
    
    initData();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('commedia_hr_token');
    localStorage.removeItem('commedia_hr_user');
    router.push('/recruitment-login');
  };

  const refreshJobs = useCallback(async () => {
    try {
      const jobsRes = await fetchApi('/api/jobs/admin/all');
      if (jobsRes.ok) setRoles(jobsRes.jobs || []);
    } catch {
      // silent
    }
  }, []);

  const refreshApplications = useCallback(async () => {
    try {
      const appsRes = await fetchApi('/api/applications/admin/all');
      if (appsRes.ok) setApplications(appsRes.applications || []);
    } catch {
      // silent
    }
  }, []);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserFormLoading(true);
    setStatusError(null);
    setStatusSuccess(null);

    try {
      const res = await fetchApi('/api/auth/admin/users', {
        method: 'POST',
        body: JSON.stringify(newUserForm),
      });

      if (res.ok) {
        setIsUserModalOpen(false);
        setNewUserForm({ name: '', email: '', role: 'HR', password: '' });
        setStatusSuccess(res.message || 'User created successfully');
      } else {
        setStatusError(res.message || 'Failed to create user');
      }
    } catch (err: any) {
      setStatusError(err?.message || 'Failed to create user');
    } finally {
      setUserFormLoading(false);
    }
  };

  const handleAddJob = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJob.title || !newJob.short_description) return;
    
    setFormLoading(true);
    try {
      const res = await fetchApi('/api/jobs/admin', {
        method: 'POST',
        body: JSON.stringify(newJob),
      });
      if (res.ok) {
        await refreshJobs();
        setIsModalOpen(false);
        setNewJob(emptyForm);
      } else {
        alert('Failed to save job');
      }
    } catch (err) {
      alert('Error creating job');
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteJob = async () => {
    if (!jobToDelete) return;
    setDeleteLoading(true);
    setStatusError(null);
    setStatusSuccess(null);

    try {
      const res = await fetchApi(`/api/jobs/admin/${jobToDelete.id}`, {
        method: 'DELETE',
      });
      
      // If our fetchApi wrapper throws on non-200, it goes to catch block.
      // If it doesn't throw, we handle it here.
      if (res.ok !== false && !res.error) {
        setStatusSuccess('Job opening deleted successfully.');
        setIsDeleteModalOpen(false);
        setJobToDelete(null);
        await refreshJobs();
      } else {
        setStatusError(res.message || res.error || 'Failed to delete job opening. Please try again.');
        setIsDeleteModalOpen(false);
        setJobToDelete(null);
      }
    } catch (err: any) {
      setStatusError(err?.message || 'Failed to delete job opening. Please try again.');
      setIsDeleteModalOpen(false);
      setJobToDelete(null);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleDeleteApp = async () => {
    if (!appToDelete) return;
    setDeleteAppLoading(true);
    setStatusError(null);
    setStatusSuccess(null);

    try {
      const res = await fetchApi(`/api/applications/admin/${appToDelete.id}`, {
        method: 'DELETE',
      });

      if (res.ok !== false && !res.error) {
        setStatusSuccess('Application deleted successfully.');
        setIsDeleteAppModalOpen(false);
        setAppToDelete(null);
        // Optimistically remove from local state, then re-fetch
        setApplications(prev => prev.filter(a => a.id !== appToDelete.id));
        await refreshApplications();
      } else {
        setStatusError(res.message || res.error || 'Failed to delete application. Please try again.');
        setIsDeleteAppModalOpen(false);
        setAppToDelete(null);
      }
    } catch (err: any) {
      setStatusError(err?.message || 'Failed to delete application. Please try again.');
      setIsDeleteAppModalOpen(false);
      setAppToDelete(null);
    } finally {
      setDeleteAppLoading(false);
    }
  };

  const updateJobStatus = async (id: string | number, status: RoleStatus) => {
    setOpenDropdown(null);
    setUpdatingJobId(id);
    setStatusError(null);

    try {
      await fetchApi(`/api/jobs/admin/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      });
      // Update local state immediately
      setRoles(prev => prev.map((r) => (r.id === id ? { ...r, status } : r)));
      // Also re-fetch to stay in sync
      await refreshJobs();
    } catch (err: any) {
      setStatusError(err?.message || 'Failed to update job status');
    } finally {
      setUpdatingJobId(null);
    }
  };

  const updateAppStatus = async (id: string | number, status: AppStatus) => {
    setOpenAppDropdown(null);
    setUpdatingAppId(id);
    setStatusError(null);

    try {
      await fetchApi(`/api/applications/admin/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      });
      // Update local state immediately
      setApplications(prev => prev.map((a) => (a.id === id ? { ...a, status } : a)));
      // Also re-fetch to stay in sync
      await refreshApplications();
    } catch (err: any) {
      setStatusError(err?.message || 'Failed to update application status');
    } finally {
      setUpdatingAppId(null);
    }
  };

  const handleResumeDownload = async (appId: string | number) => {
    try {
      const res = await fetchApi(`/api/applications/admin/${appId}/resume`);
      if (res.ok && res.download_url) {
        window.open(res.download_url, '_blank');
      } else {
        alert('Could not retrieve resume link');
      }
    } catch (err) {
      alert('Error fetching resume');
    }
  };

  const filteredRoles = filterStatus === 'all' ? roles : roles.filter((r) => r.status === filterStatus);
  const counts = { 
    all: roles.length, 
    open: roles.filter(r => r.status === 'open').length, 
    closed: roles.filter(r => r.status === 'closed').length, 
    fulfilled: roles.filter(r => r.status === 'fulfilled').length 
  };

  const filteredApplications = filterAppStatus === 'all' ? applications : applications.filter((app) => app.status === filterAppStatus);
  const appCounts = {
    all: applications.length,
    new: applications.filter(a => a.status === 'new').length,
    reviewed: applications.filter(a => a.status === 'reviewed').length,
    shortlisted: applications.filter(a => a.status === 'shortlisted').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
    hired: applications.filter(a => a.status === 'hired').length,
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#010101]">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <main className="relative min-h-screen w-full bg-[#010101] text-white">
      {/* Subtle bg glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[140px]" />
      </div>

      {/* Status error toast */}
      <AnimatePresence>
        {statusError && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed left-1/2 top-6 z-[100] -translate-x-1/2 rounded-xl border border-rose-500/40 bg-rose-500/15 px-5 py-3 text-[13px] font-medium text-rose-300 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <X className="h-4 w-4 shrink-0 text-rose-400" />
              {statusError}
              <button onClick={() => setStatusError(null)} className="ml-2 text-rose-400 hover:text-white">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        )}
        {statusSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed left-1/2 top-6 z-[100] -translate-x-1/2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-5 py-3 text-[13px] font-medium text-emerald-300 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
              {statusSuccess}
              <button onClick={() => setStatusSuccess(null)} className="ml-2 text-emerald-400 hover:text-white">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-16">
        {/* ── HEADER ── */}
        <motion.div {...fadeUp} className="mb-10 flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              HR Dashboard
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Recruitment Portal</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            {currentUser?.role === 'ADMIN' && (
              <button
                onClick={() => setIsUserModalOpen(true)}
                className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-[13px] font-medium text-emerald-400 transition-colors hover:bg-emerald-500/20"
              >
                <UserPlus className="h-4 w-4" />
                Create User
              </button>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </motion.div>

        {/* ── TABS ── */}
        <motion.div {...fadeUp} className="mb-8 flex gap-2 rounded-xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-sm sm:w-fit">
          <button
            onClick={() => setActiveTab('jobs')}
            className={`flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-lg px-6 py-2.5 text-[13px] font-semibold transition-all ${
              activeTab === 'jobs' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="h-4 w-4" />
            Job Openings
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-lg px-6 py-2.5 text-[13px] font-semibold transition-all ${
              activeTab === 'applications' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="h-4 w-4" />
            Applications
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'jobs' && (
            <motion.div
              key="jobs-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* ACTION BAR */}
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {(['all', 'open', 'closed', 'fulfilled'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setFilterStatus(s)}
                      className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12px] font-medium capitalize transition-all ${
                        filterStatus === s
                          ? 'border-white/20 bg-white/10 text-white'
                          : 'border-white/8 bg-transparent text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {s !== 'all' && (
                        <span className={`h-1.5 w-1.5 rounded-full ${statusConfig[s as RoleStatus].dot}`} />
                      )}
                      {s === 'all' ? 'All' : statusConfig[s as RoleStatus].label}
                      <span className="ml-0.5 text-[10px] text-slate-500">{counts[s]}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-[13px] font-semibold text-black transition-all hover:bg-emerald-400 disabled:opacity-50 sm:w-auto"
                >
                  <Plus className="h-4 w-4" />
                  New Opening
                </button>
              </div>

              {/* JOBS LIST */}
              <div className="flex flex-col gap-3">
                {filteredRoles.length === 0 && (
                  <div className="rounded-2xl border border-white/8 bg-white/[0.02] py-20 text-center text-sm text-slate-500">
                    No roles match this filter.
                  </div>
                )}
                {filteredRoles.map((role) => {
                  const isUpdating = updatingJobId === role.id;
                  const isDropdownOpen = openDropdown === role.id;

                  return (
                  <div
                    key={role.id}
                    className={`group relative rounded-2xl border bg-white/[0.02] transition-colors duration-200 ${
                      role.status === 'open'
                        ? 'border-white/10 hover:border-emerald-500/25'
                        : 'border-white/6 opacity-70'
                    }`}
                  >
                    {/* Loading overlay for this card */}
                    {isUpdating && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-black/40 backdrop-blur-[2px]">
                        <Loader2 className="h-5 w-5 animate-spin text-emerald-400" />
                      </div>
                    )}

                    <div className="flex flex-col gap-4 p-5 sm:p-6 md:flex-row md:items-start md:justify-between">
                      {/* Left Data */}
                      <div className="flex-1 min-w-0">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                            {role.department}
                          </span>
                          <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${statusConfig[role.status]?.color || ''}`}>
                            <span className={`h-1.5 w-1.5 rounded-full ${statusConfig[role.status]?.dot || ''}`} />
                            {statusConfig[role.status]?.label || role.status}
                          </span>
                        </div>
                        <h3 className="mb-2 text-[17px] font-semibold text-white sm:text-lg">{role.title}</h3>
                        <p className="mb-4 text-[13px] leading-relaxed text-slate-400">{role.short_description || role.description}</p>
                        <div className="flex flex-wrap gap-2 text-[11px] font-medium text-slate-400">
                          <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1">
                            <MapPin className="h-3 w-3" />{role.location}
                          </span>
                          <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1">
                            <Briefcase className="h-3 w-3" />{role.employment_type}
                          </span>
                          <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1">
                            <Clock className="h-3 w-3" />{role.experience}
                          </span>
                        </div>
                      </div>

                      {/* Right Action — dropdown with ref-based outside click */}
                      <div className="flex shrink-0 items-center justify-end gap-2 md:pl-6 pt-2 md:pt-0">
                        <button
                          disabled={isUpdating || deleteLoading}
                          onClick={(e) => {
                            e.stopPropagation();
                            setJobToDelete(role);
                            setIsDeleteModalOpen(true);
                          }}
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-rose-400 transition-colors hover:bg-rose-500/20 disabled:opacity-50"
                          title="Delete Job"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <div className="relative" ref={isDropdownOpen ? jobDropdownRef : undefined}>
                          <button
                            disabled={isUpdating}
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenDropdown(isDropdownOpen ? null : role.id);
                              setOpenAppDropdown(null);
                            }}
                            className="flex items-center gap-1.5 rounded-xl border border-white/12 bg-white/5 px-3.5 py-2 text-[12px] font-medium text-slate-300 transition-colors hover:bg-white/10 disabled:opacity-50"
                          >
                            Update Status
                            <ChevronDown className={`h-3.5 w-3.5 text-slate-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: 4, scale: 0.97 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 4, scale: 0.97 }}
                                transition={{ duration: 0.15 }}
                                className="absolute right-0 top-full z-[60] mt-1.5 w-40 overflow-hidden rounded-xl border border-white/12 bg-[#111] shadow-2xl"
                              >
                                {(['open', 'closed', 'fulfilled'] as RoleStatus[]).map((s) => (
                                  <button
                                    key={s}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      updateJobStatus(role.id, s);
                                    }}
                                    className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[12px] font-medium transition-colors hover:bg-white/8 ${role.status === s ? 'text-white' : 'text-slate-400'}`}
                                  >
                                    <span className={`h-2 w-2 rounded-full ${statusConfig[s].dot}`} />
                                    {statusConfig[s].label}
                                    {role.status === s && <CheckCircle className="ml-auto h-3.5 w-3.5 text-emerald-400" />}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'applications' && (
            <motion.div
              key="applications-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3"
            >
              {/* APP ACTION BAR */}
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {(['all', 'new', 'reviewed', 'shortlisted', 'rejected', 'hired'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setFilterAppStatus(s)}
                      className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12px] font-medium capitalize transition-all ${
                        filterAppStatus === s
                          ? 'border-white/20 bg-white/10 text-white'
                          : 'border-white/8 bg-transparent text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {s !== 'all' && (
                        <span className={`h-1.5 w-1.5 rounded-full ${appStatusConfig[s as AppStatus].dot}`} />
                      )}
                      {s === 'all' ? 'All' : appStatusConfig[s as AppStatus].label}
                      <span className="ml-0.5 text-[10px] text-slate-500">{appCounts[s]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {filteredApplications.length === 0 && (
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] py-20 text-center text-sm text-slate-500">
                  No applications match this filter.
                </div>
              )}
              {filteredApplications.map((app) => {
                const isUpdating = updatingAppId === app.id;
                const isDropdownOpen = openAppDropdown === app.id;

                return (
                <div key={app.id} className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 transition-colors duration-200 hover:border-white/20">
                  {/* Loading overlay for this card */}
                  {isUpdating && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-black/40 backdrop-blur-[2px]">
                      <Loader2 className="h-5 w-5 animate-spin text-emerald-400" />
                    </div>
                  )}

                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="mb-2 flex items-center justify-between md:justify-start gap-4">
                        <h3 className="text-[17px] font-semibold text-white sm:text-lg">{app.candidate_name}</h3>
                        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${appStatusConfig[app.status]?.color || ''}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${appStatusConfig[app.status]?.dot || ''}`} />
                          {appStatusConfig[app.status]?.label || app.status}
                        </span>
                      </div>
                      
                      <div className="mb-4 text-[13px] text-emerald-400 font-medium tracking-wide">
                        Applied for: {app.job_title || app.preferred_role}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-[12px] text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5 text-slate-500" /> {app.email}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Phone className="h-3.5 w-3.5 text-slate-500" /> {app.phone}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-slate-500" /> {getAppDate(app)}
                        </div>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center justify-end gap-3 pt-2 md:pt-0">
                      <button
                        onClick={() => handleResumeDownload(app.id)}
                        disabled={isUpdating || deleteAppLoading}
                        className="flex items-center gap-1.5 rounded-xl border border-white/12 bg-white/5 px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-white/10 hover:text-emerald-300 disabled:opacity-50"
                      >
                        <FileText className="h-4 w-4" />
                        Resume
                      </button>

                      <button
                        disabled={isUpdating || deleteAppLoading}
                        onClick={(e) => {
                          e.stopPropagation();
                          setAppToDelete(app);
                          setIsDeleteAppModalOpen(true);
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-rose-400 transition-colors hover:bg-rose-500/20 disabled:opacity-50"
                        title="Delete Application"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>

                      <div className="relative" ref={isDropdownOpen ? appDropdownRef : undefined}>
                        <button
                          disabled={isUpdating}
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenAppDropdown(isDropdownOpen ? null : app.id);
                            setOpenDropdown(null);
                          }}
                          className="flex items-center gap-1.5 rounded-xl border border-white/12 bg-white/5 px-3.5 py-2 text-[12px] font-medium text-slate-300 transition-colors hover:bg-white/10 disabled:opacity-50"
                        >
                          Status
                          <ChevronDown className={`h-3.5 w-3.5 text-slate-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 4, scale: 0.97 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 4, scale: 0.97 }}
                              transition={{ duration: 0.15 }}
                              className="absolute right-0 top-full z-[60] mt-1.5 w-40 overflow-hidden rounded-xl border border-white/12 bg-[#111] shadow-2xl"
                            >
                              {(['new', 'reviewed', 'shortlisted', 'rejected', 'hired'] as AppStatus[]).map((s) => (
                                <button
                                  key={s}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateAppStatus(app.id, s);
                                  }}
                                  className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[12px] font-medium transition-colors hover:bg-white/8 ${app.status === s ? 'text-white' : 'text-slate-400'}`}
                                >
                                  <span className={`h-1.5 w-1.5 rounded-full ${appStatusConfig[s].dot}`} />
                                  {appStatusConfig[s].label}
                                  {app.status === s && <CheckCircle className="ml-auto h-3.5 w-3.5 text-emerald-400" />}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ── ADD JOB MODAL ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-4 sm:py-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !formLoading && setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: easeOutExpo }}
              className="relative flex max-h-full w-full max-w-2xl flex-col rounded-2xl border border-white/10 bg-[#0e0e0e] shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
            >
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/5 p-6">
                <div>
                  <h2 className="text-lg font-semibold text-white">Publish New Opening</h2>
                  <p className="mt-0.5 text-[12px] text-slate-500">Add detailed information to post a new role.</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  disabled={formLoading}
                  className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-white/8 hover:text-white disabled:opacity-50"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Form Body */}
              <div className="overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10">
                <form id="addJobForm" onSubmit={handleAddJob} className="flex flex-col gap-5">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Job Title <span className="text-rose-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      disabled={formLoading}
                      value={newJob.title}
                      onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-[13px] text-slate-100 placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
                      placeholder="e.g. Senior DevOps Engineer"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Department</label>
                      <input
                        required
                        type="text"
                        disabled={formLoading}
                        value={newJob.department}
                        onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-[13px] text-slate-100 focus:border-emerald-500/50"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Location</label>
                      <input
                        required
                        type="text"
                        disabled={formLoading}
                        value={newJob.location}
                        onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-[13px] text-slate-100 focus:border-emerald-500/50"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Employment Type</label>
                      <select
                        value={newJob.employment_type}
                        disabled={formLoading}
                        onChange={(e) => setNewJob({ ...newJob, employment_type: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-[13px] text-slate-100 focus:border-emerald-500/50"
                      >
                        <option value="Full-time" className="bg-[#111]">Full-time</option>
                        <option value="Part-time" className="bg-[#111]">Part-time</option>
                        <option value="Contract" className="bg-[#111]">Contract</option>
                        <option value="Internship" className="bg-[#111]">Internship</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Experience</label>
                      <input
                        required
                        type="text"
                        disabled={formLoading}
                        value={newJob.experience}
                        onChange={(e) => setNewJob({ ...newJob, experience: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-[13px] text-slate-100 focus:border-emerald-500/50"
                        placeholder="e.g. 3-5 years"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Short Description <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={2}
                      disabled={formLoading}
                      value={newJob.short_description}
                      onChange={(e) => setNewJob({ ...newJob, short_description: e.target.value })}
                      className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[13px] text-slate-100 placeholder:text-slate-600 focus:border-emerald-500/50"
                      placeholder="Brief headline description..."
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      <AlignLeft className="h-3.5 w-3.5" /> Full Description
                    </label>
                    <textarea
                      rows={4}
                      disabled={formLoading}
                      value={newJob.description}
                      onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                      className="w-full resize-y rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[13px] text-slate-100 placeholder:text-slate-600 focus:border-emerald-500/50"
                      placeholder="Describe the role in detail..."
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Responsibilities</label>
                    <textarea
                      rows={3}
                      disabled={formLoading}
                      value={newJob.responsibilities}
                      onChange={(e) => setNewJob({ ...newJob, responsibilities: e.target.value })}
                      className="w-full resize-y rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[13px] text-slate-100 focus:border-emerald-500/50"
                    />
                  </div>
                  
                  <div>
                    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Requirements</label>
                    <textarea
                      rows={3}
                      disabled={formLoading}
                      value={newJob.requirements}
                      onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
                      className="w-full resize-y rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[13px] text-slate-100 focus:border-emerald-500/50"
                    />
                  </div>
                </form>
              </div>

              {/* Footer */}
              <div className="flex shrink-0 items-center justify-end gap-3 border-t border-white/5 p-6 bg-black/20">
                <button
                  type="button"
                  disabled={formLoading}
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full border border-white/10 px-5 py-2.5 text-[13px] font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="addJobForm"
                  disabled={formLoading}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-[13px] font-semibold text-black transition-all hover:bg-emerald-400 hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {formLoading ? 'Publishing...' : 'Publish Role'}
                  {!formLoading && <Plus className="h-3.5 w-3.5" />}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── CREATE USER MODAL ── */}
      <AnimatePresence>
        {isUserModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-4 sm:py-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !userFormLoading && setIsUserModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: easeOutExpo }}
              className="relative flex max-h-full w-full max-w-lg flex-col rounded-2xl border border-white/10 bg-[#0e0e0e] shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
            >
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/5 p-6">
                <div>
                  <h2 className="text-lg font-semibold text-white">Create New User</h2>
                  <p className="mt-0.5 text-[12px] text-slate-500">Provide user credentials below.</p>
                </div>
                <button
                  onClick={() => setIsUserModalOpen(false)}
                  disabled={userFormLoading}
                  className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-white/8 hover:text-white disabled:opacity-50"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Form Body */}
              <div className="overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10">
                <form id="createUserForm" onSubmit={handleCreateUser} className="flex flex-col gap-5">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      disabled={userFormLoading}
                      value={newUserForm.name}
                      onChange={(e) => setNewUserForm({ ...newUserForm, name: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-[13px] text-slate-100 placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      disabled={userFormLoading}
                      value={newUserForm.email}
                      onChange={(e) => setNewUserForm({ ...newUserForm, email: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-[13px] text-slate-100 placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
                      placeholder="john@commediaindia.com"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Role</label>
                    <select
                      value={newUserForm.role}
                      disabled={userFormLoading}
                      onChange={(e) => setNewUserForm({ ...newUserForm, role: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-[13px] text-slate-100 focus:border-emerald-500/50 focus:outline-none"
                    >
                      <option value="HR" className="bg-[#111]">HR</option>
                      <option value="ADMIN" className="bg-[#111]">ADMIN</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Password <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        required
                        type={showUserPassword ? 'text' : 'password'}
                        disabled={userFormLoading}
                        value={newUserForm.password}
                        onChange={(e) => setNewUserForm({ ...newUserForm, password: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-[13px] text-slate-100 placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 pr-10"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowUserPassword(!showUserPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                      >
                        {showUserPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Footer */}
              <div className="flex shrink-0 items-center justify-end gap-3 border-t border-white/5 p-6 bg-black/20">
                <button
                  type="button"
                  disabled={userFormLoading}
                  onClick={() => setIsUserModalOpen(false)}
                  className="rounded-full border border-white/10 px-5 py-2.5 text-[13px] font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="createUserForm"
                  disabled={userFormLoading}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-[13px] font-semibold text-black transition-all hover:bg-emerald-400 hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {userFormLoading ? 'Creating...' : 'Create User'}
                  {!userFormLoading && <UserPlus className="h-3.5 w-3.5" />}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── DELETE CONFIRMATION MODAL ── */}
      <AnimatePresence>
        {isDeleteModalOpen && jobToDelete && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-4 sm:py-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !deleteLoading && setIsDeleteModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: easeOutExpo }}
              className="relative flex w-full max-w-sm flex-col rounded-2xl border border-white/10 bg-[#0e0e0e] shadow-[0_40px_100px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/10">
                  <AlertTriangle className="h-7 w-7 text-rose-500" />
                </div>
                <h2 className="mb-2 text-center text-[19px] font-semibold text-white">Delete Job Opening</h2>
                <p className="mb-8 text-center text-[13px] leading-relaxed text-slate-400">
                  Are you sure you want to permanently delete the <strong className="text-white">{jobToDelete.title}</strong> role? This action cannot be undone.
                </p>
                
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <button
                    onClick={() => setIsDeleteModalOpen(false)}
                    disabled={deleteLoading}
                    className="flex-1 rounded-full border border-white/10 bg-white/5 py-2.5 text-[13px] font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteJob}
                    disabled={deleteLoading}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-rose-500 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-rose-400 hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {deleteLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2 className="h-4 w-4" /> Delete
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── DELETE APPLICATION CONFIRMATION MODAL ── */}
      <AnimatePresence>
        {isDeleteAppModalOpen && appToDelete && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-4 sm:py-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !deleteAppLoading && setIsDeleteAppModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: easeOutExpo }}
              className="relative flex w-full max-w-sm flex-col rounded-2xl border border-white/10 bg-[#0e0e0e] shadow-[0_40px_100px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/10">
                  <AlertTriangle className="h-7 w-7 text-rose-500" />
                </div>
                <h2 className="mb-2 text-center text-[19px] font-semibold text-white">Delete Application</h2>
                <p className="mb-1.5 text-center text-[13px] leading-relaxed text-slate-400">
                  Are you sure you want to permanently delete the application from{' '}
                  <strong className="text-white">{appToDelete.candidate_name}</strong>?
                </p>
                <p className="mb-8 text-center text-[11px] text-slate-500">
                  This action cannot be undone. Any attached resume will also be removed.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <button
                    onClick={() => setIsDeleteAppModalOpen(false)}
                    disabled={deleteAppLoading}
                    className="flex-1 rounded-full border border-white/10 bg-white/5 py-2.5 text-[13px] font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteApp}
                    disabled={deleteAppLoading}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-rose-500 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-rose-400 hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {deleteAppLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2 className="h-4 w-4" /> Delete
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}