import { SectionTitle, TextBadge } from "@components/atoms/Text"
import FoodCard from "@components/organism/Cards/FoodCard"
import { FoodList } from "@data/index"
import SectionLayout from "layouts/SectionLayout"

const FoodMenu = () => {
    return (
        <SectionLayout classNames="bg-neutral-20">
            <TextBadge classNames="mb-2">Modern Food</TextBadge>
            <SectionTitle>Enhance Your Lifestyle</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-5 gap-y-10 mt-5">
                {FoodList.map((item: any) => (
                    <FoodCard key={item.id} image={item.image} title={item.title} description={item.description} />
                ))}
            </div>
        </SectionLayout>
    )
}

export default FoodMenu