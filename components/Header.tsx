"use client";

import Link from "next/link";

const Header = () => {
	return (
		<header className="z-40 text-base font-normal text-neutral-500 flex w-full flex-col gap-2 md:flex-row md:justify-between">
			<Link href="/" className="no-underline ">
				xoboid
			</Link>
			<nav className="flex gap-3 flex-row">
				<Link className="no-underline" href="/projects">
					projects
				</Link>
				<Link className="no-underline" href="/posts">
					thoughts
				</Link>
				<Link className="no-underline" href="/">
					art
				</Link>
				<Link className="no-underline" href="/">
					guestbook
				</Link>
			</nav>
		</header>
	);
};

export default Header;
