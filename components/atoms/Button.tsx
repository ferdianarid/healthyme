import clsx from "clsx"
import { ReactNode } from "react"

export const PrimaryButton = ({ onClick, classnames, children }: { onClick?: any, classnames: string, children: ReactNode }) => {
    return <button onClick={onClick} className={clsx(
        "w-full flex items-center justify-center py-3 px-8 rounded-xl bg-primary-main hover:bg-primary-hover text-neutral-10 text-md font-semibold",
        classnames
    )}>{children}</button>
}