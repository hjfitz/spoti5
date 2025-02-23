'use client'

import { Button } from "@/components/ui/button"
import { fetchListened } from '@/actions/fetch-listened'
import { ArtistList } from '@/app/components/ArtistList'
import { TrackList } from '@/app/components/TrackList'
import { ListenedTerm, TopListenedResult } from '@/types/spotify'
import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { useRouter } from "next/navigation"

type TopViewProps = TopListenedResult

export const TopView = ({ tracks, artists }: TopViewProps) => {
	const [timeRange, setTimeRange] = useState<ListenedTerm>(ListenedTerm.MEDIUM)
	const [topListened, formAction, isPending] = useFormState(fetchListened, { tracks, artists })

	const router = useRouter()
	useEffect(() => {
		router.replace('/')
	}, [router])

	return (
		<main className="py-16">
			<h1 className="text-6xl font-bold mb-8 text-white drop-shadow-lg">Your Spotify Vibe</h1>
			<div className="flex justify-start space-x-4 mb-8">
				<form action={formAction}>
					<input readOnly hidden value={ListenedTerm.SHORT} name="listened_term" />
					<Button
						variant={timeRange === ListenedTerm.SHORT ? "default" : "outline"}
						onClick={() => setTimeRange(ListenedTerm.SHORT)}
						className="rounded bg-white/20 text-white border-white/30 hover:bg-white/30 hover:text-white"
					>
						4 Weeks
					</Button>
				</form>

				<form action={formAction}>
					<input hidden readOnly value={ListenedTerm.MEDIUM} name="listened_term" />
					<Button
						variant={timeRange === ListenedTerm.MEDIUM ? "default" : "outline"}
						onClick={() => setTimeRange(ListenedTerm.MEDIUM)}
						className="rounded bg-white/20 text-white border-white/30 hover:bg-white/30 hover:text-white"
					>
						6 Months
					</Button>
				</form>

				<form action={formAction}>
					<input hidden readOnly value={ListenedTerm.LONG} name="listened_term" />
					<Button
						variant={timeRange === ListenedTerm.LONG ? "default" : "outline"}
						onClick={() => setTimeRange(ListenedTerm.LONG)}
						className="rounded bg-white/20 text-white border-white/30 hover:bg-white/30 hover:text-white"
					>
						12 Months
					</Button>
				</form>

			</div>
			{isPending ? (
				<p className="text-center mt-12 text-2xl font-light text-white">Tuning in...</p>
			) : (
				<div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
					<TrackList tracks={topListened.tracks} />
					<ArtistList artists={topListened.artists} />
				</div>
			)}
		</main>
	)
}
