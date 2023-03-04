import {Link} from "./Link";
import {useEffect, useState} from "react";


const Header = () => {
    const [pastHeader, setPastHeader] = useState<boolean>(false);
    const headerTitle = 'ustun.io'

    const handleScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const position = Number(Number(winScroll / height).toFixed(3))

        console.log(position)

        if (position > 0.037)
            setPastHeader(true)
        if (position < 0.037)
            setPastHeader(false)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div className={'w-full bg-gray-100 text-slate-700 dark:bg-slate-900 dark:text-slate-50'}>
            <header
                className={`w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between h-28 transform transition duration-200 ease-in ${pastHeader ? 'fixed top-0 w-full px-32 max-h-16 bg-slate-900' : 'h-28'}`}>
                <div>
                    <h1 className={`font-roboto-mono ${pastHeader ? 'text-3xl' : 'text-5xl'}`}>{headerTitle}</h1>
                </div>
                <nav className={'mt-4 md:mt-0 md:mr-10 text-lg font-inter'}>
                    <ul className={`list-none flex space-x-8 ${pastHeader && 'text-base'}`}>
                        <li><Link href={'projects'} label={'Projects'}/></li>
                        <li><Link href={'about'} label={'About'}/></li>
                        <li><Link href={'contact'} label={'Contact'}/></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export {Header}