import clsx from "clsx"
import Image from "next/image"
import { Fragment } from "react"
import { Description } from "@components/atoms/Text"
import Food1 from "@assets/home/foods/food1.png"
import ProteinIcons from "@assets/icons/calories.png"
import FatIcons from "@assets/icons/fat.png"
import CarboIcons from "@assets/icons/carbohydrate.png"

const FoodDetails = () => {
    return (
        <Fragment>
            <header className={clsx(
                "w-full",
                "px-6 tablet:px-8 desktop:px-24 pt-10 pb-20"
            )}>
                <h1 className="font-bold text-4xl text-neutral-100 pb-2">Detail Foods Page</h1>
                <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quod obcaecati nobis, asperiores illo totam velit eligendi ex recusandae saepe?</Description>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mt-8">
                    <div className="md:col-span-2">
                        <div className="flex flex-col md:flex-row w-full md:space-x-4 space-y-4 md:space-y-0">
                            <input type="text" className="w-full text-md text-neutral-50 py-3 px-4 bg-neutral-10 rounded-xl border border-neutral-30" placeholder="Search product" />
                            <button className="w-full md:w-fit py-3 px-8 rounded-xl bg-primary-main hover:bg-primary-hover text-neutral-10 text-md font-semibold">Search</button>
                        </div>
                        <div className="w-full h-[200px] md:h-[500px] relative">
                            <Image className="rounded-2xl mt-8 w-full" objectFit="cover" src={Food1} layout="fill" alt="pizza" />
                        </div>
                    </div>
                    <div className="md:col-span-4 mt-8 md:mt-0">
                        <div className="w-full bg-primary-surface bg-opacity-10 border border-primary-main h-[500px] rounded-2xl p-8">
                            <h1 className="font-bold text-4xl text-neutral-100 pb-2">Pizza Mozarella</h1>
                            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste quidem aperiam quia rerum possimus blanditiis, aliquam quae, temporibus ipsa veniam voluptates</Description>
                            <div className="flex items-center space-x-4 my-6">
                                <div className="flex flex-col space-y-2">
                                    <Image src={ProteinIcons} width={130} height={202} alt="protein" />
                                    <div className="">
                                        <h3 className="font-semibold text-neutral-100 text-lg">Protein</h3>
                                        <h3 className="font-normal text-neutral-60 text-sm">24 gram</h3>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <Image src={FatIcons} width={130} height={202} alt="fat" />
                                    <h3 className="font-semibold text-neutral-100 text-lg">Calories</h3>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <Image src={CarboIcons} width={130} height={202} alt="carbo" />
                                    <h3 className="font-semibold text-neutral-100 text-lg">Carbohidrat</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default FoodDetails