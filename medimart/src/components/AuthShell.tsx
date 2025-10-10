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
		<section className="relative min-h-screen grid place-items-center px-4 py-4">
			<DecorativeShapes />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
			<div className="relative w-full max-w-sm">
				<div className="mb-3 flex items-center justify-center">
					<LogoBrand />
				</div>
				<Card className="p-4 shadow-lg">
					<div className="mb-4 text-center">
						<h1 className="text-xl font-semibold text-gray-900">
							{title}
						</h1>
						{subtitle && (
							<p className="mt-1 text-sm text-gray-500">
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


