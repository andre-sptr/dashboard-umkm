'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './ChatbotWidget.module.css';

const markdownComponents = {
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  ),
};

const INITIAL_MESSAGE = {
  role: 'assistant',
  content:
    'Halo! Saya AI assistant PekanWeb Studio. Tanya saja soal paket, harga, proses kerja, atau apapun seputar landing page UMKM Anda.',
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen, isLoading]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg = { role: 'user', content: trimmed };
    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setInput('');
    setError(null);
    setIsLoading(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Skip pesan greeting awal (bukan dari user)
          messages: nextHistory.slice(1),
        }),
        signal: controller.signal,
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'Gagal menghubungi AI.');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      if (err.name === 'AbortError') return;
      setError(err.message || 'Terjadi kesalahan.');
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      return;
    }
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.toggle} ${isOpen ? styles.toggleHidden : ''}`}
        aria-label="Buka AI Assistant"
        aria-expanded={isOpen}
      >
        <MessageSquare size={26} />
      </button>

      <div
        className={`${styles.window} ${isOpen ? styles.windowOpen : ''}`}
        role="dialog"
        aria-label="AI Assistant"
      >
        <div className={styles.header}>
          <div className={styles.headerIdentity}>
            <span className={styles.statusDot} aria-hidden="true"></span>
            <div>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>AI Assistant</h3>
                <span className={styles.demoBadge}>Haiku 4.5</span>
              </div>
              <span className={styles.statusText}>Online · powered by Claude</span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className={styles.closeButton}
            aria-label="Tutup AI Assistant"
          >
            <X size={20} />
          </button>
        </div>

        <div className={styles.messages}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`${styles.bubble} ${
                msg.role === 'assistant' ? styles.botBubble : styles.userBubble
              }`}
            >
              {msg.role === 'assistant' ? (
                <div className={styles.markdown}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                    {msg.content}
                  </ReactMarkdown>
                </div>
              ) : (
                msg.content
              )}
            </div>
          ))}
          {isLoading && (
            <div className={`${styles.bubble} ${styles.botBubble}`} aria-live="polite">
              <Loader2 size={16} className={styles.spin} /> Mengetik…
            </div>
          )}
          {error && (
            <div className={`${styles.bubble} ${styles.botBubble}`} role="alert">
              {error}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className={styles.inputBar}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Tanya soal paket, harga, proses…"
            className={styles.input}
            disabled={isLoading}
            maxLength={500}
          />
          <button
            onClick={handleSend}
            className={styles.sendButton}
            aria-label="Kirim pesan"
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? <Loader2 size={18} className={styles.spin} /> : <Send size={18} />}
          </button>
        </div>
      </div>
    </>
  );
}
