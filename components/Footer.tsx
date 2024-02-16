"use client";

import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

const Footer = () => {
	return (
		<div className="flex flex-col gap-5">
			<div className="bg-neutral-600  w-full h-[1px]"></div>
			<div className="flex justify-between items-center">
				<div className="flex justify-between items-center">
					<Player
						loop
						autoplay
						style={{ height: "50px", width: "50px" }}
						src="https://lottie.host/97b7b3fe-d53b-48ae-b318-af6146299f41/zybAwdKNeG.json"
						// src="https://lottie.host/910279fc-fdbb-4f2c-9a93-be0f29e17552/JIR8slGAFS.json"
					/>
					<h1 className="text-sm text-neutral-500 font-mono">
						signals from the void
					</h1>
				</div>

				<div className="flex justify-evenly gap-4">
					<Link href="/" target="_blank">
						<Icon icon="pajamas:twitter" />
					</Link>
					<Link href="/" target="_blank">
						<Icon icon="lucide:linkedin" />
					</Link>
					<Link href="/" target="_blank">
						<Icon icon="mingcute:github-line" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
