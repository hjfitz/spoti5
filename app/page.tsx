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

	return <TopView tracks={tracks} artists={artists} />
}


export default SpotifyTopListenedPage
