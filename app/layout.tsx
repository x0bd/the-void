import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "xoboid",
	description: "programmer | designer | dreamer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={inter.className} lang="en">
			<body className="bg-zinc-900 text-neutral-200 sm:w-full mx-auto flex min-h-screen max-w-[720px] flex-col gap-9 px-10 py-5 text-base md:gap-20 md:py-12">
				<Header />
				<div>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
