import Head from "./head"
import Navbar from "@components/organism/Navbar"
import "@styles/globals.css"
import Footer from "@components/organism/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
