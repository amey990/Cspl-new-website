'use client';

import React from 'react';

type DemoDetail = {
  url?: string;
  title?: string;
};

export default function DemoCornerPlayer() {
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState<string>('');
  const [title, setTitle] = React.useState<string>('Demo');

  React.useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<DemoDetail>;
      const nextUrl = ce.detail?.url || '';
      const nextTitle = ce.detail?.title || 'Demo';

      if (!nextUrl) return;

      setUrl(nextUrl);
      setTitle(nextTitle);
      setOpen(true);
    };

    window.addEventListener('commedia:open-demo', handler as EventListener);
    return () => window.removeEventListener('commedia:open-demo', handler as EventListener);
  }, []);

  const close = () => {
    setOpen(false);
    // keep url so it opens instantly next time; or clear if you want:
    // setUrl('');
  };

  // If someone gives a normal YouTube watch link, convert to embed
  const embedUrl = React.useMemo(() => {
    if (!url) return '';
    try {
      const u = new URL(url);
      // youtu.be/<id>
      if (u.hostname.includes('youtu.be')) {
        const id = u.pathname.replace('/', '');
        return `https://www.youtube.com/embed/${id}?autoplay=1&mute=0`;
      }
      // youtube.com/watch?v=<id>
      if (u.hostname.includes('youtube.com') && u.searchParams.get('v')) {
        const id = u.searchParams.get('v')!;
        return `https://www.youtube.com/embed/${id}?autoplay=1&mute=0`;
      }
      // already an embed or other video url
      return url;
    } catch {
      return url;
    }
  }, [url]);

  if (!open) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] w-[92vw] max-w-[420px] overflow-hidden rounded-2xl border border-white/10 bg-black/70 shadow-[0_30px_120px_rgba(0,0,0,0.9)] backdrop-blur-md">
      {/* header */}
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Watch demo
          </p>
          <p className="truncate text-sm font-medium text-white">{title}</p>
        </div>

        <button
          type="button"
          onClick={close}
          className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 transition hover:border-white/30 hover:bg-white/10"
        >
          Close
        </button>
      </div>

      {/* player */}
      <div className="relative aspect-video w-full bg-black">
        <iframe
          key={embedUrl} // refresh on url change
          className="absolute inset-0 h-full w-full"
          src={embedUrl}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
