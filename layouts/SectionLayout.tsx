import clsx from "clsx"
import { ReactNode } from "react"

const SectionLayout = ({ classNames, children }: { classNames?: string, children: ReactNode }) => {
    return (
        <section className={clsx(
            "w-full py-16 px-6 tablet:px-8 md:px-24",
            classNames
        )}>{children}</section>
    )
}

export default SectionLayout