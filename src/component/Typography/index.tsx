import { ReactNode } from 'react'

interface TypographyProps {
  content?: string | ReactNode
  children?: ReactNode
  className?: string
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
}

export const Typography = ({ content, children, className, variant }: TypographyProps) => {
  if (children) return <div className={`--Typography-${variant} ${className}`}>{children}</div>

  if (!children) return <div className={`--Typography-${variant} ${className}`}>{content}</div>

  return null
}
