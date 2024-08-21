import Img from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

import { cn } from "@/core/utils/fn";

export interface ITimeLineProps extends ComponentProps<"article"> {
	date: string;
	title: string;
	company: string;
	img: string;
	url: string;
	description?: string;
	type?: "xp" | "student";
}

export function TimeBox({
	company,
	date,
	title,
	description,
	type = "xp",
	url,
	img,
	...props
}: ITimeLineProps) {
	return (
		<article
			className={cn(
				"mr-auto[&+&]:mt-6 mx-6 flex flex-col justify-start gap-6 border-b-zinc-100 py-4 md:mx-auto md:flex-row md:gap-10 [&:not(:last-child)]:border-b-[0.0625rem]",
			)}
			{...props}
		>
			<Link
				href={url}
				target="_blank"
				aria-label={company}
				className={cn("mx-auto py-2", "self-start")}
			>
				<Img
					src={img}
					height={90}
					width={170}
					alt={company}
					fetchPriority="high"
					placeholder="blur"
					blurDataURL="data:image/png;base64,"
					className="rounded-sm"
					loading="lazy"
					title={company}
				/>
			</Link>

			<div className="flex flex-1 flex-col items-center justify-center md:items-start md:px-8">
				<header className="mb-1">
					<span className="text-[0.75rem] font-semibold text-neutral-400 md:text-base">
						{date}
					</span>
				</header>
				<section className="mb-1 flex flex-col items-center justify-center md:items-start">
					<h1 className="text-center text-lg font-bold text-neutral-dark-900 md:text-left md:text-xl">
						{title}
					</h1>
					<Link
						href={url}
						target="_blank"
						aria-label={company}
						className="mt-4 text-base font-semibold hover:text-blue-800 hover:underline hover:underline-offset-2 dark:text-neutral-100"
					>
						{company}
					</Link>
					<pre className="w-full flex-1 whitespace-pre-line font-poppins text-[12px] font-semibold leading-relaxed text-neutral-300 md:text-[0.875rem]">
						<span className="mb-1 mt-4 block font-semibold leading-none text-neutral-50">
							{type === "xp" ? "Função:" : ""}
						</span>
						<p className="break-before-auto text-balance text-start">
							{description}
						</p>
					</pre>
				</section>
			</div>
		</article>
	);
}
