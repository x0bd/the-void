import projects from "@/data/projects";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";

const ProjectCard = () => {
	return (
		<div className="grid lg:md:grid-cols-2 gap-8 sm:grid-cols-1 md:gap-6">
			{projects.length === 0 && <p>Let me Cook 🧑‍🍳🍳🍚🥠</p>}
			{projects.map(
				(project) =>
					!project.isComingSoon && (
						<Card
							key={project.description}
							className="flex flex-col p-0 justify-between "
						>
							<Link
								href={`https://${project.link}`}
								target="_blank"
								className="no-underline"
							>
								<CardHeader className="flex-col gap-4 px-6 py-2">
									<CardTitle className="text-lg  font-medium">
										{project.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>
										{project.description}
									</CardDescription>
								</CardContent>
								<CardFooter className="flex flex-wrap gap-1">
									{project.techs.map((tech) => (
										<Badge
											variant="outline"
											key={project.title}
										>
											{tech}
										</Badge>
									))}
								</CardFooter>
							</Link>
						</Card>
					)
			)}
		</div>
	);
};

export default ProjectCard;
