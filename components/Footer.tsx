"use client";

import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
	return (
		<div className="flex flex-col gap-5">
			<div className="bg-neutral-600  w-full h-[1px]"></div>
			<div className="flex items-center justify-between">
				<p className="text-sm text-neutral-500 font-mono">
					signals from the void
				</p>
				<div className="flex justify-end items-end gap-4">
					<Link href="https://twitter.com/xoboid" target="_blank">
						<Icon icon="pajamas:twitter" />
					</Link>
					<Link href="https://github.com/x0bd" target="_blank">
						<Icon icon="mingcute:github-line" />
					</Link>
					<Link href="/" target="_blank">
						<Icon icon="teenyicons:codepen-solid" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/tinodaishe-tembo-70aa3a266?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BgUgLLlaRBGgD1%2FqEgkQOg%3D%3D"
						target="_blank"
					>
						<Icon icon="lucide:linkedin" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
