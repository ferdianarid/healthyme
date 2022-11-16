import Image from "next/image"
import { Description } from "@components/atoms/Text"
import { IFoodCard } from "interfaces"

import Food1 from "@assets/home/foods/food1.png"
import Food2 from "@assets/home/foods/food2.png"
import Food3 from "@assets/home/foods/food3.png"
import Food4 from "@assets/home/foods/food4.png"
import Food5 from "@assets/home/foods/food5.png"
import Food6 from "@assets/home/foods/food6.png"
import Food7 from "@assets/home/foods/food7.png"
import Food8 from "@assets/home/foods/food8.png"
import Food9 from "@assets/home/foods/food9.png"
import Food10 from "@assets/home/foods/food10.png"
import Food11 from "@assets/home/foods/food11.png"
import Food12 from "@assets/home/foods/food12.png"
import Food13 from "@assets/home/foods/food13.png"
import Food14 from "@assets/home/foods/food14.png"
import Link from "next/link"

const FoodCard: React.FC<IFoodCard> = ({ slugs, image, title, description }) => {
    return (
        <Link href={`/foods/${slugs}`}>
            <div className="w-full">
                <Image src={
                    image === "food1" ? Food1 :
                        image === "food2" ? Food2 :
                            image === "food3" ? Food3 :
                                image === "food4" ? Food4 :
                                    image === "food5" ? Food5 :
                                        image === "food6" ? Food6 :
                                            image === "food7" ? Food7 :
                                                image === "food8" ? Food8 :
                                                    image === "food9" ? Food9 :
                                                        image === "food10" ? Food10 :
                                                            image === "food11" ? Food11 :
                                                                image === "food12" ? Food12 :
                                                                    image === "food13" ? Food13 : Food14
                } width={310} height={370} alt={title} className="rounded-2xl" />
                <h3 className="font-bold text-lg text-neutral-100 mt-3 mb-2">{title}</h3>
                <Description>{description}</Description>
            </div>
        </Link>
    )
}

export default FoodCard