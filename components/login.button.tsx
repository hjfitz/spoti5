'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const LoginButton = () => {
	const router = useRouter()
	const handleLogin = () => router.push('/auth/login')

	return (
		<Button
			onClick={handleLogin}
			className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300"
		>
			Login with Spotify
		</Button>
	)
}
