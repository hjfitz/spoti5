import { Track } from "@/types/spotify"
import SpotifyItem from "./SpotifyItem"

type TrackListProps = {
  tracks: Track[]
}

export default function TrackList({ tracks = [] }: TrackListProps) {
  if (tracks.length === 0) {
    return <p className="text-center text-xl font-light text-white">No tracks available.</p>
  }

  return (
    <div className="bg-white/30 backdrop-blur-xl rounded-lg p-6 shadow-lg border border-white/40">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Top Tracks</h2>
      <div className="space-y-4">
        {tracks.map((track) => (
          <SpotifyItem
            key={track.resourceId}
            name={track.trackTitle}
            imageUrl={track.thumb}
            artist={track.artistName}
            album={track.albumName}
          />
        ))}
      </div>
    </div>
  )
}

