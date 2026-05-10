'use client';

import React, { useState } from 'react';
import styles from './ChatbotWidget.module.css';
import { MessageCircle, X, Loader2 } from 'lucide-react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showTag, setShowTag] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowTag(false);
  };

  return (
    <div className={styles.root}>
      {/* Helper Tag – shows on load and hides permanently once the user interacts */}
      {showTag && !isOpen && (
        <div className="absolute right-[64px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-black/70 px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-[0_8px_30px_rgba(0,0,0,0.8)] border border-white/10 backdrop-blur-md pointer-events-none">
          Need Help? C-Pal is Here
        </div>
      )}

      {/* Floating Button */}
      <button
        className={styles.fab}
        onClick={handleToggle}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* Chatbox Container / Panel */}
      <div className={`${styles.panel} ${isOpen ? styles.open : ''}`} role="dialog" aria-hidden={!isOpen}>
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0a0a0c] text-emerald-400">
            <Loader2 className="mb-2 h-8 w-8 animate-spin" />
            <span className="text-[10px] uppercase tracking-widest text-emerald-400/80">Loading C-Pal</span>
          </div>
        )}

        {/* 
          Loading the iframe inherently inside the hidden .panel directly on mount 
          allows the internal React dom of the iframe to resolve naturally in the background 
          before the user even opens the panel, causing instant rendering on click!
        */}
        <iframe
          src="https://cpal.cspllabs.com/"
          title="Chatbot"
          className="h-full w-full border-none bg-transparent"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}
