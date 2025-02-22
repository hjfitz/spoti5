import { Button } from "@/components/ui/button"
import { ListenedTerm } from "@/types/spotify"


interface TimeRangeSelectorProps {
	timeRange: ListenedTerm
	onTimeRangeChange: (range: ListenedTerm) => void
}

export default function TimeRangeSelector({ timeRange, onTimeRangeChange }: TimeRangeSelectorProps) {
	return (
		<div className="flex justify-start space-x-4 mb-8">
			<Button
				variant={timeRange === ListenedTerm.SHORT ? "default" : "outline"}
				onClick={() => onTimeRangeChange(ListenedTerm.SHORT)}
				className="bg-white/20 text-white border-white/30 hover:bg-white/30 hover:text-white"
			>
				4 Weeks
			</Button>
			<Button
				variant={timeRange === ListenedTerm.MEDIUM ? "default" : "outline"}
				onClick={() => onTimeRangeChange(ListenedTerm.MEDIUM)}
				className="bg-white/20 text-white border-white/30 hover:bg-white/30 hover:text-white"
			>
				6 Months
			</Button>
			<Button
				variant={timeRange === ListenedTerm.LONG ? "default" : "outline"}
				onClick={() => onTimeRangeChange(ListenedTerm.LONG)}
				className="bg-white/20 text-white border-white/30 hover:bg-white/30 hover:text-white"
			>
				12 Months
			</Button>
		</div>
	)
}

