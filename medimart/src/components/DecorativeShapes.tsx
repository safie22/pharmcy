export default function DecorativeShapes() {
	return (
		<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
			<svg className="absolute -top-24 -start-24 h-72 w-72 opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#a5d8ff" />
						<stop offset="100%" stopColor="#3b82f6" />
					</linearGradient>
				</defs>
				<circle cx="100" cy="100" r="100" fill="url(#grad1)" />
			</svg>
			<svg className="absolute -bottom-28 -end-28 h-96 w-96 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<path fill="#93c5fd" d="M47.4,-63.4C63.3,-55.5,79.9,-44.6,86.9,-29.9C93.8,-15.2,91.1,3.2,83.2,18.6C75.3,34.1,62.1,46.7,47.6,57.3C33.2,67.9,16.6,76.6,0.1,76.4C-16.4,76.1,-32.7,67,-45.2,55.4C-57.8,43.8,-66.6,29.7,-72.2,13.7C-77.8,-2.3,-80.3,-20.2,-73.5,-33.9C-66.8,-47.6,-50.7,-57.1,-35.1,-65.7C-19.5,-74.3,-9.7,-82,2.5,-86.1C14.7,-90.2,29.4,-90.6,47.4,-63.4Z" transform="translate(100 100)" />
			</svg>
		</div>
	)
}


