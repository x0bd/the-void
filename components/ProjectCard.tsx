"use client";

import projects from "@/data/projects";
import { Icon } from "@iconify/react";
import { technologies } from "@/data/projects";
import Link from "next/link";

const ProjectCard = () => {
	return (
		<div>
			{/* <Icon icon="simple-icons:remix" /> */}
			{projects.map((project) => (
				<Link
					href={project.link}
					key={project.title}
					target="_blank"
					className="flex w-full cursor-pointer flex-col justify-between gap-4 p-3 rounded-xl hover:border-neutral-800 hover:bg-neutral-800 p-2 transition-all duration-300"
				>
					<div>{project.title}</div>
					<div>{project.description}</div>
					<div className="flex justify-between items-center">
						<div className="flex gap-2">
							{project.techs.map((tech) => (
								<Icon
									key={project.title}
									icon={technologies[tech]}
									className="text-3xl border border-black border-dashed rounded-full p-1"
								/>
							))}
						</div>
						<span>Link</span>
					</div>
				</Link>
			))}
		</div>
	);
};

export default ProjectCard;
