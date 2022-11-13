import { Description, SectionTitle, TextBadge } from "@components/atoms/Text"
import FeatureCard from "@components/organism/Cards/FeatureCard"
import { featurelist } from "@data/index"
import SectionLayout from "layouts/SectionLayout"

const Features = () => {
    return (
        <SectionLayout>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-5">
                <div className="col-span-2 pr-0 md:pr-10 pb-5 md:pb-0">
                    <TextBadge classNames="mb-2">Features we provide</TextBadge>
                    <SectionTitle>Calculating calories very easier.</SectionTitle>
                    <Description classNames="mt-4">Using your BMI index we calculate whether the dish is suitable for you. We help you to get healthy life everyday.</Description>
                </div>
                {featurelist.map((item: any) => (
                    <FeatureCard key={item.id} image={item.image} title={item.title} description={item.description} />
                ))}
            </div>
        </SectionLayout>
    )
}

export default Features