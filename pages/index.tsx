import { Layout } from "@/components/Layout"
import { getAllEntries } from "@/lib/entries"
import { Entry } from "@/types"
import { IndexView } from "@/views/IndexView"

export type IndexPageProps = {
  entries: Entry[]
}

export default function IndexPage({ entries }: IndexPageProps) {
  return (
    <Layout>
      <IndexView entries={entries} />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      entries: await getAllEntries(),
    },
  }
}
