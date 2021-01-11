import { FC } from "react"

import Head from "next/head"

interface LayoutProps {
  className?: string
}

const Layout: FC<LayoutProps> = ({ children, className }) => (
  <>
    <Head>
      <title>Weather App</title>
    </Head>

    <main className={`${className ?? ""} `} children={children} />
  </>
)

export default Layout
