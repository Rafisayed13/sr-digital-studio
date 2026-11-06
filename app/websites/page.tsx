import Link from "next/link";

export default function WebsitesPage() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-8 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Building</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
            Professional, high-converting websites for local UAE businesses. Perfect for clinics, restaurants, real estate, and service providers.
          </p>
          <Link href="/#contact" className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition shadow-[0_0_20px_rgba(0,150,255,0.3)]">
            Start Your Website Project
          </Link>
        </div>
      </section>

      {/* --- WHAT WE OFFER (Features) --- */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-gray-800/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose SR Digital Studio?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">We build fast, secure, and mobile-friendly websites that actually generate leads for your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#0f0f11] border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-white mb-3">Mobile Responsive</h3>
            <p className="text-gray-400">Over 80% of your customers browse on their phones. We ensure your site looks flawless on every device.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-[#0f0f11] border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Fast Loading Speeds</h3>
            <p className="text-gray-400">We optimize every image and line of code so your website loads in under 2 seconds, keeping visitors engaged.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#0f0f11] border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-3">SEO Optimized</h3>
            <p className="text-gray-400">Your site will be built with clean code and proper structure so you rank higher on Google from day one.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#0f0f11] border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-3">Secure & Reliable</h3>
            <p className="text-gray-400">We set up SSL certificates and secure hosting, keeping your business and your customers' data safe.</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-[#0f0f11] border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-white mb-3">Custom Design</h3>
            <p className="text-gray-400">No boring templates. We design a website that perfectly matches your brand identity and colors.</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-[#0f0f11] border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold text-white mb-3">Ongoing Support</h3>
            <p className="text-gray-400">We don't just build and leave. We provide training and support to help you manage your site easily.</p>
          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-gray-800/50 text-center">
         <h2 className="text-2xl font-bold text-white mb-8">Technologies We Use</h2>
         <div className="flex flex-wrap justify-center gap-6 text-gray-400 font-semibold text-lg">
            <span className="bg-[#0f0f11] border border-gray-800 px-6 py-3 rounded-full">WordPress</span>
            <span className="bg-[#0f0f11] border border-gray-800 px-6 py-3 rounded-full">Webflow</span>
            <span className="bg-[#0f0f11] border border-gray-800 px-6 py-3 rounded-full">Next.js</span>
            <span className="bg-[#0f0f11] border border-gray-800 px-6 py-3 rounded-full">React</span>
            <span className="bg-[#0f0f11] border border-gray-800 px-6 py-3 rounded-full">Shopify</span>
            <span className="bg-[#0f0f11] border border-gray-800 px-6 py-3 rounded-full">Tailwind CSS</span>
         </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="max-w-5xl mx-auto px-8 py-24">
        <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 p-12 rounded-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get a website that works for you?</h2>
          <p className="text-gray-300 text-lg mb-8">Let's discuss your project. No pressure, just clear advice and a free quote.</p>
          <Link href="/#contact" className="bg-white text-blue-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition">
            Get a Free Quote
          </Link>
        </div>
      </section>

    </main>
  );
}