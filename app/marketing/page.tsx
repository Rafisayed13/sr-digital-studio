import Link from "next/link";

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden">
      
      <section className="max-w-7xl mx-auto px-8 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Digital Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">& SEO</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
            Get found by local customers. We optimize your website and manage your ads to bring in high-quality leads for your business.
          </p>
          <Link href="/#contact" className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition shadow-[0_0_20px_rgba(0,150,255,0.3)]">
            Start Your Campaign
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-gray-800/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Image */}
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Marketing Analytics" className="w-full h-auto object-cover" />
          </div>

          {/* Right Side Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Data-Driven Marketing Strategies</h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Marketing isn't just about spending money; it's about getting a return. I use proven SEO techniques and targeted ad campaigns to ensure every dirham you spend brings back results.
            </p>
            <ul className="space-y-3 text-gray-300 font-medium">
              <li className="flex items-center gap-3"><span className="text-blue-500 text-xl">✓</span> Local SEO (Google Maps & Search)</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 text-xl">✓</span> Google Ads (Search & Display)</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 text-xl">✓</span> Meta Ads (Facebook & Instagram)</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 text-xl">✓</span> Email Marketing Campaigns</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 text-xl">✓</span> Monthly Performance Reports</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-24">
        <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 p-12 rounded-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want more leads for your business?</h2>
          <p className="text-gray-300 text-lg mb-8">Let's build a custom marketing strategy that fits your budget.</p>
          <Link href="/#contact" className="bg-white text-blue-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition">
            Get a Free Quote
          </Link>
        </div>
      </section>

    </main>
  );
}