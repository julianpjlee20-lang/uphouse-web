'use client';

import { useState, useEffect } from 'react';

// Types
interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  price: number;
  status: string;
}

interface Article {
  id: number;
  title: string;
  content: string;
  publishedAt: string;
}

const CMS_API = '/api';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'' | 'success' | 'error'>('');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setDarkMode(saved === 'dark');
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [projectsRes, articlesRes] = await Promise.all([
        fetch(`${CMS_API}/projects`),
        fetch(`${CMS_API}/articles`)
      ]);
      
      const projectsData = await projectsRes.json();
      const articlesData = await articlesRes.json();
      
      setProjects(projectsData);
      setArticles(articlesData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${CMS_API}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message
        })
      });
      if (res.ok) {
        setFormStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('zh-TW').format(price);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#about', label: '關於我們' },
    { href: '#projects', label: '建案資訊' },
    { href: '#news', label: '最新消息' },
    { href: '#contact', label: '聯絡我們' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0F0F0F]' : 'bg-[#FAF8F3]'} ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-[#0F0F0F]/95' : 'bg-[#FAF8F3]/95'} backdrop-blur-md border-b ${darkMode ? 'border-white/5' : 'border-[#E5E5E5]'}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#316745] to-[#7DB892] flex items-center justify-center">
              <span className="text-white font-bold text-sm">向</span>
            </div>
            <span className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>向上建設</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <button 
                key={link.href} 
                onClick={() => scrollTo(link.href)}
                className={`${darkMode ? 'text-white/60 hover:text-white' : 'text-[#666] hover:text-[#1A1A1A]'} transition-colors`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
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
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${darkMode ? 'hover:bg-white/10' : 'hover:bg-[#E5E5E5]'}`}
            >
              <svg className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            <button onClick={() => scrollTo('contact')} className="hidden md:block bg-[#316745] hover:bg-[#3D7A56] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
              預約賞屋
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-[#0F0F0F]' : 'bg-[#FAF8F3]'} border-t ${darkMode ? 'border-white/5' : 'border-[#E5E5E5]'}`}>
            <div className="px-4 py-3 space-y-3">
              {navLinks.map((link) => (
                <button 
                  key={link.href}
                  onClick={() => { scrollTo(link.href); setMobileMenuOpen(false); }}
                  className={`block w-full text-left ${darkMode ? 'text-white/60 hover:text-white' : 'text-[#666] hover:text-[#1A1A1A]'}`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => { scrollTo('contact'); setMobileMenuOpen(false); }}
                className="w-full bg-[#316745] hover:bg-[#3D7A56] text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                預約賞屋
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
        <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? 'from-[#316745]/10' : 'from-[#316745]/5'} via-transparent to-transparent`} />
        
        <div className={`absolute inset-0 opacity-5 ${darkMode ? 'invert' : ''}`} style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${darkMode ? 'bg-[#316745]/10 border border-[#316745]/20' : 'bg-[#316745]/10'} text-[#7DB892] text-xs mb-4 md:mb-6`}>
            <span className="w-2 h-2 rounded-full bg-[#7DB892] animate-pulse"></span>
            苗栗後龍首購首選
          </div>
          
          <h1 className={`text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
            向上建設<br /><span className="text-[#7DB892]">向下扎根</span>
          </h1>
          
          <p className={`text-lg md:text-xl mb-3 md:mb-4 ${darkMode ? 'text-white/60' : 'text-[#666]'}`}>
            質感建材 × 設計美學 × 新工法
          </p>
          <p className={`text-base md:text-lg mb-6 md:mb-8 ${darkMode ? 'text-white/40' : 'text-[#999]'}`}>
            為每位屋主打造穩固舒適的理想家
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <button onClick={() => scrollTo('contact')} className="w-full sm:w-auto bg-[#316745] hover:bg-[#3D7A56] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base font-medium transition-all hover:scale-105">
              立即預約賞屋
            </button>
            <button onClick={() => scrollTo('projects')} className="w-full sm:w-auto border px-6 md:px-8 py-3 md:py-4 rounded-xl text-base font-medium transition-all border-white/10 hover:border-white/20 text-white/60 hover:text-white">
              查看建案
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className={`py-16 md:py-24 px-4 md:px-6 ${darkMode ? 'bg-[#0F0F0F]' : 'bg-[#FAF8F3]'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className={`text-2xl md:text-3xl font-semibold mb-3 md:mb-4 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>質感，是我們對建築的堅持</h2>
            <p className={`${darkMode ? 'text-white/40' : 'text-[#666]'} max-w-2xl mx-auto text-sm md:text-base`}>建築的價值，藏在看不見的地方。向上建設深信，真正的好房子，始于對建材的嚴選、對工法的鑽研、對細節的執著。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '🏠', title: '質感建材', desc: '選用高品質建材，細節看得見、摸得到' },
              { icon: '🔧', title: '新工法', desc: '創新不守舊，穩固更耐久' },
              { icon: '🎨', title: '設計美學', desc: '空間規劃與美感，讓建築成為生活品味' }
            ].map((item, i) => (
              <div key={i} className={`p-4 md:p-6 rounded-2xl border transition-all group ${darkMode ? 'bg-white/5 border-white/5 hover:border-[#316745]/30' : 'bg-[#FAF8F3] border-[#E5E5E5] hover:border-[#316745]/30'}`}>
                <div className={`w-10 md:w-12 h-10 md:h-12 rounded-xl flex items-center justify-center mb-3 md:mb-4 ${darkMode ? 'bg-[#316745]/10 group-hover:bg-[#316745]/20' : 'bg-[#316745]/10'}`}>
                  <span className="text-xl md:text-2xl">{item.icon}</span>
                </div>
                <h3 className={`text-base md:text-lg font-medium mb-1 md:mb-2 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>{item.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-white/40' : 'text-[#666]'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={`py-16 md:py-24 px-4 md:px-6 ${darkMode ? 'bg-[#0A0A0A]' : 'bg-[#FAF8F3]'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <h2 className={`text-2xl md:text-3xl font-semibold ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>最新建案</h2>
          </div>
          
          {loading ? (
            <div className="text-center py-12">載入中...</div>
          ) : projects.length === 0 ? (
            <div className="text-center py-12 text-white/40">尚無建案資料</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {projects.map((project) => (
                <div key={project.id} className={`group rounded-2xl border overflow-hidden transition-all ${darkMode ? 'bg-white/5 border-white/5 hover:border-[#316745]/30' : 'bg-white border-[#E5E5E5] hover:border-[#316745]/30'}`}>
                  <div className={`h-40 md:h-48 ${darkMode ? 'bg-gradient-to-br from-[#316745]/20 to-[#0A0A0A]' : 'bg-gradient-to-br from-[#316745]/10 to-[#FAF8F3]'} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-5xl md:text-6xl font-bold ${darkMode ? 'text-white/10' : 'text-[#316745]/20'}`}>🏢</span>
                    </div>
                    <div className={`absolute top-3 md:top-4 left-3 md:left-4 px-2 md:px-3 py-1 rounded-lg ${darkMode ? 'bg-[#316745]/20' : 'bg-[#316745]/10'} text-[#7DB892] text-xs`}>
                      {project.status}
                    </div>
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className={`text-base md:text-lg font-medium mb-1 group-hover:text-[#7DB892] transition-colors ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm mb-2 ${darkMode ? 'text-white/40' : 'text-[#666]'}`}>{project.location}</p>
                    <p className={`text-sm mb-3 line-clamp-2 ${darkMode ? 'text-white/60' : 'text-[#666]'}`}>{project.description}</p>
                    <p className={`text-lg font-semibold text-[#7DB892] mb-3`}>
                      {formatPrice(project.price)} 萬起
                    </p>
                    <a href={`/projects/${project.id}`} className="text-[#7DB892] text-sm font-medium hover:text-[#8EC9A3] transition-colors">
                      查看詳情 →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* News */}
      <section id="news" className={`py-16 md:py-24 px-4 md:px-6 ${darkMode ? 'bg-[#0F0F0F]' : 'bg-[#FAF8F3]'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <h2 className={`text-2xl md:text-3xl font-semibold ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>最新消息</h2>
          </div>
          
          {loading ? (
            <div className="text-center py-12">載入中...</div>
          ) : articles.length === 0 ? (
            <div className="text-center py-12 text-white/40">尚無最新消息</div>
          ) : (
            <div className="space-y-4">
              {articles.slice(0, 3).map((article) => (
                <div key={article.id} className={`p-4 md:p-6 rounded-2xl border transition-all ${darkMode ? 'bg-white/5 border-white/5 hover:border-[#316745]/30' : 'bg-white border-[#E5E5E5] hover:border-[#316745]/30'}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className={`text-lg font-medium mb-2 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>{article.title}</h3>
                      <p className={`text-sm line-clamp-2 ${darkMode ? 'text-white/40' : 'text-[#666]'}`}>
                        {article.content.replace(/[#*]/g, '').substring(0, 100)}...
                      </p>
                    </div>
                    <span className={`text-xs whitespace-nowrap ${darkMode ? 'text-white/30' : 'text-[#999]'}`}>
                      {new Date(article.publishedAt).toLocaleDateString('zh-TW')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`py-16 md:py-24 px-4 md:px-6 ${darkMode ? 'bg-[#0A0A0A]' : 'bg-[#FAF8F3]'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-2xl md:text-3xl font-semibold mb-10 md:mb-16 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>為什麼選擇向上建設？</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`w-14 md:w-16 h-14 md:h-16 mx-auto rounded-2xl flex items-center justify-center mb-3 md:mb-4 ${darkMode ? 'bg-[#316745]/10' : 'bg-[#316745]/10'}`}>
                <span className="text-2xl md:text-3xl">👁️</span>
              </div>
              <h3 className={`text-base md:text-lg font-medium mb-1 md:mb-2 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>看不見的用心</h3>
              <p className={`text-sm ${darkMode ? 'text-white/40' : 'text-[#666]'}`}>每個細節都講究，換得見的安心</p>
            </div>
            <div className="text-center">
              <div className={`w-14 md:w-16 h-14 md:h-16 mx-auto rounded-2xl flex items-center justify-center mb-3 md:mb-4 ${darkMode ? 'bg-[#316745]/10' : 'bg-[#316745]/10'}`}>
                <span className="text-2xl md:text-3xl">🌱</span>
              </div>
              <h3 className={`text-base md:text-lg font-medium mb-1 md:mb-2 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>向下扎根</h3>
              <p className={`text-sm ${darkMode ? 'text-white/40' : 'text-[#666]'}`}>根穩樓高，根基扎實才撐得起您的家</p>
            </div>
            <div className="text-center">
              <div className={`w-14 md:w-16 h-14 md:h-16 mx-auto rounded-2xl flex items-center justify-center mb-3 md:mb-4 ${darkMode ? 'bg-[#316745]/10' : 'bg-[#316745]/10'}`}>
                <span className="text-2xl md:text-3xl">✨</span>
              </div>
              <h3 className={`text-base md:text-lg font-medium mb-1 md:mb-2 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>恰到好處</h3>
              <p className={`text-sm ${darkMode ? 'text-white/40' : 'text-[#666]'}`}>不多不少，剛好是家</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`py-16 md:py-24 px-4 md:px-6 ${darkMode ? 'bg-[#0A0A0A]' : 'bg-[#FAF8F3]'}`}>
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className={`text-2xl md:text-3xl font-semibold mb-2 md:mb-4 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>立即預約，實現您的理想家</h2>
            <p className={darkMode ? 'text-white/40' : 'text-[#666]'}>第一間房，值得被認真對待</p>
          </div>
          
          {formStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h3 className={`text-xl font-medium mb-2 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>預約成功！</h3>
              <p className={darkMode ? 'text-white/40' : 'text-[#666]'}>我們會盡快與您聯繫</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className={`block text-sm mb-1 md:mb-2 ${darkMode ? 'text-white/60' : 'text-[#666]'}`}>姓名</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-xl transition-colors text-sm md:text-base ${darkMode ? 'bg-white/5 border border-white/10 text-white focus:border-[#316745]' : 'bg-white border border-[#E5E5E5] text-[#1A1A1A] focus:border-[#316745]'} focus:outline-none`}
                  placeholder="您的姓名"
                />
              </div>
              <div>
                <label className={`block text-sm mb-1 md:mb-2 ${darkMode ? 'text-white/60' : 'text-[#666]'}`}>電話</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-xl transition-colors text-sm md:text-base ${darkMode ? 'bg-white/5 border border-white/10 text-white focus:border-[#316745]' : 'bg-white border border-[#E5E5E5] text-[#1A1A1A] focus:border-[#316745]'} focus:outline-none`}
                  placeholder="09XX-XXX-XXX"
                />
              </div>
              <div>
                <label className={`block text-sm mb-1 md:mb-2 ${darkMode ? 'text-white/60' : 'text-[#666]'}`}>Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-xl transition-colors text-sm md:text-base ${darkMode ? 'bg-white/5 border border-white/10 text-white focus:border-[#316745]' : 'bg-white border border-[#E5E5E5] text-[#1A1A1A] focus:border-[#316745]'} focus:outline-none`}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className={`block text-sm mb-1 md:mb-2 ${darkMode ? 'text-white/60' : 'text-[#666]'}`}>留言</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-xl transition-colors text-sm md:text-base ${darkMode ? 'bg-white/5 border border-white/10 text-white focus:border-[#316745]' : 'bg-white border border-[#E5E5E5] text-[#1A1A1A] focus:border-[#316745]'} focus:outline-none`}
                  placeholder="告訴我們您的需求..."
                />
              </div>
              {formStatus === 'error' && (
                <p className="text-red-500 text-sm">提交失敗，請稍後再試</p>
              )}
              <button type="submit" className="w-full bg-[#316745] hover:bg-[#3D7A56] text-white py-3 md:py-4 rounded-xl text-base font-medium transition-all hover:scale-[1.02]">
                送出預約
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 md:py-8 px-4 md:px-6 ${darkMode ? 'bg-[#0F0F0F]' : 'bg-[#FAF8F3]'} border-t ${darkMode ? 'border-white/5' : 'border-[#E5E5E5]'}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-6 h-6 rounded-md bg-gradient-to-br from-[#316745] to-[#7DB892] flex items-center justify-center`}>
              <span className="text-white font-bold text-xs">向</span>
            </div>
            <span className={`${darkMode ? 'text-white/60' : 'text-[#666]'} text-sm`}>向上建設股份有限公司</span>
          </div>
          <div className={`flex items-center gap-4 md:gap-6 text-xs md:text-sm ${darkMode ? 'text-white/40' : 'text-[#666]'}`}>
            <span>電話：03-XXXX-XXXX</span>
            <span>苗栗縣後龍鎮</span>
          </div>
          <div className={`${darkMode ? 'text-white/20' : 'text-[#999]'} text-sm`}>© 2026 向上建設</div>
        </div>
      </footer>
    </div>
  );
}
