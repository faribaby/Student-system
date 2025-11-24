import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">

        {/* Website Title */}
        <h2 className="text-xl font-semibold">Maishfar Student System</h2>

        {/* Navigation Links */}
        <div className="flex justify-center gap-6 mt-3 text-sm">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/add" className="hover:text-blue-400">Add</Link>
          <Link href="/view" className="hover:text-blue-400">View</Link>
          <Link href="/edit" className="hover:text-blue-400">Edit</Link>
          <Link href="/delete" className="hover:text-blue-400">Delete</Link>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-gray-400 text-sm">
          © {new Date().getFullYear()} Maishfar Student System. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
