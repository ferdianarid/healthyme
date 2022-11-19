"use client"

import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { Fragment, useState } from "react"
import { Transition } from "@headlessui/react"
import BrandLogo from "@assets/universal/brand.svg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navigation = [
        { id: 1, title: "Home", path: "/" },
        { id: 3, title: "Foods", path: "/foods" },
        { id: 2, title: "Recipes", path: "/recipes" },
        { id: 4, title: "About", path: "/about" }
    ]
    return (
        <Fragment>
            <nav className="w-full bg-primary-sky">
                <div className="px-5 tablet:px-8 py-5 desktop:px-24 mx-auto w-full flex items-center justify-between">
                    <div className="w-full flex items-center justify-between">
                        <Link href="/">
                            <Image src={BrandLogo} width={200} height={72} alt="healthyme" />
                        </Link>
                        <div className="hidden desktop:flex items-center space-x-8">
                            {navigation.map((item) => (
                                <Link key={item.id} href={item.path} className={clsx(
                                    "text-sm leading-text  tracking-text",
                                    "text-neutral-100"
                                )}>{item.title}</Link>
                            ))}
                            <Link href="/signin"><p className="text-sm text-neutral-100 leading-text font-semibold tracking-text">Sign In</p></Link>
                            <Link href="/signup"><p className="text-sm text-neutral-10 font-semibold tracking-text py-[11.5px] px-[21.5px] rounded-lg bg-primary-main hover:bg-primary-hover transition-all">Sign Up</p></Link>
                        </div>
                    </div>
                    <div className="flex tablet:w-fit md:space-x-4 justify-between">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex desktop:hidden items-center justify-center rounded-md text-primary-main focus:outline-none "
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen
                                ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.800781 2.00039C0.800781 1.57604 0.969352 1.16908 1.26941 0.86902C1.56947 0.568962 1.97643 0.400391 2.40078 0.400391H21.6008C22.0251 0.400391 22.4321 0.568962 22.7322 0.86902C23.0322 1.16908 23.2008 1.57604 23.2008 2.00039C23.2008 2.42474 23.0322 2.8317 22.7322 3.13176C22.4321 3.43182 22.0251 3.60039 21.6008 3.60039H2.40078C1.97643 3.60039 1.56947 3.43182 1.26941 3.13176C0.969352 2.8317 0.800781 2.42474 0.800781 2.00039ZM0.800781 10.0004C0.800781 9.57604 0.969352 9.16908 1.26941 8.86902C1.56947 8.56896 1.97643 8.40039 2.40078 8.40039H21.6008C22.0251 8.40039 22.4321 8.56896 22.7322 8.86902C23.0322 9.16908 23.2008 9.57604 23.2008 10.0004C23.2008 10.4247 23.0322 10.8317 22.7322 11.1318C22.4321 11.4318 22.0251 11.6004 21.6008 11.6004H2.40078C1.97643 11.6004 1.56947 11.4318 1.26941 11.1318C0.969352 10.8317 0.800781 10.4247 0.800781 10.0004ZM0.800781 18.0004C0.800781 17.576 0.969352 17.1691 1.26941 16.869C1.56947 16.569 1.97643 16.4004 2.40078 16.4004H21.6008C22.0251 16.4004 22.4321 16.569 22.7322 16.869C23.0322 17.1691 23.2008 17.576 23.2008 18.0004C23.2008 18.4247 23.0322 18.8317 22.7322 19.1318C22.4321 19.4318 22.0251 19.6004 21.6008 19.6004H2.40078C1.97643 19.6004 1.56947 19.4318 1.26941 19.1318C0.969352 18.8317 0.800781 18.4247 0.800781 18.0004Z" fill="#6F3AFA" />
                                    </svg>
                                )
                                : (
                                    <svg className="mb-3" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.868532 0.868532C1.49337 0.243693 2.50643 0.243693 3.13127 0.868532L9.9999 7.73716L16.8685 0.868532C17.4934 0.243693 18.5064 0.243693 19.1313 0.868532C19.7561 1.49337 19.7561 2.50643 19.1313 3.13127L12.2626 9.9999L19.1313 16.8685C19.7561 17.4934 19.7561 18.5064 19.1313 19.1313C18.5064 19.7561 17.4934 19.7561 16.8685 19.1313L9.9999 12.2626L3.13127 19.1313C2.50643 19.7561 1.49337 19.7561 0.868532 19.1313C0.243693 18.5064 0.243693 17.4934 0.868532 16.8685L7.73716 9.9999L0.868532 3.13127C0.243693 2.50643 0.243693 1.49337 0.868532 0.868532Z" fill="#6F3AFA" />
                                    </svg>

                                )}
                        </button>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="desktop:hidden" id="mobile-menu">
                            <div ref={ref} className="py-2 flex flex-col mt-0 mb-0">
                                {navigation.map((item) => (
                                    <Link key={item.id} href={item.path} className={clsx(
                                        "text-sm leading-text  tracking-text",
                                        "px-10 tablet:px-8 desktop:px-4 hover:bg-neutral-20 py-4 font-gilroy-medium text-text-m hover:cursor-pointer",
                                        "text-neutral-100"
                                    )}>{item.title}</Link>
                                ))}
                                <div className="px-10 tablet:px-8 desktop:px-0 mb-7 flex flex-col space-y-5 w-full">
                                    <Link href="/signin"><p className="w-full px-[21.5px] text-center text-sm text-neutral-100 leading-text font-semibold tracking-text">Sign In</p></Link>
                                    <Link href="/signup"><p className="text-sm text-neutral-10 font-semibold tracking-text py-[11.5px] px-[21.5px] text-center rounded-lg bg-primary-main hover:bg-primary-hover transition-all">Sign Up</p></Link>
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </Fragment >
    )
}

export default Navbar