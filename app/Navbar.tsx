import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 w-full max-w-[1400px] mx-auto border-b border-gray-800 bg-[#050505]">
      
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-4 shrink-0">
        <Image src="/logo.png" alt="SR Digital Studio Logo" width={45} height={45} className="rounded-full" />
        <span className="text-xl font-bold tracking-widest text-white whitespace-nowrap">
          SR <span className="text-gray-400 font-normal">DIGITAL</span>
        </span>
      </Link>
      
      {/* Menu Links */}
      <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-semibold text-gray-300 shrink-0">
        <li className="hover:text-blue-400 transition">
          <Link href="/websites">WEBSITES</Link>
        </li>
        <li className="hover:text-blue-400 transition">
          <Link href="/design">DESIGN</Link>
        </li>
        <li className="hover:text-blue-400 transition">
          <Link href="/video-editing">VIDEO EDITING</Link>
        </li>
        <li className="hover:text-blue-400 transition">
          <Link href="/marketing">MARKETING</Link>
        </li>
      </ul>

      {/* Button */}
      <div className="shrink-0 ml-4">
        <Link href="/#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-semibold transition whitespace-nowrap">
          Get a Quote
        </Link>
      </div>

    </nav>
  );
}