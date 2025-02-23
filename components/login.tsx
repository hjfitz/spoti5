'use server'

import { Music } from "lucide-react"
import { LoginButton } from "./login.button"

const LoginPage = () => (
	<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500">
		<div className="text-center">
			<Music className="w-20 h-20 mx-auto mb-6 text-white" />
			<h1 className="text-4xl font-bold mb-6 text-white">Spotify Vibe Check</h1>
			<p className="text-xl mb-8 text-white/80">Discover your top tracks and artists</p>
			<LoginButton />
		</div>
	</div>
)

export default LoginPage
