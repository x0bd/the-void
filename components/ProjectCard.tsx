"use client";

import projects from "@/data/projects";
import { Icon } from "@iconify/react";
import { technolgies } from "@/data/projects";

const ProjectCard = () => {
	return (
		<div>
			<Icon icon="simple-icons:remix" />
			{projects.map((project) => (
				<div
					key={project.title}
					className="p-4 border border-emerald-500"
				>
					{project.techs.map((tech) => (
						<Icon
							key={project.title}
							icon={technolgies[tech]}
							className="text-3xl border border-black border-dashed rounded-full p-1"
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default ProjectCard;
