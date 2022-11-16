import Image from "next/image"
import clsx from "clsx"
import { Fragment } from "react"
import Search from "@components/moleculs/Search"
import HeroImage from "@assets/home/doctor.png"
import Heart from "@assets/home/heart.png"

const Hero = () => {
    return (
        <Fragment>
            <header className={clsx(
                "w-full header-homepage bg-primary-sky",
                "flex flex-col md:flex-row justify-between items-center",
                "px-6 tablet:px-8 desktop:px-24 pt-10 pb-20"
            )}>
                <div className="w-full md:w-1/2">
                    <h3 className="w-fit flex items-center font-semibold text-neutral-80 text-sm md:text-md py-2 px-4 rounded-full bg-neutral-10 mb-4">
                        Health Matters
                        <Image src={Heart} width={35} height={15} className="ml-2" alt="heart" />
                    </h3>
                    <h1 className="font-bold text-neutral-100 md:text-heading-1 text-heading-2"><span className="text-primary-main">One Step Solution</span> for all your dietary needs.</h1>
                    <p className="font-normal text-neutral-50 leading-relaxed mt-4 desktop:mr-16 text-sm md:text-md">Using your BMI index we calculate whether the dish is suitable for you. We help you to get healthy life everyday.</p>
                    <div className="w-full md:w-[550px] mt-10">
                        <Search />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <Image className="pt-16 md:pt-0" src={HeroImage} width={533} height={584} alt="doctor" />
                </div>
            </header>
        </Fragment>
    )
}

export default Hero