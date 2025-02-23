//import Image from "next/image"

type SpotifyItemProps = {
	name: string
	imageUrl?: string
	artist?: string
	album?: string
}

export const SpotifyItem = ({ name, imageUrl, artist, album }: SpotifyItemProps) => {
	return (
		<div className="rounded flex items-center space-x-4 p-2 rounded-md transition-all duration-300 hover:bg-white/40">
			{/*<Image src={imageUrl || "/placeholder.svg"} alt={name} width={48} height={48} className="rounded-md shadow-sm" />*/}
			<img src={imageUrl || "/placeholder.svg"} alt={name} width={48} height={48} className="rounded-md shadow-sm" />
			<div className="text-gray-800">
				<h3 className="font-medium">{name}</h3>
				{artist && <p className="text-sm text-gray-600">{artist}</p>}
				{album && <p className="text-xs text-gray-500">{album}</p>}
			</div>
		</div>
	)
}

