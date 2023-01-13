import { EntryList } from "@/components/EntryList"
import { Heading } from "@/components/Heading"
import { Entry } from "@/types"

type IndexViewProps = {
  entries: Entry[]
}

export function IndexView({ entries }: IndexViewProps) {
  return (
    <div className="prose prose-invert">
      <Heading level={1} className="mt-8">
        Underdog Protocol Blog
      </Heading>

      <Heading level={2}>Entries</Heading>

      <EntryList entries={entries} />
    </div>
  )
}
