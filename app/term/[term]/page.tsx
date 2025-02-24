import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArtistList } from '@/app/components/ArtistList'
import { TrackList } from '@/app/components/TrackList'
import { ListenedTerm } from '@/types/spotify'
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { SpotifyApi } from "@/lib/spotify.api"
import { parseListenedTerm } from "@/types/spotify/parse"

type TermPageProps = {
	params: Promise<{ term: string }>
}

const TermPage = async ({ params }: TermPageProps) => {
	const cookieStore = await cookies()
	const tokenCookie = cookieStore.get('token')

	if (!tokenCookie) {
		return redirect('/')
	}

	const api = new SpotifyApi(tokenCookie.value)
	const { term } = await params

	const timeRange = parseListenedTerm(`${term}_term`)

	if (!timeRange) {
		redirect('/term/medium')
	}

	const { tracks, artists } = await api.getTopForTerm(timeRange)

	return (
		<main className="py-16">
			<h1 className="text-6xl font-bold mb-8 text-white drop-shadow-lg">Your Spotify Vibe</h1>
			<div className="flex justify-start space-x-4 mb-8">
				<Link href="/term/short">
					<Button
						variant={timeRange === ListenedTerm.SHORT ? "default" : "outline"}
						className="rounded bg-white/20 text-white border-white/30 hover:bg-white/30 hover:text-white"
					>
						4 Weeks
					</Button>
				</Link>

				<Link href="/term/medium">
					<Button
						variant={timeRange === ListenedTerm.MEDIUM ? "default" : "outline"}
						className="rounded bg-white/20 text-white border-white/30 hover:bg-white/30 hover:text-white"
					>
						6 Months
					</Button>
				</Link>

				<Link href="/term/long">
					<Button
						variant={timeRange === ListenedTerm.LONG ? "default" : "outline"}
						className="rounded bg-white/20 text-white border-white/30 hover:bg-white/30 hover:text-white"
					>
						12 Months
					</Button>
				</Link>

			</div>
			<div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
				<TrackList tracks={tracks} />
				<ArtistList artists={artists} />
			</div>
		</main>
	)
}

export default TermPage
