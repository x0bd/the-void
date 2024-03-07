"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathname = usePathname();

	return (
		<header className="z-40 text-base font-normal text-neutral-500 flex w-full flex-col gap-2 md:flex-row md:justify-between">
			<Link
				href="/"
				className={
					pathname === "/"
						? "text-neutral-100 hover:text-neutral-100"
						: "hover:text-neutral-100"
				}
			>
				xoboid
			</Link>
			<nav className="flex gap-3 flex-row">
				<Link
					className={
						pathname === "/projects"
							? "text-neutral-100 hover:text-neutral-100"
							: "hover:text-neutral-100"
					}
					href="/projects"
				>
					projects
				</Link>
				<Link
					className={
						pathname === "/posts"
							? "text-neutral-100 hover:text-neutral-100"
							: "hover:text-neutral-100"
					}
					href="/posts"
				>
					thoughts
				</Link>
				<Link
					className={
						pathname === "/sketches"
							? "text-neutral-100 hover:text-neutral-100"
							: "hover:text-neutral-100"
					}
					href="/sketches"
				>
					sketches
				</Link>
				<Link
					className={
						pathname === "/music"
							? "text-neutral-100 hover:text-neutral-100"
							: "hover:text-neutral-100"
					}
					href="/music"
				>
					music
				</Link>
			</nav>
		</header>
	);
};

export default Header;
