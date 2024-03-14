import Posts from "@/components/Posts";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
	title: "xoboid • thoughts",
	description: "thoughts on stuff you can do on a a computer.",
};

const page = () => {
	return (
		<>
			<main className="flex flex-col gap-10">
				<h1 className="text-xl font-medium">Thoughts, Notes & Ideas</h1>
				<Posts />
			</main>
		</>
	);
};

export default page;
