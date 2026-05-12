'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import styles from './ChatbotWidget.module.css';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Halo! Ini contoh AI assistant yang bisa Anda miliki di website UMKM Anda. Coba tanya tentang harga atau waktu pengerjaan.', isBot: true },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    const currentInput = input;
    setInput('');

    // Simulate AI thinking and response
    setTimeout(() => {
      let botResponse = 'Terima kasih atas pertanyaannya! Tim spesialis kami akan memberikan solusi terbaik untuk itu. Ingin langsung berkonsultasi via WhatsApp?';
      
      const lowerInput = currentInput.toLowerCase();
      if (lowerInput.includes('harga') || lowerInput.includes('biaya')) {
        botResponse = 'Harga pembuatan landing page kami mulai dari Rp 1.000.000 (Paket Starter). Anda bisa mencoba fitur kalkulator di halaman utama untuk estimasinya!';
      } else if (lowerInput.includes('lama') || lowerInput.includes('waktu')) {
        botResponse = 'Waktu pengerjaan standar kami adalah 7 hari kerja sejak materi lengkap kami terima.';
      } else if (lowerInput.includes('ai') || lowerInput.includes('bot')) {
        botResponse = 'Betul! Website yang kami buat bisa diintegrasikan dengan AI Chatbot seperti saya ini untuk melayani pelanggan Anda 24/7.';
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      return;
    }

    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.toggle} ${isOpen ? styles.toggleHidden : ''}`}
        aria-label="Buka Live Chatbot AI"
        aria-expanded={isOpen}
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      <div
        className={`${styles.window} ${isOpen ? styles.windowOpen : ''}`}
        onKeyDown={handleKeyDown}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerIdentity}>
            <span className={styles.statusDot} aria-hidden="true"></span>
            <div>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>AI Assistant</h3>
                <span className={styles.demoBadge}>Demo</span>
              </div>
              <span className={styles.statusText}>Online 24/7</span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className={styles.closeButton}
            aria-label="Tutup Live Chatbot AI"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className={styles.messages}>
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`${styles.bubble} ${msg.isBot ? styles.botBubble : styles.userBubble}`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className={styles.inputBar}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Coba tanya 'Berapa harganya?'"
            className={styles.input}
          />
          <button
            onClick={handleSend}
            className={styles.sendButton}
            aria-label="Kirim pesan"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
}
