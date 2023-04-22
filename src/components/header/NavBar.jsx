import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function NavBar() {
  // const router = useRouter();
  return (
    <header className="p-8 shadow-lg mb-8">
      <img />
      <nav className=" p-6 flex gap-12">
        <Link
          className="px-4 text-[1.25rem] border-b-2 border-b-transparent hover:border-b-2 hover:border-black"
          href="/"
        >
          Home
        </Link>
        <Link
          className="px-4 text-[1.25rem] border-b-2 border-b-transparent hover:border-b-2 hover:border-black"
          href="/events"
        >
          Events
        </Link>
        <Link
          className="px-4 text-[1.25rem] border-b-2 border-b-transparent hover:border-b-2 hover:border-black"
          href="/about-us"
        >
          About us
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
