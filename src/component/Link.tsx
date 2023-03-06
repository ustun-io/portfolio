import { ReactNode } from 'react'

interface LinkProps {
  href: string
  label?: string
  children?: ReactNode
}

const Link = ({ href, label, children }: LinkProps) => {
  if (children)
    return (
      <a
        href={href}
        className={'dark:hover:text-slate-300 dark:active:text-indigo-400 transition duration-300 ease-in'}
      >
        {children}
      </a>
    )

  if (!children)
    return (
      <a
        href={href}
        className={'dark:hover:text-slate-300 dark:active:text-indigo-400 transition duration-300 ease-in'}
      >
        {label}
      </a>
    )

  return null
}

export { Link }
