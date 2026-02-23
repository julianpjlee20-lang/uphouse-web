import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F3]/90 backdrop-blur-sm border-b border-[#A0826D]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#A0826D]">
            向上建設
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[#5A5550]">
            <a href="#about" className="hover:text-[#A0826D] transition-colors">關於我們</a>
            <a href="#projects" className="hover:text-[#A0826D] transition-colors">建案資訊</a>
            <a href="#news" className="hover:text-[#A0826D] transition-colors">最新消息</a>
            <a href="#contact" className="hover:text-[#A0826D] transition-colors">聯絡我們</a>
          </nav>
          <button className="bg-[#D4A574] text-white px-6 py-2 rounded-full hover:bg-[#C49564] transition-colors">
            預約賞屋
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A0826D]/20 to-[#7DB892]/10" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-[#A0826D] mb-6">
            向上建設<br />向下扎根
          </h1>
          <p className="text-xl md:text-2xl text-[#5A5550] mb-4">
            質感建材 × 設計美學 × 新工法
          </p>
          <p className="text-lg text-[#5A5550]/80 mb-8">
            為每位屋主打造穩固舒適的理想家
          </p>
          <button className="bg-[#D4A574] text-white px-8 py-4 rounded-full text-lg hover:bg-[#C49564] transition-colors">
            立即預約賞屋
          </button>
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#A0826D] mb-8">
            質感，是我們對建築的堅持
          </h2>
          <p className="text-lg text-[#5A5550] leading-relaxed mb-12">
            建築的價值，藏在看不見的地方。向上建設深信，真正的好房子，
            始於對建材的嚴選、對工法的鑽研、對細節的執著。
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#FAF8F3] rounded-2xl">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-[#A0826D] mb-2">質感建材</h3>
              <p className="text-[#5A5550]">選用高品質建材，細節看得見、摸得到</p>
            </div>
            <div className="p-6 bg-[#FAF8F3] rounded-2xl">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-[#A0826D] mb-2">新工法</h3>
              <p className="text-[#5A5550]">創新不守舊，穩固更耐久</p>
            </div>
            <div className="p-6 bg-[#FAF8F3] rounded-2xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-[#A0826D] mb-2">設計美學</h3>
              <p className="text-[#5A5550]">空間規劃與美感，讓建築成為生活品味</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#A0826D] text-center mb-12">
            最新建案
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder Projects */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 bg-gradient-to-br from-[#A0826D]/30 to-[#7DB892]/20 flex items-center justify-center">
                  <span className="text-[#A0826D]/50 text-lg">建案圖片</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#A0826D] mb-2">
                    向上建設 No.{i}
                  </h3>
                  <p className="text-[#5A5550] mb-4">苗栗縣後龍鎮 • 35-45坪</p>
                  <button className="text-[#D4A574] font-medium hover:text-[#C49564] transition-colors">
                    了解詳情 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-[#A0826D] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">為什麼選擇向上建設？</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-xl font-semibold mb-2">看不見的用心</h3>
              <p className="text-white/80">每個細節都講究，換得見的安心</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">向下扎根</h3>
              <p className="text-white/80">根穩樓高，根基扎實才撐得起您的家</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">恰到好處</h3>
              <p className="text-white/80">不多不少，剛好是家</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#A0826D] mb-4">
            立即預約，實現您的理想家
          </h2>
          <p className="text-[#5A5550] mb-8">
            第一間房，值得被認真對待
          </p>
          
          <form className="space-y-4 text-left">
            <div>
              <label className="block text-[#5A5550] mb-2">姓名</label>
              <input type="text" className="w-full px-4 py-3 border border-[#A0826D]/30 rounded-lg focus:outline-none focus:border-[#D4A574]" />
            </div>
            <div>
              <label className="block text-[#5A5550] mb-2">電話</label>
              <input type="tel" className="w-full px-4 py-3 border border-[#A0826D]/30 rounded-lg focus:outline-none focus:border-[#D4A574]" />
            </div>
            <div>
              <label className="block text-[#5A5550] mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-[#A0826D]/30 rounded-lg focus:outline-none focus:border-[#D4A574]" />
            </div>
            <div>
              <label className="block text-[#5A5550] mb-2">留言</label>
              <textarea rows={4} className="w-full px-4 py-3 border border-[#A0826D]/30 rounded-lg focus:outline-none focus:border-[#D4A574]"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#D4A574] text-white py-4 rounded-lg text-lg font-medium hover:bg-[#C49564] transition-colors">
              送出預約
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#5A5550] text-white/80">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-medium text-white mb-2">向上建設股份有限公司</p>
          <p className="text-sm">電話：03-XXXX-XXXX │ 地址：苗栗縣後龍鎮</p>
          <p className="text-sm mt-4">© 2026 向上建設. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
