import { z } from 'zod'

const configSchema = z.object({
	SPOTIFY_CLIENT_ID: z.string(),
	SPOTIFY_CLIENT_SECRET: z.string(),
	SPOTIFY_REDIRECT_URI: z.string(),
	SPOTIFY_SCOPES: z.string(),
})

const {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REDIRECT_URI,
	SPOTIFY_SCOPES,
} = configSchema.parse(process.env)

export const config = {
	clientId: SPOTIFY_CLIENT_ID,
	clientSecret: SPOTIFY_CLIENT_SECRET,
	redirectUri: SPOTIFY_REDIRECT_URI,
	scopes: SPOTIFY_SCOPES.split(';').map(scope => scope.trim()).join(' ')
}
