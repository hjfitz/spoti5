'use server'
import crypto from 'node:crypto'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { config } from '@/lib/config'

export async function GET() {
	const state = crypto.randomBytes(16).toString('base64url')

	const cookieStore = cookies()
	cookieStore.set('state', state)

	const spotifyRedirect = [
		'https://accounts.spotify.com/authorize',
		'?response_type=code',
		`&client_id=${config.clientId}`,
		`&scope=${encodeURIComponent(config.scopes)}`,
		`&redirect_uri=${encodeURIComponent(config.redirectUri)}`,
		`&state=${state}`,
	].join('')

	console.log(spotifyRedirect)

	redirect(spotifyRedirect)
}
