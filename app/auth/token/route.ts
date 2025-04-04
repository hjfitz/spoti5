import { NextRequest } from 'next/server'
import queryString from 'querystring'
import { cookies } from 'next/headers'
import axios from 'axios'
import { redirect } from 'next/navigation'
import { RequestFailureDTO, RequestSuccessDTO } from '@/types/spotify'
import { config } from '@/lib/config'

function isSuccessfulResponse(response: RequestSuccessDTO | RequestFailureDTO): response is RequestSuccessDTO {
	return 'access_token' in response
}

export async function GET(req: NextRequest) {
	const params = req.nextUrl.searchParams
	const code = params.get('code')

	if (!code) {
		return new Response('Unable to authenticate', { status: 500 })
	}
	const cookieStore = cookies()

	const {
		clientId,
		clientSecret,
		redirectUri,
	} = config

	const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
		'base64',
	)

	const body = queryString.stringify({
		code,
		redirect_uri: redirectUri,
		grant_type: 'authorization_code',
	})

	const { data } = await axios.post<RequestSuccessDTO | RequestFailureDTO>(
		'https://accounts.spotify.com/api/token',
		body,
		{
			headers: {
				Authorization: `Basic ${basicAuth}`,
				'Content-Length': body.length,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		},
	)

	if (!isSuccessfulResponse(data)) {
		return new Response(`Unable to authenticate: ${data.error_description}`, {
			status: 500,
		})
	}

	cookieStore.set('token', data.access_token, {
		expires: new Date(Date.now() + data.expires_in * 1000),
	})

	redirect('/term/medium')
}
