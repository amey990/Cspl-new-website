'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchApi } from '@/lib/api';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

export default function RecruitmentLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Password visibility states
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Forgot Password states
  const [isForgotPasswordMode, setIsForgotPasswordMode] = useState(false);
  const [forgotStep, setForgotStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Check if already authenticated
  useEffect(() => {
    const token = localStorage.getItem('commedia_hr_token');
    if (!token) {
      setCheckingAuth(false);
      return;
    }

    fetchApi('/api/auth/me')
      .then(() => {
        router.push('/recruitment');
      })
      .catch(() => {
        localStorage.removeItem('commedia_hr_token');
        localStorage.removeItem('commedia_hr_user');
        setCheckingAuth(false);
      });
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await fetchApi('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      if (data.ok && data.token) {
        localStorage.setItem('commedia_hr_token', data.token);
        localStorage.setItem('commedia_hr_user', JSON.stringify(data.user));
        router.push('/recruitment');
      } else {
        setError(data.message || 'Login failed');
        setLoading(false);
      }
    } catch (err: any) {
      setError(err.message || 'Invalid email or password');
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);

    try {
      const data = await fetchApi('/api/auth/forgot-password', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });

      if (data.ok) {
        setSuccessMessage(data.message || 'If this email exists, an OTP has been sent.');
        setForgotStep(2);
      } else {
        setError(data.message || 'Failed to process request.');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to process request.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      const data = await fetchApi('/api/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({ email, otp, newPassword }),
      });

      if (data.ok) {
        setSuccessMessage(data.message || 'Password reset successfully.');
        setIsForgotPasswordMode(false);
        setForgotStep(1);
        setPassword('');
        setOtp('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setError(data.message || 'Failed to reset password.');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to reset password.');
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#010101]">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-[#010101] p-4 text-white">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-sm rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl"
      >
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            HR Portal
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">Sign IN</h1>
          <p className="mt-2 text-sm text-zinc-400">Manage recruitment & tracking</p>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-center text-[13px] text-rose-400">
            {error}
          </div>
        )}
        
        {successMessage && (
          <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-center text-[13px] text-emerald-400">
            {successMessage}
          </div>
        )}

        {!isForgotPasswordMode ? (
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white placeholder-zinc-600 transition-colors focus:border-emerald-500/50 focus:bg-white/10 focus:outline-none"
                placeholder="hr@commediaindia.com"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 pl-4 pr-11 py-3 text-[14px] text-white placeholder-zinc-600 transition-colors focus:border-emerald-500/50 focus:bg-white/10 focus:outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <div className="mt-2 text-right">
                <button
                  type="button"
                  onClick={() => {
                    setIsForgotPasswordMode(true);
                    setError('');
                    setSuccessMessage('');
                    setForgotStep(1);
                  }}
                  className="text-[12px] text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center rounded-xl bg-emerald-500 py-3.5 text-[14px] font-semibold text-black transition-all hover:bg-emerald-400 disabled:opacity-50"
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black" />
              ) : (
                'Access Dashboard'
              )}
            </button>
          </form>
        ) : forgotStep === 1 ? (
          <form onSubmit={handleForgotPassword} className="flex flex-col gap-5">
            <div>
              <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white placeholder-zinc-600 transition-colors focus:border-emerald-500/50 focus:bg-white/10 focus:outline-none"
                placeholder="hr@commediaindia.com"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center rounded-xl bg-emerald-500 py-3.5 text-[14px] font-semibold text-black transition-all hover:bg-emerald-400 disabled:opacity-50"
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black" />
              ) : (
                'Send Code'
              )}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsForgotPasswordMode(false)}
                className="text-[13px] text-zinc-400 hover:text-white transition-colors"
              >
                Back to login
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                Email Address
              </label>
              <input
                type="email"
                readOnly
                value={email}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-zinc-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                Authentication Code (OTP)
              </label>
              <input
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white placeholder-zinc-600 transition-colors focus:border-emerald-500/50 focus:bg-white/10 focus:outline-none"
                placeholder="Enter 6-digit code"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 pl-4 pr-11 py-3 text-[14px] text-white placeholder-zinc-600 transition-colors focus:border-emerald-500/50 focus:bg-white/10 focus:outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 pl-4 pr-11 py-3 text-[14px] text-white placeholder-zinc-600 transition-colors focus:border-emerald-500/50 focus:bg-white/10 focus:outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center rounded-xl bg-emerald-500 py-3.5 text-[14px] font-semibold text-black transition-all hover:bg-emerald-400 disabled:opacity-50"
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black" />
              ) : (
                'Reset Password'
              )}
            </button>

            <div className="text-center mt-1">
              <button
                type="button"
                onClick={() => setIsForgotPasswordMode(false)}
                className="text-[13px] text-zinc-400 hover:text-white transition-colors"
              >
                Back to login
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </main>
  );
}
