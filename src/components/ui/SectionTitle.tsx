interface SectionTitleProps {
  children: React.ReactNode
  light?: boolean
  className?: string
}

export default function SectionTitle({ children, light, className = '' }: SectionTitleProps) {
  return (
    <h2
      className={`font-display text-4xl md:text-5xl font-light leading-tight ${
        light ? 'text-cream' : 'text-charcoal'
      } ${className}`}
    >
      {children}
    </h2>
  )
}
