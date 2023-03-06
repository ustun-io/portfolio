import { ReactNode } from 'react'

interface LinkProps {
  href: string
  label?: string
  children?: ReactNode
  className?: string
}

const Link = ({ href, label, children, className }: LinkProps) => {
  if (children)
    return (
      <a href={href} className={`--Link ${className}`}>
        {children}
      </a>
    )

  if (!children)
    return (
      <a href={href} className={`--Link ${className}`}>
        {label}
      </a>
    )

  return null
}

export { Link }
