import Search from "@components/moleculs/Search"
import clsx from "clsx"
import { Fragment } from "react"
import FoodCard from "@components/organism/Cards/FoodCard"
import { FoodList } from "@data/index"

const Recipes = () => {
    return (
        <Fragment>
            <header className={clsx(
                "w-full bg-primary-sky",
                "px-6 tablet:px-8 desktop:px-24 pt-10 pb-20"
            )}>
                <h1 className="font-bold text-4xl text-neutral-100">Recipes Page</h1>
                <div className="w-full mt-6 max-w-[500px]">
                    <Search />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 mt-8">
                    {FoodList.map((item: any) => (
                        <FoodCard key={item.id} slugs={item.slug} image={item.image} title={item.title} description={item.description} />
                    ))}
                </div>
            </header>
        </Fragment>
    )
}

export default Recipes