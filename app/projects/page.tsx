import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "xoboid • projects",
	description: "i own a computer",
};

const Projects = () => {
	return (
		<>
			<main className="flex flex-col gap-10">
				<h1 className="text-xl font-medium">
					All of my passion projects
				</h1>
				<ProjectCard />
			</main>
		</>
	);
};

export default Projects;
