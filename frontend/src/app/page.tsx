import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Header - Linear Style */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#316745] to-[#7DB892] flex items-center justify-center">
              <span className="text-white font-bold text-sm">向</span>
            </div>
            <span className="text-lg font-semibold text-white">向上建設</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/60">
            <a href="#about" className="hover:text-white transition-colors">關於我們</a>
            <a href="#projects" className="hover:text-white transition-colors">建案資訊</a>
            <a href="#news" className="hover:text-white transition-colors">最新消息</a>
            <a href="#contact" className="hover:text-white transition-colors">聯絡我們</a>
          </nav>
          <button className="bg-[#316745] hover:bg-[#3D7A56] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
            預約賞屋
          </button>
        </div>
      </header>

      {/* Hero Section - Linear Style */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#316745]/10 via-transparent to-[#0F0F0F]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#316745]/10 border border-[#316745]/20 text-[#7DB892] text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7DB892] animate-pulse"></span>
            苗栗後龍首購首選
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            向上建設<br /><span className="text-[#7DB892]">向下扎根</span>
          </h1>
          <p className="text-xl text-white/60 mb-4">
            質感建材 × 設計美學 × 新工法
          </p>
          <p className="text-lg text-white/40 mb-8">
            為每位屋主打造穩固舒適的理想家
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-[#316745] hover:bg-[#3D7A56] text-white px-8 py-4 rounded-xl text-base font-medium transition-all hover:scale-105">
              立即預約賞屋
            </button>
            <button className="border border-white/10 hover:border-white/20 text-white/60 hover:text-white px-8 py-4 rounded-xl text-base font-medium transition-all">
              查看建案
            </button>
          </div>
        </div>
      </section>

      {/* Brand Story - Linear Cards */}
      <section id="about" className="py-24 px-6 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">
              質感，是我們對建築的堅持
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              建築的價值，藏在看不見的地方。向上建設深信，真正的好房子，
              始於對建材的嚴選、對工法的鑽研、對細節的執著。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#316745]/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#316745]/10 flex items-center justify-center mb-4 group-hover:bg-[#316745]/20 transition-colors">
                <svg className="w-6 h-6 text-[#7DB892]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">質感建材</h3>
              <p className="text-white/40 text-sm">選用高品質建材，細節看得見、摸得到</p>
            </div>
            
            <div className="p-6 rounded-/5 border border-white/5 hover:border-[#2xl bg-white transition-all group">
316745]/30              <div className="w-12 h-12 rounded-xl bg-[#316745]/10 flex items-center justify-center mb-4 group-hover:bg-[#316745]/20 transition-colors">
                <svg className="w-6 h-6 text-[#7DB892]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">新工法</h3>
              <p className="text-white/40 text-sm">創新不守舊，穩固更耐久</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#316745]/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#316745]/10 flex items-center justify-center mb-4 group-hover:bg-[#316745]/20 transition-colors">
                <svg className="w-6 h-6 text-[#7DB892]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">設計美學</h3>
              <p className="text-white/40 text-sm">空間規劃與美感，讓建築成為生活品味</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects - Linear Grid */}
      <section id="projects" className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-semibold text-white">最新建案</h2>
            <button className="text-[#7DB892] hover:text-[#8EC9A3] text-sm font-medium transition-colors">
              查看全部 →
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group rounded-2xl bg-white/5 border border-white/5 overflow-hidden hover:border-[#316745]/30 transition-all">
                <div className="h-48 bg-gradient-to-br from-[#316745]/20 to-[#0A0A0A] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-4xl font-bold">{i}</span>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-[#316745]/20 text-[#7DB892] text-xs">
                    預售中
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium text-white mb-1 group-hover:text-[#7DB892] transition-colors">
                    向上建設 No.{i}
                  </h3>
                  <p className="text-white/40 text-sm mb-4">苗栗縣後龍鎮 • 35-45坪</p>
                  <button className="text-[#7DB892] text-sm font-medium hover:text-[#8EC9A3] transition-colors">
                    了解詳情 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark Section */}
      <section className="py-24 px-6 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-16">為什麼選擇向上建設？</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#316745]/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#7DB892]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">看不見的用心</h3>
              <p className="text-white/40">每個細節都講究，換得見的安心</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#316745]/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#7DB892]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">向下扎根</h3>
              <p className="text-white/40">根穩樓高，根基扎實才撐得起您的家</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#316745]/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#7DB892]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">恰到好處</h3>
              <p className="text-white/40">不多不少，剛好是家</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Linear Form */}
      <section id="contact" className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4">
              立即預約，實現您的理想家
            </h2>
            <p className="text-white/40">
              第一間房，值得被認真對待
            </p>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-white/60 text-sm mb-2">姓名</label>
              <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#316745] transition-colors" placeholder="您的姓名" />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-2">電話</label>
              <input type="tel" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#316745] transition-colors" placeholder="09XX-XXX-XXX" />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#316745] transition-colors" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-2">留言</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#316745] transition-colors" placeholder="告訴我們您的需求..."></textarea>
            </div>
            <button type="submit" className="w-full bg-[#316745] hover:bg-[#3D7A56] text-white py-4 rounded-xl text-base font-medium transition-all hover:scale-[1.02]">
              送出預約
            </button>
          </form>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-8 px-6 bg-[#0F0F0F] border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#316745] to-[#7DB892] flex items-center justify-center">
              <span className="text-white font-bold text-xs">向</span>
            </div>
            <span className="text-white/60 text-sm">向上建設股份有限公司</span>
          </div>
          <div className="flex items-center gap-6 text-white/40 text-sm">
            <span>電話：03-XXXX-XXXX</span>
            <span>苗栗縣後龍鎮</span>
          </div>
          <div className="text-white/20 text-sm">
            © 2026 向上建設
          </div>
        </div>
      </footer>
    </div>
  );
}
