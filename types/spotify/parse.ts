import { ListenedTerm } from "./terms"

export function parseListenedTerm(term?: string | null): ListenedTerm | null {
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
