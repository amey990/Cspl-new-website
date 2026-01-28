'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './ChatbotWidget.module.css';
import { MessageCircle, X, Globe2, Trash2, SendHorizonal, Loader2 } from 'lucide-react';

type Role = 'assistant' | 'user';

type ChatMsg = {
  id: string;
  role: Role;
  content: string;
  ts: number;
};

const STORAGE_KEY = 'cpal_chat_v1';

const DEFAULT_SUGGESTIONS = [
  'What services does Commedia Solutions offer?',
  'How can I contact Commedia Solutions?',
];

function uid() {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function buildFallbackSuggestions(lastAssistantText?: string) {
  const t = (lastAssistantText || '').toLowerCase();

  if (t.includes('network') || t.includes('wireless') || t.includes('wifi')) {
    return ['Do you offer campus Wi-Fi deployment?', 'Can you help with Meraki setup?'];
  }
  if (t.includes('cloud')) {
    return ['Do you handle cloud migrations?', 'Can you design cloud security?'];
  }
  if (t.includes('contact') || t.includes('reach')) {
    return ['Where is your Contact page?', 'Can you share your email/phone?'];
  }
  return DEFAULT_SUGGESTIONS;
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      id: uid(),
      role: 'assistant',
      ts: Date.now(),
      content:
        "Hello! I'm your dedicated AI guide, ready to assist you with any inquiries related to Commedia Solutions. How can I help you today?",
    },
  ]);

  const [suggestions, setSuggestions] = useState<string[]>(DEFAULT_SUGGESTIONS);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  // restore from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { open?: boolean; messages?: ChatMsg[] };
      if (typeof parsed.open === 'boolean') setOpen(parsed.open);
      if (Array.isArray(parsed.messages) && parsed.messages.length) setMessages(parsed.messages);
    } catch {}
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ open, messages }));
    } catch {}
  }, [open, messages]);

  // auto scroll bottom
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, open, loading]);

  // focus input when open
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [open]);

  const chars = input.length;
  const maxChars = 500;

  const lastAssistant = useMemo(() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === 'assistant') return messages[i].content;
    }
    return '';
  }, [messages]);

  useEffect(() => {
    setSuggestions(buildFallbackSuggestions(lastAssistant));
  }, [lastAssistant]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: ChatMsg = { id: uid(), role: 'user', content: trimmed, ts: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/cpal-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as { reply: string; suggestions?: string[] };

      const botMsg: ChatMsg = { id: uid(), role: 'assistant', content: data.reply, ts: Date.now() };
      setMessages((m) => [...m, botMsg]);

      if (Array.isArray(data.suggestions) && data.suggestions.length) {
        setSuggestions(data.suggestions.slice(0, 3));
      }
    } catch {
      setMessages((m) => [
        ...m,
        {
          id: uid(),
          role: 'assistant',
          ts: Date.now(),
          content:
            "Sorry — I couldn't reach the chat service right now. Try again in a moment, or use the Contact page and we’ll get back to you.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  function clearChat() {
    setMessages([
      {
        id: uid(),
        role: 'assistant',
        ts: Date.now(),
        content:
          "Hello! I'm your dedicated AI guide, ready to assist you with any inquiries related to Commedia Solutions. How can I help you today?",
      },
    ]);
    setSuggestions(DEFAULT_SUGGESTIONS);
  }

  return (
    <div className={styles.root}>
      {/* Floating Button */}
      <button
        className={styles.fab}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
      </button>

      {/* Panel */}
      <div className={`${styles.panel} ${open ? styles.open : ''}`} role="dialog" aria-hidden={!open}>
        <div className={styles.header}>
          <div className={styles.brand}>
            <div className={styles.logoDot} aria-hidden />
            <div className={styles.brandText}>
              <div className={styles.brandTitle}>CPal Assistant</div>
              <div className={styles.statusRow}>
                <span className={styles.onlineDot} />
                <span className={styles.statusText}>Online • Available 24/7</span>
              </div>
            </div>
          </div>

          <div className={styles.headerActions}>
            <button className={styles.iconBtn} title="Language" aria-label="Language">
              <Globe2 size={16} />
            </button>
            <button
              className={styles.iconBtn}
              title="Clear chat"
              aria-label="Clear chat"
              onClick={clearChat}
            >
              <Trash2 size={16} />
            </button>
            <button className={styles.iconBtn} title="Close" aria-label="Close" onClick={() => setOpen(false)}>
              <X size={16} />
            </button>
          </div>
        </div>

        <div className={styles.body} ref={scrollRef}>
          {messages.map((m) => (
            <div key={m.id} className={`${styles.msgRow} ${m.role === 'user' ? styles.userRow : styles.botRow}`}>
              <div className={`${styles.bubble} ${m.role === 'user' ? styles.userBubble : styles.botBubble}`}>
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className={`${styles.msgRow} ${styles.botRow}`}>
              <div className={`${styles.bubble} ${styles.botBubble} ${styles.typing}`}>
                <Loader2 className={styles.spinner} size={16} />
                <span>Typing…</span>
              </div>
            </div>
          )}

          <div className={styles.suggestWrap}>
            <div className={styles.suggestTitle}>Ask a follow up:</div>
            <div className={styles.suggestGrid}>
              {suggestions.slice(0, 2).map((s) => (
                <button key={s} className={styles.suggestPill} onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.inputWrap}>
            <textarea
              ref={inputRef}
              className={styles.input}
              placeholder="Type your message in English..."
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, maxChars))}
              onKeyDown={onKeyDown}
              rows={1}
            />
            <button
              className={styles.sendBtn}
              onClick={() => send(input)}
              disabled={!input.trim() || loading}
              aria-label="Send"
            >
              <SendHorizonal size={18} />
            </button>
          </div>
          <div className={styles.metaRow}>
            <div className={styles.disclaimer}>
              Disclaimer: We collect your responses to improve your experience.
            </div>
            <div className={styles.counter}>
              {chars}/{maxChars}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
