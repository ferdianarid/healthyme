import "@styles/globals.css"
import type { AppProps } from "next/app"
import localFont from "@next/font/local"

const customFonts = localFont({
  src: [
    {
      path: "../fonts/Gilroy-Bold.woff",
      style: "normal",
      weight: "700"
    },
    {
      path: "../fonts/Gilroy-Semibold.woff",
      style: "normal",
      weight: "600"
    },
    {
      path: "../fonts/Gilroy-Medium.woff",
      style: "normal",
      weight: "500"
    },
    {
      path: "../fonts/Gilroy-Regular.woff",
      style: "normal",
      weight: "400"
    }
  ],
  fallback: ["Gilroy", "sans-serif"]
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
        :root {
          --font-base: "${customFonts.style.fontFamily}"
        }
      `}
      </style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
