import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
	return (
		<>
			<main className="flex flex-col gap-10">
				<h1 className="text-xl font-medium">
					Passion projects and fun little experiments
				</h1>
				<ProjectCard />
			</main>
		</>
	);
};

export default Projects;
