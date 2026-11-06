import Link from "next/link";

export default function VideoEditingPage() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden">
      
      <section className="max-w-7xl mx-auto px-8 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Editing</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
            Engage your audience with high-quality video content. Perfect for Instagram Reels, TikTok, YouTube, and business promos.
          </p>
          <Link href="/#contact" className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition shadow-[0_0_20px_rgba(0,150,255,0.3)]">
            Start Your Video Project
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-gray-800/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Scroll-Stopping Video Content</h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              In today's digital world, video is king. I edit dynamic, fast-paced videos that grab attention in the first 3 seconds and keep your viewers watching until the end.
            </p>
            <ul className="space-y-3 text-gray-300 font-medium">
              <li className="flex items-center gap-3"><span className="text-blue-500 text-xl">✓</span> Instagram Reels & TikToks</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 text-xl">✓</span> YouTube Video Editing</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 text-xl">✓</span> Business Promo Videos</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 text-xl">✓</span> Subtitles & Captions</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 text-xl">✓</span> Sound Design & Mixing</li>
            </ul>
          </div>

          {/* Right Side Image */}
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800" alt="Video Editing" className="w-full h-auto object-cover" />
          </div>

        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-24">
        <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 p-12 rounded-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to level up your video content?</h2>
          <p className="text-gray-300 text-lg mb-8">Let's create videos that your customers will actually watch.</p>
          <Link href="/#contact" className="bg-white text-blue-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition">
            Get a Free Quote
          </Link>
        </div>
      </section>

    </main>
  );
}