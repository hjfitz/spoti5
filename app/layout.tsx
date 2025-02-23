import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Your Spotify Vibe - Discover Your Top Tracks & Artists",
	description:
		"Explore your most listened-to tracks and artists on Spotify. Get personalized insights into your music taste over the last 4 weeks, 6 months, or 12 months!",
	keywords: [
		"Spotify stats",
		"music trends",
		"top Spotify tracks",
		"top artists",
		"Spotify listening history",
		"Spotify wrapped",
		"personalized music insights",
	],
	authors: [{ name: "Your Name", url: "https://spotify.hjf.io" }],
	openGraph: {
		title: "Your Spotify Vibe - Discover Your Top Tracks & Artists",
		description:
			"Explore your most played tracks and artists from Spotify. Track your music vibe over different time ranges!",
		url: "https://spotify.hjf.io",
		siteName: "Your Spotify Vibe",
		images: [
			{
				url: "https://spotify.hjf.io/preview.png",
				width: 1200,
				height: 630,
				alt: "Spotify listening stats preview",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Your Spotify Vibe - Discover Your Top Tracks & Artists",
		description:
			"Check out your most played tracks and artists on Spotify! Get insights into your listening habits.",
		images: ["https://spotify.hjf.io/preview.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

type RootLayoutProps = {
	children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en">
			<Head>
				<meta name="apple-mobile-web-app-title" content="SpotiVibe" />
			</Head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="min-h-screen bg-gray-100 text-gray-900 relative">
					<div className="animated-gradient-header fixed" />
					<div className="container mx-auto px-4 relative z-10">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}

export default RootLayout
