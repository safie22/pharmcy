import DecorativeShapes from './DecorativeShapes'
import Card from './ui/Card'
import LogoBrand from './LogoBrand'
import type { ReactNode } from 'react'

type Props = {
	title: string
	subtitle?: string
	children: ReactNode
}

export default function AuthShell({ title, subtitle, children }: Props) {
	return (
		<section className="relative min-h-screen grid place-items-center px-3 sm:px-4 lg:px-8 py-6 sm:py-10 lg:py-16">
			<DecorativeShapes />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
			<div className="relative w-full max-w-sm sm:max-w-md lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
				<div className="mb-6 sm:mb-8 lg:mb-12 flex items-center justify-center">
					<LogoBrand />
				</div>
				<Card className="p-6 sm:p-8 lg:p-12 xl:p-16 shadow-2xl">
					<div className="mb-6 sm:mb-8 lg:mb-12 text-center">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
							{title}
						</h1>
						{subtitle && (
							<p className="mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
								{subtitle}
							</p>
						)}
					</div>
					{children}
				</Card>
			</div>
		</section>
	)
}


