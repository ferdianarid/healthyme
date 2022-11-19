import clsx from "clsx"
import { Fragment } from "react"

const SignIn = () => {
    return (
        <Fragment>
            <header className={clsx(
                "w-full bg-primary-sky",
                "px-6 tablet:px-8 desktop:px-24 pt-10 pb-20"
            )}>
                <div className="w-full md:w-1/2 md:max-w-[450px] mx-auto">
                    <h1 className="font-bold text-neutral-100 md:text-heading-3 text-heading-4">Welcome User</h1>
                    <p className="font-normal text-neutral-50 leading-relaxed mt-0 desktop:mr-16 text-sm md:text-md">Please sign in first to access all features</p>
                    <div className="w-full grid grid-cols-2 items-center gap-6 mt-6">
                        <input type="text" className="w-full focus:outline-none text-md text-neutral-50 py-3 px-4 bg-neutral-10 rounded-xl" placeholder="First Name" />
                        <input type="text" className="w-full focus:outline-none text-md text-neutral-50 py-3 px-4 bg-neutral-10 rounded-xl" placeholder="Last Name" />
                        <input type="email" className="w-full col-span-2 focus:outline-none text-md text-neutral-50 py-3 px-4 bg-neutral-10 rounded-xl" placeholder="Email Address" />
                        <input type="number" className="w-full focus:outline-none text-md text-neutral-50 py-3 px-4 bg-neutral-10 rounded-xl" placeholder="Age" />
                        <select name="gender" id="gender" className="w-full focus:outline-none text-md text-neutral-50 py-3 px-4 bg-neutral-10 rounded-xl">
                            <option value="gender">Gender</option>
                            <option value="man">Man</option>
                            <option value="woman">Woman</option>
                        </select>
                        <input type="text" className="w-full focus:outline-none text-md text-neutral-50 py-3 px-4 bg-neutral-10 rounded-xl" placeholder="Height" />
                        <input type="text" className="w-full focus:outline-none text-md text-neutral-50 py-3 px-4 bg-neutral-10 rounded-xl" placeholder="Weight" />
                        <button className="w-full flex items-center justify-center col-span-2 py-3 px-8 rounded-xl bg-primary-main hover:bg-primary-hover text-neutral-10 text-md font-semibold">Sign In</button>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default SignIn