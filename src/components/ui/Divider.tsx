interface DividerProps {
  light?: boolean
  className?: string
}

export default function Divider({ light, className = '' }: DividerProps) {
  return (
    <div className={`flex items-center gap-3 my-6 ${className}`}>
      <div className={`h-px flex-1 ${light ? 'bg-sage-pale/30' : 'bg-sage-pale'}`} />
      <div className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-sage-light' : 'bg-sage'}`} />
      <div className={`h-px flex-1 ${light ? 'bg-sage-pale/30' : 'bg-sage-pale'}`} />
    </div>
  )
}
