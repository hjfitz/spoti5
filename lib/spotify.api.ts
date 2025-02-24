import axios, { AxiosInstance } from 'axios'
import type {
	Artist,
	ListenedTerm,
	TopArtistsDTO,
	TopListenedResult,
	TopTracksDTO,
	Track,
} from '@/types/spotify'

export class SpotifyApi {
	private readonly axios: AxiosInstance

	constructor(accessToken: string) {
		this.axios = axios.create({
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
			baseURL: 'https://api.spotify.com/v1',
		})
	}

	private async getTopArtists(term: ListenedTerm): Promise<Artist[]> {
		const resp = await this.axios.get<TopArtistsDTO>(
			`/me/top/artists?time_range=${term}&limit=5`,
		)

		return resp.data.items.map((item) => ({
			thumbUrl: item.images[0].url,
			artistName: item.name,
			artistUrl: item.external_urls.spotify,
			resourceId: item.uri,
		}))
	}

	private async getTopTracks(term: ListenedTerm): Promise<Track[]> {
		const resp = await this.axios.get<TopTracksDTO>(
			`/me/top/tracks?time_range=${term}&limit=5`,
		)

		return resp.data.items.map((item) => ({
			trackTitle: item.name,
			artistName: item.artists.map((artist) => artist.name).join(', '),
			albumName: item.album.name,
			trackUrl: item.external_urls.spotify,
			previewUrl: item.preview_url,
			thumb: item.album.images[0].url,
			resourceId: item.uri,
		}))
	}

	public async getTopForTerm(term: ListenedTerm): Promise<TopListenedResult> {
		const [tracks, artists] = await Promise.all([
			this.getTopTracks(term),
			this.getTopArtists(term),
		])

		return { tracks, artists }
	}
}
