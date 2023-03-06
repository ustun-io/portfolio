import { useEffect, useState } from 'react'

import { navItems } from '../../route.constant'
import { Link } from '../Link'

import { HEADER_LOGO_TEXT } from './constant'

const Header = () => {
  const [pastHeader, setPastHeader] = useState<boolean>(false)

  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const position = Number(Number(winScroll / height).toFixed(3))

    if (position > 0.037) setPastHeader(true)
    if (position < 0.037) setPastHeader(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={'w-full bg-gray-50 text-slate-700 dark:bg-royal-blue dark:text-slate-50 z-50'}>
      <header
        className={`w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between py-2 md:py-8 transform transition duration-200 ease-in z-50 ${
          pastHeader ? 'fixed top-0 w-full px-32 max-h-16 bg-gray-50 dark:bg-royal-blue py-0' : ''
        }`}
      >
        <h1
          className={`font-roboto-mono text-[2.25rem] mt-4 pb-2 md:text-5xl md:mt-0 md:pb-0 text-slate-600 dark:text-slate-200 ${
            pastHeader ? 'md:text-2xl' : ''
          }`}
        >
          {HEADER_LOGO_TEXT}
        </h1>
        <nav className={'mt-4 md:mt-0 md:mr-10 text-lg font-inter hidden md:block'}>
          <ul className={`list-none flex space-x-8 ${pastHeader && 'text-base'}`}>
            {navItems.map(({ label, href }, i) => (
              <li key={i}>
                <Link href={href} label={label} className={pastHeader ? 'md:text-base' : ''} />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export { Header }
