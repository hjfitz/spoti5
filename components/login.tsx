'use server'

import { Music } from "lucide-react"
import { config } from '@/lib/config'
import { Button } from "@/components/ui/button"
import Link from "next/link"

const LoginPage = () => {
	const spotifyRedirect = [
		'https://accounts.spotify.com/authorize',
		'?response_type=code',
		`&client_id=${config.clientId}`,
		`&scope=${encodeURIComponent(config.scopes)}`,
		`&redirect_uri=${encodeURIComponent(config.redirectUri)}`,
	].join('')

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="text-center">
				<Music className="w-20 h-20 mx-auto mb-6 text-white" />
				<h1 className="text-4xl font-bold mb-6 text-white">Spotify Vibe Check</h1>
				<p className="text-xl mb-8 text-white/80">Discover your top tracks and artists</p>
				<Link href={spotifyRedirect}>
					<Button
						className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300"
					>
						Login with Spotify
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default LoginPage
