export type RequestSuccessDTO = {
	access_token: string
	token_type: string
	expires_in: number
	refresh_token: string
	scope: string
}

export type RequestFailureDTO = {
	error: string
	error_description: string
}
