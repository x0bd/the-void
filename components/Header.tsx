"use client";

import Link from "next/link";

const Header = () => {
	return (
		<header className="z-40 text-base font-light text-neutral-300 flex w-full flex-col gap-2 md:flex-row md:justify-between">
			<Link href="/" className="no-underline font-light hover:underline">
				xoboid
			</Link>
			<nav className="flex gap-3 flex-row">
				<Link className="no-underline hover:underline" href="/projects">
					projects
				</Link>
				<Link className="no-underline hover:underline" href="/">
					thoughts
				</Link>
				<Link className="no-underline hover:underline" href="/">
					art
				</Link>
				<Link className="no-underline hover:underline" href="/">
					guestbook
				</Link>
			</nav>
		</header>
	);
};

export default Header;
