import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-slate-900 text-white">
      <h2 className="text-xl font-bold">HopeFund</h2>

      <div className="space-x-6">
        <Link href="/" className="hover:text-green-400">Home</Link>
        <Link href="/about" className="hover:text-green-400">About</Link>
        <Link href="/reviews" className="hover:text-green-400">Review</Link>
      </div>
    </nav>
  );
}