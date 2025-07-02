import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/global/ThemeProvider";
import { ThemeToggle } from "@/components/global/ThemeToggle";
// Import the PostHogProvider
import { PostHogProvider } from "@/components/PostHogProvider";
// Import the GoogleAnalytics component
import { GoogleAnalytics } from "@/components/global/GoogleAnalytics";
import { i18n } from "@/i18n/i18n-config";
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import { CookieConsent } from '@/components/global/CookieConsent';
import { client } from '@/sanity/client';
import type { Footer as SanityFooter, Header as SanityHeader } from '@/sanity/types';
import { LAYOUT_FOOTER_QUERY, LAYOUT_HEADER_QUERY } from '@/sanity/queries';
import { getDictionary } from '@/i18n/getDictionary';

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});


async function getGlobals(): Promise<{ header: SanityHeader | null; footer: SanityFooter | null }> {
	const [header, footer] = await Promise.all([
		client.fetch<SanityHeader | null>(LAYOUT_HEADER_QUERY),
		client.fetch<SanityFooter | null>(LAYOUT_FOOTER_QUERY),
	]);
	return { header, footer };
}

export async function generateMetadata(): Promise<Metadata> {
	const dictionary = await getDictionary(i18n.defaultLocale);
	return {
		title: dictionary.app.title,
		description: dictionary.app.description,
	};
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const locale  = 'en';
	const { header, footer } = await getGlobals();
	const dictionary = await getDictionary(locale);

	return (
		<html suppressHydrationWarning lang="en">
			<head>
				{/* Google Analytics */}
				<GoogleAnalytics />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<PostHogProvider>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						{header && <Header {...header} locale={locale} dictionary={dictionary} />}
						<div className="mt-20">{children}</div>
						{footer && <Footer {...footer} dictionary={dictionary.footer} />}
						<CookieConsent dictionary={dictionary.cookie} />
						<div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
							<ThemeToggle />
						</div>
						<Toaster position="top-center" />
					</ThemeProvider>
				</PostHogProvider>
			</body>
		</html>
	);
}