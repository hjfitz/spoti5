import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const timeRange = searchParams.get("time_range") || "medium_term"

  // Here you would typically fetch the access token from your authentication system
  const accessToken = "YOUR_ACCESS_TOKEN"

  const response = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=10`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to fetch top artists" }, { status: response.status })
  }

  const data = await response.json()
  return NextResponse.json(data)
}

