'use server'

import { cookies } from "next/headers";
import { ListenedTerm, TopListenedResult } from "@/types/spotify";
import { redirect } from "next/navigation";
import { SpotifyApi } from "@/lib/spotify.api";

function parseListenedTerm(term?: string | null): ListenedTerm | null {
	switch (term) {
		case ('short_term'): {
			return ListenedTerm.SHORT
		}
		case ('medium_term'): {
			return ListenedTerm.MEDIUM
		}
		case ('long_term'): {
			return ListenedTerm.LONG
		}
		default: {
			return null
		}
	}

}
export async function fetchListened(_: unknown, formData: FormData): Promise<TopListenedResult> {
	const cookieStore = await cookies()
	const tokenCookie = cookieStore.get('token')

	if (!tokenCookie) {
		redirect('/auth/login')
	}

	const rawTerm = formData.get('listened_term')

	const term = parseListenedTerm(rawTerm?.toString())

	if (!term) {
		throw new Error('Expected term')
	}

	const api = new SpotifyApi(tokenCookie.value)

	return await api.getTopForTerm(term)
}
