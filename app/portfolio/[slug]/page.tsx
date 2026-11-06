import Link from "next/link";
import { notFound } from "next/navigation";

// --- ADDED THIS TO FIX THE VERCEL BUILD ERROR ---
export async function generateStaticParams() {
  return [
    { slug: "business-site" },
    { slug: "marketing-campaign" },
  ];
}
// ------------------------------------------------

const projects = {
  "business-site": {
    title: "Corporate Business Site",
    category: "Web Development",
    client: "Local UAE Business",
    // Your custom website image
    image: "/website.png", 
    description: "A complete digital transformation for a local UAE company. We built a high-converting, mobile-responsive website that showcases their services and allows clients to easily get in touch.",
    challenge: "The client had an outdated website that didn't work on mobile phones, causing them to lose potential customers.",
    solution: "We designed a modern, dark-themed website using Next.js and Tailwind CSS. We focused on fast loading speeds, clear call-to-actions, and local SEO optimization.",
    results: [
      "100% Mobile Responsive",
      "Page load speed under 1.5 seconds",
      "Google PageSpeed score of 98/100",
      "Increased client inquiries by 40%"
    ],
    // We add an array for extra images if we need them
    secondaryImage: null
  },
  "marketing-campaign": {
    title: "Local Business SEO & Google Maps Ranking",
    category: "Digital Marketing & Local SEO",
    client: "Dubai Auto Workshop",
    // The gaming setup image
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200",
    // The screenshot of the Google Search results
    secondaryImage: "/google-ranking.png", 
    description: "A targeted local SEO and Google Business Profile optimization campaign aimed at dominating local search results, increasing phone calls, and driving foot traffic to a Dubai auto workshop.",
    challenge: "The client was completely invisible on Google Maps. When customers searched for 'car seat repair' or 'auto upholstery Dubai', their competitors appeared at the top, while they were buried on page 2.",
    solution: "We completely overhauled their Google Business Profile, built high-quality local citations, optimized their website for local keywords, and implemented a review generation strategy to boost their local authority.",
    results: [
      "Ranked #1 on Google Maps for 'car seat repair'",
      "Generated 500+ qualified calls in 3 months",
      "Increased digital presence by 300%",
      "Gained 50+ new 5-star Google Reviews"
    ]
  }
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden">
      
      {/* Hero Section with Project Image */}
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <Link href="/" className="text-blue-500 font-semibold hover:text-blue-400 transition mb-8 inline-block">
          ← Back to Portfolio
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2 block">{project.category}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">{project.title}</h1>
          </div>
          <div className="text-left md:text-right">
            <p className="text-gray-500 text-sm">Client</p>
            <p className="text-white font-semibold text-lg">{project.client}</p>
          </div>
        </div>

        <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden border border-gray-800">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Project Details */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Description */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{project.challenge}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{project.solution}</p>
            </div>

            {/* Conditionally render the Google Ranking Proof Image */}
            {project.secondaryImage && (
              <div className="pt-8">
                <h2 className="text-2xl font-bold text-white mb-4">SEO Proof & Results</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Here is the actual search result on Google for the keyword <strong className="text-white">"car seat repair"</strong>. Our client is ranking in the top 3 of the Local Map Pack, driving massive organic traffic and daily phone calls.
                </p>
                <div className="rounded-xl overflow-hidden border border-gray-800 bg-white">
                  <img src={project.secondaryImage} alt="Google Search Ranking" className="w-full h-auto object-cover" />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar with Results */}
          <div className="bg-[#0f0f11] border border-gray-800 p-8 rounded-2xl h-fit sticky top-8">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-4">Key Results</h3>
            <ul className="space-y-4">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-8 border-t border-gray-800">
              <h3 className="text-lg font-bold text-white mb-4">Need a similar project?</h3>
              <Link href="/#contact" className="w-full block text-center bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-bold transition">
                Contact Me Now
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}