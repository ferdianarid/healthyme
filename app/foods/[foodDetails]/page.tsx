import Image from "next/image"
import { Fragment } from "react"
import { Description } from "@components/atoms/Text"
import Food1 from "@assets/home/foods/food1.png"
import ProteinIcons from "@assets/icons/calories.png"
import FatIcons from "@assets/icons/fat.png"
import CarboIcons from "@assets/icons/carbohydrate.png"
import { FoodList } from "@data/index"
import FoodCard from "@components/organism/Cards/FoodCard"

const FoodDetails = () => {
    return (
        <Fragment>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mt-8">
                <div className="md:col-span-2">
                    <div className="flex flex-col md:flex-row w-full md:space-x-4 space-y-4 md:space-y-0">
                        <input type="text" className="w-full focus:outline-none text-md text-neutral-50 py-3 px-4 bg-neutral-10 rounded-xl" placeholder="Search product" />
                        <button className="w-full flex items-center justify-center md:w-fit py-3 px-8 rounded-xl bg-primary-main hover:bg-primary-hover text-neutral-10 text-md font-semibold">
                            Search
                            <svg className="ml-2" width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15.6888" cy="15.6888" r="11.9847" stroke="white" strokeWidth="3.28677" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M24.0244 24.647L28.7231 29.3335" stroke="white" strokeWidth="3.28677" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full h-[200px] md:h-[500px] relative">
                        <Image className="rounded-2xl mt-8 w-full" objectFit="cover" src={Food1} layout="fill" alt="pizza" />
                    </div>
                </div>
                <div className="md:col-span-4 mt-8 md:mt-0">
                    <div className="w-full bg-primary-surface bg-opacity-10 border border-primary-main rounded-2xl p-8">
                        <h1 className="font-bold text-4xl text-neutral-100 pb-2">Pizza Mozarella</h1>
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste quidem aperiam quia rerum possimus blanditiis, aliquam quae, temporibus ipsa veniam voluptates</Description>
                        <div className="flex items-start gap-4 my-6">
                            <div className="flex flex-col space-y-2">
                                <Image src={ProteinIcons} width={100} height={172} alt="protein" />
                                <div className="">
                                    <h3 className="font-semibold text-neutral-100 text-lg">Protein</h3>
                                    <h3 className="font-normal text-neutral-60 text-sm">24 gram</h3>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Image src={FatIcons} width={100} height={172} alt="fat" />
                                <div className="">
                                    <h3 className="font-semibold text-neutral-100 text-lg">Calories</h3>
                                    <h3 className="font-normal text-neutral-60 text-sm">24 gram</h3>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Image src={CarboIcons} width={100} height={172} alt="carbo" />
                                <div className="">
                                    <h3 className="font-semibold text-neutral-100 text-lg">Carbohidrat</h3>
                                    <h3 className="font-normal text-neutral-60 text-sm">24 gram</h3>
                                </div>
                            </div>
                        </div>
                        <h3 className="font-bold text-neutral-100 mb-4 mt-8 text-xl">Related Foods :</h3>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-5 gap-y-10">
                            {FoodList.slice(0, 6).map((item: any) => (
                                <FoodCard key={item.id} image={item.image} title={item.title} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FoodDetails