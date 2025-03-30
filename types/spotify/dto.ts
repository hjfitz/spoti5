type SpotifyResponseDTOBase<T> = {
	items: T[]
	total: number
	limit: number
	offset: number
	href: string
	next: string
	previous: string
}

export type TopArtistsDTO = SpotifyResponseDTOBase<ArtistResponse>
export type TopTracksDTO = SpotifyResponseDTOBase<TrackResponse>

type ArtistResponse = {
	external_urls: {
		spotify: string
	}
	followers: Followers
	genres: string[]
	href: string
	id: string
	images: Image[]
	name: string
	popularity: number
	type: string
	uri: string
}

type TrackResponse = {
	album: Album
	artists: AlbumArtist[]
	available_markets: string[]
	disc_number: number
	duration_ms: number
	explicit: boolean
	external_ids: {
		isrc: string
	}
	external_urls: {
		spotify: string
	}
	href: string
	id: string
	is_local: boolean
	name: string
	popularity: number
	preview_url: string
	track_number: number
	type: string
	uri: string
}

type Album = {
	album_type: string
	artists: AlbumArtist[]
	available_markets: string[]
	external_urls: {
		spotify: string
	}
	href: string
	id: string
	images: Image[]
	name: string
	release_date: string
	release_date_precision: string
	total_tracks: number
	type: string
	uri: string
}

type AlbumArtist = {
	external_urls: {
		spotify: string
	}
	href: string
	id: string
	name: string
	type: string
	uri: string
}

type Followers = {
	href: string
	total: number
}

type Image = {
	height: number
	url: string
	width: number
}
