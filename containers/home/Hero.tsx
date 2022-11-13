import { Fragment } from "react"
import clsx from "clsx"
import Image from "next/image"
import HeroImage from "@assets/home/doctor.png"
import Heart from "@assets/home/heart.png"

const Hero = () => {
    return (
        <Fragment>
            <header className={clsx(
                "w-full header-homepage",
                "flex flex-col md:flex-row justify-between items-center",
                "px-6 tablet:px-8 desktop:px-24 pt-10 pb-20"
            )}>
                <div className="w-full md:w-1/2">
                    <h3 className="w-fit flex items-center font-semibold text-neutral-80 text-sm md:text-md py-2 px-4 rounded-full bg-neutral-10 border mb-4 border-semantic-danger-border">
                        Health Matters
                        <Image src={Heart} width={35} height={15} className="ml-2" alt="heart" />
                    </h3>
                    <h1 className="font-bold text-neutral-100 md:text-heading-1 text-heading-2"><span className="text-primary-main">One Step Solution</span> for all your dietary needs.</h1>
                    <p className="font-normal text-neutral-50 leading-relaxed mt-4 desktop:mr-16 text-sm md:text-md">Using your BMI index we calculate whether the dish is suitable for you. We help you to get healthy life everyday.</p>
                    <div className="flex mt-10 w-full space-x-4">
                        <input type="text" className="w-[330px] text-md text-neutral-50 py-3 px-4 bg-neutral-10 rounded-xl border border-neutral-30" placeholder="Search product" />
                        <button className="w-fit py-3 px-8 rounded-xl bg-primary-main hover:bg-primary-hover text-neutral-10 text-md font-semibold">Search</button>
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