"use client";
import { useState, useEffect } from "react";
import { LayoutGrid, Briefcase, Phone } from "lucide-react";

export default function Home() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<string | null>(null); // <-- BU SATIRIN OLDUĞUNDAN EMİN OL!

  // Sayfa açılışında yükleme ekranı zamanlayıcısı
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Yükleme Ekranı
  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black font-mono">
        <div className="text-blue-500 text-sm md:text-base animate-pulse">
          {"[INITIALIZING FEDAKAR DIGITAL...]"}
        </div>
        <div className="mt-4 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 animate-[loading_2.5s_linear_forwards]"></div>
        </div>
      </div>
    );
  }

  const services = [
    { title: "MOBİL UYGULAMA", desc: "Native performans ve modern arayüzlerle, kullanıcı deneyimini zirveye taşıyan mobil çözümler.", code: "import { NativeModule } from 'mobile-sdk'; const app = new MobileApp(); deploy(app);" },
    { title: "İNTERNET SİTESİ", desc: "Next.js ve modern teknolojilerle, hızlı, SEO uyumlu ve ölçeklenebilir web platformları.", code: "import { NextJS } from 'web-core'; const site = new WebPlatform(); build(site);" },
    { title: "ANİMASYON HİZMETLERİ", desc: "İzleyiciyi içine çeken, dinamik ve profesyonel video içerikleriyle fark yaratan çalışmalar.", code: "import { RenderEngine } from 'anim-core'; const video = new Render(); play(video);" }
];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      
{/* MODERN NAVBAR */}
<nav className="fixed top-0 left-0 w-full z-50 glass-navbar px-6 py-4 flex items-center justify-between">
  <div className="text-2xl font-extrabold tracking-widest text-white cursor-pointer">
    FEDAKAR<span className="text-blue-500">.D</span>
  </div>
  
  <div className="hidden md:flex gap-8 text-gray-400">
    <a href="#" className="hover:text-blue-500 transition-colors" title="HİZMETLER">
      <LayoutGrid size={22} />
    </a>
    <a href="#" className="hover:text-blue-500 transition-colors" title="PROJELER">
      <Briefcase size={22} />
    </a>
    <a href="#" onClick={() => setIsContactOpen(true)} className="hover:text-blue-500 transition-colors cursor-pointer" title="İLETİŞİM">
      <Phone size={22} />
    </a>
  </div>

  <button 
    onClick={() => setIsContactOpen(true)} 
    className="px-5 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full text-xs font-bold transition-all"
  >
    BAŞLAYALIM
  </button>
</nav>
      {/* Arka Plan Kodları */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none select-none text-[10px] leading-3 overflow-hidden">
        <div className="animate-scroll">
          <pre>{`const fedakar = { vision: "future", coding: true };\nfunction shapeFuture() { return "digital"; }\nimport { innovation } from "fedakar-digital";\nconst deploy = () => { console.log("Gelecek Yazılıyor..."); }`.repeat(50)}</pre>
        </div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 py-20">
        <header className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white leading-[0.9]">
            FEDAKAR <span className="text-blue-500">DIGITAL</span>
          </h1>
          <p className="mt-6 text-xl font-medium tracking-wide text-gray-400 uppercase">/ GELECEĞİ ŞEKİLLENDİRİYORUZ /</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div key={index} onClick={() => { setSelectedService(item); setIsContactOpen(false); }}
              className="p-8 bg-gray-900/50 border border-blue-500/30 rounded-xl transition-all duration-300 hover:border-blue-500 hover:translate-y-[-10px] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-sm cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-2 animate-blue-pulse">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </section>

<section className="my-24 px-6">
  <div className="max-w-4xl mx-auto bg-gray-900 border border-blue-500/30 rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
    
    {/* DALGALI SU KATMANI - Güncellenmiş Sınıflar */}
    <div className="absolute bottom-0 left-0 w-full h-24 z-0 opacity-40 wave-rise-animation">
      <div className="absolute bottom-0 left-0 w-[200%] h-full bg-blue-600 wave-animation" 
           style={{ borderRadius: '50% 50% 0 0', opacity: 0.6 }}></div>
      <div className="absolute bottom-0 left-0 w-[200%] h-full bg-blue-500 wave-animation" 
           style={{ borderRadius: '50% 50% 0 0', animationDelay: '-1.5s', opacity: 0.3 }}></div>
    </div>

    <div className="flex-1 relative z-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        GELECEĞİ <span className="text-blue-500">BİRLİKTE</span> YAZALIM
      </h2>
      <p className="text-lg font-bold bg-gradient-to-t from-purple-500 to-gray-400 bg-clip-text text-transparent animate-text-fill-up">
        Dijital dönüşüm yolculuğunuzda size özel çözümler üretelim.
      </p>
    </div>

    <button onClick={() => setIsContactOpen(true)} className="relative z-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
      TEKLİF AL
    </button>
  </div>
</section>
<section className="py-12 border-t border-blue-500/10 overflow-hidden">
  <div className="flex w-full overflow-hidden">
    <div className="flex space-x-16 animate-marquee whitespace-nowrap">
      {/* İkonlar / Yazılar */}
      {["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "NODE.JS", "POSTGRESQL", "DOCKER", "FIGMA"].map((tech) => (
        <span key={tech} className="text-gray-500 font-bold tracking-widest text-lg hover:text-blue-500 transition-colors cursor-default">
          {tech}
        </span>
      ))}
      {/* Kesintisiz döngü için tekrar */}
      {["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "NODE.JS", "POSTGRESQL", "DOCKER", "FIGMA"].map((tech) => (
        <span key={`${tech}-copy`} className="text-gray-500 font-bold tracking-widest text-lg hover:text-blue-500 transition-colors cursor-default">
          {tech}
        </span>
      ))}
    </div>
  </div>
