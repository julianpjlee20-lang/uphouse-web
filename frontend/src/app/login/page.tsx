'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  const handleDiscordLogin = async () => {
    setLoading('discord');
    try {
      // Call our API to get Discord OAuth URL
      const res = await fetch('/api/auth/discord', {
        method: 'POST',
      });
      
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('無法取得登入網址');
        setLoading(null);
      }
    } catch (error) {
      console.error('登入錯誤:', error);
      alert('登入失敗');
      setLoading(null);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#1a1a2e',
    }}>
      <div style={{
        background: '#16213e',
        padding: '2rem',
        borderRadius: '12px',
        textAlign: 'center',
        color: '#fff',
        maxWidth: '400px',
        width: '100%',
      }}>
        <h1 style={{ marginBottom: '2rem' }}>登入 UPHouse</h1>
        
        <button
          onClick={handleDiscordLogin}
          disabled={loading === 'discord'}
          style={{
            background: '#5865F2',
            color: '#fff',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          {loading === 'discord' ? '處理中...' : '用 Discord 登入'}
        </button>
      </div>
    </div>
  );
}
