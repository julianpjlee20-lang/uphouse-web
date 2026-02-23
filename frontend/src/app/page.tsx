'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    // 檢查本地存儲
    const saved = localStorage.getItem('theme');
    if (saved) {
      setDarkMode(saved === 'dark');
    }
  }, []);
  
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0F0F0F]' : 'bg-[#FAF8F3]'} ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-[#0F0F0F]/80' : 'bg-[#FAF8F3]/80'} backdrop-blur-md border-b ${darkMode ? 'border-white/5' : 'border-[#E5E5E5]'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-[#316745] to-[#7DB892] flex items-center justify-center`}>
              <span className="text-white font-bold text-sm">向</span>
            </div>
            <span className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>向上建設</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className={`${darkMode ? 'text-white/60 hover:text-white' : 'text-[#666] hover:text-[#1A1A1A]'} transition-colors`}>關於我們</a>
            <a href="#projects" className={`${darkMode ? 'text-white/60 hover:text-white' : 'text-[#666] hover:text-[#1A1A1A]'} transition-colors`}>建案資訊</a>
            <a href="#news" className={`${darkMode ? 'text-white/60 hover:text-white' : 'text-[#666] hover:text-[#1A1A1A]'} transition-colors`}>最新消息</a>
            <a href="#contact" className={`${darkMode ? 'text-white/60 hover:text-white' : 'text-[#666] hover:text-[#1A1A1A]'} transition-colors`}>聯絡我們</a>
          </nav>
          
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-white/10' : 'hover:bg-[#E5E5E5]'} transition-colors`}
              title={darkMode ? '切換到亮色模式' : '切換到深色模式'}
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-[#1A1A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <button className="bg-[#316745] hover:bg-[#3D7A56] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
              預約賞屋
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? 'from-[#316745]/10' : 'from-[#316745]/5'} via-transparent to-transparent`} />
        
        <div className={`absolute inset-0 opacity-5 ${darkMode ? 'invert' : ''}`} style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${darkMode ? 'bg-[#316745]/10 border border-[#316745]/20' : 'bg-[#316745]/10'} text-[#7DB892] text-xs mb-6`}>
            <span className="w-2 h-2 rounded-full bg-[#7DB892] animate-pulse"></span>
            苗栗後龍首購首選
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
            向上建設<br /><span className="text-[#7DB892]">向下扎根</span>
          </h1>
          
          <p className={`text-xl mb-4 ${darkMode ? 'text-white/60' : 'text-[#666]'}`}>
            質感建材 × 設計美學 × 新工法
          </p>
          <p className={`text-lg mb-8 ${darkMode ? 'text-white/40' : 'text-[#999]'}`}>
            為每位屋主打造穩固舒適的理想家
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <button className="bg-[#316745] hover:bg-[#3D7A56] text-white px-8 py-4 rounded-xl text-base font-medium transition-all hover:scale-105">
              立即預約賞屋
            </button>
            <button className={`border ${darkMode ? 'border-white/10 hover:border-white/20 text-white/60 hover:text-white' : 'border-[#E5E5E5] hover:border-[#316745]/30 text-[#666] hover:text-[#1A1A1A]'} px-8 py-4 rounded-xl text-base font-medium transition-all`}>
              查看建案
            </button>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className={`py-24 px-6 ${darkMode ? 'bg-[#0F0F0F]' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              質感，是我們對建築的堅持
            </h2>
            <p className={`${darkMode ? 'text-white/40' : 'text-[#666]'} max-w-2xl mx-auto`}>
              建築的價值，藏在看不見的地方。向上建設深信，真正的好房子，
              始於對建材的嚴選、對工法的鑽研、對細節的執著。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: '🏠', title: '質感建材', desc: '選用高品質建材，細節看得見、摸得到' },
              { icon: '🔧', title: '新工法', desc: '創新不守舊，穩固更耐久' },
              { icon: '🎨', title: '設計美學', desc: '空間規劃與美感，讓建築成為生活品味' }
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-2xl border transition-all group ${darkMode ? 'bg-white/5 border-white/5 hover:border-[#316745]/30' : 'bg-[#FAF8F3] border-[#E5E5E5] hover:border-[#316745]/30'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${darkMode ? 'bg-[#316745]/10 group-hover:bg-[#316745]/20' : 'bg-[#316745]/10'}`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className={`text-lg font-medium mb-2 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>{item.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-white/40' : 'text-[#666]'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={`py-24 px-6 ${darkMode ? 'bg-[#0A0A0A]' : 'bg-[#FAF8F3]'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className={`text-3xl font-semibold ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>最新建案</h2>
            <button className="text-[#7DB892] hover:text-[#8EC9A3] text-sm font-medium transition-colors">
              查看全部 →
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`group rounded-2xl border overflow-hidden transition-all ${darkMode ? 'bg-white/5 border-white/5 hover:border-[#316745]/30' : 'bg-white border-[#E5E5E5] hover:border-[#316745]/30'}`}>
                <div className={`h-48 ${darkMode ? 'bg-gradient-to-br from-[#316745]/20 to-[#0A0A0A]' : 'bg-gradient-to-br from-[#316745]/10 to-[#FAF8F3]'} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-4xl font-bold ${darkMode ? 'text-white/10' : 'text-[#316745]/20'}`}>{i}</span>
                  </div>
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-lg ${darkMode ? 'bg-[#316745]/20' : 'bg-[#316745]/10'} text-[#7DB892] text-xs`}>
                    預售中
                  </div>
                </div>
                <div className="p-5">
                  <h3 className={`text-lg font-medium mb-1 group-hover:text-[#7DB892] transition-colors ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    向上建設 No.{i}
                  </h3>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-white/40' : 'text-[#666]'}`}>苗栗縣後龍鎮 • 35-45坪</p>
                  <button className="text-[#7DB892] text-sm font-medium hover:text-[#8EC9A3] transition-colors">
                    了解詳情 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`py-24 px-6 ${darkMode ? 'bg-[#0F0F0F]' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-semibold mb-16 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>為什麼選擇向上建設？</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '👁️', title: '看不見的用心', desc: '每個細節都講究，換得見的安心' },
              { icon: '🌱', title: '向下扎根', desc: '根穩樓高，根基扎實才撐得起您的家' },
              { icon: '✨', title: '恰到好處', desc: '不多不少，剛好是家' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${darkMode ? 'bg-[#316745]/10' : 'bg-[#316745]/10'}`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className={`text-lg font-medium mb-2 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>{item.title}</h3>
                <p className={`${darkMode ? 'text-white/40' : 'text-[#666]'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`py-24 px-6 ${darkMode ? 'bg-[#0A0A0A]' : 'bg-[#FAF8F3]'}`}>
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              立即預約，實現您的理想家
            </h2>
            <p className={darkMode ? 'text-white/40' : 'text-[#666]'}>
              第一間房，值得被認真對待
            </p>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className={`block text-sm mb-2 ${darkMode ? 'text-white/60' : 'text-[#666]'}`}>姓名</label>
              <input type="text" className={`w-full px-4 py-3 rounded-xl transition-colors ${darkMode ? 'bg-white/5 border border-white/10 text-white focus:border-[#316745]' : 'bg-white border border-[#E5E5E5] text-[#1A1A1A] focus:border-[#316745]'} focus:outline-none`} placeholder="您的姓名" />
            </div>
            <div>
              <label className={`block text-sm mb-2 ${darkMode ? 'text-white/60' : 'text-[#666]'}`}>電話</label>
              <input type="tel" className={`w-full px-4 py-3 rounded-xl transition-colors ${darkMode ? 'bg-white/5 border border-white/10 text-white focus:border-[#316745]' : 'bg-white border border-[#E5E5E5] text-[#1A1A1A] focus:border-[#316745]'} focus:outline-none`} placeholder="09XX-XXX-XXX" />
            </div>
            <div>
              <label className={`block text-sm mb-2 ${darkMode ? 'text-white/60' : 'text-[#666]'}`}>Email</label>
              <input type="email" className={`w-full px-4 py-3 rounded-xl transition-colors ${darkMode ? 'bg-white/5 border border-white/10 text-white focus:border-[#316745]' : 'bg-white border border-[#E5E5E5] text-[#1A1A1A] focus:border-[#316745]'} focus:outline-none`} placeholder="your@email.com" />
            </div>
            <div>
              <label className={`block text-sm mb-2 ${darkMode ? 'text-white/60' : 'text-[#666]'}`}>留言</label>
              <textarea rows={4} className={`w-full px-4 py-3 rounded-xl transition-colors ${darkMode ? 'bg-white/5 border border-white/10 text-white focus:border-[#316745]' : 'bg-white border border-[#E5E5E5] text-[#1A1A1A] focus:border-[#316745]'} focus:outline-none`} placeholder="告訴我們您的需求..."></textarea>
            </div>
            <button type="submit" className="w-full bg-[#316745] hover:bg-[#3D7A56] text-white py-4 rounded-xl text-base font-medium transition-all hover:scale-[1.02]">
              送出預約
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 ${darkMode ? 'bg-[#0F0F0F] border-t border-white/5' : 'bg-white border-t border-[#E5E5E5]'}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#316745] to-[#7DB892] flex items-center justify-center">
              <span className="text-white font-bold text-xs">向</span>
            </div>
            <span className={darkMode ? 'text-white/60 text-sm' : 'text-[#666] text-sm'}>向上建設股份有限公司</span>
          </div>
          <div className={`flex items-center gap-6 text-sm ${darkMode ? 'text-white/40' : 'text-[#999]'}`}>
            <span>電話：03-XXXX-XXXX</span>
            <span>苗栗縣後龍鎮</span>
          </div>
          <div className={darkMode ? 'text-white/20 text-sm' : 'text-[#CCC] text-sm'}>
            © 2026 向上建設
          </div>
        </div>
      </footer>
    </div>
  );
}
