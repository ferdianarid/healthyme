import { Fragment } from "react"
import Hero from "@containers/home/Hero"
import Features from "@containers/home/Features"
import FoodMenu from "@containers/home/FoodMenu"

const Homepage = () => {
    return (
        <Fragment>
            <Hero />
            <Features />
            <FoodMenu />
        </Fragment>
    )
}

export default Homepage