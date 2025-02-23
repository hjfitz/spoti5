import { Artist } from "@/types/spotify"
import { SpotifyItem } from "./SpotifyItem"

type ArtistListProps = {
	artists: Artist[]
}

export const ArtistList = ({ artists }: ArtistListProps) => {
	if (artists.length === 0) {
		return <p className="text-center text-xl font-light text-white">No artists available.</p>
	}

	return (
		<div className="rounded bg-white/30 backdrop-blur-xl rounded-lg p-6 shadow-lg border border-white/40">
			<h2 className="text-2xl font-semibold mb-4 text-gray-800">Top Artists</h2>
			<div className="space-y-4">
				{artists.map((artist) => (
					<SpotifyItem key={artist.resourceId} name={artist.artistName} imageUrl={artist.thumbUrl} />
				))}
			</div>
		</div>
	)
}

