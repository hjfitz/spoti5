import { cookies } from 'next/headers'
import { SpotifyApi } from '@/lib/spotify.api'
import { ListenedTerm } from '@/types/spotify'
import { TopView } from '@/components/view.client'
import LoginPage from '@/components/login'

import "./globals.css"

const SpotifyTopListenedPage = async () => {
	const cookieStore = await cookies()
	const tokenCookie = cookieStore.get('token')
	if (!tokenCookie) {
		return <LoginPage />
	}

	const api = new SpotifyApi(tokenCookie.value)

	const { tracks, artists } = await api.getTopForTerm(ListenedTerm.MEDIUM)

	return (
		<div className="min-h-screen bg-gray-100 text-gray-900 relative">
			<div className="animated-gradient-header fixed"></div>
			<div className="container mx-auto px-4 py-16 relative z-10">
				<TopView tracks={tracks} artists={artists} />
			</div>
		</div>
	)
}


export default SpotifyTopListenedPage
