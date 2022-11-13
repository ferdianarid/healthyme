import { ReactNode } from "react"

export interface IFeatures {
    image: any
    title: string
    description: string
}

export interface IText {
    classNames?: string
    children: ReactNode
}

export interface IFoodCard {
    image: any
    title: string
    description: string
}