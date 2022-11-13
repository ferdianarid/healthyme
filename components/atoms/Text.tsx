import clsx from "clsx"
import { IText } from "interfaces"

export const Description = ({ classNames, children }: IText) => {
    return <p className={clsx(
        "font-normal text-neutral-50 leading-relaxed text-sm",
        classNames
    )}>{children}</p>
}

export const TextBadge = ({ classNames, children }: IText) => {
    return <h3 className={clsx(
        "font-bold text-sm text-primary-main uppercase",
        classNames
    )}>{children}</h3>
}

export const SectionTitle = ({ classNames, children }: IText) => {
    return <h1 className={clsx(
        "font-bold tex-neutral-100 text-heading-3 leading-snug",
        classNames
    )}>{children}</h1>
}

export const MenuTitle = ({ classNames, children }: IText) => {
    return <h1 className={clsx(
        "font-bold tex-neutral-100 text-heading-6 leading-snug",
        classNames
    )}>{children}</h1>
}