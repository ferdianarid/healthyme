import clsx from "clsx"
import { Fragment } from "react"
import { FoodList } from "@data/index"
import FoodCard from "@components/organism/Cards/FoodCard"
import { Description } from "@components/atoms/Text"

const Foods = () => {
    return (
        <Fragment>
            <header className={clsx(
                "w-full bg-primary-sky",
                "px-6 tablet:px-8 desktop:px-24 pt-10 pb-20"
            )}>
                <h1 className="font-bold text-4xl text-neutral-100 pb-2">Foods Page</h1>
                <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quod obcaecati nobis, asperiores illo totam velit eligendi ex recusandae saepe?</Description>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 mt-8">
                    {FoodList.map((item: any) => (
                        <FoodCard key={item.id} slugs={item.slug} image={item.image} title={item.title} description={item.description} />
                    ))}
                </div>
            </header>
        </Fragment>
    )
}

export default Foods