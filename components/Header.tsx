"use client";

import Link from "next/link";
import { ThemeSwitch } from "./Switch";

const Header = () => {
	return (
		<header className="z-40 text-lg font-mono justify-between items-center flex w-full gap-">
			<nav className=" flex w-full flex-col md:flex-row">
				<Link
					href="/"
					className="no-underline font-bold mr-10 text-xl hover:underline"
				>
					xoboid
				</Link>
				<nav className="flex gap-2 flex-row">
					<Link
						className="no-underline hover:underline"
						href="/projects"
					>
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
			</nav>
			<ThemeSwitch />
		</header>
	);
};

export default Header;
