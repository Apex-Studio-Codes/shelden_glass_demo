interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
}

export default function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <p
      className={`font-body text-xs font-semibold tracking-widest uppercase mb-3 ${
        light ? 'text-sage-pale/70' : 'text-sage'
      }`}
    >
      {children}
    </p>
  )
}
