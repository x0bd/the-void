import Posts from "@/components/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "notes and doodles",
	description:
		"Notes, Thoughts and Doodles on Stuff You can do with a computer",
};

const page = () => {
	return (
		<>
			<main className="flex flex-col gap-10">
				<h1 className="text-xl font-medium">
					Notes, Thoughts and Doodles on Computer Stuff
				</h1>
				{/* @ts-expect-error Server Component*/}
				<Posts />
			</main>
		</>
	);
};

export default page;