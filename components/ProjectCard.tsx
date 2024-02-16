"use client";

import projects from "@/data/projects";
import { Icon } from "@iconify/react";
import { technologies } from "@/data/projects";
import Link from "next/link";

const ProjectCard = () => {
	return (
		<div className="flex flex-col gap-5">
			{projects.map((project) => (
				<Link
					href={`https://${project.link}`}
					key={project.title}
					target="_blank"
					className="flex w-full cursor-pointer flex-col justify-between border border-neutral-600 gap-4 rounded-xl p-2 transition-all duration-300"
				>
					<div className="text-xl">{project.title}</div>
					<div className="text-sm text-neutral-400">
						{project.description}
					</div>
					<div className="flex justify-between gap-2 items-center">
						<div className="flex gap-2">
							{project.techs.map((tech) => (
								<Icon
									key={project.title}
									icon={technologies[tech]}
									className="text-2xl"
								/>
							))}
						</div>
						<span>
							<Icon
								className="text-xl"
								icon="material-symbols:arrow-outward-rounded"
							/>
						</span>
					</div>
				</Link>
			))}
		</div>
	);
};

export default ProjectCard;
