"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
	return (
		<main className="mb-10 flex flex-col gap-10 text-neutral-300">
			<div className="flex flex-col gap-2 md:flex-row-reverse md:justify-end md:gap-12">
				<div className="flex flex-col gap-3">
					<h2 className="font-extralight text-base text-neutral-400">
						IPA / zˈɑːbɔ͡ɪd / - no meaning, has to do with robots i
						think.
					</h2>
					<p>
						<strong>👋 こんにちは</strong>, My name is{" "}
						<strong>Tinodaishe Tembo</strong> aka{" "}
						<strong>xoboid</strong>. I'm a programmer and designer
						who delights in decoding signals from the{" "}
						<strong>void</strong> through code and pixel
						experiments.
					</p>
					<p>
						My interests encompass <strong>web development</strong>,{" "}
						<strong>terminal tools</strong>, and{" "}
						<strong>creative coding</strong>. I'm passionate about
						crafting digital experiences that are visually
						captivating, with intuitive interactions, with an
						obsession for small details. Recently, I've been
						exploring the world of{" "}
						<strong>web infrastructure</strong>, engaging in a wide
						range of projects from creating ui frameworks to
						developing css libraries, some of which may never see
						widespread use, but that's okay
					</p>
					<p>
						When I'm not immersed in my computer, I enjoy spending
						time with friends or losing myself in the intricate
						narratives of hard science fiction. The Three Body
						Problem Trilogy holds a special place in my heart.
						Learning <strong>Japanese</strong> has also been a
						rewarding hobby.
					</p>
					<p>
						I'm also deeply passionate about music, investing my
						time in the exploration of my synthesizers to forge
						sounds that amalgamate the enigmatic with the
						electronic.
					</p>
				</div>
			</div>
		</main>
	);
}
