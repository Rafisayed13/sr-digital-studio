import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center justify-between min-h-[80vh]">
        <div className="md:w-1/2 z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Elevate Your Brand with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              SR Digital Studio
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg mx-auto md:mx-0">
            We build high-converting business websites, edit stunning visuals, and drive growth for UAE businesses through expert digital marketing and SEO.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="#contact" className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition shadow-[0_0_20px_rgba(0,150,255,0.3)]">
              Start a Project
            </Link>
            <Link href="#portfolio" className="border border-gray-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-800 transition">
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Right Side: Animated Visual */}
        <div className="md:w-1/2 mt-16 md:mt-0 relative flex justify-center">
          
          {/* Pulsing background glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-blue-600 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
          
          {/* Floating Logo Container */}
          <div className="relative z-10 border border-gray-700/50 p-3 rounded-2xl bg-gray-900/40 backdrop-blur-md shadow-2xl animate-float">
             
             <img 
                src="/logo.png" 
                alt="SR Digital Studio" 
                className="rounded-xl w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover border border-gray-800" 
             />

             {/* Floating Decorative Badges */}
             <div className="absolute -top-6 -right-6 bg-[#0f0f11] border border-gray-700 p-3 rounded-xl shadow-xl animate-float-delayed flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-white text-sm font-bold">SEO Ready</span>
             </div>

             <div className="absolute -bottom-6 -left-6 bg-[#0f0f11] border border-gray-700 p-3 rounded-xl shadow-xl animate-float flex items-center gap-2">
                <span className="text-blue-500 text-xl">⚡</span>
                <span className="text-white text-sm font-bold">Fast Loading</span>
             </div>

          </div>
        </div>
      </section>

      {/* --- ABOUT / SEO TEXT SECTION --- */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-gray-800/50">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/3">
            <p className="text-blue-500 font-semibold mb-2 tracking-wide uppercase text-sm">
              Create your digital world with SR Digital Studio
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Web Design & Digital Marketing for UAE Businesses
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                <strong>SR Digital Studio</strong> is a dedicated digital agency specializing in affordable business website creation, professional photo and video editing, and local SEO. We proudly partner with local UAE businesses, startups, and entrepreneurs to help them establish a powerful, credible online presence.
              </p>
              <p>
                We turn challenges into opportunities with sleek, intuitive designs and tailor-made strategies. We don't just solve problems—we compose experiences. Our customized and flexible services will enhance your brand and take your business to the next level, ensuring you stand out in the competitive UAE market.
              </p>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-cyan-600 rounded-full blur-[100px] opacity-20"></div>
            <div className="relative w-48 h-48 rounded-full border-4 border-gray-800 bg-[#0a0a0a] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(0,150,255,0.1)] z-10">
              <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">SR</span>
              <span className="text-xs font-bold tracking-widest text-gray-500 mt-2">DIGITAL STUDIO</span>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white w-20 h-20 rounded-full flex flex-col items-center justify-center border-4 border-[#050505]">
                <span className="text-xl font-bold">100%</span>
                <span className="text-[10px] text-center leading-tight">Quality<br/>Work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID SECTION --- */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-gray-800/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need to build, design, and market your local business online.</p>
        </div>
        <div className="flex flex-col gap-8">
          
          {/* Card 1: Local Business Websites */}
          <div className="group bg-[#0f0f11] border border-gray-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-lg">
            <div className="md:w-3/5 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Business Website Building</h3>
              <p className="text-gray-400 mb-6 text-lg">Build a professional, high-converting website for your local business. Perfect for clinics, restaurants, real estate, and service providers.</p>
              <div className="grid grid-cols-2 gap-y-3 text-gray-300">
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Business Websites</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Landing Pages</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> WordPress & Webflow</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Mobile Responsive</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Fast Loading Speeds</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Domain & Hosting Setup</span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end overflow-hidden rounded-xl">
               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" alt="Business Website Mockup" className="w-full h-48 md:h-56 object-cover rounded-xl border border-gray-700 shadow-2xl group-hover:scale-105 transition duration-500" />
            </div>
          </div>

          {/* Card 2: Photo & Video Editing */}
          <div className="group bg-[#0f0f11] border border-gray-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-lg">
            <div className="md:w-3/5 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Photo & Video Editing</h3>
              <p className="text-gray-400 mb-6 text-lg">Elevate your visual content with professional photo retouching and engaging video editing tailored for social media, ads, and branding.</p>
              <div className="grid grid-cols-2 gap-y-3 text-gray-300">
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Photoshop Retouching</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Product Photo Editing</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Social Media Videos</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Reels & TikToks</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Color Grading</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Promo Videos</span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&q=80&w=600" alt="Video Editing Mockup" className="w-full h-48 md:h-56 object-cover rounded-xl border border-gray-700 shadow-2xl group-hover:scale-105 transition duration-500" />
            </div>
          </div>

          {/* Card 3: Digital Marketing & SEO */}
          <div className="group bg-[#0f0f11] border border-gray-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-lg">
            <div className="md:w-3/5 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Digital Marketing & SEO</h3>
              <p className="text-gray-400 mb-6 text-lg">Get found by local customers. We optimize your website and manage your ads to bring in high-quality leads for your business.</p>
              <div className="grid grid-cols-2 gap-y-3 text-gray-300">
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Local SEO (UAE)</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Google My Business</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Google Ads</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Social Media Marketing</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Email Marketing</span>
                <span className="flex items-center gap-2"><span className="text-blue-500">✓</span> Content Strategy</span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="SEO Analytics Mockup" className="w-full h-48 md:h-56 object-cover rounded-xl border border-gray-700 shadow-2xl group-hover:scale-105 transition duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR WORKS / PORTFOLIO SECTION --- */}
      <section id="portfolio" className="max-w-7xl mx-auto px-8 py-24 border-t border-gray-800/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Our Works</h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-400 text-lg">
              Explore our project portfolio to get to know our creativity and <strong className="text-gray-200">technology expertise</strong> in different business verticals.
            </p>
          </div>
          <div className="md:w-auto">
            <Link href="#portfolio" className="text-white border-b border-gray-500 pb-1 hover:text-blue-400 hover:border-blue-400 transition flex items-center gap-2 font-semibold">
              View all projects <span>→</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1 - Links to /portfolio/business-site */}
          <Link href="/portfolio/business-site" className="group relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 block">
            <img 
              src="/website.png" 
              alt="Business Site" 
              className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6">
              <span className="text-blue-400 text-sm font-semibold mb-1 block">Web Development</span>
              <h3 className="text-white text-2xl font-bold">Business Site</h3>
            </div>
          </Link>

          {/* Project 2 - Links to /portfolio/marketing-campaign */}
          <Link href="/portfolio/marketing-campaign" className="group relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 block">
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000" alt="App Project" className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6">
              <span className="text-blue-400 text-sm font-semibold mb-1 block">Digital Marketing</span>
              <h3 className="text-white text-2xl font-bold">Local Business Campaign</h3>
            </div>
          </Link>

        </div>
      </section>

      {/* --- SEO CONTENT SECTION 1 (Marketing) --- */}
      <section className="max-w-7xl mx-auto px-8 py-16 border-t border-gray-800/50">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Best Digital Marketing Agency in Dubai for SEO, Google Ads, & Social Media
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              <strong>SR Digital Studio</strong> is a full-service digital marketing and performance growth agency in the UAE, helping local businesses generate qualified leads, increase sales, and maximize ROI. Our data-driven digital marketing solutions include <strong>Search Engine Optimization (SEO)</strong>, <strong>Google Ads</strong>, performance marketing, social media advertising, WhatsApp marketing, and email marketing.
            </p>
            <p>
              We specialize in local SEO, Google Merchant Center optimization, lead generation, and conversion rate optimization to help brands attract high-intent customers and convert traffic into measurable business results. Combining strategic creativity, advanced analytics, and specialist expertise, we deliver integrated digital marketing solutions precisely aligned with your commercial objectives.
            </p>
            <p>
              From elevating organic search performance and strengthening visibility across AI-powered search platforms to optimizing paid media campaigns and cultivating lasting customer relationships, every initiative is underpinned by data, driven by performance, and focused on delivering measurable business growth. Partner with SR Digital Studio to transform your digital presence into a strategic growth asset—generating high-quality leads, accelerating revenue, and maximizing return on investment.
            </p>
          </div>
        </div>
      </section>

      {/* --- SEO CONTENT SECTION 2 (Web Development - Freelancer Focus) --- */}
      <section className="max-w-7xl mx-auto px-8 py-16 border-t border-gray-800/50 mb-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Expert Freelance Web Design & Development Services in Dubai (UAE)
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Looking for a top-rated <strong>freelance web developer in Dubai</strong>? SR Digital Studio is a leading independent web design and development service across the UAE, specializing in creating custom, responsive, and user-friendly business websites that drive results. Recognized for delivering high-quality work in Dubai, Abu Dhabi, and Sharjah, we offer a full range of website development services—including <strong>UI/UX design</strong>, business landing pages, website maintenance, and performance optimization.
            </p>
            <p>
              As an independent specialist, I provide comprehensive website design services without the overhead of a large agency. This means you get direct communication, faster turnaround times, and a personalized approach. Whether it's a complete redesign or a brand new business website, your online success starts with a vision brought to life. My expertise integrates cutting-edge UI/UX design, ensuring a perfect balance of creativity and functionality to deliver polished, high-performing websites that captivate and convert.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="max-w-7xl mx-auto px-8 py-24 border-t border-gray-800/50 bg-[#0a0a0a]">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Contact Info (Left) */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Great.</h2>
            <p className="text-gray-400 text-lg mb-10">
              Ready to take your business to the next level? Send me a message and I'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              
              {/* Email Block */}
              <a href="mailto:srdigitalstudio.contact@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition group">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-blue-500 transition">
                  <span className="text-xl">✉</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Me</p>
                  <p className="font-semibold text-white">srdigitalstudio.contact@gmail.com</p>
                </div>
              </a>

              {/* WhatsApp Block */}
              <a href="https://wa.me/971555523845" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition group">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-green-500 transition">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp / Call</p>
                  <p className="font-semibold text-white">055 552 3845</p>
                </div>
              </a>

            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="md:w-1/2 bg-[#0f0f11] border border-gray-800 p-8 rounded-2xl shadow-lg">
            
            {/* CONNECTED TO FORMSPREE */}
            <form action="https://formspree.io/f/mvkkwnwr" method="POST" className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-400 mb-1 block">Your Name</label>
                <input type="text" name="name" placeholder="John Doe" className="w-full bg-[#050505] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition" required />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-400 mb-1 block">Your Email</label>
                <input type="email" name="email" placeholder="john@example.com" className="w-full bg-[#050505] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition" required />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-400 mb-1 block">Service Needed</label>
                <select name="service" className="w-full bg-[#050505] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition">
                  <option value="Business Website">Business Website</option>
                  <option value="Photo / Video Editing">Photo / Video Editing</option>
                  <option value="Digital Marketing / SEO">Digital Marketing / SEO</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-400 mb-1 block">Message</label>
                <textarea name="message" rows={4} placeholder="Tell me about your project..." className="w-full bg-[#050505] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition" required></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition mt-2 shadow-[0_0_15px_rgba(0,150,255,0.2)]">
                Send Message
              </button>
            </form>

          </div>

        </div>
      </section>

    </main>
  );
}