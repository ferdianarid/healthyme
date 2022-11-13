import Image from "next/image"
import { IFeatures } from "interfaces"
import { Description } from "@components/atoms/Text"

import Food from "@assets/home/features/food.png"
import Chatbot from "@assets/home/features/chatbot.png"
import Stats from "@assets/home/features/stats.png"

const FeatureCard: React.FC<IFeatures> = ({ image, title, description }) => {
    return (
        <div className="w-full">
            <Image src={image === "food" ? Food : image === "chatbot" ? Chatbot : Stats} width={60} height={60} alt={title} />
            <h3 className="font-bold text-lg text-neutral-100 mt-3 mb-2">{title}</h3>
            <Description>{description}</Description>
        </div>
    )
}

export default FeatureCard