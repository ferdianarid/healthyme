import clsx from "clsx"
import { Fragment } from "react"

const Recipes = () => {
    return (
        <Fragment>
            <header className={clsx(
                "w-full",
                "flex flex-col md:flex-row justify-between",
                "px-6 tablet:px-8 desktop:px-24 pt-10 pb-20"
            )}>
                <h1 className="font-bold text-4xl text-neutral-100">Recipes Page</h1>
            </header>
        </Fragment>
    )
}

export default Recipes