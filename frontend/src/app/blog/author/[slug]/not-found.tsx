"use client";

import { useEffect, useState } from "react";
import NotFound from "@/components/global/NotFound";
import { getDictionary } from "@/i18n/getDictionary";
import { i18n } from "@/i18n/i18n-config";
import type { Dictionary } from "@/i18n/getDictionary";

export default function AuthorNotFound() {
	const [dictionary, setDictionary] = useState<Dictionary | null>(null);
	
	const locale = i18n.defaultLocale;

	useEffect(() => {
		getDictionary(locale).then(setDictionary);
	}, [locale]);

	if (!dictionary) {
		return (
			<div className="container mx-auto px-4 md:px-6 py-24 flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]">
				<div className="animate-pulse">Loading...</div>
			</div>
		);
	}

	const { authorTitle, authorMessage, backToBlog } = dictionary.notFound;

	return (
		<NotFound
			title={authorTitle}
			message={authorMessage}
			linkHref="/blog"
			linkText={backToBlog}
			dictionary={dictionary}
		/>
	);
}
