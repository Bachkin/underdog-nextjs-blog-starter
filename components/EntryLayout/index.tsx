import { APP_NAME } from "@/lib/constants"
import { metadataImageUrl } from "@/lib/underdog"
import { Entry } from "@/types"
import Head from "next/head"
import { ReactNode } from "react"
import { CollectButton } from "../CollectButton"
import { Container } from "../Container"
import { Footer } from "../Footer"
import { HeroPattern } from "../HeroPattern"
import { Navbar } from "../Navbar"
import { Prose } from "../Prose"

export type EntryLayoutProps = {
  entry: Entry
  children: ReactNode
}

export function EntryLayout({ entry, children }: EntryLayoutProps) {
  return (
    <>
      <Head>
        <title>{`${entry.title} | ${APP_NAME}`}</title>
        <meta name="description" content={entry.description} />
      </Head>

      <div>
        <HeroPattern />

        <Container className="my-8">
          <Navbar />

          <article className="grid md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold text-light tracking-tight sm:text-5xl">
                  {entry.title}
                </h1>
              </header>

              <Prose className="mt-8">{children}</Prose>
            </div>

            <div className="space-y-4 py-4 row-start-1 md:col-start-3">
              <img
                src={metadataImageUrl(entry.collectionAddress)}
                className="rounded-lg"
                alt={entry.title}
              />
              <CollectButton entry={entry} block />
            </div>
          </article>
        </Container>

        <Footer />
      </div>
    </>
  )
}
