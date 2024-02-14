import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div className="flex flex-col gap-5">
			<div className="bg-neutral-400 w-full h-[1px]"></div>
			<div className="flex justify-between items-center">
				<h1 className="text-sm text-neutral-300">
					signals from the void
				</h1>
				<div className="flex justify-evenly gap-2">
					<Link href="/" target="_blank">
						twitter
					</Link>
					<Link href="/" target="_blank">
						linkedIn
					</Link>
					<Link href="/" target="_blank">
						github
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
