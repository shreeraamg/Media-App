"use client";
import Link from "next/link";

const pages = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className="flex h-24 items-center justify-between">
      <Link href="/" className="text-lg font-bold">
        Media App
      </Link>
      <div className="flex items-center gap-5">
        {pages.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button
          className="rounded-sm border-0 bg-emerald-600 px-2 py-1 text-white"
          onClick={() => console.log("Logged Out")}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
