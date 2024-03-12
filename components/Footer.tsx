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
					<Link href="/resume.pdf">
						<Icon icon="lucide:file-text" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
