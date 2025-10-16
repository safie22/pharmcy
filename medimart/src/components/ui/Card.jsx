export default function Card({ children, className }) {
	return (
		<div className={`rounded-2xl border border-white/60 bg-white/80 shadow-xl backdrop-blur-md ring-1 ring-black/5 transition-shadow hover:shadow-2xl ${className ?? ''}`}>
			{children}
		</div>
	)
}