</section>

        <footer className="border-t border-blue-500/20 pt-12 pb-8 text-center">
          <p className="text-gray-500 text-sm mb-4">© 2026 Fedakar Digital. Tüm hakları saklıdır.</p>
          <div className="animate-pulse">
            <h2 className="text-4xl font-extrabold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-blue-500 uppercase opacity-30 cursor-default">FEDAKAR DİGİTAL</h2>
          </div>
        </footer>
      </div>

      {/* HİZMET MODALI */}
      {selectedService && !isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
          <div className="bg-gray-900 border border-blue-500 p-8 rounded-2xl max-w-md w-full relative">
            <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 text-gray-400 font-bold text-xl">✕</button>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">{selectedService.title}</h2>
            <p className="text-gray-300 mb-6">{selectedService.desc}</p>
            
            <div className="bg-black p-4 rounded-lg font-mono text-xs overflow-hidden border border-blue-900/50 mb-6">
              <p className="animate-typing animate-rgb-text font-bold">{selectedService.code}</p>
            </div>

            <button onClick={() => setIsContactOpen(true)} className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all">
              BU HİZMET İÇİN TEKLİF AL
            </button>
          </div>
        </div>
      )}

{/* MAİL MODALI */}
{/* İLETİŞİM MODALI (GÜNCELLENMİŞ) */}
{isContactOpen && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
    <div className="bg-gray-900 border border-blue-500 p-8 rounded-2xl max-w-lg w-full relative">
      <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 text-gray-400">✕</button>
      
      <h2 className="text-2xl font-bold text-white mb-6 text-center">İLETİŞİME GEÇİN</h2>
      
      {/* İLETİŞİM KARTLARI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <a href="tel:+905XXXXXXXXXX" className="p-4 bg-black border border-blue-500/30 rounded-xl hover:border-blue-500 transition-all text-center">
          <Phone className="mx-auto mb-2 text-blue-500" size={24} />
          <p className="text-xs text-gray-400">TELEFON</p>
          <p className="text-sm font-bold">+90 531 513 49 64</p>
        </a>
        <a href="mailto:fedakardigital@gmail.com" className="p-4 bg-black border border-blue-500/30 rounded-xl hover:border-blue-500 transition-all text-center">
          <Briefcase className="mx-auto mb-2 text-blue-500" size={24} />
          <p className="text-xs text-gray-400">E-POSTA</p>
          <p className="text-sm font-bold">fedakardigital@gmail.com</p>
        </a>
      </div>

      <div className="space-y-4 border-t border-blue-500/20 pt-6">
        <input id="mail-input" type="email" placeholder="E-posta adresiniz" className="w-full p-3 bg-black border border-blue-500/50 rounded-lg text-white" />
        <textarea id="msg-input" placeholder="Projenizden bahsedin..." className="w-full p-3 bg-black border border-blue-500/50 rounded-lg text-white h-24"></textarea>
        
        <button 
          onClick={async () => {
            const email = (document.getElementById('mail-input') as HTMLInputElement).value;
            const message = (document.getElementById('msg-input') as HTMLTextAreaElement).value;
            const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, message }) });
            if (res.ok) { setIsContactOpen(false); setStatus("success"); setTimeout(() => setStatus(null), 3000); } else { alert("Hata!"); }
          }}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all"
        >
          MESAJ GÖNDER
        </button>
      </div>
    </div>
  </div>
)}
{/* BAŞARI BİLDİRİMİ */}
{status === "success" && (
  <div className="fixed top-10 right-10 z-[100] bg-gray-900 border border-green-500 p-6 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.2)] animate-in slide-in-from-right-10 duration-500">
    <div className="flex items-center gap-4">
      <div className="bg-green-500/20 p-2 rounded-full">
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <div>
        <h3 className="text-white font-bold text-lg">Başarıyla Gönderildi!</h3>
        <p className="text-gray-400 text-sm">Teklif talebiniz ekibimize ulaştı. En kısa sürede size dönüş yapacağız.</p>
      </div>
    </div>
  </div>
)}
{/* WHATSAPP BUTONU */}
<a 
  href="https://wa.me/905315134964" // Buradaki X'leri kendi numaranla değiştir (başında 90 olmalı)
  target="_blank" 
  rel="noopener noreferrer"
  className="fixed bottom-8 right-8 z-[90] bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300"
>
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.67-1.613-.918-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.955c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
</a>

    </main>

  );
}