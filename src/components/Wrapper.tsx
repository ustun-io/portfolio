import {ReactNode} from "react";
import classNames from "classnames";

interface WrapperProps {
    children: ReactNode | JSX.Element
    outerClassName?: string
    innerClassName?: string
}

const Wrapper = ({children, outerClassName, innerClassName}: WrapperProps) => {
    return (
        <div className={classNames('w-full bg-gray-100 text-slate-700 dark:bg-slate-800 dark:text-gray-50', outerClassName)}>
            <div className={classNames('w-4/5 mx-auto py-2', innerClassName)}>
                {children}
            </div>
        </div>
    )
}

export {Wrapper}