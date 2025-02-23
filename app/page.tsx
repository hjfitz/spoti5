import { cookies } from 'next/headers'
import { SpotifyApi } from '@/lib/spotify.api'
import { ListenedTerm } from '@/types/spotify'

import "./globals.css"
import LoginPage from './views/server/login'
import { TopView } from './views/client/top'

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
