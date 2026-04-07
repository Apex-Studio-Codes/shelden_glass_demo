import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit'
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  type = 'button',
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-body font-medium tracking-wide transition-all duration-200 cursor-pointer border'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary: 'bg-sage text-cream border-sage hover:bg-sage-dark hover:border-sage-dark',
    outline: 'bg-transparent text-cream border-cream hover:bg-cream hover:text-charcoal',
    ghost: 'bg-transparent text-sage border-sage hover:bg-sage hover:text-cream',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
