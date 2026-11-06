import Image from "next/image";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getYear();

  return (
    <footer className="border-t border-gray-800 bg-[#050505] py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-center items-center gap-6">
        
        <div className="flex items-center gap-3">
           <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full opacity-50" />
           <p className="text-gray-500 text-sm">© {year} SR Digital Studio. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}