export interface TopTracksDTO {
	items: Item[]
	total: number
	limit: number
	offset: number
	href: string
	next: string
	previous: any
}

interface Item {
	album: Album
	artists: Artist[]
	available_markets: string[]
	disc_number: number
	duration_ms: number
	explicit: boolean
	external_ids: ExternalIds
	external_urls: ExternalUrls
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

interface Album {
	album_type: string
	artists: Artist[]
	available_markets: string[]
	external_urls: ExternalUrls
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

interface Artist {
	external_urls: ExternalUrls
	href: string
	id: string
	name: string
	type: string
	uri: string
}

interface ExternalUrls {
	spotify: string
}

interface Image {
	height: number
	url: string
	width: number
}

interface ExternalIds {
	isrc: string
}
