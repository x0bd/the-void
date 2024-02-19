import Posts from "@/components/Posts";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
	title: "notes and doodles",
	description:
		"Notes, Thoughts and Doodles on Stuff You can do with a computer",
};

const page = () => {
	return (
		<>
			<main className="flex flex-col gap-10">
				<h1 className="text-xl font-medium">Thoughts</h1>
				<Posts />
			</main>
		</>
	);
};

export default page;
