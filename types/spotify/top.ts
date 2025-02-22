export type Artist = {
	thumbUrl: string
	artistName: string
	artistUrl: string
	resourceId: string
}

export type Track = {
	artistName: string
	albumName: string
	trackTitle: string
	trackUrl: string
	thumb: string
	resourceId: string
}

export type TopListenedResult = {
	tracks: Track[]
	artists: Artist[]
}
