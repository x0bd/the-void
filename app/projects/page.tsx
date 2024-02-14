import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
	return (
		<>
			<main className="flex flex-col gap-10">
				<h1 className="text-3xl font-medium">
					All of the things I`ve built.
				</h1>
				<ProjectCard />
			</main>
		</>
	);
};

export default Projects;
