import { Fragment, ReactNode } from "react"
import clsx from "clsx"
import { Description } from "@components/atoms/Text"

const FoodDetailLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Fragment>
            <header className={clsx(
                "w-full bg-primary-sky",
                "px-6 tablet:px-8 desktop:px-24 pt-10 pb-20"
            )}>
                <h1 className="font-bold text-4xl text-neutral-100 pb-2">Detail Foods Page</h1>
                <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quod obcaecati nobis, asperiores illo totam velit eligendi ex recusandae saepe?</Description>
                {children}
            </header>
        </Fragment>
    )
}

export default FoodDetailLayout