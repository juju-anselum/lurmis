import { ThermometerSnowflake, ThermometerSun } from "lucide-react"
import { RadioGroup } from "@/components/ui/radio-group";
import MySlider from "./ui/MySlider"
import MyToggle from "./ui/MyToggle"
import RadioItem from "./ui/RadioItem"

const Controls = () => {

	const selectedMaterial = 'oak';
	const selectedColor = 'white';

	const materialData = [
		{ label: 'Bleach', value: 'bleach', imgPath: '/assets/bleach.png' },
		{ label: 'Oak', value: 'oak', imgPath: '/assets/oak.png' },
		{ label: 'Wal', value: 'wal', imgPath: '/assets/walnut.png' },
	]

	const colorData = [
		{ label: 'White', value: 'white', bgColor: 'bg-[#fffeec]' },
		{ label: 'red', value: 'red', bgColor: 'bg-red-600' },
		{ label: 'green', value: 'green', bgColor: 'bg-green-600' },
		{ label: 'blue', value: 'blue', bgColor: 'bg-blue-600' },
	]

	return (
		<div className="max-w-xl h-full py-5 space-y-10">
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">Lamp Material</p>
				<RadioGroup className="grid-cols-3 sm:grid-cols-5 lg:grid-cols-4 gap-4" defaultValue="cc">
					{
						materialData.map(({ label, value, imgPath }) => (
							<RadioItem
								key={value}
								value={value}
								label={label}
								imgPath={imgPath}
								isSelected={value === selectedMaterial}
							/>
						))
					}
				</RadioGroup>
			</div>
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">White Color</p>
				<RadioGroup className="grid-cols-3 sm:grid-cols-5 lg:grid-cols-4 gap-4" defaultValue="cc">
					{
						colorData
							.filter(({ value }) => value === 'white')
							.map(({ label, value, bgColor }) => (
								<RadioItem
									key={value}
									value={value}
									label={label}
									bgColor={bgColor}
									isSelected={value === selectedColor}
								/>
							))
					}
				</RadioGroup>
			</div>
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">Color Temperature</p>
				<MySlider className={'max-w-xs'} startIcon={ThermometerSun} endIcon={ThermometerSnowflake} />
			</div>
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">RGB Color</p>
				<RadioGroup className="grid-cols-3 sm:grid-cols-5 lg:grid-cols-4 gap-4" defaultValue="cc">
					{
						colorData.splice(1, colorData.length).map(({ label, value, bgColor }) => (
							<RadioItem
								key={value}
								value={value}
								label={label}
								bgColor={bgColor}
								isSelected={value === selectedColor}
							/>
						))
					}
				</RadioGroup>
			</div>
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">Turn ON/OFF</p>
				<MyToggle />
			</div>
		</div>
	)
}

export default Controls