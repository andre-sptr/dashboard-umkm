'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Halo! Saya AI asisten PekanWeb. Ada yang ingin Anda tanyakan tentang pembuatan landing page UMKM?', isBot: true },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '28px',
          left: '28px',
          zIndex: 1000,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
          color: 'var(--on-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          border: 'none',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          transform: isOpen ? 'scale(0)' : 'scale(1)',
        }}
        aria-label="Buka Live Chatbot AI"
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      <div
        style={{
          position: 'fixed',
          bottom: '28px',
          left: '28px',
          zIndex: 1001,
          width: '350px',
          height: '500px',
          maxWidth: 'calc(100vw - 40px)',
          maxHeight: 'calc(100vh - 100px)',
          backgroundColor: 'var(--surface-container-lowest)',
          borderRadius: '20px',
          boxShadow: 'var(--shadow-medium)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          transformOrigin: 'bottom left',
          transform: isOpen ? 'scale(1)' : 'scale(0.5)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          border: '1px solid var(--outline-variant)'
        }}
      >
        {/* Header */}
        <div style={{
          backgroundColor: 'var(--primary)',
          color: 'var(--on-primary)',
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '10px', height: '10px', backgroundColor: '#4ade80', borderRadius: '50%'
            }}></div>
            <div>
              <h3 style={{ margin: 0, fontSize: '16px' }}>AI Assistant Demo</h3>
              <span style={{ fontSize: '12px', opacity: 0.8 }}>Online 24/7</span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1,
          padding: '20px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          backgroundColor: 'var(--surface-container-low)'
        }}>
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              style={{
                alignSelf: msg.isBot ? 'flex-start' : 'flex-end',
                backgroundColor: msg.isBot ? 'var(--surface-container-high)' : 'var(--primary)',
                color: msg.isBot ? 'var(--foreground)' : 'var(--on-primary)',
                padding: '12px 16px',
                borderRadius: msg.isBot ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
                maxWidth: '85%',
                fontSize: '14px',
                lineHeight: '1.5'
              }}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div style={{
          padding: '16px',
          backgroundColor: 'var(--surface-container-lowest)',
          borderTop: '1px solid var(--outline-variant)',
          display: 'flex',
          gap: '10px'
        }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Coba tanya 'Berapa harganya?'"
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: '24px',
              border: '1px solid var(--outline-variant)',
              backgroundColor: 'var(--surface)',
              color: 'var(--foreground)',
              outline: 'none',
              fontSize: '14px'
            }}
          />
          <button
            onClick={handleSend}
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--on-primary)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
}