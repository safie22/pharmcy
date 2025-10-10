export default function DecorativeShapes() {
	return (
		<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
			{/* شكل دائري علوي - متجاوب */}
			<svg className="absolute -top-12 sm:-top-16 md:-top-20 lg:-top-32 xl:-top-40 2xl:-top-48 -start-12 sm:-start-16 md:-start-20 lg:-start-32 xl:-start-40 2xl:-start-48 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80 xl:h-96 xl:w-96 2xl:h-[28rem] 2xl:w-[28rem] opacity-20 sm:opacity-25 md:opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#a5d8ff" />
						<stop offset="100%" stopColor="#3b82f6" />
					</linearGradient>
				</defs>
				<circle cx="100" cy="100" r="100" fill="url(#grad1)" />
			</svg>
			
			{/* شكل سفلي - متجاوب */}
			<svg className="absolute -bottom-16 sm:-bottom-20 md:-bottom-24 lg:-bottom-32 xl:-bottom-40 2xl:-bottom-48 -end-16 sm:-end-20 md:-end-24 lg:-end-32 xl:-end-40 2xl:-end-48 h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-[28rem] xl:w-[28rem] 2xl:h-[32rem] 2xl:w-[32rem] opacity-15 sm:opacity-18 md:opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<path fill="#93c5fd" d="M47.4,-63.4C63.3,-55.5,79.9,-44.6,86.9,-29.9C93.8,-15.2,91.1,3.2,83.2,18.6C75.3,34.1,62.1,46.7,47.6,57.3C33.2,67.9,16.6,76.6,0.1,76.4C-16.4,76.1,-32.7,67,-45.2,55.4C-57.8,43.8,-66.6,29.7,-72.2,13.7C-77.8,-2.3,-80.3,-20.2,-73.5,-33.9C-66.8,-47.6,-50.7,-57.1,-35.1,-65.7C-19.5,-74.3,-9.7,-82,2.5,-86.1C14.7,-90.2,29.4,-90.6,47.4,-63.4Z" transform="translate(100 100)" />
			</svg>
			
			{/* أشكال إضافية للشاشات الكبيرة */}
			<div className="hidden lg:block">
				<svg className="absolute top-1/4 start-1/4 h-32 w-32 xl:h-40 xl:w-40 2xl:h-48 2xl:w-48 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<circle cx="100" cy="100" r="80" fill="#3b82f6" />
				</svg>
				<svg className="absolute bottom-1/3 end-1/3 h-24 w-24 xl:h-32 xl:w-32 2xl:h-40 2xl:w-40 opacity-15" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<rect x="50" y="50" width="100" height="100" rx="20" fill="#60a5fa" />
				</svg>
			</div>
			
			{/* أشكال إضافية للشاشات الكبيرة جداً */}
			<div className="hidden xl:block">
				<svg className="absolute top-1/2 start-1/6 h-20 w-20 2xl:h-24 2xl:w-24 opacity-8" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<polygon points="100,20 180,80 180,160 100,180 20,160 20,80" fill="#8b5cf6" />
				</svg>
				<svg className="absolute bottom-1/4 start-1/3 h-16 w-16 2xl:h-20 2xl:w-20 opacity-12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<ellipse cx="100" cy="100" rx="80" ry="40" fill="#f59e0b" />
				</svg>
			</div>
		</div>
	)
}


