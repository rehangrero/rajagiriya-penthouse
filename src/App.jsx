import React, { useState } from 'react';

// Custom SVG Icons to avoid "lucide-react" dependency errors for beginners
const Icons = {
  Maximize: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 3 6 6"/><path d="m9 21-6-6"/><path d="M21 3v6h-6"/><path d="M3 21v-6h6"/><path d="M21 3 14 10"/><path d="M3 21l7-7"/></svg>,
  Eye: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
  TrendingUp: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  MapPin: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  Phone: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Mail: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  X: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>,
  ChevronRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>,
  ChevronLeft: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
};

const App = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const colors = {
    primary: '#0A1128',
    accent: '#D4AF37'
  };

  const images = [
    { url: "/IMG-20251002-WA0078.jpg", title: "Main Living Area" },
    { url: "/IMG-20251002-WA0087.jpg", title: "The View" },
    { url: "/IMG-20251002-WA0096.jpg", title: "Master Bathroom" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center p-4">
          <button onClick={() => setShowGallery(false)} className="absolute top-8 right-8 text-white p-2 bg-white/10 rounded-full"><Icons.X /></button>
          <div className="relative w-full max-w-5xl flex items-center justify-between">
            <button onClick={() => setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length)} className="text-white/50 hover:text-white p-4"><Icons.ChevronLeft /></button>
            <div className="flex-1 text-center">
              <img src={images[currentImgIndex].url} className="max-h-[70vh] mx-auto rounded-lg shadow-2xl" alt="Gallery" />
              <h3 className="text-2xl mt-6 font-serif" style={{ color: colors.accent }}>{images[currentImgIndex].title}</h3>
            </div>
            <button onClick={() => setCurrentImgIndex((prev) => (prev + 1) % images.length)} className="text-white/50 hover:text-white p-4"><Icons.ChevronRight /></button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center overflow-hidden" style={{ backgroundColor: colors.primary }}>
        <div className="absolute inset-0 z-0 opacity-30">
           <img src={images[0].url} className="w-full h-full object-cover blur-[2px]" alt="Background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-12">
          <h1 className="text-6xl lg:text-8xl font-serif text-white mb-6 leading-tight">Luxury <span style={{ color: colors.accent }}>Sky-Home</span><br />Rajagiriya</h1>
          <div className="mb-10">
            <span className="text-white/40 text-xs font-bold uppercase tracking-widest block mb-1">Asking Price</span>
            <span className="text-4xl lg:text-6xl font-bold text-white">LKR 148.5 Million <span className="text-xl font-light opacity-40">ONO</span></span>
          </div>
          <button onClick={() => setShowGallery(true)} className="px-12 py-5 rounded-full font-bold uppercase tracking-widest shadow-2xl flex items-center transition-all hover:scale-105" style={{ backgroundColor: colors.accent, color: colors.primary }}>
            View Property Gallery
          </button>
        </div>
      </header>

      {/* Feature Section */}
      <section className="max-w-7xl mx-auto px-12 py-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="p-8 border rounded-2xl text-center"><Icons.Maximize /><div className="font-bold mt-2">3,700 Sqft</div></div>
        <div className="p-8 border rounded-2xl text-center"><Icons.Eye /><div className="font-bold mt-2">270° Views</div></div>
        <div className="p-8 border rounded-2xl text-center"><Icons.TrendingUp /><div className="font-bold mt-2">High Yield</div></div>
        <div className="p-8 border rounded-2xl text-center"><Icons.MapPin /><div className="font-bold mt-2">Rajagiriya</div></div>
      </section>

      {/* Contact */}
      <footer className="bg-slate-50 py-20 px-12 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-2xl font-serif">RJ Grero</h3>
            <p className="text-slate-400 text-xs uppercase tracking-widest">Real Estate Advisory</p>
          </div>
          <div className="flex gap-8 mt-8 md:mt-0">
            <div className="flex items-center"><Icons.Phone /><span className="ml-3 font-bold">+94 77 7987 150</span></div>
            <div className="flex items-center"><Icons.Mail /><span className="ml-3 font-bold">rehan@rjgrero.com</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;