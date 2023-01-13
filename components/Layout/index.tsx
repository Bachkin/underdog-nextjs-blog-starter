import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants"
import Head from "next/head"
import { ReactElement, ReactNode } from "react"
import { Container } from "../Container"
import { Footer } from "../Footer"
import { HeroPattern } from "../HeroPattern"
import { Navbar } from "../Navbar"

export type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
      </Head>

      <div>
        <HeroPattern />

        <Container className="my-8">
          <Navbar />
          {children}
        </Container>

        <Footer />
      </div>
    </>
  )
}

export const getLayout = (page: ReactElement) => <Layout>{page}</Layout>
